import { all } from 'redux-saga/effects';
import {
	fetchLanguages, batchSubmission, getBatchSubmission,
} from './reducer.js';
import { createWatcher, createWorker } from './utils.js';
import {
	fetchLanguagesApi, createBatchSubmissionsApi, getBatchSubmissionApi,
} from '../api/judge0.js';
import { executeCodeSaga } from './sagas/execution.js';

const fetchLanguagesWorker = createWorker(fetchLanguagesApi, fetchLanguages);
const getBatchSubmissionWorker = createWorker(getBatchSubmissionApi, getBatchSubmission);
const batchSubmissionsWorker = createWorker(createBatchSubmissionsApi, batchSubmission);

const fetchLanguagesWatcher = createWatcher(fetchLanguages, fetchLanguagesWorker);
const getBatchSubmissionWatcher = createWatcher(getBatchSubmission, getBatchSubmissionWorker);
const batchSubmissionsWatcher = createWatcher(batchSubmission, batchSubmissionsWorker);

export default function* () {
	yield all([fetchLanguagesWatcher(),
	           batchSubmissionsWatcher(),
	           getBatchSubmissionWatcher(),
	           executeCodeSaga()]);
}