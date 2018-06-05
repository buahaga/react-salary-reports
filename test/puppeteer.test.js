import { clickOnTab, waitForSelectorAndClick, getDataFromElement, dragElement, getDataFromRows, getDomElement } from './helpers/testHelper';

describe('e2e test with jest and pupeeter', () => {
  const appUrlBase = 'http://localhost:3001';
  let page;

  beforeEach(async () => {
    page = await global.__BROWSER__.newPage();
    await page.goto(appUrlBase);
    await page.addScriptTag({ path: require.resolve('./helpers/mouseHelper') });
  });

  it('should render main page with tech report and tech tab active', async () => {
    const tabSelector = '#Tech';
    const expected = ['C#1534', 'JS1343', 'Java1255', 'Python1258', 'R1340', 'Ruby1408'];
    await page.waitForSelector(`${tabSelector}.active`);
    await page.waitForSelector('#tech-report');
    const rowsData = await getDataFromRows(page);
    expect(rowsData).toEqual(expected);
  });

  it('if you uncheck one checkbox data in your table changes', async () => {
    const checkBox = '#Developer';
    const expected = ['C#1705', 'JS1455', 'Java1349', 'Python1351', 'R1431', 'Ruby1553'];
    await waitForSelectorAndClick(page, checkBox);
    const cellValue = await getDataFromRows(page);
    expect(cellValue).toEqual(expected);
  });

  it('when all filters are unchecked table should return source data', async () => {
    const checkBoxD = '#Developer';
    const checkBoxJ = '#Junior';
    const checkBoxS = '#Senior';
    const expected = ['C#1534', 'JS1343', 'Java1255', 'Python1258', 'R1340', 'Ruby1408'];
    await waitForSelectorAndClick(page, checkBoxD);
    await waitForSelectorAndClick(page, checkBoxS);
    await waitForSelectorAndClick(page, checkBoxJ);
    const cellValue = await getDataFromRows(page);
    expect(cellValue).toEqual(expected);
  });

  it('when you click on skill tab should render skill report table', async () => {
    const tabSelector = '#Skill';
    const expected = ['Developer1144', 'Junior441', 'Senior2326'];
    await clickOnTab(page, tabSelector);
    await page.waitForSelector('#skill-report');
    const rowsData = await getDataFromRows(page);
    expect(rowsData).toEqual(expected);
  });

  it('when you click on city tab should render city report table', async () => {
    const tabSelector = '#City';
    const expected = ['Brest1503', 'Gomel1382', 'Grodno1410', 'Minsk1298', 'Mogilev1297', 'Vitebsk1282'];
    await clickOnTab(page, tabSelector);
    await page.waitForSelector('#city-report');
    const rowsData = await getDataFromRows(page);
    expect(rowsData).toEqual(expected);
  });

  it('when you click on change year link year should change', async () => {
    const arrowSelector = '.select-year-btn';
    const expectedYear = new Date().getFullYear() - 1;
    await waitForSelectorAndClick(page, arrowSelector);
    const currentYear = await getDataFromElement(page, '.year-select', e => e.innerText);
    expect(Number(currentYear.slice(1, 5))).toBe(expectedYear);
  });

  it('year shouldn\'t change', async () => {
    const arrowSelector = '.select-year-btn-disabled';
    const expectedYear = new Date().getFullYear();
    await waitForSelectorAndClick(page, arrowSelector);
    const currentYear = await getDataFromElement(page, '.year-select', e => e.innerText);
    expect(Number(currentYear.slice(1, 5))).toBe(expectedYear);
  });

  it('when you drag left filter to the right filter its left position should change', async () => {
    const element = await getDomElement(page, '.filter-handler');
    const { x, y } = await element.boundingBox();
    await dragElement(page, x, y, 120);
    const result = await element.boundingBox();
    expect(result.x).toBeGreaterThan(x);
  });

  it('when you drag left filter to the left its left position should not change', async () => {
    const element = await getDomElement(page, '.filter-handler');
    const { x, y } = await element.boundingBox();
    await dragElement(page, x, y, -120);
    const result = await element.boundingBox();
    expect(result.x).toEqual(x);
  });

  it('when you drag right filter to the right its left position should not change', async () => {
    const element = await getDomElement(page, '.draggable:last-child .filter-handler');
    const { x, y } = await element.boundingBox();
    await dragElement(page, x, y, 120);
    const result = await element.boundingBox();
    expect(result.x).toEqual(x);
  });

  it('when you drag right filter to the left its left position should change', async () => {
    const element = await getDomElement(page, '.draggable:last-child .filter-handler');
    const { x, y } = await element.boundingBox();
    await dragElement(page, x, y, -120);
    const result = await element.boundingBox();
    expect(result.x).not.toEqual(x);
  });

  it('when you drag left filter to the right it does not goes much right', async () => {
    const expected = 300;
    const element = await getDomElement(page, '.filter-handler');
    const { x, y } = await element.boundingBox();
    await dragElement(page, x, y, 200);
    const result = await element.boundingBox();
    expect(result.x).toBeLessThanOrEqual(expected);
  });

  it('when you drag filter data in table should change', async () => {
    const tabSelector = '#Tech';
    const expected = ['C#1923', 'JS1436', 'Java1311', 'Python1198', 'R1448', 'Ruby1528'];
    await page.waitForSelector(`${tabSelector}.active`);
    const element = await getDomElement(page, '.filter-handler');
    const { x, y } = await element.boundingBox();
    await dragElement(page, x, y, 120);
    const rowsData = await getDataFromRows(page);
    expect(rowsData).toEqual(expected);
  });
});
