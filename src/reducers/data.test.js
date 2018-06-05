import data from './data';
import * as constants from '../constants/actions';
import * as filters from '../filters/filters';

describe('data reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      fullData: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      data: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      filters: {
        1: true,
        2: true,
        3: true,
      },
      filterField: 'name',
      startMonth: 1,
      endMonth: 12,
    };
  });

  it('should return the initial state', () => {
    const expected = {
      data: [],
      filterField: null,
      filters: {},
      fullData: [],
      startMonth: 1,
      endMonth: 12,
    };
    expect(data(undefined, {})).toEqual(expected);
  });

  it('should handle RECEIVE_DATA', () => {
    const expected = {
      fullData: [
        1, 2, 3,
      ],
      data: [
        1, 2, 3,
      ],
      filters: {
        1: true,
        2: true,
        3: true,
      },
      filterField: 'name',
      startMonth: 1,
      endMonth: 12,
    };
    const dataArray = [1, 2, 3];
    filters.filterByMultKeys = jest.fn(() => dataArray);
    const action = {
      type: constants.RECEIVE_DATA,
      data: dataArray,
    };
    expect(data(state, action)).toEqual(expected);
  });

  it('should handle INIT_FILTERS', () => {
    const expected = {
      fullData: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      data: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      filters: {
        1: true,
        2: true,
        3: true,
      },
      filterField: 'name',
      startMonth: 1,
      endMonth: 12,
    };
    const filterField = 'name';
    const action = {
      type: constants.INIT_FILTERS,
      filterField,
    };
    expect(data(state, action)).toEqual(expected);
  });

  it('should handle CHANGE_FILTER', () => {
    const expected = {
      fullData: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      data: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      filters: {
        1: false,
        2: true,
        3: true,
      },
      filterField: 'name',
      startMonth: 1,
      endMonth: 12,
    };
    const value = 1;
    filters.filterByMultKeys = jest.fn(() => []);
    const action = {
      type: constants.CHANGE_FILTER,
      value,
    };

    expect(data(state, action)).toEqual(expected);
  });

  it('should handle FILTER_DATA', () => {
    const expected = {
      fullData: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      data: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      filters: {
        1: true,
        2: true,
        3: true,
      },
      filterField: 'name',
      startMonth: 1,
      endMonth: 12,
    };
    filters.filterDataByMonth = jest.fn(() => state.data);
    filters.filterByMultKeys = jest.fn(() => state.data);
    const left = 1;
    const right = 12;
    const action = {
      type: constants.FILTER_DATA,
      left,
      right,
    };
    expect(data(state, action)).toEqual(expected);
  });

  it('should handle SET_MONTH_LIMITS', () => {
    const expected = {
      fullData: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      data: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      filters: {
        1: true,
        2: true,
        3: true,
      },
      filterField: 'name',
      startMonth: 1,
      endMonth: 12,
    };
    const startMonth = 1;
    const endMonth = 12;
    const action = {
      type: constants.SET_MONTH_LIMITS,
      startMonth,
      endMonth,
    };
    expect(data(state, action)).toEqual(expected);
  });

  it('should handle FILTER_DATA_BY_MONTH', () => {
    const expected = {
      data: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      endMonth: 12,
      filterField: 'name',
      filters: {
        1: true,
        2: true,
        3: true,
      },
      fullData: [
        {
          name: 1,
        }, {
          name: 2,
        }, {
          name: 3,
        }, {
          name: 1,
        },
      ],
      startMonth: 1,
    };
    const action = {
      type: constants.FILTER_DATA_BY_MONTH,
    };
    expect(data(state, action)).toEqual(expected);
  });
});
