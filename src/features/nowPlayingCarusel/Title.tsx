import styled from 'styled-components';
import { slowShowing } from './animation';
import { breakPoint } from '../../styles/breakpoints';

export const Title = styled.h3`
	font-size: 1.2rem;
	color: #fff;
	padding: 0.5rem 3rem;
	border-radius: 50px;
	text-transform: uppercase;
	background-color: #000000b3;

	animation: ${slowShowing} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		font-size: 2.2rem;
	}

	@media (min-width: ${breakPoint.large}px) {
		font-size: 3.6rem;
	}
`;
