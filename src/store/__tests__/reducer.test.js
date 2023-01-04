import reducer, {
	getLoading,
	executeCode,
	fetchLanguages,
	getASubmission,
	getBatchSubmission,
	batchSubmission,
	resetSubmissions,
} from '../reducer.js';
import { describe, test, expect } from 'vitest';

describe('App reducer', () => {
	let initState = {
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
			},
			error: null,
		},
		getBatchSubmission: {
			success: null,
			error: null,
		},
	};

	test('should return the initial state', () => {

		expect(reducer(undefined, {})).toEqual(initState);
	});

	test('should show loading', () => {
		expect(reducer(initState, getLoading.success(true))).toEqual({
			...initState,
			getLoading: {
				success: {
					value: true,
				},
				error: null,
			},
		});
	});

	test('should execute code', () => {
		const token = '0a65662f-226a-48e5-9e18-743b5279ac7b';
		expect(reducer(initState, executeCode.success({ token }))).toEqual({
			...initState,
			executionCode: {
				success: {
					token,
				},
				error: null,
			},
		});
	});

	test('should fetch languages', () => {
		const languages = [
			{
				'id': 45,
				'name': 'Assembly (NASM 2.14.02)',
			},
			{
				'id': 46,
				'name': 'Bash (5.0.0)',
			},
			{
				'id': 47,
				'name': 'Basic (FBC 1.07.1)',
			}];
		const transformLanguages = languages.map(item => ({
			...item, languageId: item.id, label: item.name, name: item.name.split(/\s+/)[0].toLowerCase(),
		}));
		expect(reducer(initState, fetchLanguages.success(languages))).toEqual({
			...initState,
			fetchLanguages: {
				success: transformLanguages,
				error: null,
			},
		});
	});

	test('should get a submission result successful', () => {
		const submissionResult = {
			status: {
				id: 3,
				description: 'Accepted',
			},
		};

		expect(reducer(initState, getASubmission.success(submissionResult))).toEqual({
			...initState,
			getASubmission: {
				success: {
					...submissionResult,
				},
				error: null,
			},
		});
	});

	test('should get a submission result error', () => {
		expect(reducer(initState, getASubmission.error('Code is queuing'))).toEqual({
			...initState,
			getASubmission: {
				success: { ...initState.getASubmission.success },
				error: 'Code is queuing',
			},
		});
	});

	test('should batch submission', () => {
		const token1 = '724359dd-dd64-4a23-8666-1fff09db6816';
		const token2 = 'f16e686f-ed48-47d7-a2bf-d56e91d9195a';
		const batchToken = [{ token: token1 }, { token: token2 }];

		expect(reducer(initState, batchSubmission.success(batchToken))).toEqual({
			...initState,
			batchSubmission: {
				success: `${token1},${token2}`,
				error: null,
			},
			getASubmission: { ...initState.getASubmission },
		});
		// in case error
		expect(reducer(initState, batchSubmission.success(null))).toEqual({
			...initState,
			batchSubmission: {
				success: '',
				error: null,
			},
			getASubmission: { ...initState.getASubmission },
		});
	});

	test('should get batch submission result', () => {
		const batchResult = {
			submissions: [
				{
					status: {
						id: 3,
						description: 'Accepted',
					},
				},
				{
					status: {
						id: 3,
						description: 'Accepted',
					},
				},
			],
		};

		expect(reducer(initState, getBatchSubmission.success(batchResult))).toEqual({
			...initState,
			getBatchSubmission: {
				success: batchResult.submissions,
				error: null,
			},
		});
	});

	test('should reset the submission', () => {
		expect(reducer(initState, resetSubmissions.success())).toEqual(initState);
	})
});