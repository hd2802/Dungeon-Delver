import { test, expect } from '@playwright/test';

test('404 page loads correctly', async ({ page }) => {
  await page.goto('https://dungeon-delver-inky.vercel.app/sgfijsfgij');

  await page.locator('div').filter({ hasText: "Wrong Turn, Adventurer!"}).first().isVisible();

  await page.locator('div').filter({ hasText: "Error 404: Page not found"}).first().isVisible();
});
