import {
  COURSE_UPDATE,
  CoursActionTypes,
  CourseUpdatePayloadType,
} from './courseTypes';

const initialState: CourseUpdatePayloadType = { buy: 0 };

export const courseReducer = (
  state = initialState,
  action: CoursActionTypes
) => {
  switch (action.type) {
    case COURSE_UPDATE:
      return { ...action.payload };
    default:
      return state;
  }
};
