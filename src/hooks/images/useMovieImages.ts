import { useQuery } from '@tanstack/react-query';
import { getMoviesImage } from '../../services/images/apiImages';

export const useMovieImages = (movieId: string) => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ['movie-images'],
		queryFn: () => getMoviesImage(movieId),
	});
	return { data, isError, isLoading };
};
