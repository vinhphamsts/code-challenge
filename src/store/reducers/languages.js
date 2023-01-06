import { createReducer } from '@reduxjs/toolkit';
import { getLanguages } from '../actions/languages.js';
import { transformLanguages } from '../utils.js';

const initialState = {
	languages: [],
};

export default createReducer(initialState, builder => {
	builder
		.addCase(getLanguages.success, (state, action) => {
			state.languages = transformLanguages(action.payload);
		});
});