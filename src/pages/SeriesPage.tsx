import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { useRecomendationsTvSeries } from '../hooks/recomendations/useRecomendationstvSeries';
import { useSimilarTvSeries } from '../hooks/similar/useSimilarTvSeries';
import { useTvSerie } from '../hooks/tvSerie/useTvSerie';
import { useTvSeriesActros } from '../hooks/actros/useTvSeriesActros';
import { useTvSeriesReview } from '../hooks/review/useTvSeriesReview';
import { useTvSeriesImages } from '../hooks/images/useTvSeriesImages';

import { preparingTvSeriesRecomendationsData } from '../utils/preparingDataToScroller/recomendationsTvSeries';
import { preparingTvSeriesSimilarData } from '../utils/preparingDataToScroller/similarTvSeries';
import { preparingTvSerieData } from '../utils/preparingDataToHeaderCard/preparingTvSerieData';
import { preparingActorsDataToScroller } from '../utils/preparingDataToScroller/actors';
import { preparingDataToReview } from '../utils/preparingDataToReview/preparingDataToReview';

import HeaderCard from '../features/headerCard/HeaderCard';
import Scroller from '../features/scroller/Scroller';
import Review from '../features/review/Review';
import ImageSlider from '../features/imageSlider/ImageSlider';

const StyledSeriesPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 32px;
	padding-bottom: 80px;
`;

function TvSeriesPage() {
	const { tvId } = useParams();

	const { data: tvSerie } = useTvSerie(tvId!);
	const { data: recomendations } = useRecomendationsTvSeries(tvId!);
	const { data: similar } = useSimilarTvSeries(tvId!);
	const { data: actors } = useTvSeriesActros(tvId!);
	const { data: reviews } = useTvSeriesReview(tvId!);
	const { data: images } = useTvSeriesImages(tvId!);

	return (
		<StyledSeriesPage>
			{tvSerie && <HeaderCard data={preparingTvSerieData(tvSerie)} type={'series'} />}
			{actors && (
				<Scroller data={preparingActorsDataToScroller(actors)} name={'Actros'} linkTo={'person'} />
			)}
			{reviews && <Review data={preparingDataToReview(reviews).slice(0, 2)} />}
			{images && <ImageSlider data={images.backdrops.slice(0, 20)} />}
			{recomendations && (
				<Scroller
					data={preparingTvSeriesRecomendationsData(recomendations)}
					name={'Recomendations'}
					linkTo={'tv-series'}
				/>
			)}
			{similar && (
				<Scroller
					data={preparingTvSeriesSimilarData(similar)}
					name={'Similar'}
					linkTo={'tv-series'}
				/>
			)}
		</StyledSeriesPage>
	);
}

export default TvSeriesPage;
