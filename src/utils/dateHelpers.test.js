import { getMonth, getYear } from './dateHelpers';

describe('Data helpers', () => {
  describe('getMontg', () => {
    it('exist', () => {
      expect(getMonth).toBeDefined();
    });

    it('should return correct month', () => {
      const expected = 4;
      expect(getMonth('04/23/2018')).toBe(expected);
    });

    it('should return -1 if date string incorrect', () => {
      const expected = -1;
      expect(getMonth('')).toBe(expected);
    });
  });

  describe('getYear', () => {
    it('exist', () => {
      expect(getYear).toBeDefined();
    });

    it('should return correct year', () => {
      const expected = 2018;
      expect(getYear('04/23/2018')).toBe(expected);
    });

    it('should return -1 if date string incorrect', () => {
      const expected = -1;
      expect(getYear('')).toBe(expected);
    });
  });
});
