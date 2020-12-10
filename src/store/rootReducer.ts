import { combineReducers } from 'redux';
import { courseReducer } from './course/courseReducer';

import { loaderReducer } from './loader/loaderReducer';

export const rootReducer = combineReducers({
  loading: loaderReducer,
  course: courseReducer,
});
