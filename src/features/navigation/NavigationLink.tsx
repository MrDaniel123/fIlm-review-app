import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakPoint } from '../../styles/style';

const StyledNavLink = styled(NavLink)`
	display: flex;
	align-items: center;
	padding: 0.8rem 2.4rem;
	margin: 0.4rem 1rem;
	text-decoration: none;
	border-radius: 1.6rem;
	margin: 1rem;
	transition: 0.1s;

	@media (max-width: ${breakPoint.extraLarge}px) {
		padding: 0.8rem 1rem;
	}

	& span {
		font-size: var(--font-large);
		font-weight: 600;
		color: var(--color-river-bed);

		@media (max-width: ${breakPoint.extraLarge}px) {
			font-size: 2rem;
		}
	}

	&:hover,
	&:active,
	/* &.active:link, */
	&.active:visited {
		background-color: var(--color-white-mercury);
	}
`;

export default StyledNavLink;
