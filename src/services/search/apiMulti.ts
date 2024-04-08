import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type MultiSearch } from '../../types/search/multi';

const baseMultiSearchUrl = 'https://api.themoviedb.org/3/search/multi';

export const getMultiSearchByQuery = async (query: string) => {
	const response = await axios.get<MultiSearch>(
		`${baseMultiSearchUrl}?query=${query}&include_adult=true&language=en-US&page=1&api_key=${TMDB_KEY}`
	);

	return response.data;
};
