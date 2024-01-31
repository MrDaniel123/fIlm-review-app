import styled from 'styled-components';
import { breakPoint, colors } from '../../styles/style';

export const StarReview = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(90deg, #22994a 1.52%, #275e4a 101.3%);
	border-radius: 93px;
	padding: 4px 12px;

	& span {
		font-size: 26px;
		font-weight: bold;
		color: ${colors.fontWhite};
		margin-right: 8px;
	}

	& img {
		width: 35px;
	}

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		padding: 12px 20px;

		& span {
			font-size: 32px;
			margin-right: 16px;
		}
	}
`;
