import groupByProp from './arrayHelpers';

describe('arrayHelpers', () => {
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
      },
    ];
  });

  describe('groupByProp', () => {
    it('should return grouped data', () => {
      const expected = {
        JS: [
          {
            city: 'Vitebsk',
            date: '02/05/2018',
            id: 1,
            qualification: 'D',
            salary: 300,
            tech: 'JS',
          }, {
            city: 'Minsk',
            date: '06/02/2018',
            id: 4,
            qualification: 'S',
            salary: 100,
            tech: 'JS',
          },
        ],
        Java: [
          {
            city: 'Grodno',
            date: '12/29/2018',
            id: 3,
            qualification: 'J',
            salary: 500,
            tech: 'Java',
          },
        ],
        Python: [
          {
            city: 'Gomel',
            date: '07/25/2017',
            id: 5,
            qualification: 'S',
            salary: 200,
            tech: 'Python',
          },
        ],
        Ruby: [
          {
            city: 'Gomel',
            date: '02/24/2018',
            id: 2,
            qualification: 'S',
            salary: 400,
            tech: 'Ruby',
          },
        ],
      };
      expect(groupByProp(data, 'tech')).toEqual(expected);
    });
  });
});
