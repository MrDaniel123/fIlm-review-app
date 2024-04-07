import React from 'react';
import styled from 'styled-components';

import { useTrendingTvSeries } from '../../hooks/trending/useTrendingTvSeries';

import ListElement from './ListElement';
import { useTopRatedTvSeries } from '../../hooks/topRated/useTopRatedTvSeries';
import { usePopularTvSeries } from '../../hooks/popular/usePopularTvSeries';
import { useOnTheAirTvSeries } from '../../hooks/onTheAir/useOnTheAirTvSeries';

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
	const { data: popularTvSeries } = usePopularTvSeries();
	const { data: trendingTvSeries } = useTrendingTvSeries();
	const { data: topRatedTvSeries } = useTopRatedTvSeries();
	const { data: onTheAirTvSeries } = useOnTheAirTvSeries();

	if (type === 'popular') {
		const renderListElements = popularTvSeries?.results.map(tvSeries => (
			<ListElement type={'popular-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	if (type === 'trending') {
		const renderListElements = trendingTvSeries?.results.map(tvSeries => (
			<ListElement type={'trending-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	if (type === 'topRated') {
		const renderListElements = topRatedTvSeries?.results.map(tvSeries => (
			<ListElement type={'topRated-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	if (type === 'onTheAir') {
		const renderListElements = onTheAirTvSeries?.results.map(tvSeries => (
			<ListElement type={'onTheAir-tvSeries'} data={tvSeries} key={tvSeries.id} />
		));

		return <ListWrapper>{renderListElements}</ListWrapper>;
	}

	return <ListWrapper>List</ListWrapper>;
}

export default TvSeriesList;
