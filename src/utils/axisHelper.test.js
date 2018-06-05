import setAxisSteps from './axisHelper';

describe('axisHelper', () => {
  let data;

  describe('axisHelperTest', () => {
    it('should return array of step values', () => {
      const expected = [1400, 900, 500];
      expect(setAxisSteps(1420, 3)).toEqual(expected);
    });
  });
});
