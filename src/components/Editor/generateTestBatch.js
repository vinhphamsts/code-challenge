export const generateTestBatch = ({ batch, languageId, code }) => {
	const { testSuite, functionName } = batch;
	return testSuite.map(test => {
		return {
			language_id: languageId,
			source_code: `${code}; console.log(${functionName}(${test.input}) === ${test.expected});`,
		};
	});
};