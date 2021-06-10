import { UPDATE_FILTER } from '../type';

export const updateFilters = filters => ({
  type: UPDATE_FILTER,
  payload: filters
});
