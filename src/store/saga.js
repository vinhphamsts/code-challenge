import {
	fetchLanguages, executeCode, getASubmission,
} from './reducer.js';
import { getLanguagesApi, createSubmissionsApi, getASubmissionApi } from '../api/judge0.js';

import { call, put, takeLatest, all } from 'redux-saga/effects';

// workers
function* fetchLanguagesWorker() {
	try {
		const languages = yield call(getLanguagesApi);
		yield put(fetchLanguages.success(languages));
	} catch (e) {
		console.error(e.message);
	}
}

function* executeCodeWorker(action) {
	try {
		const result = yield call(createSubmissionsApi, action.payload);
		yield put(executeCode.success(result));
	} catch (e) {
		yield put(executeCode.error(e.message))
	}
}

function* getASubmissionWorker(action) {
	try {
		const result = yield call(getASubmissionApi, action.payload);
		yield put(getASubmission.success(result));
	} catch (e) {
		yield put(getASubmission.error(e.message))
	}
}

// watchers
function* fetchLanguagesWatcher() {
	yield takeLatest(fetchLanguages.start.toString(), fetchLanguagesWorker);
}

function* executeCodeWatcher() {
	yield takeLatest(executeCode.start.toString(), executeCodeWorker);
}

function* getASubmissionWatcher() {
	yield takeLatest(getASubmission.start.toString(), getASubmissionWorker);
}

export default function* () {
	yield all([fetchLanguagesWatcher(), executeCodeWatcher(), getASubmissionWatcher()]);
}