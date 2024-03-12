import { test, expect } from "@playwright/test";

test("Home page should render correctly", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const logoImage = await page.waitForSelector(".logo-image-container");
  expect(logoImage).not.toBeNull();

  const titleImage = await page.waitForSelector(".image-container");
  expect(titleImage).not.toBeNull();

  const introText = await page.waitForSelector(".intro-text");
  expect(introText).not.toBeNull();

  await page.click("#route-button");

  await page.waitForNavigation();

  const currentURL = page.url();

  expect(currentURL).toBe("http://localhost:3000/new-player");
})