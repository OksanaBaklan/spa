const fs = require('fs').promises;

describe('`Card` component', () => {
  test('is rendered', () => {
    document.body.innerHTML = '<div id="root"></div>';
    require('../../src/index.js');
    const title = document.querySelector('.card-title');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('Bob Dylan');
  })
  test('Component is used with **tag syntax** in `ReactDOM.render`', async () => {
    const data = await fs.readFile(__dirname+'/../index.js', 'utf8');
    expect(data).toMatch(/ReactDOM\.render\(.*\<Card\s*\/\>.*\)\)/gm);
  })
})