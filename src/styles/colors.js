import { css } from 'styled-components';

export const MAIN_COLOR = '#646cff';
export const LIGHT_COLOR = '#ffffff';
export const ERROR_COLOR = '#dc143c';
export const DISABLED_COLOR = '#a9a9a9';

export const BASE_TEXT_COLOR = '#000000';
export const mainTextColor = css`
  color: ${MAIN_COLOR};
`;

export const errorTextColor = css`
  color: ${ERROR_COLOR};
`;
