import React from 'react';
import styled from 'styled-components';
import Carusel from './Carusel';
import { useNowPlaying } from '../../hooks/useNowPlaying';
import { breakPoint } from '../../styles/style';

const StyledWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 12px;
	min-width: 340px;
	width: 95%;
	max-width: 1280px;

	& h2 {
		font-size: 1.6rem;
		margin: 1rem;
		width: 100%;
		text-align: left;

		@media (min-width: ${breakPoint.small}px) {
			font-size: 2rem;
		}
		@media (min-width: ${breakPoint.medium}px) {
			font-size: 3rem;
		}
	}
`;

function NowPlaying() {
	const { data, isLoading, isError } = useNowPlaying();

	return (
		<StyledWrapper>
			<h2>Now playing in cinema</h2>
			{isLoading && <h1>LOading....</h1>}
			{data && <Carusel data={data} />}
		</StyledWrapper>
	);
}

export default NowPlaying;
