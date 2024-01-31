import styled from 'styled-components';
import { borderRadius, breakPoint } from '../../styles/style';

export const Poster = styled.img`
	width: 300px;
	height: 450px;
	border-radius: ${borderRadius.posterNormal};
	object-fit: cover;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 1/2;
		grid-row: 1/6;
	}
	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		width: 350px;
		height: 500px;
		margin-left: 16px;
	}
`;
