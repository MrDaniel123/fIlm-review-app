import { useQuery } from '@tanstack/react-query';
import { getUpcomingMovies } from '../../services/upcoming/apiUpcoming';

export const useUpComingMovies = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['upcoming-movies'],
		queryFn: () => getUpcomingMovies(pageNumber),
	});
	return { data, isLoading, isError };
};
