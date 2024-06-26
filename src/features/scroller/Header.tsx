import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const Header = styled.h2`
	width: 100%;
	font-size: var(--font-large-extra);
	font-weight: bold;

	@media (min-width: ${breakPoint.large}px) {
		font-size: var(--font-header);
	}
`;
