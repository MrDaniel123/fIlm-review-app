import { type RecomendationsMovies } from '../../types/recomendations/recomendationsMovieType';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const recomendationsMovies = (movies: RecomendationsMovies) => {
	let recomendationsMovies: ScrollerDataType[] = movies.results.map(movie => {
		return {
			header: movie.title,
			paragraph: movie.release_date,
			imagePath: movie.poster_path,
			id: movie.id,
		};
	});

	return recomendationsMovies;
};
