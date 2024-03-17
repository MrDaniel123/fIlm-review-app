import { type SimilarMovies } from '../../types/similar/similarMovies';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const preparingMoviesSimilarData = (movies: SimilarMovies) => {
	let similarMovies: ScrollerDataType[] = movies.results.map(movie => {
		return {
			header: movie.title,
			paragraph: movie.release_date,
			imagePath: movie.poster_path,
			id: movie.id,
		};
	});

	return similarMovies;
};
