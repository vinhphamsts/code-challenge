import styled from 'styled-components';
import Button from '../common/Button';

const Container = styled.div`
  display: grid;
  grid-template: auto / 0.5fr 0.5fr;
  gap: 24px;
`;
export const BatchControl = ({ onBatchChange }) => {
	return (
		<Container>
			<Button type="button" onClick={onBatchChange(-1)} label="Previous" secondary/>
			<Button type="button" onClick={onBatchChange(1)} label="Next Challenge" secondary/>
		</Container>
	);
};