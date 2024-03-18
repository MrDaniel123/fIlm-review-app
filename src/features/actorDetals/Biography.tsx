import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const Biography = styled.p`
	width: 100%;
	font-weight: bold;

	& strong {
		font-size: 2rem;
		color: #4b4b4b;
		@media (min-width: ${breakPoint.large}px) {
			font-size: 2.4rem;
		}
	}

	& span {
		font-size: 1.4rem;
		color: #000000;

		@media (min-width: ${breakPoint.large}px) {
			font-size: 1.6rem;
		}
	}
`;
