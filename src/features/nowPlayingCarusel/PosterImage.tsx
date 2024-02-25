import styled from 'styled-components';
import { breakPoint } from '../../styles/style';
import { slowShowingImage } from './animation';

export const PosterImage = styled.img`
	grid-column: 1/2;
	grid-row: 1/7;
	width: 14rem;
	height: 22rem;
	border-radius: 12px;
	animation: ${slowShowingImage} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		width: 16rem;
		height: 24rem;
	}

	@media (min-width: ${breakPoint.large}px) {
		width: 22rem;
		height: 30rem;
	}

	@media (min-width: ${breakPoint.large}px) {
		width: 32rem;
		height: 44rem;
	}
`;
