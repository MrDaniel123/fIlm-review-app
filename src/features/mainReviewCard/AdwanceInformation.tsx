import styled from 'styled-components';
import { fontSizes, colors, breakPoint } from '../../styles/style';

export const AdwanceInfromation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 50%;

	& h4 {
		width: 100%;
		font-size: ${fontSizes.medium};
		color: ${colors.fontWhite};
		text-align: center;
	}

	& span {
		width: 100%;
		font-size: ${fontSizes.medium};
		text-align: center;
		color: ${colors.fontGreyLess};
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		padding: 8px 0;
		& h4 {
			font-size: ${fontSizes.large};
		}

		& span {
			font-size: ${fontSizes.medium};
		}
	}
`;
