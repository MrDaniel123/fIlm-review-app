import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovieMovies } from '../services/apiMovie';

export const useNowPlayingMovieMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['now-playing-movies'],
		queryFn: getNowPlayingMovieMovies,
	});
	return { data, isLoading, isError };
};
