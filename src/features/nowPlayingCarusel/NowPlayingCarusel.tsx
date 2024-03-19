import React from 'react';
import styled from 'styled-components';

import Carusel from './Carusel';
import { breakPoint } from '../../styles/style';

import { type NowPlaingMovies } from '../../types/nowPlaying/nowPlayingMoviesType';

const StyledNawPlaying = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.2rem;
	width: 90%;
	max-width: 1280px;
	margin-top: 90px;

	& h2 {
		font-size: var(--font-large-extra);
		margin: 1rem;
		width: 100%;
		text-align: left;

		@media (min-width: ${breakPoint.large}px) {
			font-size: var(--font-header);
		}
	}
`;

type NowPlayingCaruselType = {
	data: NowPlaingMovies;
};

function NowPlayingCarusel({ data }: NowPlayingCaruselType) {
	return (
		<StyledNawPlaying>
			<h2>Now playing</h2>
			{data && <Carusel data={data} />}
		</StyledNawPlaying>
	);
}

export default NowPlayingCarusel;
