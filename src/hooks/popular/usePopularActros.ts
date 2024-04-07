import { useQuery } from '@tanstack/react-query';
import { getPopularActros } from '../../services/popular/apiPopular';

export const usePopularActros = (pageNumber: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['popular-actros'],
		queryFn: () => getPopularActros(pageNumber),
	});

	return { data, isLoading, isError };
};
