import axios from 'axios';
import { TMDB_KEY } from '../tmdnKey';
import { type ActrosType } from '../../types/actors/actrosType';
import { type ActrosDetals } from '../../types/actors/actrosDetals';
import { type ActorFilmography } from '../../types/actors/actorFilmography';
import { type ActorMovies } from '../../types/actors/actorMovies';
import { type ActortvSeries } from '../../types/actors/actroTvSeries';

const baseActrosMovieUrl = 'https://api.themoviedb.org/3/movie/';
const baseActrosTvSeriesUrl = 'https://api.themoviedb.org/3/tv/';
const baseActrosDetalsUrl = 'https://api.themoviedb.org/3/person/';

export const getMovieActros = async (movieId: string) => {
	const response = await axios.get<ActrosType>(
		`${baseActrosMovieUrl}${movieId}/credits?language=en-US%3F&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getTvSeriesActros = async (tvSeriesId: string) => {
	const response = await axios.get<ActrosType>(
		`${baseActrosTvSeriesUrl}${tvSeriesId}/credits?language=en-US%3F&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getActorDetals = async (actorId: string) => {
	const response = await axios.get<ActrosDetals>(
		`${baseActrosDetalsUrl}${actorId}?language=en-US&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getActorFilmography = async (actorId: string) => {
	const response = await axios.get<ActorFilmography>(
		`${baseActrosDetalsUrl}${actorId}/combined_credits?language=en-US&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getActorMovies = async (actorId: string) => {
	const response = await axios.get<ActorMovies>(
		`${baseActrosDetalsUrl}${actorId}/movie_credits?language=en-US&api_key=${TMDB_KEY}`
	);

	return response.data;
};

export const getActorTvSeries = async (actorId: string) => {
	const response = await axios.get<ActortvSeries>(
		`${baseActrosDetalsUrl}${actorId}/tv_credits?language=en-US&api_key=${TMDB_KEY}`
	);

	return response.data;
};
