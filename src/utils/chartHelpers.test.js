import { getColor, getHeight, formatData } from './chartHelper';

describe('Bars helper', () => {
  describe('getColor helper', () => {
    it('is exist', () => {
      expect(getColor).toBeDefined();
    });

    it('should return right color', () => {
      const expected = 155;
      const max = 100;
      const current = 50;
      expect(getColor(current, max)).toBe(expected);
    });

    it('should return 255 if salary 0', () => {
      const expected = 255;
      const max = 100;
      const current = 0;
      expect(getColor(current, max)).toBe(expected);
    });
  });

  describe('getHeight', () => {
    it('is exist', () => {
      expect(getHeight).toBeDefined();
    });

    it('should return 100 if current salary is max ', () => {
      const expected = 200;
      const current = 2000;
      const max = 2000;
      expect(getHeight(current, max)).toBe(expected);
    });

    it('should return 0 if salary is 0 ', () => {
      const expected = 0;
      const current = 0;
      const max = 2000;
      expect(getHeight(current, max)).toBe(expected);
    });

    it('should return 0 if max salary is 0 ', () => {
      const expected = 0;
      const current = 1000;
      const max = 0;
      expect(getHeight(current, max)).toBe(expected);
    });
  });

  describe('format data', () => {
    it('is exist', () => {
      expect(formatData).toBeDefined();
    });

    it('should return correct data', () => {
      const data = {
        1: {
          sum: 100,
          qty: 1,
        },
        2: {
          sum: 200,
          qty: 2,
        },
        3: {
          sum: 300,
          qty: 3,
        },
        4: {
          sum: 0,
          qty: 0,
        },
      };
      const expected = [
        {
          salary: 100,
          key: '1',
        }, {
          salary: 100,
          key: '2',
        }, {
          salary: 100,
          key: '3',
        }, {
          salary: 0,
          key: '4',
        },
      ];
      expect(formatData(data)).toEqual(expected);
    });
  });
});
