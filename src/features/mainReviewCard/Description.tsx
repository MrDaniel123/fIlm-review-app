import styled from 'styled-components';
import { breakPoint, fontSizes, colors } from '../../styles/style';

export const Description = styled.p`
	color: ${colors.fontWhite};
	font-size: ${fontSizes.medium};
	width: 90%;
	text-align: center;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		font-size: ${fontSizes.medium};
		text-align: left;
	}
`;
