import { test } from "@playwright/test";

test("Header: logo is present", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole('img', { name: 'logo image' }).first().isVisible();
})

test("Header: homepage button functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole("button", { name: "Homepage" }).click();
    await page.waitForURL("**/");
})

test("Header: New Player button functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole("button", {name : "New Player Dashboard" }).click();
    await page.waitForURL("**/new-player");
})

test("Header: Character Creator button functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole("button", {name : "Character Creator" }).click();
    await page.waitForURL("**/character-builder");
})

test("Header: Information Compendium button functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole("button", {name : "Information Compendium" }).click();
    await page.waitForURL("**/compendium");
})

test("Header: Trial Campagin button functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole("button", {name : "Trial Campaign" }).click();
    await page.waitForURL("**/trial-campaign");
})

test("Header: Login button functions correctly", async ({ page }) => {
    await page.goto("http://localhost:3000");

    await page.getByRole("button", {name : "Log in/ Sign up" }).click();
    await page.waitForURL("**/login-page");
})