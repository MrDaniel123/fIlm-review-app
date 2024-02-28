import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

export const AdwanceInfromation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 0.8rem;
	padding: 10px;

	& h4 {
		width: 100%;
		font-size: var(--font-medium);
		color: var(--color-white);
		text-align: center;
	}

	& span {
		width: 100%;
		font-size: var(--font-medium);
		text-align: center;
		color: var(--color-silver);
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		padding: 8px 0;
		& h4 {
			font-size: var(--font-large);
		}

		& span {
			font-size: var(--font-medium);
		}
	}
`;
