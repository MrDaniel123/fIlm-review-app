import { useQuery } from '@tanstack/react-query';
import { nowPlaying } from '../services/nowPLaying';

export const useNowPlaying = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['now-playing'],
		queryFn: nowPlaying,
	});
	return { data, isLoading, isError };
};
