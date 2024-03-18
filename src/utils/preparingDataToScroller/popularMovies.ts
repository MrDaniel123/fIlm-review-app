import { type PopulatMovies } from '../../types/popular/movies';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const preparingPopularMovies = (movies: PopulatMovies) => {
	let popularMovies: ScrollerDataType[] = movies.results.map(movie => {
		return {
			header: movie.title,
			paragraph: movie.release_date,
			imagePath: movie.poster_path,
			id: movie.id,
		};
	});

	return popularMovies;
};
