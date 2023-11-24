import { useQuery } from 'react-query';
import { nowPlaying } from '../services/nowPLaying';

export const useNowPlaying = () => {
	const { data, isLoading, isError } = useQuery(['now-playing'], nowPlaying, {
		onError: error => {
			if (error) throw new Error('Error fetch now-playing');
		},
	});
	return { data, isLoading, isError };
};
