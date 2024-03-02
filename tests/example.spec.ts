import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://dungeon-delver-inky.vercel.app/');


  await expect(page).toHaveTitle(/Dungeon Delver/);
});

