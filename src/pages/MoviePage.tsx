import { useParams } from 'react-router-dom';

import { useRecomendationMovies } from '../hooks/recomendations/useRecomendationsMovies';
import { useSimilarMovies } from '../hooks/similar/useSimilarMovies';
import { useMovie } from '../hooks/movie/useMovie';

import { recomendationsMovies as preparingRecomendationsMovies } from '../utils/preparingDataToScroller/recomendationsMovies';
import { similarMovies as preparingSimilarMovies } from '../utils/preparingDataToScroller/similarMovies';
import { preparingMovieData } from '../utils/preparingDataToHeaderCard/perparingMovieData';

import { useActrosFromMovie } from '../hooks/useActrosFromMovie';
import { useReviewFromMovie } from '../hooks/useReviewFromMovie';
import Review from '../features/review/Review';

import ImageSlider from '../features/imageSlider/ImageSlider';
import { useMoviesImages } from '../hooks/useMovieImages';

import HeaderCard from '../features/headerCard/HeaderCard';
import styled from 'styled-components';
import Scroller from '../features/scroller/Scroller';
import { useSimilarTvSeries } from '../hooks/similar/useSimilarTvSeries';

const StyledMoviePage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 32px;
	padding-bottom: 80px;
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

type SimilatMoviesType = {
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

type Genres = {
	id: number;
	name: string;
};

type HeaderCardMovieProps = {
	backDropImagePath: string;
	posterPath: string;
	header: string;
	description: string;
	genres: Genres[];
	vote: number;
	budget: number;
	revenue: number;
	date: string;
	runtime: number;
};

function MoviePage() {
	const { movieId } = useParams();
	// const { data: movieData, isLoading } = useMovieById(movieId!.movieId!);
	// const { data: actrosData } = useActrosFromMovie(movieId!.movieId!);
	// const { data: reviewData } = useReviewFromMovie(movieId!.movieId!);
	// // const { data: recomendationsData } = useRecomendationsFromMovie(movieId!.movieId!);
	// const { data: similarMoviesData } = useSimilarMovies(movieId!.movieId!);
	// const { data: imageData } = useMoviesImages(movieId!.movieId!);

	// let dataToHeaderCard: HeaderCardMovieProps | undefined = undefined;
	// let actros: ActrosType[] | undefined = undefined;
	// let reviews: RewiewType[] | undefined = undefined;
	// let recomendationsMovie: RecomendationsMovieType[] | undefined = undefined;
	// let similarMovies: SimilatMoviesType[] | undefined = undefined;

	//-----------------------------

	const { data: movieData } = useMovie(movieId!);
	const { data: recomendationsMovies } = useRecomendationMovies(movieId!);
	const { data: similarMovies } = useSimilarMovies(movieId!);

	// if (actrosData) {
	// 	actros = actrosData.cast.map(actor => {
	// 		return {
	// 			header: actor.character,
	// 			paragraph: actor.name,
	// 			imagePath: actor.profile_path,
	// 			id: actor.id,
	// 		};
	// 	});
	// }

	// if (reviewData && reviewData.results.length >= 2) {
	// 	let filteredReview = reviewData.results.filter(review => {
	// 		if (review.content.length >= 300 && review.author_details.avatar_path) {
	// 			return true;
	// 		}
	// 	});

	// 	reviews = filteredReview.map(review => {
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
		<StyledMoviePage>
			{movieData && <HeaderCard data={preparingMovieData(movieData)} type={'movie'} />}
			{/* {actros && <Scroller data={actros.slice(0, 20)} name={'Actros'} linkTo={'person'} />} */}
			{/* {reviews && <Review data={reviews.slice(0, 2)} />} */}
			{/* {imageData && <ImageSlider data={imageData.backdrops.slice(0, 20)} />} */}
			{recomendationsMovies && (
				<Scroller
					data={preparingRecomendationsMovies(recomendationsMovies)}
					name={'Recomendations'}
					linkTo={'movie'}
				/>
			)}
			{similarMovies && (
				<Scroller data={preparingSimilarMovies(similarMovies)} name={'Similar'} linkTo={'movie'} />
			)}
		</StyledMoviePage>
	);
}

export default MoviePage;
