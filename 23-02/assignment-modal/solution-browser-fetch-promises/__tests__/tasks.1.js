const puppeteer = require("puppeteer");
const path = require('path');
const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
}

let browser;
let page;


beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./dist/index.html'));
});

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Browser Fetch Promises', () => {
    it("JavaScript file should be included in `index.html` using script tag", async () => {
        const scriptTags = await page.$$('script[src$=".js"]');
        expect(scriptTags).toBeTruthy();
    });
    it("Modal should be hidden by default", async () => {
        const modal = await page.waitForSelector('#myModal', {hidden: true});
        expect(modal).toBeTruthy();
    });
    it("Modal should appear after 60 seconds", async () => {
        await new Promise(resolve => setTimeout(resolve, 61000))
        const modal = await page.waitForSelector('#myModal', {visible: true});
        expect(modal).toBeTruthy();
    }, 62000);
});