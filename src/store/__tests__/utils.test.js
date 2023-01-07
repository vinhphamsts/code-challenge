import { createActionSuite } from '../utils.js';

describe('Verifying Utils methods', () => {
	let myAction;

	test('createActionSuite method', () => {
		myAction = createActionSuite('random_action');
		expect(myAction.start.toString()).toBe('random_action/start');
		expect(myAction.success.toString()).toBe('random_action/success');
		expect(myAction.error.toString()).toBe('random_action/error');
	});
});