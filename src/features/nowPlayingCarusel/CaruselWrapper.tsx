import styled from 'styled-components';
import { breakPoint } from '../../styles/style';
import { mountAnimation } from './animation';

export const CaruselWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: 2fr 7fr 3fr 1fr;
	justify-items: center;
	align-items: center;
	position: relative;
	gap: 5px;
	padding: 12px;
	min-width: 320px;
	width: 90vw;
	max-width: 1440px;
	min-height: 220px;
	border-radius: 16px;
	animation: ${mountAnimation} 0.6s ease-in-out;

	@media (min-width: ${breakPoint.small}px) {
		min-height: 360px;
	}
	@media (min-width: ${breakPoint.large}px) {
		min-height: 480px;
	}
`;
