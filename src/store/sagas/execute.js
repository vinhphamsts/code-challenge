import { call, delay, put, take } from 'redux-saga/effects';
import { createSubmissionApi, getASubmissionApi } from '../../api/judge0.js';
import { codeExecution } from '../actions/code.js';
import { setLoading } from '../actions/system.js';
import { DEFAULT_ERR_MSG, SUBMISSIONS_TIMEOUT } from '../../constants/common.js';

export function* executeCodeSaga() {
	while (true) {
		try {
			let executeResult;
			const action = yield take(codeExecution.start);
			yield put(setLoading.success(true));
			const { token } = yield call(createSubmissionApi, action.payload) || {};

			if (token) {
				yield delay(SUBMISSIONS_TIMEOUT.SINGLE);
				executeResult = yield call(getASubmissionApi, token);
			}

			if (executeResult) {
				yield put(codeExecution.success(executeResult));
			} else {
				yield put(codeExecution.error(DEFAULT_ERR_MSG));
			}
		} finally {
			yield put(setLoading.success(false));
		}
	}
}