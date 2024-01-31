import styled from 'styled-components';
import { slowShowing } from './animation';
import { breakPoint, colors, fontSizes } from '../../styles/style';

export const Title = styled.h3`
	font-size: ${fontSizes.medium};
	color: ${colors.fontWhite};
	padding: 0.5rem 3rem;
	border-radius: 50px;
	text-transform: uppercase;
	background-color: ${colors.popUpFilterBlack};

	animation: ${slowShowing} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		font-size: ${fontSizes.extraExtraLarge};
	}

	@media (min-width: ${breakPoint.large}px) {
		font-size: ${fontSizes.header};
	}
`;
