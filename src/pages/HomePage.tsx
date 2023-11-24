import React from 'react';
import { useNowPlaying } from '../hooks/useNowPlaying';

function HomePage() {
	const { data, isLoading, isError } = useNowPlaying();
	console.log(data, isLoading, isError);

	return <div>{data?.results[1].overview}</div>;
}

export default HomePage;
