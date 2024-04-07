import React from 'react';
import styled from 'styled-components';

import { useTrendingTvSeries } from '../../hooks/trending/useTrendingTvSeries';

import ListElement from './ListElement';
import { useTopRatedTvSeries } from '../../hooks/topRated/useTopRatedTvSeries';
import { usePopularTvSeries } from '../../hooks/popular/usePopularTvSeries';
import { useOnTheAirTvSeries } from '../../hooks/onTheAir/useOnTheAirTvSeries';
import { useParams } from 'react-router-dom';
import Pagination from '../../ui/Pagination';

const ListWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1.6rem;
	width: 90%;
	max-width: 1440px;
`;

type ListProps = {
	type: 'trending' | 'topRated' | 'popular' | 'onTheAir';
};

function TvSeriesList({ type }: ListProps) {
	const { pageNumber } = useParams();

	const { data: popularTvSeries } = usePopularTvSeries(pageNumber ? pageNumber : '1');
	const { data: trendingTvSeries } = useTrendingTvSeries();
	const { data: topRatedTvSeries } = useTopRatedTvSeries(pageNumber ? pageNumber : '1');
	const { data: onTheAirTvSeries } = useOnTheAirTvSeries(pageNumber ? pageNumber : '1');

	if (type === 'popular' && popularTvSeries) {
		const renderListElements = popularTvSeries?.results.map(tvSeries => (
			<ListElement type={'popular-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return (
			<>
				<ListWrapper>{renderListElements}</ListWrapper>
				<Pagination
					totalPages={popularTvSeries.total_pages > 500 ? 500 : popularTvSeries.total_pages}
					actualPage={pageNumber!}
					linkTo={'tv-series/popular'}
				/>
			</>
		);
	}

	if (type === 'trending') {
		const renderListElements = trendingTvSeries?.results.map(tvSeries => (
			<ListElement type={'trending-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	if (type === 'topRated' && topRatedTvSeries) {
		const renderListElements = topRatedTvSeries?.results.map(tvSeries => (
			<ListElement type={'topRated-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return (
			<>
				<ListWrapper>{renderListElements}</ListWrapper>
				<Pagination
					totalPages={topRatedTvSeries.total_pages > 500 ? 500 : topRatedTvSeries.total_pages}
					actualPage={pageNumber!}
					linkTo={'tv-series/topRated'}
				/>
			</>
		);
	}

	if (type === 'onTheAir' && onTheAirTvSeries) {
		const renderListElements = onTheAirTvSeries?.results.map(tvSeries => (
			<ListElement type={'onTheAir-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return (
			<>
				<ListWrapper>{renderListElements}</ListWrapper>
				<Pagination
					totalPages={onTheAirTvSeries.total_pages > 500 ? 500 : onTheAirTvSeries.total_pages}
					actualPage={pageNumber!}
					linkTo={'tv-series/onTheAir'}
				/>
			</>
		);
	}

	return <ListWrapper>List</ListWrapper>;
}

export default TvSeriesList;
