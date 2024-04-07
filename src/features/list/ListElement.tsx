import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { type PopulatMoviesResults } from '../../types/popular/movies';
import { type NowPlayingMovieResult } from '../../types/nowPlaying/nowPlayingMoviesType';
import { type TopRatedMoviesResults } from '../../types/topRated/movies';
import { type UpcomingMoviesResults } from '../../types/upcoming/upcomingMovies';
import { type PopularActrosResults } from '../../types/popular/actros';
import { type TrendingTvSeriesResult } from '../../types/trending/tvSeries';
import { type TopRatedTvSeriesResult } from '../../types/topRated/tvSeries';
import { type PopularTvSeriesResult } from '../../types/popular/tvSeries';
import { type OnTheAirTvSeriesResult } from '../../types/onTheAir/tvSeries';

const StyledListElement = styled(NavLink)`
	width: 100%;
	max-width: 450px;
	height: 186px;
	display: grid;
	grid-template-columns: 120px 1fr;
	grid-template-rows: 60px 20px 1fr;
	align-items: center;
	justify-items: center;
	border-radius: 6px;
	border: 3px solid #818181;
`;

const Image = styled.img`
	grid-row: 1/4;
	grid-column: 1/2;
	width: 120px;
	height: 180px;
	object-fit: cover;
	border-radius: 3px 0 0 3px;
`;

const Title = styled.h2`
	font-size: 2rem;
	font-family: bold;
	grid-column: 2/3;
	grid-row: 1/2;
`;

const Date = styled.h3`
	font-size: 1.2rem;
	color: #7b7b7b;
	grid-column: 2/3;
	grid-row: 2/3;
`;

const Description = styled.p`
	font-size: 1.2rem;
	grid-column: 2/3;
	grid-row: 3/4;
	padding: 1rem;
`;

type PopularMovieProps = {
	type: 'popular';
	data: PopulatMoviesResults;
};

type NowPLayingMovieProps = {
	type: 'nowPlaying';
	data: NowPlayingMovieResult;
};

type TopRatedMoviesProps = {
	type: 'topRated';
	data: TopRatedMoviesResults;
};

type UpcomingMoviesProps = {
	type: 'upcoming';
	data: UpcomingMoviesResults;
};

type PopularActrosProps = {
	type: 'persons';
	data: PopularActrosResults;
};

type TrendingTvSeriesProps = {
	type: 'trending-tvSeries';
	data: TrendingTvSeriesResult;
};

type TopRatedTvSeriesProps = {
	type: 'topRated-tvSeries';
	data: TopRatedTvSeriesResult;
};

type PopularTvSeriesProps = {
	type: 'popular-tvSeries';
	data: PopularTvSeriesResult;
};

type OnTheAirTvSeriesProps = {
	type: 'onTheAir-tvSeries';
	data: OnTheAirTvSeriesResult;
};

type ListElementProps =
	| NowPLayingMovieProps
	| PopularMovieProps
	| TopRatedMoviesProps
	| UpcomingMoviesProps
	| PopularActrosProps
	| TrendingTvSeriesProps
	| TopRatedTvSeriesProps
	| PopularTvSeriesProps
	| OnTheAirTvSeriesProps;

function ListElement({ data, type }: ListElementProps) {
	if (type === 'popular' || type === 'nowPlaying' || type === 'topRated' || type === 'upcoming') {
		return (
			<StyledListElement to={`/movie/${data.id}`}>
				<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='Poster ' />
				<Title>{data.title}</Title>
				<Date>{data.release_date}</Date>
				<Description>{data.overview.slice(0, 160)}</Description>
			</StyledListElement>
		);
	}

	if (
		type === 'trending-tvSeries' ||
		type === 'topRated-tvSeries' ||
		type === 'popular-tvSeries' ||
		type === 'onTheAir-tvSeries'
	) {
		return (
			<StyledListElement to={`/tv/${data.id}`}>
				<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='Poster ' />
				<Title>{data.name}</Title>
				<Date>{data.first_air_date}</Date>
				<Description>{data.overview.slice(0, 160)}</Description>
			</StyledListElement>
		);
	}

	if (type === 'persons') {
		return (
			<StyledListElement to={`/person/${data.id}`}>
				<Image src={`https://image.tmdb.org/t/p/w500${data.profile_path}`} alt='Poster ' />
				<Title>{data.name}</Title>

				<Description>{data.original_name.slice(0, 160)}</Description>
			</StyledListElement>
		);
	}

	return <div>ListElement</div>;
}

export default ListElement;
