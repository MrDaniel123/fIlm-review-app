import styled from 'styled-components';
import { slowShowingImage } from './animation';
import { borderRadius } from '../../styles/style';

export const BackgroundPoster = styled.img`
	position: absolute;
	z-index: -1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	animation: ${slowShowingImage} 0.6s ease-in-out;
	filter: brightness(0.6);

	border-radius: ${borderRadius.posterNormal};
`;
