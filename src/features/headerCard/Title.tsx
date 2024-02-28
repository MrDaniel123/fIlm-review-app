import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const Title = styled.h1`
	font-size: var(--font-header);
	font-weight: bold;
	color: var(--color-white);
	text-align: center;
	padding: 12px;
	background-color: var(--color-black-filter);
	border-radius: var(--border-radius-large);

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
		grid-row: 1/2;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		text-align: left;
		width: 90%;
	}
`;
