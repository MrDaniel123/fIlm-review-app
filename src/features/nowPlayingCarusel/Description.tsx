import styled from 'styled-components';
import { breakPoint } from '../../styles/style';
import { slowShowing } from './animation';

export const Description = styled.p`
	margin: 1rem;
	font-size: var(--font-small);
	color: var(--color-white);
	padding: 1rem;
	border-radius: var(--border-radius-medium);
	background-color: var(--color-black-filter);
	max-width: 60rem;
	padding: 16px;

	animation: ${slowShowing} 0.6s ease-in-out;
	@media (min-width: ${breakPoint.small}px) {
		font-size: 2rem;
	}

	@media (min-width: ${breakPoint.large}px) {
		font-size: 2.4rem;
	}
`;
