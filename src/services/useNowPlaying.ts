import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { INowPLaing } from '../types/nowPLayingType';

const apiKey = process.env.REACT_APP_API_KEY;

const UseApi = () => {
	const fetchData = async () => {
		const response = await axios.get<INowPLaing>(
			`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=11&api_key=${apiKey}`
		);
		return response.data;
	};

	return useQuery('nowPlaying', fetchData);
};
export default UseApi;
