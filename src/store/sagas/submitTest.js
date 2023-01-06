import { call, put, take, delay } from 'redux-saga/effects';
import { getBatchSubmissions, batchSubmissions, getLoading } from '../reducer.js';
import { createBatchSubmissionsApi, getBatchSubmissionsApi } from '../../api/judge0.js';
import { SUBMISSIONS_TIMEOUT } from '../../constants/common.js';

export function* submitTest() {
	while (true) {
		try {
			let batchResult;
			const { payload } = yield take(batchSubmissions.start);

			yield put(getLoading.success(true));

			const tokens = yield call(createBatchSubmissionsApi, payload);

			if (tokens.length > 0) {
				const strToken = tokens.map(item => item.token).join(',');

				yield delay(SUBMISSIONS_TIMEOUT.BATCH);

				batchResult = yield call(getBatchSubmissionsApi, strToken);
			}

			if (batchResult.submissions && batchResult.submissions.length > 0) {
				yield put(getBatchSubmissions.success(batchResult.submissions));
			} else {
				yield put(getBatchSubmissions.error('There is error while submitting tests. Please try again!'));
			}
		} finally {
			yield put(getLoading.success(false));
		}
	}
}