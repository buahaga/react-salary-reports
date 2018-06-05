import { RECEIVE_DATA, INIT_FILTERS, CHANGE_FILTER, FILTER_DATA, SET_MONTH_LIMITS } from '../constants/actions';
import { filterByMultKeys, getInitialFilterState, filterDataByMonth } from '../filters/filters';

const initialState = {
  data: [],
  fullData: [],
  filters: {},
  filterField: null,
  startMonth: 1,
  endMonth: 12,
};

function filterData(data, filters, tabName) {
  const filterArray = Object.entries(filters)
    .filter(([, value]) => value)
    .map(([key]) => key);
  return filterByMultKeys(data, tabName, filterArray);
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
    {
      const { data, year } = action;
      const currentDate = new Date();
      const endMonth = year === currentDate.getFullYear()
        ? currentDate.getMonth()
        : 12;
      return {
        ...state,
        fullData: data,
        data,
        startMonth: 1,
        endMonth,
      };
    }

    case FILTER_DATA:
    {
      const {
        filters, filterField, fullData, startMonth, endMonth,
      } = state;
      const filteredData = filterDataByMonth(fullData, startMonth, endMonth);
      const data = filterField
        ? filterData(filteredData, filters, filterField)
        : filteredData;
      return {
        ...state,
        data,
      };
    }

    case SET_MONTH_LIMITS: {
      const { startMonth, endMonth } = action;
      return {
        ...state,
        startMonth,
        endMonth,
      };
    }

    case INIT_FILTERS:
    {
      const { fullData } = state;
      const { filterField } = action;
      const filters = filterField
        ? getInitialFilterState(fullData, filterField)
        : {};
      return {
        ...state,
        filters,
        filterField,
      };
    }

    case CHANGE_FILTER:
    {
      const { filters } = state;
      const { value } = action;
      filters[value] = !filters[value];
      return {
        ...state,
        filters,
      };
    }

    default:
      return state;
  }
};

export default dataReducer;
