import { call, put, take } from 'redux-saga/effects';
import { getLanguages } from '../actions/languages.js';
import { setLoading } from '../actions/system.js';
import { getLanguagesApi } from '../../api/judge0.js';
import { DEFAULT_ERR_MSG } from '../../constants/common.js';

export function* getLanguagesSaga() {
	while (true) {
		try {
			yield take(getLanguages.start);
			yield put(setLoading.success(true));
			const result = yield call(getLanguagesApi);

			if (result && result.length) {
				yield put(getLanguages.success(result));
			} else {
				yield put(getLanguages.error(DEFAULT_ERR_MSG));
			}
		} catch (e) {
			yield put(getLanguages.error(e.message));
		} finally {
			yield put(setLoading.success(false));
		}
	}
}