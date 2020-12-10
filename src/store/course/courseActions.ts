import {
  CourseUpdatePayloadType,
  COURSE_FETCH,
  COURSE_UPDATE,
} from './courseTypes';

export const courseFetch = () => ({ type: COURSE_FETCH });

export const courseUpdate = (payload: CourseUpdatePayloadType) => ({
  type: COURSE_UPDATE,
  payload,
});
