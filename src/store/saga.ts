import { takeEvery, put, call } from 'redux-saga/effects';

import { COURSE_FETCH } from './course/courseTypes';
import { loaderShow, loaderHide } from './loader/loaderActions';
import { courseUpdate } from './course/courseActions';
import { CourseType } from '../types';

export function* sagaWatcher() {
  yield takeEvery(COURSE_FETCH, sagaWorker);
}

function* sagaWorker() {
  yield put(loaderShow());
  const data = yield call(fetchCourse);
  yield put(courseUpdate(data));
  yield put(loaderHide());
}

const fetchCourse = async () => {
  const response = await fetch(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
  );
  const data = await response.json();
  const USDCourse = data.filter(
    (course: CourseType) => course.ccy === 'USD'
  )[0];
  return {
    buy: parseFloat(USDCourse.buy),
    sale: parseFloat(USDCourse.sale),
  };
};
