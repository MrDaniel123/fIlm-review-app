import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { type NowPlayingMovieResult } from '../../types/nowPlaying/nowPlayingMoviesType';

const noImagePlaceholder = require('../../assets/noImagePlaceholder.png');

const Wrapper = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 13rem;
	min-height: 20rem;
	text-decoration: none;
`;

const ImagePoster = styled.img`
	height: 15rem;
	width: 10rem;
	border-radius: var(--border-radius-medium);
`;

const Title = styled.h4`
	font-size: var(--font-small);
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.04rem;
	width: 100%;
	text-align: center;
	color: var(--color-godGray);
`;

const Date = styled.h6`
	font-size: var(--font-small);
	font-weight: lighter;
	color: var(--color-godGray);
`;

type ItemProps = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
	linkTo?: 'movie' | 'tv-series' | 'person';
};

function Item({ header, paragraph, imagePath, id, linkTo = 'movie' }: ItemProps) {
	let linkToName = '/movie/';
	let image = `https://image.tmdb.org/t/p/w500${imagePath}`;

	if (linkTo === 'person') {
		linkToName = '/person/';
	}
	if (linkTo === 'tv-series') {
		linkToName = '/tv/';
	}

	if (!imagePath) {
		image = noImagePlaceholder;
	}

	return (
		<Wrapper to={`${linkToName}${id}`} reloadDocument={true}>
			<ImagePoster src={image} />
			<Title>{header}</Title>
			<Date>{paragraph}</Date>
		</Wrapper>
	);
}

export default Item;
