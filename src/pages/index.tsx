import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="hero-custom">
      <div className="container">
        <div className="hero-content">
          <Heading as="h1" className="hero-custom__title">
            {siteConfig.title}
          </Heading>
          <p className="hero-custom__subtitle">
            Set up your digital signage in three simple steps. Find guides, troubleshooting, and how-to articles for every part of SignPresenter.
          </p>
          <div className="hero-custom__actions">
            <Link className="button button--primary button--lg" to="/docs/getting-started/initial-setup">
              Get Started
            </Link>
            <Link
              className="button button--outline button--lg hero-custom__secondary-btn"
              to="/docs/troubleshooting/"
            >
              Troubleshooting
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

const steps = [
  {
    number: '1',
    title: 'Create your messages',
    description: 'Build images, videos, designer graphics, menus, web embeds, and more. Pick a template, fill in the blanks, and save.',
    link: '/docs/messages/',
    linkLabel: 'Browse message guides →',
    color: '#1976D2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Build a playlist',
    description: 'Sequence your messages, set durations, and schedule them. Mix in feeds, weather, and live data.',
    link: '/docs/playlists/',
    linkLabel: 'Build a playlist →',
    color: '#00897B',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15V6"/>
        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
        <path d="M12 12H3"/>
        <path d="M16 6H3"/>
        <path d="M12 18H3"/>
      </svg>
    ),
  },
  {
    number: '3',
    title: 'Pair your screens',
    description: 'Install the SignPresenter app on a Fire TV or Android device, enter the 4-digit pairing code, and start presenting.',
    link: '/docs/screens/',
    linkLabel: 'Pair a screen →',
    color: '#F57C00',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2"/>
        <line x1="8" x2="16" y1="21" y2="21"/>
        <line x1="12" x2="12" y1="17" y2="21"/>
      </svg>
    ),
  },
];

function StepCard({number, title, description, link, linkLabel, icon, color}: {
  number: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  icon: ReactNode;
  color: string;
}) {
  return (
    <Link to={link} className="step-card">
      <span className="step-card__number">{number}</span>
      <div className="step-card__icon" style={{'--card-color': color} as React.CSSProperties}>
        {icon}
      </div>
      <h3 className="step-card__title">{title}</h3>
      <p className="step-card__desc">{description}</p>
      <span className="step-card__link">{linkLabel}</span>
    </Link>
  );
}

const helpLinks = [
  {
    icon: '📅',
    title: 'Schedule a Demo',
    description: 'Book a 15-minute screen-share with our team.',
    href: 'https://calendly.com/mike-1021/15-min-screen-share-demo-of-sign-presenter',
  },
  {
    icon: '📞',
    title: 'Call or Text',
    description: '918-994-2638 — we’re happy to walk you through setup.',
    href: 'tel:9189942638',
  },
  {
    icon: '✉️',
    title: 'Email Support',
    description: 'support@signpresenter.com — typical response under 24 hours.',
    href: 'mailto:support@signpresenter.com',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout
      title="SignPresenter Support"
      description="Setup guides, how-to articles, and troubleshooting for SignPresenter digital signage."
    >
      <HomepageHeader />
      <main>
        <section className="steps-section">
          <div className="container">
            <Heading as="h2" className="section-heading">
              Setup in three steps
            </Heading>
            <p className="section-subtitle">
              Pick your starting point. Each step links to the full guide.
            </p>
            <div className="steps-grid">
              {steps.map((step) => (
                <StepCard key={step.number} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section className="help-section">
          <div className="container">
            <Heading as="h2" className="section-heading">
              Need help getting started?
            </Heading>
            <p className="section-subtitle">
              Our team is here to walk you through it.
            </p>
            <div className="help-grid">
              {helpLinks.map((h) => (
                <a key={h.title} href={h.href} className="help-card">
                  <span className="help-card__icon">{h.icon}</span>
                  <h3>{h.title}</h3>
                  <p>{h.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="admin-link-section">
          <div className="container">
            <Link to="/docs/admin/" className="admin-link">
              <span>For administrators</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
