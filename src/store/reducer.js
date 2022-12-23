import { createReducer, createAction } from '@reduxjs/toolkit';

function createActionSuite(type) {
	return {
		start: createAction(`${type}/start`),
		success: createAction(`${type}/success`),
		error: createAction(`${type}/error`),
	};
}

export const fetchLanguages = createActionSuite('fetch_languages');
export const executeCode = createActionSuite('execute_code');
export const getASubmission = createActionSuite('get_a_submission');

const initialState = {
	fetchLanguages: {
		success: [], error: null,
	}, getASubmission: {
		success: {}, error: null,
	}, executionCode: {
		success: {}, error: null,
	},
};

const codeReducer = createReducer(initialState, builder => {
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
		});
});

export default codeReducer;