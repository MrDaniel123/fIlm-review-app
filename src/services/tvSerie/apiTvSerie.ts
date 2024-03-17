import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { TvSerieType } from '../../types/tvSerie/tvSerieType';

const baseTvSerieUrl = 'https://api.themoviedb.org/3/tv/';

export const getTvSerie = async (tvSerieId: string) => {
	const response = await axios.get<TvSerieType>(
		`${baseTvSerieUrl}${tvSerieId}?&api_key=${TMDB_KEY}`
	);

	return response.data;
};
