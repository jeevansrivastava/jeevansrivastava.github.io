/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS browser verification script. */
// Run against the production export. External submissions are always mocked.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const base = process.env.PORTFOLIO_URL || "http://127.0.0.1:3101";
const artifacts = path.resolve(
  process.env.PORTFOLIO_ARTIFACT_DIR || "docs/portfolio-redesign/evidence",
);
const routes = [
  "/",
  "/case-studies",
  "/case-studies/ai-voice-application",
  "/case-studies/aws-cost-intelligence",
  "/case-studies/database-performance",
  "/case-studies/video-streaming",
  "/case-studies/subscription-entitlements",
  "/case-studies/speech-assessment",
  "/case-studies/media-asset-workflows",
  "/case-studies/curriculum-content-platform",
  "/case-studies/investment-workflows",
  "/case-studies/classroom-video-export",
  "/work-with-me",
  "/about",
  "/resume",
  "/contact",
  "/articles",
];
(async () => {
  fs.mkdirSync(artifacts, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROME_PATH
      ? { executablePath: process.env.CHROME_PATH }
      : {}),
  });
  const context = await browser.newContext();
  await context.route(/googletagmanager|google-analytics/, (r) => r.abort());
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.addInitScript(() => {
    window.__cls = 0;
    new PerformanceObserver((list) => {
      for (const e of list.getEntries())
        if (!e.hadRecentInput) window.__cls += e.value;
    }).observe({ type: "layout-shift", buffered: true });
  });
  const results = [];
  const links = new Set();
  const external = new Set();
  try {
    for (const [size, width, height] of [
      ["desktop", 1440, 1000],
      ["tablet", 768, 1024],
      ["mobile", 390, 844],
    ]) {
      await page.setViewportSize({ width, height });
      for (const route of routes) {
        const response = await page.goto(base + route, { waitUntil: "load" });
        assert.equal(response.status(), 200, route);
        await page.waitForTimeout(100);
        await page.locator(".notebook-hero").evaluateAll(async (nodes) => {
          await Promise.all(nodes.flatMap((node) => node.getAnimations()).map((animation) => animation.finished.catch(() => {})));
        });
        // Load below-the-fold logos before checking every image and capturing the page.
        await page.locator("img").evaluateAll(async (images) => {
          await Promise.all(images.map(async (image) => {
            image.loading = "eager";
            await image.decode().catch(() => {});
          }));
        });
        assert.equal(await page.locator("h1").count(), 1, `${route}: one H1`);
        assert.equal(await page.locator("main").count(), 1);
        assert.equal(
          new URL(
            await page.locator('link[rel="canonical"]').getAttribute("href"),
          ).href,
          "https://jeevansrivastava.com" + (route === "/" ? "/" : route),
        );
        assert.equal(
          new URL(
            await page
              .locator('meta[property="og:url"]')
              .getAttribute("content"),
          ).href,
          "https://jeevansrivastava.com" + (route === "/" ? "/" : route),
        );
        assert.ok((await page.title()).includes("Jeevan Jyoti Srivastava"));
        assert.ok(
          (
            await page
              .locator('meta[name="description"]')
              .getAttribute("content")
          ).length > 20,
        );
        if (route.startsWith("/case-studies/")) {
          assert.deepEqual(await page.locator(".study-brief dt").allTextContents(), ["Problem scope", "Architecture intervention", "Production outcome"]);
        }
        if (route.startsWith("/case-studies/") || route === "/articles") {
          assert.equal(await page.locator(".engagement-cta a").getAttribute("href"), "/work-with-me");
        }
        const dimensions = await page.evaluate(() => ({
          width: innerWidth,
          scroll: document.documentElement.scrollWidth,
          images: [...document.images].filter(
            (i) => !i.complete || i.naturalWidth === 0,
          ).length,
          cls: window.__cls,
        }));
        assert.ok(
          dimensions.scroll <= width,
          `${route} ${size}: horizontal overflow`,
        );
        assert.equal(dimensions.images, 0);
        await page.addScriptTag({
          path: require.resolve("axe-core/axe.min.js"),
        });
        const axe = await page.evaluate(
          async () =>
            await axe.run(document, {
              runOnly: {
                type: "tag",
                values: ["wcag2a", "wcag2aa", "wcag21aa"],
              },
            }),
        );
        assert.deepEqual(
          axe.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((n) => n.target),
          })),
          [],
          `${route} ${size}: accessibility`,
        );
        for (const href of await page
          .locator("a")
          .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")))) {
          if (href?.startsWith("/")) links.add(href);
          else if (href?.startsWith("https://")) external.add(href);
        }
        const name = route === "/" ? "home" : route.split("/").pop();
        await page.screenshot({
          path: path.join(artifacts, `${name}-${size}.png`),
          fullPage: true,
        });
        if (route === "/")
          await page.screenshot({
            path: path.join(artifacts, `home-${size}-viewport.png`),
          });
        results.push({
          route,
          size,
          status: response.status(),
          axeViolations: axe.violations.length,
          ...dimensions,
        });
      }
    }
    for (const href of links) {
      const r = await context.request.get(base + href);
      assert.equal(r.status(), 200, `Link ${href}`);
    }
    const missing = await page.goto(base + "/missing-page", {
      waitUntil: "load",
    });
    assert.equal(missing.status(), 404);
    assert.ok(
      await page
        .getByRole("heading", { name: "This path ends here." })
        .isVisible(),
    );
    // Native focus selector and field notes are useful with or without JavaScript.
    await page.goto(base);
    await page.getByRole("radio", { name: "Platforms", exact: true }).check();
    assert.ok(await page.locator(".note-systems").isVisible());
    assert.ok(await page.locator(".screen-systems").isVisible());
    assert.equal(await page.locator(".note-voice").isVisible(), false);
    await page.getByRole("radio", { name: "Platforms", exact: true }).focus();
    await page.keyboard.press("ArrowRight");
    assert.ok(await page.getByRole("radio", { name: "Leadership", exact: true }).isChecked());
    assert.ok(await page.locator(".note-people").isVisible());
    for (const note of await page.locator(".project-field-note").all()) {
      await note.locator("summary").click();
      assert.ok(await note.locator("dl").isVisible());
      assert.ok((await note.innerText()).includes("The key decision"));
      await note.locator("summary").click();
      assert.equal(await note.locator("dl").isVisible(), false);
    }
    // Hero actions, feature navigation and page return.
    await page.goto(base);
    await page
      .getByRole("link", { name: "Explore My Work", exact: true })
      .click();
    await page.waitForURL(base + "/case-studies");
    await page.getByRole("link", { name: "Inside the architecture" }).click();
    await page.waitForURL(base + "/case-studies/ai-voice-application");
    await page.getByRole("link", { name: "All case studies" }).click();
    await page.waitForURL(base + "/case-studies");
    await page.goto(base);
    const bookingUrl = "https://calendly.com/jeevan-srivastavajj/30min";
    // Verify outbound navigation without creating a booking or contacting the scheduler.
    await page.route("https://calendly.com/**", (route) => route.fulfill({ status: 200, contentType: "text/html", body: "<p>Booking destination check</p>" }));
    await page.locator(".notebook-intro").getByRole("link", { name: "Discuss an Architecture Challenge" }).click();
    await page.waitForURL(bookingUrl);
    await page.goto(base + "/work-with-me");
    assert.equal(await page.locator("#architecture-review, #technical-discussion, #technical-mentoring").count(), 3);
    await page.getByRole("link", { name: "Discuss an Architecture Challenge" }).click();
    await page.waitForURL(bookingUrl);
    await page.goto(base + "/work-with-me");
    await page.getByRole("link", { name: "Ask about an architecture review" }).click();
    await page.waitForURL(base + "/contact#project-enquiry");
    assert.ok(await page.getByLabel("What would you like to discuss?").isVisible());
    await page.goto(base + "/work-with-me");
    await page.getByRole("link", { name: "View résumé & experience" }).click();
    await page.waitForURL(base + "/resume");
    await page.evaluate(() => {
      window.__printCalls = 0;
      window.print = () => window.__printCalls++;
    });
    await page.getByRole("button", { name: "Print / save PDF" }).click();
    assert.equal(await page.evaluate(() => window.__printCalls), 1);
    await page.emulateMedia({ media: "print" });
    assert.equal(await page.locator(".notebook-paper").evaluate((el) => getComputedStyle(el).borderTopWidth), "0px");
    assert.equal(await page.locator(".page-doodle").isVisible(), false);
    assert.equal(await page.locator(".site-header").isVisible(), false);
    await page.pdf({
      path: path.join(artifacts, "resume-print.pdf"),
      format: "A4",
      printBackground: true,
    });
    await page.screenshot({
      path: path.join(artifacts, "resume-print.png"),
      fullPage: true,
    });
    await page.emulateMedia({ media: "screen" });
    // Native disclosure works with keyboard; Escape returns focus to summary.
    await page.goto(base);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.keyboard.press("Tab");
    assert.equal(await page.locator(":focus").innerText(), "Skip to content");
    await page.keyboard.press("Enter");
    assert.equal(
      await page.evaluate(() => document.activeElement.id),
      "main-content",
    );
    const menu = page.locator(".mobile-menu summary");
    await menu.focus();
    await page.keyboard.press("Enter");
    assert.ok((await page.locator(".mobile-menu").getAttribute("open")) !== null);
    await page.keyboard.press("Escape");
    assert.equal(await page.locator(".mobile-menu").getAttribute("open"), null);
    assert.equal(
      await page.evaluate(() => document.activeElement.tagName),
      "SUMMARY",
    );
    await menu.click();
    await page
      .getByRole("navigation", { name: "Mobile primary" })
      .getByRole("link", { name: "Contact" })
      .click();
    await page.waitForURL(base + "/contact");
    assert.equal(await page.locator(".mobile-menu").getAttribute("open"), null);
    // Never contact the actual message service.
    let status = 503;
    let posts = 0;
    let hold;
    await page.route("https://formspree.io/**", async (r) => {
      posts++;
      if (hold) await hold;
      await r.fulfill({
        status,
        contentType: "application/json",
        body: JSON.stringify(
          status === 200 ? { ok: true } : { error: "Simulated failure" },
        ),
      });
    });
    await page.getByLabel("Name", { exact: true }).fill("Local browser check");
    await page
      .getByLabel("Email", { exact: true })
      .fill("local-test@example.invalid");
    await page
      .getByLabel("What would you like to discuss?")
      .fill("Synthetic validation only; never sent.");
    let release;
    hold = new Promise((r) => (release = r));
    await page.getByRole("button", { name: "Send message" }).click();
    assert.ok(
      await page.getByRole("button", { name: "Sending…" }).isDisabled(),
    );
    release();
    hold = null;
    await page
      .getByText("Your message could not be sent.", { exact: false })
      .waitFor();
    assert.equal(
      await page.getByLabel("What would you like to discuss?").inputValue(),
      "Synthetic validation only; never sent.",
    );
    status = 200;
    await page.getByRole("button", { name: "Send message" }).click();
    await page
      .getByText("Your message was accepted", { exact: false })
      .waitFor();
    assert.equal(
      await page.getByLabel("Name", { exact: true }).inputValue(),
      "",
    );
    assert.equal(posts, 2);
    // Browser network exception must not show success or clear input.
    await page.unroute("https://formspree.io/**");
    await page.route("https://formspree.io/**", (r) => r.abort());
    await page.getByLabel("Name", { exact: true }).fill("Local browser check");
    await page
      .getByLabel("Email", { exact: true })
      .fill("local-test@example.invalid");
    await page
      .getByLabel("What would you like to discuss?")
      .fill("Preserve this draft");
    await page.getByRole("button", { name: "Send message" }).click();
    await page
      .getByText("Your message could not be sent.", { exact: false })
      .waitFor();
    assert.equal(
      await page.getByLabel("What would you like to discuss?").inputValue(),
      "Preserve this draft",
    );
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(base);
    assert.equal(
      await page.evaluate(
        () => getComputedStyle(document.documentElement).scrollBehavior,
      ),
      "auto",
    );
    assert.equal(
      await page
        .locator(".button")
        .first()
        .evaluate((e) => getComputedStyle(e).transitionDuration),
      "0s",
    );
    await page.setViewportSize({ width: 320, height: 740 });
    for (const route of [...routes, "/missing-page"]) {
      await page.goto(base + route);
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${route}:320px`,
      );
    }
    const nojs = await browser.newContext({ javaScriptEnabled: false });
    const nj = await nojs.newPage();
    for (const route of routes) {
      await nj.goto(base + route);
      assert.equal(await nj.locator("h1").count(), 1);
      assert.ok(await nj.locator("main").innerText());
    }
    await nj.setViewportSize({ width: 390, height: 844 });
    await nj.goto(base);
    await nj.locator(".mobile-menu summary").click();
    assert.ok(
      await nj.getByRole("navigation", { name: "Mobile primary" }).isVisible(),
    );
    await nj.getByRole("radio", { name: "Platforms", exact: true }).check();
    assert.ok(await nj.locator(".note-systems").isVisible());
    await nj.locator(".project-field-note summary").first().click();
    assert.ok(await nj.locator(".project-field-note dl").first().isVisible());
    await nojs.close();
    assert.deepEqual(errors, [], "No browser runtime errors");
    const output = {
      results,
      internalLinks: [...links],
      externalLinks: [...external],
      runtimeErrors: errors,
      functionalChecks: [
        "native sketch focus controls and keyboard arrows",
        "four expandable project field notes",
        "no-JS sketch and field notes",
        "hero CTAs, Calendly booking and project enquiry paths",
        "three selective advisory formats and secondary resume access",
        "case impact summaries and selective advisory links",
        "featured case and return",
        "resume print action and PDF",
        "404",
        "skip link",
        "keyboard menu and Escape",
        "mobile navigation",
        "mock HTTP failure preserves input",
        "mock success clears input",
        "mock network failure preserves input",
        "reduced motion",
        "320px overflow",
        `${routes.length} routes without JavaScript`,
        "no-JS menu",
      ],
      note: "Analytics blocked. Form submissions and Calendly navigation mocked. Local measurements are not field Core Web Vitals.",
    };
    fs.writeFileSync(
      path.join(artifacts, "validation.json"),
      JSON.stringify(output, null, 2),
    );
    console.log(
      JSON.stringify(
        {
          routeViewportChecks: results.length,
          axeViolations: 0,
          internalLinks: links.size,
          functionalChecks: output.functionalChecks.length,
          maxObservedCLS: Math.max(...results.map((r) => r.cls)),
          runtimeErrors: errors,
        },
        null,
        2,
      ),
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
