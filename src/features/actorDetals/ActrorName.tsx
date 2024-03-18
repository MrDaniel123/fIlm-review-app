import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const ActorName = styled.h2`
	font-size: 3.6rem;
	font-style: bold;
	width: 100%;
	text-align: center;

	@media (min-width: ${breakPoint.large}px) {
		text-align: start;
	}
`;
