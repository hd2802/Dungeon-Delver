import { test, expect }  from "@playwright/test";

/*
 * Page 1: Using Ability Scores
 * Page 2: Ability Scores and Modifiers 
 * Page 3: Ability Checks 
 * Page 4: Skills
*/

test("Abilities: Page 1 renders correctly", async ({page} : {page:any}) => {
    await page.goto("http://localhost:3000/new-player/abilities/");
    
    await page.waitForSelector("h1:has-text('Using Ability Scores')");
    await page.waitForSelector("p:has-text('Six abilities')")
})

test("Abilities: Page 1 next button functions correctly and page 2 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/abilities/");

    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Ability Scores and Modifiers')")
    await page.waitForSelector("p:has-text('Each of a creature')");
})

/* This is a very important test!
*  From this test it was discovered that the back button on the first page did not work properly due to a typo in the switch
*  This would not have been discovered if not for this test
*/
test("Abilities: Page 2 buttons function correctly and page 3 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/abilities");

    // Navigating forwards to page 2 
    await page.click("button:has-text('Next')");

    // Navigating back to page 1 
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Using Ability Scores')");

    // Navigating page to page 2 
    await page.click("button:has-text('Next')");

    // Navigating forward 
    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Ability Checks')");
})

test("Abilities: Page 3 buttons function correctly and page 4 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/abilities");

    // Navigating forwards to page 2 
    await page.click("button:has-text('Next')");

    // Navigating forwards to page 3
    await page.click("button:has-text('Next')");

    // Navigating backwards using the 'back' button
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Ability Scores and Modifiers')");

    // Navigating forwards again to page 3 
    await page.click("button:has-text('Next')");

    // Navigating forwards to page 4
    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Skills')");
})

test("Abilities: Page 4 buttons function correctly and page 5 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/abilities");

    // Navigating forwards to page 2 
    await page.click("button:has-text('Next')");

    // Navigating forwards to page 3
    await page.click("button:has-text('Next')");

    // Navigating backwards using the 'back' button
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Ability Scores and Modifiers')");

    // Navigating forwards again to page 4
    await page.click("button:has-text('Next')");

    // Navigating forwards to page 5
    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Skills')");
})

test("Abilities: Page 5 buttons function correctly and page 6 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/new-player/abilities");

    await page.click("button:has-text('Next')");
    await page.click("button:has-text('Next')");

    // Navigating forwards to the skills page
    await page.click("button:has-text('Next')");
    await page.waitForSelector("h1:has-text('Skills')");

    // Navigating backwards using the 'back' button
    await page.click("button:has-text('Back')");
    await page.waitForSelector("h1:has-text('Ability Checks')");
})