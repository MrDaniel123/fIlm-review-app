import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type OnTheAirTvSeries } from '../../types/onTheAir/tvSeries';

const baseOnTheAirTvSeriesUrl = 'https://api.themoviedb.org/3/tv/on_the_air?language=en-US';

export const getOnTheAirTvSeries = async (pageNumber: string) => {
	const response = await axios.get<OnTheAirTvSeries>(
		`${baseOnTheAirTvSeriesUrl}&page=${pageNumber}&api_key=${TMDB_KEY}`
	);

	return response.data;
};
