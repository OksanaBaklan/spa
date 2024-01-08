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
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe('Add', () => {
    it("Page has task input field", async () => {
        const taskInput = await page.$('#input-task');
        expect(taskInput).toBeTruthy();
    });
    it("Should allow user to add a task", async () => {
        await page.type('#input-task', 'Test Task');
        await page.click('#add-task-btn');
        const taskList = await page.$$('#tasks li');
        const task = await page.$eval('#tasks li', el => el.textContent);
        expect(taskList.length).toBe(1);
        expect(task).toMatch(/Test Task/);
    });
});
describe('Status', () => {
    it("Should allow user to mark task as completed", async () => {
        await page.click('#tasks li input');
        const task = await page.$eval('#tasks li', el => el.className);
        expect(task).toMatch(/completed/);
    });
});