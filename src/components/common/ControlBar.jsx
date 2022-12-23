import styled from 'styled-components';
import { LIGHT_COLOR } from '../../styles/colors.js';
import { nanoid } from '@reduxjs/toolkit';

const Container = styled.div`
  display: grid;
  grid-template: 54px / 0.5fr 0.5fr;
`;

const Tab = styled.button`
  background: ${({ active }) => active ? '#22255f' : 'none'};
  border: none;
  border-bottom: 2px solid #22255f;
  color: ${LIGHT_COLOR};
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const ControlBar = ({ onSelect, active = 0, options = ['Instruction', 'Output'] }) => {
	const handleSelect = tab => () => {
		onSelect(tab);
	};
	return options.length > 0 && (<Container>
			{options.map((item, index) => (
				<Tab key={nanoid()} active={active === index} onClick={handleSelect(index)}>{item}</Tab>))}
		</Container>);
};