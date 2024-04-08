import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies } from '../../services/nowplaying/apiNowPlaying';

export const useNowPlayingMovieMovies = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [`now-playingMovies:${pageNumber}`],
		queryFn: () => getNowPlayingMovies(pageNumber),
	});
	return { data, isLoading, isError };
};
