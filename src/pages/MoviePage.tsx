import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieById } from '../hooks/useMovieById';

import HeaderCard from '../features/headerCard/HeaderCard';
import styled from 'styled-components';
import Scroller from '../features/scroller/Scroller';

import { useActrosFromMovie } from '../hooks/useActrosFromMovie';
import { ActrosListType } from '../types/actorsListType';
import { useReviewFromMovie } from '../hooks/useReviewFromMovie';
import Review from '../features/review/Review';
import { useRecomendationsFromMovie } from '../hooks/useRecomendationsFromMovie';

const StyledMoviePage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 32px;
	padding-bottom: 80px;
	/* height: 300vh; */
`;

type ActrosType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

type RecomendationsMovieType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

type RewiewType = {
	author: string;
	content: string;
	reviewUrl: string;
	avatarPath: string;
	id: string;
	data: string;
};

function MoviePage() {
	const movieId = useParams();
	const { data: movie, isLoading } = useMovieById(movieId!.movieId!);
	const { data: actrosData } = useActrosFromMovie(movieId!.movieId!);
	const { data: reviewData } = useReviewFromMovie(movieId!.movieId!);
	const { data: recomendationsData } = useRecomendationsFromMovie(movieId!.movieId!);

	let actros: ActrosType[] | undefined = undefined;
	let reviews: RewiewType[] | undefined = undefined;
	let recomendationsMovie: RecomendationsMovieType[] | undefined = undefined;

	if (actrosData) {
		actros = actrosData.cast.map(actor => {
			return {
				header: actor.character,
				paragraph: actor.name,
				imagePath: actor.profile_path,
				id: actor.id,
			};
		});
	}

	if (recomendationsData) {
		recomendationsMovie = recomendationsData.results.map(movie => {
			return {
				header: movie.title,
				paragraph: movie.release_date,
				imagePath: movie.poster_path,
				id: movie.id,
			};
		});
	}

	if (reviewData && reviewData.results.length >= 2) {
		let filteredReview = reviewData.results.filter(review => {
			if (review.content.length >= 300 && review.author_details.avatar_path) {
				return true;
			}
		});

		reviews = filteredReview.map(review => {
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

	if (isLoading) return <div>Loading</div>;
	return (
		<StyledMoviePage>
			{movie && <HeaderCard data={movie}></HeaderCard>}
			{actros && <Scroller data={actros.slice(0, 20)} name={'Actros'} linkTo={'person'} />}
			{reviews && <Review data={reviews.slice(0, 2)} />}
			{recomendationsMovie && (
				<Scroller data={recomendationsMovie.slice(0.2)} name={'Recomendations'} linkTo={'movie'} />
			)}
		</StyledMoviePage>
	);
}

export default MoviePage;
