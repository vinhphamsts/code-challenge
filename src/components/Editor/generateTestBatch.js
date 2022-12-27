export const generateTestBatch = ({ batch, languageId, code }) => {
	const { testSuite, functionName } = batch;
	return testSuite.map(test => {
		const isComplexData = Array.isArray(test.expected) || Object.keys(test.expected).length > 0;
		const assertion = isComplexData ?
			`console.log(JSON.stringify(${functionName}(${test.input})) === JSON.stringify(${test.expected}))`
			: `console.log(${functionName}(${test.input}) === ${test.expected})`;
		return {
			language_id: languageId,
			source_code: `${code}; ${assertion}`,
		};
	});
};