import React from 'react';
import styled from 'styled-components';
import Carusel from './Carusel';
import { useNowPlaying } from '../../hooks/useNowPlaying';
import { breakPoint, fontSizes } from '../../styles/style';

const StyledWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 12px;
	min-width: 340px;
	width: 90%;
	max-width: 1280px;

	& h2 {
		font-size: ${fontSizes.extraExtraLarge};
		margin: 1rem;
		width: 100%;
		text-align: left;

		@media (min-width: ${breakPoint.large}px) {
			font-size: ${fontSizes.header};
		}
	}
`;

function NowPlaying() {
	const { data, isLoading, isError } = useNowPlaying();

	return (
		<StyledWrapper>
			<h2>Now playing</h2>
			{isLoading && <h1>LOading....</h1>}
			{data && <Carusel data={data} />}
		</StyledWrapper>
	);
}

export default NowPlaying;
