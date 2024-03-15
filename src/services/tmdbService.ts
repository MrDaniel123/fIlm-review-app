export const tmdbKey = process.env.REACT_APP_API_KEY;

export const NowPlayingMovieUrl =
	'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const movieByIdUrl = 'https://api.themoviedb.org/3/movie/';

export const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const trendingMoviesUrl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

export const actrosFromMovieUrl = 'https://api.themoviedb.org/3/movie/';

export const movieUrl = 'https://api.themoviedb.org/3/movie/';

//TODO New way to url

export const populatActrossUrl = `https://api.themoviedb.org/3/person/popular?language=en-US&page=1?&api_key=${tmdbKey}`;

export const trendingTvSeriesUrl = `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${tmdbKey}`;

export const tvSeriesByIdUrl = 'https://api.themoviedb.org/3/tv/';

export const tvSeriesActrosUrl = 'https://api.themoviedb.org/3/tv/';

export const tvSeriesReviewUrl = 'https://api.themoviedb.org/3/tv/';

export const tvSeriesRecomendationUrl = 'https://api.themoviedb.org/3/tv/';

export const tvSeriesSimilarUrl = 'https://api.themoviedb.org/3/tv/';
