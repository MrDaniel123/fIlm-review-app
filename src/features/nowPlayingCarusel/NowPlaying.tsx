import React from 'react';
import styled from 'styled-components';
import Carusel from './Carusel';
import { useNowPlaying } from '../../hooks/useNowPlaying';
import { breakPoint } from '../../styles/style';

const StyledNawPlaying = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.2rem;
	width: 90%;
	max-width: 1280px;

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

function NowPlaying() {
	const { data, isLoading, isError } = useNowPlaying();

	return (
		<StyledNawPlaying>
			<h2>Now playing</h2>
			{isLoading && <h1>LOading....</h1>}
			{data && <Carusel data={data} />}
		</StyledNawPlaying>
	);
}

export default NowPlaying;
