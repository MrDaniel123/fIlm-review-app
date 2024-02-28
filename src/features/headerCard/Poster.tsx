import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const Poster = styled.img`
	width: 300px;
	height: 450px;
	border-radius: var(--border-radius-large);
	object-fit: cover;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 1/2;
		grid-row: 1/6;
	}
	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		width: 35rem;
		height: 50rem;
		margin-left: 16px;
	}
`;
