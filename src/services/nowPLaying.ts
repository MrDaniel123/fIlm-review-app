import axios from 'axios';

import { NowPLaing } from '../types/nowPLayingType';

const apiKey = process.env.REACT_APP_API_KEY;

export const nowPlaying = async () => {
	const res = await axios.get<NowPLaing>(
		`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=11&api_key=${apiKey}`
	);
	return res.data;
};
