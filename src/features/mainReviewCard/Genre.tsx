import styled from 'styled-components';
import { fontSizes, colors } from '../../styles/style';

export const Genre = styled.div`
	background: linear-gradient(264.99deg, #369a52 5.42%, #3e9a36 99.19%);
	border-radius: 66px;
	padding: 8px 12px;

	&& h4 {
		font-size: ${fontSizes.medium};
		color: ${colors.fontWhite};
	}
`;
