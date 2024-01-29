import styled from 'styled-components';
import { fontSizes, colors, breakPoint } from '../../styles/style';

export const Title = styled.h1`
	font-size: ${fontSizes.header};
	font-weight: bold;
	color: ${colors.fontWhite};
	width: 100%;
	text-align: center;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
		grid-row: 1/2;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		text-align: left;
		width: 90%;
	}
`;
