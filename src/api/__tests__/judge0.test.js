import { getLanguagesApi } from '../judge0.js';
import { describe, test } from 'vitest';

describe('Configuration methods for HTTP request', () => {
	test('createRequest method', async () => {
		 const languages = await getLanguagesApi();
		expect(languages.length).toBeGreaterThan(2)
	});
	
})