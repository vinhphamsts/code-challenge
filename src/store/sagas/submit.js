import { call, delay, put, take } from 'redux-saga/effects';
import { createBatchSubmissionsApi, getBatchSubmissionsApi } from '../../api/judge0.js';
import { testSubmission } from '../actions/code.js';
import { setLoading } from '../actions/system.js';
import { DEFAULT_ERR_MSG, SUBMISSIONS_TIMEOUT } from '../../constants/common.js';

export function* submitTestSaga() {
	while (true) {
		try {
			let batchResult;
			const { payload } = yield take(testSubmission.start);
			yield put(setLoading.success(true));
			const tokens = yield call(createBatchSubmissionsApi, payload);

			if (tokens.length > 0) {
				const strToken = tokens.map(item => item.token).join(',');
				yield delay(SUBMISSIONS_TIMEOUT.BATCH);
				batchResult = yield call(getBatchSubmissionsApi, strToken);
			}

			if (batchResult.submissions && batchResult.submissions.length > 0) {
				yield put(testSubmission.success(batchResult.submissions));
			} else {
				yield put(testSubmission.error(DEFAULT_ERR_MSG));
			}
		} finally {
			yield put(setLoading.success(false));
		}
	}
}