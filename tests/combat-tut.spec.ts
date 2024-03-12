import { test, expect }  from "@playwright/test";

test("Combat: Page 1 renders correctly", async ({page} : {page:any}) => {
    await page.goto("http://localhost:3000/new-player/combat/");
    
    await page.waitForSelector("h1:has-text('Combat')");
    await page.waitForSelector("p:has-text('A typical combat encounter')");
})

test("Combat: Page 1 buttons function correctly and page 2 renders correctly", async ( { page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/combat/");

    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Initiative')");
})

test("Combat: Page 2 buttons function correctly and page 3 renders correctly", async ( { page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/combat/");

    await page.click("button:has-text('Next')");
    
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Combat')");

    await page.click("button:has-text('Next')");

    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Your Turn')");
})

test("Combat: Page 3 buttons function correctly and page 4 renders correctly", async ( { page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/combat/");

    await page.click("button:has-text('Next')");
    await page.click("button:has-text('Next')");
    
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Initiative')");

    await page.click("button:has-text('Next')");

    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Attacking')");
})

test("Combat: Page 4 buttons function correctly and page 5 renders correctly", async ( { page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/combat/");

    await page.click("button:has-text('Next')");
    await page.click("button:has-text('Next')");
    await page.click("button:has-text('Next')");
    
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Your Turn')");

    await page.click("button:has-text('Next')");

    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Hit Points')");
})

test("Combat: Page 5 buttons function correctly and page 6 renders correctly", async ( { page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/combat/");

    await page.click("button:has-text('Next')");
    await page.click("button:has-text('Next')");
    await page.click("button:has-text('Next')");
    await page.click("button:has-text('Next')");
    
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Attacking')");
})