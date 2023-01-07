import { createReducer } from '@reduxjs/toolkit';
import { reset, setLoading } from '../actions/system.js';
import { codeExecution, testSubmission } from '../actions/code.js';

const resetState = {};

const initialState = {
	loading: false,
	codeExecution: resetState,
	testSubmission: resetState,
};

export default createReducer(initialState, builder => {
	builder
		.addCase(setLoading.success, (state, action) => {
			state.loading = action.payload;
		})
		.addCase(codeExecution.success, (state, action) => {
			state.codeExecution = action.payload;
		})
		.addCase(testSubmission.success, (state, action) => {
			state.testSubmission = action.payload;
		})
		.addCase(reset.success, state => {
			state.codeExecution = resetState;
			state.testSubmission = resetState;
		});
});