import { createReducer } from '@reduxjs/toolkit';
import { createActionSuite } from './utils.js';

export const fetchLanguages = createActionSuite('fetch_languages');
export const executeCode = createActionSuite('execute_code');
export const batchSubmissions = createActionSuite('batch_submissions');
export const getASubmission = createActionSuite('get_a_submission');
export const getBatchSubmissions = createActionSuite('get_batch_submissions');
export const getLoading = createActionSuite('get_loading');
export const resetSubmissions = createActionSuite('reset_submissions');

const initialASubmission = {
	status: {
		id: null,
		description: '',
	},
};

const initialBatchSubmission = {
	success: null,
	error: null,
};

const initialState = {
	getLoading: {
		success: {
			value: false,
		}, error: null,
	},
	fetchLanguages: {
		success: [], error: null,
	},
	executionCode: {
		success: {}, error: null,
	},
	batchSubmissions: {
		success: null,
		error: null,
	},
	getASubmission: {
		success: {
			status: {
				id: null,
				description: '',
			},
		}, error: null,
	},
	getBatchSubmissions: {
		success: null,
		error: null,
	},
};

const transformLanguages = list => list.map(item => ({
	...item, languageId: item.id, label: item.name, name: item.name.split(/\s+/)[0].toLowerCase(),
}));

const reducer = createReducer(initialState, builder => {
	builder
		.addCase(executeCode.success, (state, action) => {
			state.executionCode.success = action.payload;
		})
		.addCase(fetchLanguages.success, (state, action) => {
			state.fetchLanguages.success = transformLanguages(action.payload);
		})
		.addCase(getASubmission.success, (state, action) => {
			state.getASubmission.success = action.payload;
		})
		.addCase(getASubmission.error, (state, action) => {
			state.getASubmission.error = action.payload;
			state.batchSubmissions.success = null;
		})
		.addCase(getLoading.success, (state, action) => {
			state.getLoading.success.value = action.payload;
		})
		.addCase(batchSubmissions.success, (state, action) => {
			state.batchSubmissions.success = action.payload ?
				action.payload.map(item => item.token).join(',') : '';
			state.getASubmission.success = initialASubmission;
		})
		.addCase(getBatchSubmissions.success, (state, action) => {
			state.getBatchSubmissions.success = action.payload;
		})
		.addCase(resetSubmissions.success, (state) => {
			state.getBatchSubmissions = initialBatchSubmission;
			state.batchSubmissions = initialBatchSubmission;
			state.getASubmission.success = initialASubmission;
		})
	;
});

export default reducer;