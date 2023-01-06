import { all } from 'redux-saga/effects';
import { fetchLanguages } from './reducer.js';
import { createWatcher, createWorker } from './utils.js';
import { fetchLanguagesApi } from '../api/judge0.js';
import { executeCodeSaga } from './sagas/execute.js';
import { submitTest } from './sagas/submitTest.js';

const fetchLanguagesWorker = createWorker(fetchLanguagesApi, fetchLanguages);
const fetchLanguagesWatcher = createWatcher(fetchLanguages, fetchLanguagesWorker);

export default function* () {
	yield all([fetchLanguagesWatcher(), submitTest(), executeCodeSaga()]);
}