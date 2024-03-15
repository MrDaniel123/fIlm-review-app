import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTvSeriesById } from '../hooks/useTvSeriesById';
import { TvSeriesbyIdResponseType } from '../types/tvSeriesByIdType';
import HeaderCard from '../features/headerCard/HeaderCard';
import { useTvSeriesActrsoById } from '../hooks/useActrosFromtvSeries';
import Scroller from '../features/scroller/Scroller';
import { useReviewFromTvSeries } from '../hooks/useReviewFromTvSeries';
import Review from '../features/review/Review';
import { useRecomenDationsFromTvSeries } from '../hooks/useRecomendationsFromTvSeries';
import { useSimilarTvSeries } from '../hooks/useSimilarTvSeries';

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
	const { tv } = useParams();
	const { data: tvSeriesData } = useTvSeriesById(tv!);
	const { data: actrosData } = useTvSeriesActrsoById(tv!);
	const { data: reviewData } = useReviewFromTvSeries(tv!);
	const { data: recomendationsData } = useRecomenDationsFromTvSeries(tv!);
	const { data: similarData } = useSimilarTvSeries(tv!);

	let dataToHeaderCard: HeaderCardTypeSeriesType | undefined = undefined;
	let dataToScrollerActros: ScrollerType[] | undefined = undefined;
	let dataToReview: ReviewType[] | undefined = undefined;
	let dataToScrollerRedomendations: ScrollerType[] | undefined = undefined;
	let dataToScrollerSimilar: ScrollerType[] | undefined = undefined;

	if (tvSeriesData) {
		let genre = tvSeriesData.genres.map(genre => {
			return {
				id: genre.id,
				name: genre.name,
			};
		});

		let company = tvSeriesData.networks[0].name;

		dataToHeaderCard = {
			backDropImagePath: tvSeriesData.backdrop_path,
			posterPath: tvSeriesData.poster_path,
			header: tvSeriesData.name,
			description: tvSeriesData.overview,
			genres: genre,
			vote: tvSeriesData.vote_average,
			popularity: tvSeriesData.popularity,
			firstAirDate: tvSeriesData.first_air_date,
			lastAirDate: tvSeriesData.last_air_date,
			productionCompany: company,
		};
	}

	if (actrosData) {
		dataToScrollerActros = actrosData.cast.map(actor => {
			return {
				header: actor.character,
				paragraph: actor.name,
				imagePath: actor.profile_path,
				id: actor.id,
			};
		});
	}

	if (reviewData) {
		let filteredReview = reviewData.results.filter(review => {
			if (review.content.length >= 300 && review.author_details.avatar_path) {
				return true;
			}
		});

		dataToReview = filteredReview.map(review => {
			return {
				author: review.author,
				content: review.content,
				reviewUrl: review.url,
				avatarPath: review.author_details.avatar_path,
				id: review.id,
				data: review.updated_at,
			};
		});
	}

	if (recomendationsData) {
		dataToScrollerRedomendations = recomendationsData.results.map(series => {
			return {
				header: series.name,
				paragraph: series.first_air_date,
				imagePath: series.poster_path,
				id: series.id,
			};
		});
	}

	if (similarData) {
		dataToScrollerSimilar = similarData.results.map(series => {
			return {
				header: series.name,
				paragraph: series.first_air_date,
				imagePath: series.poster_path,
				id: series.id,
			};
		});
	}

	return (
		<StyledSeriesPage>
			{dataToHeaderCard && <HeaderCard data={dataToHeaderCard} type={'series'} />}
			{dataToScrollerActros && (
				<Scroller data={dataToScrollerActros} name={'Actros'} linkTo={'person'} />
			)}
			{dataToReview && <Review data={dataToReview.slice(0, 2)} />}
			{dataToScrollerRedomendations && (
				<Scroller
					data={dataToScrollerRedomendations}
					name={'Recomendations'}
					linkTo={'tv-series'}
				/>
			)}
			{dataToScrollerSimilar && (
				<Scroller data={dataToScrollerSimilar} name={'Similar'} linkTo={'tv-series'} />
			)}
		</StyledSeriesPage>
	);
}

export default TvSeriesPage;
