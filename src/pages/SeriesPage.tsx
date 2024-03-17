import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { useRecomendationsTvSeries } from '../hooks/recomendations/useRecomendationstvSeries';
import { useSimilarTvSeries } from '../hooks/similar/useSimilarTvSeries';
import { useTvSerie } from '../hooks/tvSerie/useTvSerie';

import { recomendationsTvSeries as preparingRecomendationstvSeries } from '../utils/preparingDataToScroller/recomendationsTvSeries';
import { similarTvSeries as preparingSimilarTvSeries } from '../utils/preparingDataToScroller/similarTvSeries';
import { preparingTvSerieData } from '../utils/preparingDataToHeaderCard/preparingTvSerieData';

import HeaderCard from '../features/headerCard/HeaderCard';
import { useTvSeriesActrsoById } from '../hooks/useActrosFromtvSeries';
import Scroller from '../features/scroller/Scroller';
import { useReviewFromTvSeries } from '../hooks/useReviewFromTvSeries';
import Review from '../features/review/Review';
// import { useRecomenDationsFromTvSeries } from '../hooks/recomendations/useRecomendationstvSeries';
// import { useSimilarTvSeries } from '../hooks/similar/useSimilarTvSeries';
import { useTvSeriesImage } from '../hooks/useTvSeriesImage';
import ImageSlider from '../features/imageSlider/ImageSlider';

const StyledSeriesPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 32px;
	padding-bottom: 80px;
`;

type HeaderCardTypeSeriesType = {
	backDropImagePath: string;
	posterPath: string;
	header: string;
	description: string;
	genres: { id: number; name: string }[];
	vote: number;
	popularity: number;
	firstAirDate: string;
	lastAirDate: string;
	productionCompany: string;
};

type ScrollerType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

type ReviewType = {
	author: string;
	content: string;
	reviewUrl: string;
	avatarPath: string;
	id: string;
	data: string;
};

function TvSeriesPage() {
	const { tvId } = useParams();

	const { data: tvSerie } = useTvSerie(tvId!);
	const { data: recomendationsTvSeries } = useRecomendationsTvSeries(tvId!);
	const { data: similarTvSeries } = useSimilarTvSeries(tvId!);

	// const { data: tvSeriesData } = useTvSeriesById(tv!);
	// const { data: actrosData } = useTvSeriesActrsoById(tv!);
	// const { data: reviewData } = useReviewFromTvSeries(tv!);
	// // const { data: recomendationsData } = useRecomenDationsFromTvSeries(tv!);
	// const { data: similarData } = useSimilarTvSeries(tv!);
	// const { data: imageData } = useTvSeriesImage(tv!);

	// let dataToHeaderCard: HeaderCardTypeSeriesType | undefined = undefined;
	// let dataToScrollerActros: ScrollerType[] | undefined = undefined;
	// let dataToReview: ReviewType[] | undefined = undefined;
	// let dataToScrollerRedomendations: ScrollerType[] | undefined = undefined;
	// let dataToScrollerSimilar: ScrollerType[] | undefined = undefined;

	// if (actrosData) {
	// 	dataToScrollerActros = actrosData.cast.map(actor => {
	// 		return {
	// 			header: actor.character,
	// 			paragraph: actor.name,
	// 			imagePath: actor.profile_path,
	// 			id: actor.id,
	// 		};
	// 	});
	// }

	// if (reviewData) {
	// 	let filteredReview = reviewData.results.filter(review => {
	// 		if (review.content.length >= 300 && review.author_details.avatar_path) {
	// 			return true;
	// 		}
	// 	});

	// 	dataToReview = filteredReview.map(review => {
	// 		return {
	// 			author: review.author,
	// 			content: review.content,
	// 			reviewUrl: review.url,
	// 			avatarPath: review.author_details.avatar_path,
	// 			id: review.id,
	// 			data: review.updated_at,
	// 		};
	// 	});
	// }

	return (
		<StyledSeriesPage>
			{tvSerie && <HeaderCard data={preparingTvSerieData(tvSerie)} type={'series'} />}
			{/* {dataToScrollerActros && (
				<Scroller data={dataToScrollerActros} name={'Actros'} linkTo={'person'} />
			)} */}
			{/* {dataToReview && <Review data={dataToReview.slice(0, 2)} />} */}
			{/* {imageData && <ImageSlider data={imageData.backdrops.slice(0, 20)} />} */}
			{recomendationsTvSeries && (
				<Scroller
					data={preparingRecomendationstvSeries(recomendationsTvSeries)}
					name={'Recomendations'}
					linkTo={'tv-series'}
				/>
			)}
			{similarTvSeries && (
				<Scroller
					data={preparingSimilarTvSeries(similarTvSeries)}
					name={'Similar'}
					linkTo={'tv-series'}
				/>
			)}
		</StyledSeriesPage>
	);
}

export default TvSeriesPage;
