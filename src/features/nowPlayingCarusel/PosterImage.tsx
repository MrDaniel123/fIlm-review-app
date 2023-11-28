import styled from 'styled-components';
import { breakPoint } from '../../styles/breakpoints';
import { slowShowingImage } from './animation';

export const PosterImage = styled.img`
	grid-column: 1/2;
	grid-row: 1/7;
	width: 140px;
	height: 220px;
	border-radius: 12px;
	animation: ${slowShowingImage} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		width: 160px;
		height: 240px;
	}

	@media (min-width: ${breakPoint.medium}px) {
		width: 220px;
		height: 300px;
	}

	@media (min-width: ${breakPoint.large}px) {
		width: 320px;
		height: 440px;
	}
`;
