import { memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { LIGHT_COLOR, MAIN_COLOR } from '../../styles/colors.js';
import { CONTROL_OPTIONS } from '../../constants/common.js';

const Container = styled.div`
  display: grid;
  grid-template: 38px / 0.4fr 0.3fr 0.3fr;
  width: 100%;
`;

const Tab = styled.button`
  background: ${({ active }) => active ? MAIN_COLOR : 'none'};
  border: none;
  border-bottom: 2px solid ${MAIN_COLOR};
  color: ${LIGHT_COLOR};
  font-weight: bold;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const ControlBar = ({ onSelect, active = 0, options = CONTROL_OPTIONS }) => {
	const handleSelect = tab => () => {
		onSelect(tab);
	};
	return options.length > 0 && (<Container>
		{options.map((item, index) => (
			<Tab key={nanoid()} active={active === index} onClick={handleSelect(index)}>{item}</Tab>))}
	</Container>);
};

export default memo(ControlBar);