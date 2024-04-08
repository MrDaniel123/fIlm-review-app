import { useQuery } from '@tanstack/react-query';
import { getMultiSearchByQuery } from '../../services/search/apiMulti';

export const useMultiSearch = (query: string) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: [`multiSearch-${query}`],
		queryFn: () => getMultiSearchByQuery(query),
	});

	return { data, isLoading, isError };
};
