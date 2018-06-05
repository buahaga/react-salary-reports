import { averageSalary, calculateAverageSalary, agregateSalaryByKey, getMaxSalary } from './salaryHelpers';

describe('salaryHelpers', () => {
  let data;

  beforeEach(() => {
    data = [
      {
        id: 1,
        salary: 300,
        city: 'Vitebsk',
        qualification: 'D',
        date: '02/05/2018',
        tech: 'JS',
      }, {
        id: 2,
        salary: 400,
        city: 'Gomel',
        qualification: 'S',
        date: '02/24/2018',
        tech: 'Ruby',
      }, {
        id: 3,
        salary: 500,
        city: 'Grodno',
        qualification: 'J',
        date: '12/29/2018',
        tech: 'Java',
      }, {
        id: 4,
        salary: 100,
        city: 'Minsk',
        qualification: 'S',
        date: '06/02/2018',
        tech: 'JS',
      }, {
        id: 5,
        salary: 200,
        city: 'Gomel',
        qualification: 'S',
        date: '07/25/2017',
        tech: 'Python',
      }, {
        id: 6,
        salary: 100,
        city: 'Brest',
        qualification: 'D',
        date: '10/18/2017',
        tech: 'Ruby',
      }, {
        id: 7,
        salary: 400,
        city: 'Mogilev',
        qualification: 'D',
        date: '08/28/2017',
        tech: 'JS',
      }, {
        id: 8,
        salary: 100,
        city: 'Minsk',
        qualification: 'S',
        date: '06/14/2017',
        tech: 'R',
      }, {
        id: 9,
        salary: 100,
        city: 'Brest',
        qualification: 'J',
        date: '02/15/2017',
        tech: 'Python',
      }, {
        id: 10,
        salary: 100,
        city: 'Grodno',
        qualification: 'S',
        date: '04/30/2017',
        tech: 'Ruby',
      },
    ];
  });

  describe('averageSalary', () => {
    it('should return averagesalary per year', () => {
      const expected = 230;
      expect(averageSalary(data)).toBe(expected);
    });

    it('should return 0', () => {
      const expected = 0;
      expect(averageSalary([])).toBe(expected);
    });
  });

  describe('calculate average salary per key', () => {
    it('is exist', () => {
      expect(calculateAverageSalary).toBeDefined();
    });

    it('should return correct chart data', () => {
      const expected = {
        1: {
          qty: 0,
          sum: 0,
        },
        2: {
          qty: 3,
          sum: 800,
        },
        3: {
          qty: 0,
          sum: 0,
        },
        4: {
          qty: 1,
          sum: 100,
        },
        5: {
          qty: 0,
          sum: 0,
        },
        6: {
          qty: 2,
          sum: 200,
        },
        7: {
          qty: 1,
          sum: 200,
        },
        8: {
          qty: 1,
          sum: 400,
        },
        9: {
          qty: 0,
          sum: 0,
        },
        10: {
          qty: 1,
          sum: 100,
        },
        11: {
          qty: 0,
          sum: 0,
        },
        12: {
          qty: 1,
          sum: 500,
        },
      };
      expect(calculateAverageSalary(data)).toEqual(expected);
    });

    it('should return empty data', () => {
      const expected = {
        1: {
          qty: 0,
          sum: 0,
        },
        2: {
          qty: 0,
          sum: 0,
        },
        3: {
          qty: 0,
          sum: 0,
        },
        4: {
          qty: 0,
          sum: 0,
        },
        5: {
          qty: 0,
          sum: 0,
        },
        6: {
          qty: 0,
          sum: 0,
        },
        7: {
          qty: 0,
          sum: 0,
        },
        8: {
          qty: 0,
          sum: 0,
        },
        9: {
          qty: 0,
          sum: 0,
        },
        10: {
          qty: 0,
          sum: 0,
        },
        11: {
          qty: 0,
          sum: 0,
        },
        12: {
          qty: 0,
          sum: 0,
        },
      };

      const data = [];
      expect(calculateAverageSalary(data)).toEqual(expected);
    });
  });

  describe('agregateSalaryByKey', () => {
    it('should group data', () => {
      const expected = {
        JS: 267,
        Ruby: 200,
        Java: 500,
        Python: 150,
        R: 100,
      };
      expect(agregateSalaryByKey(data, 'tech')).toEqual(expected);
    });
  });

  describe('getMaxSalary', () => {
    it('is exist', () => {
      expect(getMaxSalary).toBeDefined();
    });

    it('should return 500', () => {
      const expected = 500;
      const data = [
        {
          id: 1,
          salary: 300,
          city: 'Vitebsk',
          qualification: 'D',
          date: '02/05/2018',
          tech: 'JS',
        }, {
          id: 2,
          salary: 400,
          city: 'Gomel',
          qualification: 'S',
          date: '02/24/2018',
          tech: 'Ruby',
        }, {
          id: 3,
          salary: 500,
          city: 'Grodno',
          qualification: 'J',
          date: '12/29/2018',
          tech: 'Java',
        }, {
          id: 4,
          salary: 100,
          city: 'Minsk',
          qualification: 'S',
          date: '06/02/2018',
          tech: 'JS',
        }, {
          id: 5,
          salary: 200,
          city: 'Gomel',
          qualification: 'S',
          date: '07/25/2017',
          tech: 'Python',
        }, {
          id: 6,
          salary: 100,
          city: 'Brest',
          qualification: 'D',
          date: '10/18/2017',
          tech: 'Ruby',
        }, {
          id: 7,
          salary: 400,
          city: 'Mogilev',
          qualification: 'D',
          date: '08/28/2017',
          tech: 'JS',
        }, {
          id: 8,
          salary: 100,
          city: 'Minsk',
          qualification: 'S',
          date: '06/14/2017',
          tech: 'R',
        }, {
          id: 9,
          salary: 100,
          city: 'Brest',
          qualification: 'J',
          date: '02/15/2017',
          tech: 'Python',
        }, {
          id: 10,
          salary: 100,
          city: 'Grodno',
          qualification: 'S',
          date: '04/30/2017',
          tech: 'Ruby',
        },
      ];
      expect(getMaxSalary(data)).toBe(expected);
    });

    it('should return 0 if data is empty', () => {
      const expected = 0;
      const data = [];
      expect(getMaxSalary([])).toBe(expected);
    });
  });
});
