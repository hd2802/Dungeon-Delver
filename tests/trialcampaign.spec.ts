import { test, expect }  from "@playwright/test";

// path1: start -> barkeep -> pay -> continue -> continue -> roll - dmg - continue -> brace - continue ->  conclusion
// path2: start -> barkeep -> persuade -> roll - continue -> continue -> roll - dmg - continue -> brace - continue -> conclusion
// path3: start -> mercs -> spell -> continue -> continue -> roll - dmg - continue -> brace - continue -> conclusion
// path4: start -> mercs -> intimidate -> roll - continue -> continue -> roll - dmg - continue -> brace - continue -> conclusion
// path5: start -> hood -> talk -> continue -> continue -> roll - dmg - continue -> brace - continue -> conclusion
// path6: start -> hood -> sneak -> roll - continue -> continue -> roll - dmg - continue -> brace - continue -> conclusion

// test the combat side of things separately, in its own test

//TODO: fix, finish and clean up tests 

test("TC: Initial page renders correctly", async ({ page }: {page: any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    await page.waitForSelector("h1:has-text('Your First Adventure')");
})

test("TC: Start button functions correctly", async ({ page }: {page: any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    await page.click("button:has-text('Start Your Adventure')");

    await page.waitForSelector("h1:has-text('The Adventure Begins ...')")
})

test("TC: Path 1 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    await page.click("button:has-text('Start Your Adventure')");

    await page.waitForSelector("h1:has-text('The Adventure Begins ...')")

    await page.click("button:has-text('Talk to the Barkeep')");

    await page.waitForSelector("h1:has-text('Talking to the Barkeep')");

    await page.click("button:has-text('Pay the Coin (-1 Gold)')");

    await page.waitForSelector("h1");
    const payText = await page.innerText("h1");
    expect(payText).toContain("Paying the Gold");

    await page.click("button:has-text('Continue')");

    await page.waitForSelector("h1:has-text('Trouble Ahead')");
})

test("TC: Path 2 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    const startButton = await page.$("button:has-text('Start Your Adventure')");
    await startButton.click();

    await page.waitForSelector("h1");
    const barkeepHeader = await page.innerText("h1");
    expect(barkeepHeader).toContain("The Adventure Begins ...");

    const barkeepButton = await page.$("button:has-text('Talk to the Barkeep')");
    await barkeepButton.click();

    await page.waitForSelector("h1");
    const startText = await page.innerText("h1");
    expect(startText).toContain("Talking to the Barkeep");

    const payButton = await page.$("button:has-text('Persuade Him')");
    await payButton.click();

    await page.waitForSelector("h1");
    const payText = await page.innerText("h1");
    expect(payText).toContain("Persuasion Check");
    
    const rollButton = await page.$("button:has-text('Roll')");
    await rollButton.click();

    await page.waitForSelector("p:has-text('Your roll:')");
    const persuasionResult = await page.textContent("p:has-text('Your roll:')");
    
    if (persuasionResult >= 10) 
    {
        await page.waitForSelector("p");
        const txt = await page.innerText("p");
        expect(txt).toContain("Alright");
    }
    else 
    {
        // TODO: fix this case 
    }
    
    await page.click("button:has-text('Continue')");

    await page.waitForSelector("h1:has-text('Trouble Ahead')");
})

test("TC: Path 3 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    const startButton = await page.$("button:has-text('Start Your Adventure')");
    await startButton.click();

    await page.waitForSelector("h1");
    const barkeepHeader = await page.innerText("h1");
    expect(barkeepHeader).toContain("The Adventure Begins ...");

    const mercButton = await page.$("button:has-text('Approach the Mercenaries')");
    await mercButton.click();

    await page.waitForSelector("h1");
    const mercHeader = await page.innerText("h1");
    expect(mercHeader).toContain("Mercenaries");

    const spellButton = await page.$("button:has-text('Cast a Spell to Cause a Distraction')");
    await spellButton.click();

    await page.waitForSelector("h1");
    const spellHeader = await page.innerText("h1");
    expect(spellHeader).toContain("Casting a Spell");

    await page.click("button:has-text('Continue')");

    await page.waitForSelector("h1:has-text('Trouble Ahead')");
})

test("TC: Path 4 renders correclty", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    const startButton = await page.$("button:has-text('Start Your Adventure')");
    await startButton.click();

    await page.waitForSelector("h1");
    const barkeepHeader = await page.innerText("h1");
    expect(barkeepHeader).toContain("The Adventure Begins ...");

    const mercButton = await page.$("button:has-text('Approach the Mercenaries')");
    await mercButton.click();

    await page.waitForSelector("h1");
    const mercHeader = await page.innerText("h1");
    expect(mercHeader).toContain("Mercenaries");

    const intButton = await page.$("button:has-text('Intimidate the Mercenaries Back')");
    await intButton.click();

    await page.waitForSelector("h1");
    const newHeader = await page.innerText("h1");
    expect(newHeader).toContain("Intimidation Check");
    
    const rollButton = await page.$("button:has-text('Roll')");
    await rollButton.click();

    await page.waitForSelector("p:has-text('Your roll:')");
    const intimidationResult = await page.textContent("p:has-text('Your roll:')");
    
    //TODO: fix this
    if (intimidationResult >= 10) 
    {
        /*
        await page.waitForSelector("p");
        const txt = await page.innerText("p");
        expect(txt).toContain("shaken up by your");
        */
    }
    else 
    {
        /*
        await page.waitForSelector("p");
        const txt = await page.innerText("p");
        expect(txt).toContain("does not look convinced");
        */
    }
    
    await page.click("button:has-text('Continue')");

    await page.waitForSelector("h1:has-text('Trouble Ahead')");
})

test("TC: Path 5 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    const startButton = await page.$("button:has-text('Start Your Adventure')");
    await startButton.click();

    await page.waitForSelector("h1");
    const barkeepHeader = await page.innerText("h1");
    expect(barkeepHeader).toContain("The Adventure Begins ...");

    const hoodButton = await page.$("button:has-text('Investigate the Hooded Figure')");
    await hoodButton.click();

    await page.waitForSelector("h1");
    const hoodHeader = await page.innerText("h1");
    expect(hoodHeader).toContain("Hooded Figure");

    const speakButton = await page.$("button:has-text('Speak to the Hooded Figure')");
    await speakButton.click();

    await page.waitForSelector("h1");
    const speakHeader = await page.innerText("h1");
    expect(speakHeader).toContain("Speaking to the Hooded Figure");

    await page.click("button:has-text('Continue')");

    await page.waitForSelector("h1:has-text('Trouble Ahead')");
})

test("TC: Path 6 renders correctly", async ({ page }: {page:any}) => {
    await page.goto("http://localhost:3000/trial-campaign");

    await page.click("button:has-text('Start Your Adventure')");

    await page.waitForSelector("h1");
    const barkeepHeader = await page.innerText("h1");
    expect(barkeepHeader).toContain("The Adventure Begins ...");

    page.click("button:has-text('Investigate the Hooded Figure')");

    await page.waitForSelector("h1:has-text('Hooded Figure')");
    await page.click("button:has-text('Sneak Around the Figure')");

    await page.waitForSelector("h1:has-text('Stealth Check')")
    await page.click("button:has-text('Roll for Stealth')");
    await page.waitForSelector("p:has-text('Your roll:')");
    const stealthResult = await page.textContent("p:has-text('Your roll:')");

    //TODO: finish this 
    if (stealthResult >= 10)
    {

    }
    else 
    {

    }

    await page.click("button:has-text('Continue')");

    await page.waitForSelector("h1:has-text('Trouble Ahead')");
})

test("TC: Combat renders correctly", async ({ page }: {page:any}) => {
    // Uses Path 1 path
    await page.goto("http://localhost:3000/trial-campaign");

    await page.click("button:has-text('Start Your Adventure')");
    
    await page.waitForSelector("h1:has-text('The Adventure Begins ...')");

    await page.click("button:has-text('Talk to the Barkeep')");

    await page.waitForSelector("h1:has-text('Talking to the Barkeep')");

    const payButton = await page.$("button:has-text('Pay the Coin (-1 Gold)')");
    await payButton.click();

    await page.waitForSelector("h1:has-text('Paying the Gold')");

    await page.click("button:has-text('Continue')");

    await page.waitForSelector("h1:has-text('Trouble Ahead')");

    // Combat path starts
    await page.click("button:has-text('Continue')")

    // TODO: change this later
    await page.waitForSelector("h1");
    const attackText = await page.innerText("h1");
    expect(attackText).toContain("");

    await page.click("button:has-text('Roll to Attack!')");

    await page.waitForSelector("p:has-text('Your roll:')");
    const attackResult = await page.textContent("p:has-text('Your roll:')");
    expect(parseInt(attackResult.split(":")[1].trim())).toBeGreaterThanOrEqual(1);

    if (parseInt(attackResult.split(":")[1].trim()) >= 10)
    {
        await page.click("button:has-text('Roll Damage!')");
        await page.waitForSelector("p:has-text('You deal')");
        const damageResult = await page.textContent("p:has-text('You deal')");
        expect(parseInt(damageResult.split(" ")[3])).toBeGreaterThanOrEqual(1);

        await page.click("button:has-text('Continue')");
    }
    else 
    {
        await page.click("button:has-text('Continue')");
    }

    await page.waitForSelector("h1:has-text('The Bandit Strikes Back')");

    await page.click("button:has-text('Brace Yourself!')");

    await page.waitForSelector("p:has-text('Roll:')");
    
    const banditResult = await page.textContent("p:has-text('Roll:')");
    expect(parseInt(banditResult.split(":")[1].trim())).toBeGreaterThanOrEqual(1);

    if(parseInt(banditResult.split(":")[1].trim()) <= 10)
    {
        await page.click("button:has-text('Continue')");
    }
    else 
    {
        await page.click("button:has-text('Continue')");
    }

    await page.waitForSelector("h1:has-text('Bandit Defeated')");

    await page.click("button:has-text('Conclusion')");

    await page.waitForSelector("h1:has-text('Your First Adventure!')");
})  