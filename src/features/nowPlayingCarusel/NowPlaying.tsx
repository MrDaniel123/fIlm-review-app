import React from 'react';
import styled from 'styled-components';
import Carusel from './Carusel';
import { useNowPlaying } from '../../hooks/useNowPlaying';

const StyledWrapper = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 12px;
	min-width: 340px;
	width: 95%;
	max-width: 1280px;

	/* background-color: #5e5252; */

	& h2 {
		font-size: 1.6rem;
		margin: 1rem;
	}
`;

function NowPlaying() {
	const { data, isLoading, isError } = useNowPlaying();
	console.log(data, isLoading, isError);
	return (
		<StyledWrapper>
			<h2>Now playing in cinema</h2>
			{isLoading && <h1>LOading....</h1>}
			{data && <Carusel data={data} />}
		</StyledWrapper>
	);
}

export default NowPlaying;
