import axios from 'axios';

import { type PopularActrosResponse } from '../types/populatActrosType';

import { populatActrossUrl } from './tmdbService';

export const getPopularActros = async () => {
	const response = await axios.get<PopularActrosResponse>(populatActrossUrl);

	return response.data;
};
