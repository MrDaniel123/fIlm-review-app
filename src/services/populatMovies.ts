import axios from 'axios';

import { NowPLaing } from '../types/nowPLayingType';

const apiKey = process.env.REACT_APP_API_KEY;

export const popularMovies = async () => {
	const res = await axios.get<NowPLaing>(
		`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`
	);
	return res.data;
};
