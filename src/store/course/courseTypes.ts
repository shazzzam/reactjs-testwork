export const COURSE_FETCH = 'COURSE_FETCH';
export const COURSE_UPDATE = 'COURSE_UPDATE';

interface CourseFetchAction {
  type: typeof COURSE_FETCH;
}

export interface CourseUpdatePayloadType {
  buy: number;
}

interface CourseUpdateAction {
  type: typeof COURSE_UPDATE;
  payload: CourseUpdatePayloadType;
}

export type CoursActionTypes = CourseUpdateAction | CourseFetchAction;
