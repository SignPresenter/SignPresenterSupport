import { readFileSync, existsSync, statSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// scripts/src/analyzer.ts → ../../../SignPresenterAdmin/src
export const SP_ADMIN_SRC = resolve(__dirname, "..", "..", "..", "SignPresenterAdmin", "src");

export type Permission = "public" | "owner" | "admin" | "creator";

export interface RouteInfo {
  path: string;
  componentName: string;
  componentFile: string;
  section: string;
  permission: Permission;
  isParameterized: boolean;
  isDocumentable: boolean;
}

export interface ComponentAnalysis {
  file: string;
  heading?: string;
  buttons: string[];
  formFields: string[];
  tableColumns: string[];
  tabs: string[];
  permissionsChecked: string[];
  imports: string[];
}

export interface FeatureMap {
  routes: RouteInfo[];
  components: Record<string, ComponentAnalysis>;
}

interface RouterFile {
  /** Absolute path to the *Router.tsx file */
  path: string;
  /** URL prefix to prepend to each route inside this router */
  prefix: string;
  /** Section label */
  section: string;
}

/**
 * Each top-level Router.tsx in SignPresenterAdmin contributes a slice of routes
 * mounted at a particular prefix. This list mirrors what Authenticated.tsx wires up.
 */
const ROUTER_FILES: RouterFile[] = [
  { path: resolve(SP_ADMIN_SRC, "messages", "MessagesRouter.tsx"), prefix: "/messages", section: "Messages" },
  { path: resolve(SP_ADMIN_SRC, "playlists", "PlaylistsRouter.tsx"), prefix: "/playlists", section: "Playlists" },
  { path: resolve(SP_ADMIN_SRC, "screens", "ScreensRouter.tsx"), prefix: "/screens", section: "Screens" },
  { path: resolve(SP_ADMIN_SRC, "settings", "SettingsRouter.tsx"), prefix: "/settings", section: "Settings" },
];

function isDocumentableRoute(routePath: string): boolean {
  // Skip auth/system/oauth routes
  if (routePath.startsWith("/login")) return false;
  if (routePath.startsWith("/logout")) return false;
  if (routePath.startsWith("/forgot")) return false;
  if (routePath.startsWith("/canva/callback")) return false;
  if (routePath.startsWith("/orangepreview")) return false;
  if (routePath === "/device") return false;
  return true;
}

/** Walk the React `<Route path="..." element={<Component ... />} />` declarations in a router file. */
function parseRoutesInFile(file: RouterFile): RouteInfo[] {
  if (!existsSync(file.path)) return [];
  const content = readFileSync(file.path, "utf-8");

  const routes: RouteInfo[] = [];
  // Capture path and component name. Element form: element={<Component ...
  const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)/g;
  let match;
  while ((match = routeRegex.exec(content)) !== null) {
    const [, pathSuffix, componentName] = match;
    // Skip catch-alls and the root (/) of a section since the index page is documented separately
    const fullPath = pathSuffix === "/" ? file.prefix : file.prefix + pathSuffix;

    // Find the import for the component to get the source file
    const importRegex = new RegExp(
      `import\\s+\\{[^}]*\\b${componentName}\\b[^}]*\\}\\s+from\\s+["']([^"']+)["']`,
    );
    const importMatch = importRegex.exec(content);
    const componentFile = importMatch ? resolveImport(file.path, importMatch[1]) : "";

    routes.push({
      path: fullPath,
      componentName,
      componentFile,
      section: file.section,
      permission: "public",
      isParameterized: pathSuffix.includes(":"),
      isDocumentable: isDocumentableRoute(fullPath),
    });
  }
  return routes;
}

function resolveImport(sourceFile: string, importPath: string): string {
  // Relative imports are resolved from the source file's directory
  if (importPath.startsWith(".")) {
    const baseDir = dirname(sourceFile);
    const resolved = resolve(baseDir, importPath);
    // Try common extensions
    for (const ext of [".tsx", ".ts", "/index.tsx", "/index.ts"]) {
      const p = resolved + ext;
      if (existsSync(p) && statSync(p).isFile()) return p;
    }
    if (existsSync(resolved) && statSync(resolved).isFile()) return resolved;
    return resolved + ".tsx"; // best guess
  }
  return importPath; // probably a node_modules import; ignore
}

/**
 * Infer the permission needed to view a route by inspecting the component's source
 * for `UserHelper.checkAccess("permission")` calls and known route prefixes.
 */
function inferPermission(route: RouteInfo, componentSource: string): Permission {
  // Specific routes that we know are admin-only based on SettingsSidebar.tsx
  if (route.path.startsWith("/settings/templates")) return "admin";
  if (route.path.startsWith("/settings/admin")) return "admin";
  if (route.path.startsWith("/settings/feedAdmin")) return "creator";
  if (route.path.startsWith("/settings/affiliate")) return "creator";
  if (route.path === "/settings/billing") return "owner";
  if (route.path.startsWith("/settings/feeds")) return "owner";

  // Otherwise, scan the component source
  const checks: string[] = [];
  const regex = /UserHelper\.checkAccess\(\s*["'](admin|creator|owner)["']\s*\)/g;
  let m;
  while ((m = regex.exec(componentSource)) !== null) {
    checks.push(m[1]);
  }
  if (checks.includes("admin")) return "admin";
  if (checks.includes("creator")) return "creator";
  if (checks.includes("owner")) return "owner";
  return "public";
}

function analyzeComponent(componentPath: string): ComponentAnalysis {
  if (!componentPath || !existsSync(componentPath)) {
    return {
      file: componentPath,
      buttons: [],
      formFields: [],
      tableColumns: [],
      tabs: [],
      permissionsChecked: [],
      imports: [],
    };
  }

  const content = readFileSync(componentPath, "utf-8");

  const buttons: string[] = [];
  const btnRegex = /<(?:Button|IconButton)[^>]*>([^<{]*)<\/(?:Button|IconButton)>/g;
  let btnMatch;
  while ((btnMatch = btnRegex.exec(content)) !== null) {
    if (btnMatch[1].trim()) buttons.push(btnMatch[1].trim());
  }

  const formFields: string[] = [];
  const fieldRegex = /(?:label|placeholder)=["']([^"']+)["']/g;
  let fieldMatch;
  while ((fieldMatch = fieldRegex.exec(content)) !== null) {
    formFields.push(fieldMatch[1]);
  }

  const tableColumns: string[] = [];
  const colRegex = /(?:TableCell|<th[\s>])[^>]*>([^<{]+)</g;
  let colMatch;
  while ((colMatch = colRegex.exec(content)) !== null) {
    if (colMatch[1]?.trim()) tableColumns.push(colMatch[1].trim());
  }

  const tabs: string[] = [];
  const tabRegex = /(?:Tab|tab)[^>]*label=["']([^"']+)["']/g;
  let tabMatch;
  while ((tabMatch = tabRegex.exec(content)) !== null) {
    tabs.push(tabMatch[1]);
  }

  const permissionsChecked: string[] = [];
  const permRegex = /UserHelper\.checkAccess\(\s*["'](\w+)["']\s*\)/g;
  let permMatch;
  while ((permMatch = permRegex.exec(content)) !== null) {
    permissionsChecked.push(permMatch[1]);
  }

  const imports: string[] = [];
  const importRegex = /import\s+.*?from\s+["']([^"']+)["']/g;
  let importMatch;
  while ((importMatch = importRegex.exec(content)) !== null) {
    imports.push(importMatch[1]);
  }

  // Title heuristic — first <h1>, <h2>, or `title:` prop
  let heading: string | undefined;
  const h1Match = /<h[12][^>]*>([^<{]+)</.exec(content);
  if (h1Match) heading = h1Match[1].trim();

  return {
    file: componentPath,
    heading,
    buttons: [...new Set(buttons)],
    formFields: [...new Set(formFields)],
    tableColumns: [...new Set(tableColumns)],
    tabs: [...new Set(tabs)],
    permissionsChecked: [...new Set(permissionsChecked)],
    imports,
  };
}

export async function buildFeatureMap(): Promise<FeatureMap> {
  if (!existsSync(SP_ADMIN_SRC)) {
    throw new Error(`SignPresenterAdmin source not found at ${SP_ADMIN_SRC}`);
  }

  const routes: RouteInfo[] = [];
  for (const file of ROUTER_FILES) {
    routes.push(...parseRoutesInFile(file));
  }

  const components: Record<string, ComponentAnalysis> = {};
  for (const route of routes) {
    if (route.componentFile && route.isDocumentable) {
      const componentSource = existsSync(route.componentFile)
        ? readFileSync(route.componentFile, "utf-8")
        : "";
      route.permission = inferPermission(route, componentSource);
      const key = route.componentFile;
      if (!components[key]) {
        components[key] = analyzeComponent(route.componentFile);
      }
    }
  }

  return { routes, components };
}
