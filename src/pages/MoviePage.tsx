import { useParams } from 'react-router-dom';

import { useRecomendationMovies } from '../hooks/recomendations/useRecomendationsMovies';
import { useSimilarMovies } from '../hooks/similar/useSimilarMovies';
import { useMovie } from '../hooks/movie/useMovie';
import { useMovieActros } from '../hooks/actros/useMovieActros';
import { useMovieReview } from '../hooks/review/useMovieReview';
import { useMovieImages } from '../hooks/images/useMovieImages';

import { preparingMoviesRecomendationsData } from '../utils/preparingDataToScroller/recomendationsMovies';
import { preparingMoviesSimilarData } from '../utils/preparingDataToScroller/similarMovies';
import { preparingMovieData } from '../utils/preparingDataToHeaderCard/perparingMovieData';
import { preparingActorsDataToScroller } from '../utils/preparingDataToScroller/actors';
import { preparingDataToReview } from '../utils/preparingDataToReview/preparingDataToReview';

import HeaderCard from '../features/headerCard/HeaderCard';
import styled from 'styled-components';
import Scroller from '../features/scroller/Scroller';
import Review from '../features/review/Review';
import ImageSlider from '../features/imageSlider/ImageSlider';

const StyledMoviePage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 32px;
	padding-bottom: 80px;
`;

function MoviePage() {
	const { movieId } = useParams();

	const { data: movieData } = useMovie(movieId!);
	const { data: recomendations } = useRecomendationMovies(movieId!);
	const { data: similar } = useSimilarMovies(movieId!);
	const { data: actros } = useMovieActros(movieId!);
	const { data: reviews } = useMovieReview(movieId!);
	const { data: images } = useMovieImages(movieId!);

	return (
		<StyledMoviePage>
			{movieData && <HeaderCard data={preparingMovieData(movieData)} type={'movie'} />}
			{actros && (
				<Scroller data={preparingActorsDataToScroller(actros)} name={'Actros'} linkTo={'person'} />
			)}
			{reviews && <Review data={preparingDataToReview(reviews).slice(0, 2)} />}
			{images && <ImageSlider data={images.backdrops.slice(0, 20)} />}
			{recomendations && (
				<Scroller
					data={preparingMoviesRecomendationsData(recomendations)}
					name={'Recomendations'}
					linkTo={'movie'}
				/>
			)}
			{similar && (
				<Scroller data={preparingMoviesSimilarData(similar)} name={'Similar'} linkTo={'movie'} />
			)}
		</StyledMoviePage>
	);
}

export default MoviePage;
