import { all } from 'redux-saga/effects';
import { executeCodeSaga } from './execute.js';
import { submitTestSaga } from './submit.js';
import { getLanguagesSaga } from './languages.js';

export default function* () {
	yield all([getLanguagesSaga(), submitTestSaga(), executeCodeSaga()]);
}