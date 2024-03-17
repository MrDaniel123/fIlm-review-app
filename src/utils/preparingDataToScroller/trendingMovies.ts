import { TrendingMovies } from '../../types/trending/movies';

type ScrollerDataType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

export const trendingMovies = (movies: TrendingMovies) => {
	let trendingMovies: ScrollerDataType[] = movies.results.map(movie => {
		return {
			header: movie.title,
			paragraph: movie.release_date,
			imagePath: movie.poster_path,
			id: movie.id,
		};
	});

	return trendingMovies;
};
