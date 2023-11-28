import React from 'react';
import styled from 'styled-components';

import NowPlaying from '../features/nowPlayingCarusel/NowPlaying';

const StyledHomePage = styled.main`
	display: flex;
	justify-content: center;
	align-content: center;
`;

function HomePage() {
	return (
		<StyledHomePage>
			<NowPlaying />
		</StyledHomePage>
	);
}

export default HomePage;
