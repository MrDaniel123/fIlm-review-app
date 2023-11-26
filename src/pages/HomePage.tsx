import React from 'react';
import styled from 'styled-components';

import { useNowPlaying } from '../hooks/useNowPlaying';
import NowPlaying from '../features/nowPlayingCarusel/NowPlaying';

const StyledHomePage = styled.main`
	display: flex;
	justify-content: center;
	align-content: center;
`;

function HomePage() {
	const { data, isLoading, isError } = useNowPlaying();
	console.log(data, isLoading, isError);

	return (
		<StyledHomePage>
			<NowPlaying />
		</StyledHomePage>
	);
}

export default HomePage;
