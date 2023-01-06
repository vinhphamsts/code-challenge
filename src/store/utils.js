import { createAction } from '@reduxjs/toolkit';

export function createActionSuite(type) {
	return {
		start: createAction(`${type}/start`),
		success: createAction(`${type}/success`),
		error: createAction(`${type}/error`),
	};
}

export const transformLanguages = list => list.map(item => ({
	...item, languageId: item.id, label: item.name, name: item.name.split(/\s+/)[0].toLowerCase(),
}));
