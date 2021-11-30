import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initinalFilterState = '';
export const filteredReducer = createReducer(initinalFilterState, {
  [actions.changeFilter]: (_, { payload }) => payload,
});
