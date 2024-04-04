import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { type PopulatMoviesResults } from '../../types/popular/movies';
import { type NowPlayingMovieResult } from '../../types/nowPlaying/nowPlayingMoviesType';
import { type TopRatedMoviesResults } from '../../types/topRated/topRated';
import { type UpcomingMoviesResults } from '../../types/upcoming/upcomingMovies';

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

type ListElementProps =
	| NowPLayingMovieProps
	| PopularMovieProps
	| TopRatedMoviesProps
	| UpcomingMoviesProps;

function ListElement({ data, type }: ListElementProps) {
	if (type === 'popular') {
		return (
			<StyledListElement to={`/movie/${data.id}`}>
				<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='Poster ' />
				<Title>{data.title}</Title>
				<Date>{data.release_date}</Date>
				<Description>{data.overview.slice(0, 160)}</Description>
			</StyledListElement>
		);
	}

	if (type === 'nowPlaying') {
		return (
			<StyledListElement to={`/movie/${data.id}`}>
				<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='Poster' />
				<Title>{data.title}</Title>
				<Date>{data.release_date}</Date>
				<Description>{data.overview.slice(0, 160)}</Description>
			</StyledListElement>
		);
	}

	if (type === 'topRated') {
		return (
			<StyledListElement to={`/movie/${data.id}`}>
				<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='Poster' />
				<Title>{data.title}</Title>
				<Date>{data.release_date}</Date>
				<Description>{data.overview.slice(0, 160)}</Description>
			</StyledListElement>
		);
	}

	if (type === 'upcoming') {
		return (
			<StyledListElement to={`/movie/${data.id}`}>
				<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt='Poster' />
				<Title>{data.title}</Title>
				<Date>{data.release_date}</Date>
				<Description>{data.overview.slice(0, 160)}</Description>
			</StyledListElement>
		);
	}

	return <div>ListElement</div>;
}

export default ListElement;
