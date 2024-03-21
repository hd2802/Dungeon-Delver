import { test } from '@playwright/test';

test('Homepage: New Player Button functions as expected', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'New Player', exact: true }).click();
  await page.waitForURL("**/new-player");
});

test("Homepage: about page functions as expected", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByRole("button", { name: "About" }).click();
  await page.waitForURL("**/about");
})
