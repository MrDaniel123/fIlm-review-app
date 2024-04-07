import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type OnTheAirTvSeries } from '../../types/onTheAir/tvSeries';

const baseOnTheAirTvSeriesUrl =
	'https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=';

export const getOnTheAirTvSeries = async () => {
	const response = await axios.get<OnTheAirTvSeries>(`${baseOnTheAirTvSeriesUrl}${TMDB_KEY}`);

	return response.data;
};
