import { test, expect } from "@playwright/test";

test("New Player Dash: TC link functions correctly", async ({ page }) => {
  await page.goto("http://localhost:3000/new-player");

  await page.click("#trial");
  await page.waitForNavigation();
  const currentURL = page.url();
  expect(currentURL).toBe("http://localhost:3000/trial-campaign");
})

test("New Player Dash: Combat link functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000/new-player");
  
    await page.click("#combat");
    await page.waitForNavigation();
    const currentURL = page.url();
    expect(currentURL).toBe("http://localhost:3000/new-player/combat");
})

test("New Player Dash: Ability link functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000/new-player");
  
    await page.click("#ability");
    await page.waitForNavigation();
    const currentURL = page.url();
    expect(currentURL).toBe("http://localhost:3000/new-player/abilities");
})