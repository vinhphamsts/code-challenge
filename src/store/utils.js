import { createAction } from '@reduxjs/toolkit';
import { takeLatest, put, call } from 'redux-saga/effects';

export function createActionSuite(type) {
	return {
		start: createAction(`${type}/start`),
		success: createAction(`${type}/success`),
		error: createAction(`${type}/error`),
	};
}

export const createWatcher = (action, worker) => function* () {
	yield takeLatest(action.start.toString(), worker);
};

export const createWorker = (api, reduxAction) => function* (action) {
	try {
		const result = yield call(api, action.payload);
		yield put(reduxAction.success(result));
	} catch (e) {
		yield put(reduxAction.error(e));
	}
};
