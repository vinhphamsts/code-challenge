import { createAction } from '@reduxjs/toolkit';

export function createActionSuite(type) {
	return {
		start: createAction(`${type}/start`),
		success: createAction(`${type}/success`),
		error: createAction(`${type}/error`),
	};
}
