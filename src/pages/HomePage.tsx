import React from 'react';
import styled from 'styled-components';

import NowPlaying from '../features/nowPlayingCarusel/NowPlaying';
import ContentScroller from '../features/contentScroller/ContentScroller';

const StyledHomePage = styled.main`
	display: flex;
	justify-content: center;
	align-content: flex-start;
	flex-wrap: wrap;
	gap: 20px;
	width: 100%;
	height: 100vh;
`;

function HomePage() {
	return (
		<StyledHomePage>
			<NowPlaying />
			<ContentScroller />
		</StyledHomePage>
	);
}

export default HomePage;
