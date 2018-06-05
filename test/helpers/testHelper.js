export async function waitForSelectorAndClick(page, selector) {
  await page.waitForSelector(selector);
  return page.click(selector);
}

export async function clickOnTab(page, tabSelector) {
  await waitForSelectorAndClick(page, tabSelector);
  return page.waitForSelector(`${tabSelector}.active`);
}

export async function getDataFromElement(page, selector, callback) {
  return page.$eval(selector, callback);
}

export async function getDomElement(page, selector) {
  return page.$(selector);
}

export async function getMultiplyDataFromElement(page, selector, callback) {
  return page.$$eval(selector, callback);
}

export async function getDataFromRows(page) {
  return getMultiplyDataFromElement(page, '.tableRow', e => e.map(item => item.innerText));
}

export async function dragElement(page, x, y, offsetX) {
  await page.mouse.move(x + 5, y + 5);
  await page.mouse.down();
  await page.mouse.move(x + offsetX, y, { steps: 2 });
  await page.mouse.up();
}
