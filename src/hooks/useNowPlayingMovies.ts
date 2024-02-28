import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies } from '../services/apiMovie';

export const useNowPlayingMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['now-playing-movies'],
		queryFn: getNowPlayingMovies,
	});
	return { data, isLoading, isError };
};
