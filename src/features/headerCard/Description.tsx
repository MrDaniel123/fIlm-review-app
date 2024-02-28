import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const Description = styled.p`
	color: var(--color-white);
	font-size: var(--font-medium);
	width: 90%;
	text-align: center;
	padding: 12px;
	background-color: var(--color-black-filter);
	border-radius: var(--border-radius-large);

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		font-size: var(--font-large);
		text-align: left;
	}
`;
