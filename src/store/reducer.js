import { createReducer } from '@reduxjs/toolkit';
import { createActionSuite } from './utils.js';

export const fetchLanguages = createActionSuite('fetch_languages');
export const executeCode = createActionSuite('execute_code');
export const batchSubmission = createActionSuite('batch_submission');
export const getASubmission = createActionSuite('get_a_submission');
export const getBatchSubmission = createActionSuite('get_batch_submission');
export const getLoading = createActionSuite('get_loading');
export const resetSubmissions = createActionSuite('reset_submissions');

const initialASubmission = {
	status: {
		id: null,
		description: '',
	},
	error: null,
};

const initialBatchSubmission = {
	success: null,
	error: null,
}
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
	batchSubmission: {
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
	getBatchSubmission: {
		success: null,
		error: null,
	}
};

const reducer = createReducer(initialState, builder => {
	builder
		.addCase(executeCode.success, (state, action) => {
			state.executionCode.success = action.payload;
		})
		.addCase(fetchLanguages.success, (state, action) => {
			state.fetchLanguages.success = action.payload.map(item => ({
				...item, languageId: item.id, label: item.name, name: item.name.split(/\s+/)[0].toLowerCase(),
			}));
		})
		.addCase(getASubmission.success, (state, action) => {
			state.getASubmission.success = action.payload;
		})
		.addCase(getASubmission.error, (state, action) => {
			state.getASubmission.error = action.payload;
			state.batchSubmission.success = null;
		})
		.addCase(getLoading.success, (state, action) => {
			state.getLoading.success.value = action.payload;
		})
		.addCase(batchSubmission.success, (state, action) => {
			state.batchSubmission.success = action.payload ?
				action.payload.map(item => item.token).join(',') : '';
			state.getASubmission.success = initialASubmission;
		})
		.addCase(getBatchSubmission.success, (state, action) => {
			state.getBatchSubmission.success = action.payload?.submissions;
		})
		.addCase(resetSubmissions.success, (state) => {
			state.getBatchSubmission = initialBatchSubmission;
			state.batchSubmission = initialBatchSubmission;
			state.getASubmission.success = initialASubmission;
		})
	;
});

export default reducer;