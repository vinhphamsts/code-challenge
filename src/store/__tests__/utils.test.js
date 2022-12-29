import { createActionSuite, createWatcher, createWorker } from '../utils.js';
import { beforeAll } from 'vitest';

const testApi = value => new Promise((resolve, reject) => {
	if (value) {
		resolve('Test should work as expected!');
	}
	reject('Test should failed!')
})
describe('Verifying Utils methods', () => {
	let myAction, myWatcher, myWorker;
	const GeneratorFunction = function*(){}.constructor;

	beforeAll(() => {
	})

	test('createActionSuite method', () => {
		myAction = createActionSuite('random_action')
		expect(myAction.start.toString()).toBe('random_action/start')
		expect(myAction.success.toString()).toBe('random_action/success')
		expect(myAction.error.toString()).toBe('random_action/error')
	});

	test('createWorker', () => {
		myWorker = createWorker(testApi, myAction);
		expect(myWorker instanceof GeneratorFunction).toBeTruthy();

	});

	test('createWatcher method', () => {
		myWatcher = createWatcher(myAction, 'some_worker');
		expect(myWatcher instanceof GeneratorFunction).toBeTruthy();
		// console.log(myWatcher().next())
		// console.log(myWatcher().next())

	});

})