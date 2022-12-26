import { all } from 'redux-saga/effects';
import {
	fetchLanguages, executeCode, getASubmission, batchSubmission, getBatchSubmission,
} from './reducer.js';
import { createWatcher, createWorker } from './utils.js';
import { fetchLanguagesApi, createSubmissionsApi, getASubmissionApi, createBatchSubmissionsApi, getBatchSubmissionApi } from '../api/judge0.js';

const fetchLanguagesWorker = createWorker(fetchLanguagesApi, fetchLanguages);
const executeCodeWorker = createWorker(createSubmissionsApi, executeCode);
const getASubmissionWorker = createWorker(getASubmissionApi, getASubmission);
const getBatchSubmissionWorker = createWorker(getBatchSubmissionApi, getBatchSubmission);
const batchSubmissionsWorker = createWorker(createBatchSubmissionsApi, batchSubmission);

const fetchLanguagesWatcher = createWatcher(fetchLanguages, fetchLanguagesWorker);
const executeCodeWatcher = createWatcher(executeCode, executeCodeWorker);
const getASubmissionWatcher = createWatcher(getASubmission, getASubmissionWorker);
const getBatchSubmissionWatcher = createWatcher(getBatchSubmission, getBatchSubmissionWorker);
const batchSubmissionsWatcher = createWatcher(batchSubmission, batchSubmissionsWorker);

export default function* () {
	yield all([fetchLanguagesWatcher(), executeCodeWatcher(), getASubmissionWatcher(), batchSubmissionsWatcher(), getBatchSubmissionWatcher()]);
}