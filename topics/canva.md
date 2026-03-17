## Connect Your Canva Account to SignPresenter

SignPresenter lets you pull designs directly from your Canva account and display them on your screens. It is simple to connect to any Canva account and takes just a few clicks.

> **Note:** Canva integration currently supports **horizontal (16:9) screens only**. Vertical support is coming soon. Canva can only pull in **images** at this time.

> **Best Practice:** Start your Canva designs at a minimum of **1920 x 1080** pixels so they look sharp on your screens.

---

![Canva setup walkthrough](../images/canva-tutorial.webp)

---

<!-- Lightbox -->
<style>
.lb-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  z-index: 9999;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.lb-overlay.active { display: flex; }
.lb-overlay img { max-width: 92vw; max-height: 92vh; border-radius: 6px; box-shadow: 0 4px 30px rgba(0,0,0,0.6); }
.lb-close { position: fixed; top: 18px; right: 24px; color: #fff; font-size: 36px; font-weight: bold; cursor: pointer; line-height: 1; }
.zoom-img { cursor: zoom-in; border: 2px solid #e0e0e0; border-radius: 4px; }
.zoom-hint { font-size: 0.82em; color: #888; margin-top: 4px; display: block; }
</style>

<div class="lb-overlay" id="lb" onclick="this.classList.remove('active')">
  <span class="lb-close" onclick="document.getElementById('lb').classList.remove('active')">&times;</span>
  <img id="lb-img" src="" alt="">
</div>

<script>
function openLB(src, alt) {
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-img').alt = alt;
  document.getElementById('lb').classList.add('active');
}
</script>

<details>
<summary><strong>Step 1 — Go to My Content</strong></summary>
<br>
Click on <strong>Step 1: My Content</strong> at the top of the screen, then click the green <strong>+</strong> button to create a new message.
<br><br>
<img class="zoom-img" src="../images/canva-step1.png" alt="Go to My Content" style="max-width:100%;" onclick="openLB(this.src, this.alt)">
<span class="zoom-hint">Click image to enlarge</span>
</details>

<details>
<summary><strong>Step 2 — Select the Horizontal layout</strong></summary>
<br>
Choose <strong>Horizontal 16:9</strong> for your screen layout.
<br><br>
<img class="zoom-img" src="../images/canva-step2.png" alt="Select Horizontal Layout" style="max-width:100%;" onclick="openLB(this.src, this.alt)">
<span class="zoom-hint">Click image to enlarge</span>
</details>

<details>
<summary><strong>Step 3 — Open All Message Templates</strong></summary>
<br>
Click <strong>All Message Templates</strong> to see the full list of content types.
<br><br>
<img class="zoom-img" src="../images/canva-step3.png" alt="Open All Message Templates" style="max-width:100%;" onclick="openLB(this.src, this.alt)">
<span class="zoom-hint">Click image to enlarge</span>
</details>

<details>
<summary><strong>Step 4 — Select the Canva template</strong></summary>
<br>
Scroll down and click the <strong>Canva</strong> option in the template list.
<br><br>
<img class="zoom-img" src="../images/canva-step4.png" alt="Select Canva Template" style="max-width:100%;" onclick="openLB(this.src, this.alt)">
<span class="zoom-hint">Click image to enlarge</span>
</details>

<details>
<summary><strong>Step 5 — Select Canva Design</strong></summary>
<br>
Click the <strong>Select Canva Design</strong> button to open the Canva connection screen.
<br><br>
<img class="zoom-img" src="../images/canva-step5.png" alt="Select Canva Design" style="max-width:100%;" onclick="openLB(this.src, this.alt)">
<span class="zoom-hint">Click image to enlarge</span>
</details>

<details>
<summary><strong>Step 6 — Connect your Canva account</strong></summary>
<br>
If this is your first time, you will see a <strong>Connect Your Canva Account</strong> prompt. Click <strong>Connect to Canva</strong> — this is a one-time setup. After connecting, you can browse and select any design from your Canva library.
<br><br>
Give the message a <strong>Name</strong>, choose a <strong>Category</strong>, set the <strong>Duration</strong>, and click <strong>Save</strong>.
<br><br>
<img class="zoom-img" src="../images/canva-step6.png" alt="Connect Your Canva Account" style="max-width:100%;" onclick="openLB(this.src, this.alt)">
<span class="zoom-hint">Click image to enlarge</span>
</details>

---

That's it! Your Canva design will now be available to add to any playlist on your horizontal screens.
