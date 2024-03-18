import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const DetalsWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 16px;

	@media (min-width: ${breakPoint.large}px) {
		margin: 0 2rem;
	}
`;

export const DetalsPharagraph = styled.p`
	width: 100%;
	font-weight: bold;

	& strong {
		font-size: 2rem;
		color: #4b4b4b;

		@media (min-width: ${breakPoint.large}px) {
			font-size: 2.4rem;
		}
	}

	& bdi {
		font-size: 2rem;
		color: #000000;
		@media (min-width: ${breakPoint.large}px) {
			font-size: 2.4rem;
		}
	}
`;
