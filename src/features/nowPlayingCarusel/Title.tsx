import styled from 'styled-components';
import { slowShowing } from './animation';
import { breakPoint } from '../../styles/style';

export const Title = styled.h3`
	font-size: var(--font-medium);
	color: var(--color-white);
	padding: 0.5rem 3rem;
	border-radius: 50px;
	text-transform: uppercase;
	background-color: var(--color-black-filter);

	animation: ${slowShowing} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		font-size: var(--font-large-extra);
	}

	@media (min-width: ${breakPoint.large}px) {
		font-size: var(--font-header);
	}
`;
