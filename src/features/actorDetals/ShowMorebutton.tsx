import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const ShowMoreButton = styled.button`
	position: absolute;
	bottom: -40px;
	right: 0px;
	border: none;
	padding: 1rem 2rem;
	background-color: transparent;
	font-size: 2.2rem;
	font-weight: bold;
	color: #084299;

	@media (min-width: ${breakPoint.large}px) {
		bottom: -25px;
	}
`;
