import React from 'react';
import UseApi from '../services/useNowPlaying';

function HomePage() {
	const { data, isLoading, isError, error } = UseApi();
	console.log(data, isLoading);

	if (isError) throw new Error('');
	if (isLoading) return <div>LOading...</div>;
	if (data) {
		return <div>{data.results[3].title}</div>;
	} else return null;
}

export default HomePage;
