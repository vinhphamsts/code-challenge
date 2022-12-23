export const Loading = ({ isLoading }) => isLoading ? (
	<div className="overlay">
		<img src="/code.png" alt="Loading ..." />
	</div>
) : null;