import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies } from '../../services/nowplaying/apiNowPlaying';

export const useNowPlayingMovieMovies = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['now-playingMovies'],
		queryFn: getNowPlayingMovies,
	});
	return { data, isLoading, isError };
};
