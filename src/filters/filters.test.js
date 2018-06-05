import {
  filterByYear,
  filterByKey,
  filterByMultKeys,
  filterByMonth,
  getInitialFilterState,
  filterDataByMonth,
} from './filters';

describe('filters', () => {
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

  describe('filterByYear', () => {
    it('should return filtered data by year', () => {
      const expected = [
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
        },
      ];
      expect(filterByYear(data)).toEqual(expected);
    });

    it('should return empty array', () => {
      const expected = [];
      expect(filterByYear([])).toEqual(expected);
    });
  });

  describe('filterByMonth', () => {
    it('should return filter by year and month', () => {
      const expected = [
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
        },
      ];

      expect(filterByMonth(data, 2018, 2)).toEqual(expected);
    });
  });

  describe('filterByKey', () => {
    it('should return JS technology data', () => {
      const expected = [
        {
          id: 1,
          salary: 300,
          city: 'Vitebsk',
          qualification: 'D',
          date: '02/05/2018',
          tech: 'JS',
        }, {
          id: 4,
          salary: 100,
          city: 'Minsk',
          qualification: 'S',
          date: '06/02/2018',
          tech: 'JS',
        }, {
          id: 7,
          salary: 400,
          city: 'Mogilev',
          qualification: 'D',
          date: '08/28/2017',
          tech: 'JS',
        },
      ];
      expect(filterByKey(data, 'tech', 'JS')).toEqual(expected);
    });

    it('should return empty array', () => {
      const expected = [];
      expect(filterByKey([], 'tech', 'JS')).toEqual(expected);
    });

    it('should return empty array to', () => {
      const expected = [];
      expect(filterByKey(data, 'tech', 'C#')).toEqual(expected);
    });

    it('should return unfiltered data', () => {
      expect(filterByKey(data, '', 'JS')).toEqual(data);
    });

    it('should return unfiltered data to', () => {
      expect(filterByKey(data, 'tech', '')).toEqual(data);
    });
  });

  describe('filterByMultKeys', () => {
    it('should return juniors and developers', () => {
      const expected = [
        {
          id: 1,
          salary: 300,
          city: 'Vitebsk',
          qualification: 'D',
          date: '02/05/2018',
          tech: 'JS',
        }, {
          id: 3,
          salary: 500,
          city: 'Grodno',
          qualification: 'J',
          date: '12/29/2018',
          tech: 'Java',
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
          id: 9,
          salary: 100,
          city: 'Brest',
          qualification: 'J',
          date: '02/15/2017',
          tech: 'Python',
        },
      ];

      const values = ['J', 'D'];
      const key = 'qualification';

      expect(filterByMultKeys(data, key, values)).toEqual(expected);
    });

    it('should return unfiltered data', () => {
      const values = [];
      const key = 'qualification';

      expect(filterByMultKeys(data, key, values)).toEqual(data);
    });

    it('should return unfiltered data to', () => {
      const values = ['J', 'D'];
      const key = '';

      expect(filterByMultKeys(data, key, values)).toEqual(data);
    });
  });

  describe('getInitialFilterState', () => {
    it('is exist', () => {
      expect(getInitialFilterState).toBeDefined();
    });
    it('should return correct filter array', () => {
      const expected = {
        J: true,
        D: true,
        S: true,
      };
      const propertyName = 'qualification';
      expect(getInitialFilterState(data, propertyName)).toEqual(expected);
    });

    it('should return empty object if array is empty', () => {
      const expected = {};
      const data = [];
      const propertyName = 'qualification';
      expect(getInitialFilterState(data, propertyName)).toEqual(expected);
    });

    it('should return empty object if property name is undefined', () => {
      const expected = {};
      const propertyName = '';
      expect(getInitialFilterState(data, propertyName)).toEqual(expected);
    });
  });

  describe('filterDataByMonth', () => {
    it('is exist', () => {
      expect(filterDataByMonth).toBeDefined();
    });

    it('should return full data if month range equal [0,12]', () => {
      const left = 0;
      const right = 12;
      const expected = data;
      expect(filterDataByMonth(data, left, right)).toEqual(expected);
    });

    it('should return correct data if left more than right range', () => {
      const left = 12;
      const right = 0;
      const expected = data;
      expect(filterDataByMonth(data, left, right)).toEqual(expected);
    });

    it('should return data filtered by month', () => {
      const left = 10;
      const right = 10;
      const expected = [
        {
          city: 'Brest',
          date: '10/18/2017',
          id: 6,
          qualification: 'D',
          salary: 100,
          tech: 'Ruby',
        },
      ];
      expect(filterDataByMonth(data, left, right)).toEqual(expected);
    });
  });
});
