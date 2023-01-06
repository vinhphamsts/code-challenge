import { take, call, put, delay } from 'redux-saga/effects';
import { executeCode, getASubmission, getLoading } from '../reducer.js';
import { createSubmissionsApi, getASubmissionApi } from '../../api/judge0.js';
import { SUBMISSIONS_TIMEOUT } from '../../constants/common.js';

export function* executeCodeSaga() {
	while (true) {
		try {
			let executeResult;
			const action = yield take(executeCode.start);

			yield put(getLoading.success(true));

			const { token } = yield call(createSubmissionsApi, action.payload) || {};

			if (token) {
				yield delay(SUBMISSIONS_TIMEOUT.SINGLE);

				executeResult = yield call(getASubmissionApi, token);
			} else {
				yield put(getASubmission.error('No token found! Please try again!'));
			}

			if (executeResult) {
				yield put(getASubmission.success(executeResult));
			} else {
				yield put(getASubmission.error('Code execution error! Please try again!'));
			}
		} finally {
			yield put(getLoading.success(false));
		}
	}
}