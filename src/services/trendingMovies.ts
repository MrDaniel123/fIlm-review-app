import axios from 'axios';

import { NowPLaing } from '../types/nowPLayingType';

const apiKey = process.env.REACT_APP_API_KEY;

export const trendingMovies = async () => {
	const res = await axios.get<NowPLaing>(
		`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${apiKey}`
	);
	return res.data;
};
