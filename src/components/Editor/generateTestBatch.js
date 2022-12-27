export const generateTestBatch = ({ batch, languageId, code }) => {
	const { testSuite, functionName } = batch;
	return testSuite.map(test => {
		const runCode = `console.log(${functionName}(${test.input}))`;
		return {
			language_id: languageId,
			source_code: `${code}; ${runCode}`,
			expected_output: test.expected,
		};
	});
};