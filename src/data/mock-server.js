import data from './mock-data';
import { filterByYear } from '../filters/filters';

const getDataByYear = year => new Promise(resolve => resolve(filterByYear(data, year)));

export default getDataByYear;
