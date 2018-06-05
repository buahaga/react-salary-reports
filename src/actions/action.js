import { RECEIVE_DATA, CHANGE_FILTER, INIT_FILTERS, FILTER_DATA, SET_MONTH_LIMITS } from '../constants/actions';
import getDataByYear from '../data/mock-server';

export const receiveData = (data, year) => ({
  type: RECEIVE_DATA,
  data,
  year,
});

export const changeFilter = value => ({
  type: CHANGE_FILTER,
  value,
});

export const initFilters = filterField => ({
  type: INIT_FILTERS,
  filterField,
});


export const filterData = () => ({
  type: FILTER_DATA,
});

export const setMonthLimits = (startMonth, endMonth) => ({
  type: SET_MONTH_LIMITS,
  startMonth,
  endMonth,
});

export const fetchData = year => dispatch => (
  getDataByYear(year).then((data) => {
    dispatch(receiveData(data, year));
    dispatch(filterData());
  })
);
