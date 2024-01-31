import styled from 'styled-components';
import { breakPoint, fontSizes } from '../../styles/style';

export const Header = styled.h2`
	width: 100%;
	font-size: ${fontSizes.extraExtraLarge};
	font-weight: bold;

	@media (min-width: ${breakPoint.large}px) {
		font-size: ${fontSizes.header};
	}
`;
