import React from 'react';
import styled from 'styled-components';
import Carusel from './Carusel';

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
	return (
		<StyledWrapper>
			<h2>Now playing in cinema</h2>
			<Carusel />
		</StyledWrapper>
	);
}

export default NowPlaying;
