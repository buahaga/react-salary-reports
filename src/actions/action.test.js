import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './action';
import * as constants from '../constants/actions';
import * as getDataByYear from '../data/mock-server';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions test', () => {
  describe('actions', () => {
    it('should create action to recive data', () => {
      const data = [1, 2, 3];
      const expected = {
        type: constants.RECEIVE_DATA,
        data,
      };
      expect(actions.receiveData(data)).toEqual(expected);
    });

    it('should create action to change filter', () => {
      const value = 1;
      const expected = {
        type: constants.CHANGE_FILTER,
        value,
      };
      expect(actions.changeFilter(value)).toEqual(expected);
    });

    it('should create action to initialize filters', () => {
      const propertyName = 'name';
      const expected = {
        filterField: 'name',
        type: constants.INIT_FILTERS,
      };
      expect(actions.initFilters(propertyName)).toEqual(expected);
    });

    it('should create action to set month filter', () => {
      const startMonth = 1;
      const endMonth = 12;
      const expected = {
        type: constants.SET_MONTH_LIMITS,
        startMonth,
        endMonth,
      };
      expect(actions.setMonthLimits(startMonth, endMonth)).toEqual(expected);
    });
  });

  describe('async actions', () => {
    it('creates RECEIVE_DATA when fetching data has been done', () => {
      const year = 2018;
      const store = mockStore({
        data: [],
        filteredData: [],
        filters: {},
        propertyName: null,
      });
      const expected = [
        { type: 'RECEIVE_DATA', data: [], year: 2018 },
        { type: 'FILTER_DATA' },
      ];
      getDataByYear.default = jest.fn(() => Promise.all([]));
      const action = {
        type: constants.FETCH_DATA,
        year,
      };

      store.dispatch(actions.fetchData(year)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
