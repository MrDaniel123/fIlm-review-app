import styled from 'styled-components';
import { breakPoint, colors, fontSizes } from '../../styles/style';
import { slowShowing } from './animation';

export const Description = styled.p`
	margin: 1rem;
	font-size: ${fontSizes.small};
	color: ${colors.fontWhite};
	padding: 1rem;
	border-radius: 12px;
	background-color: ${colors.popUpFilterBlack};
	max-width: 600px;

	animation: ${slowShowing} 0.6s ease-in-out;
	@media (min-width: ${breakPoint.small}px) {
		font-size: 2rem;
	}

	@media (min-width: ${breakPoint.large}px) {
		font-size: 2.4rem;
	}
`;
