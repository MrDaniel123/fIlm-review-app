import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { result } from '../../types/nowPLayingType';

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

type Props = {
	data: result;
};

function Item({ data }: Props) {
	return (
		<Wrapper to={`/movie/${data.id}`}>
			<ImagePoster src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
			<Title>{data.title}</Title>
			<Date>{data.release_date}</Date>
		</Wrapper>
	);
}

export default Item;
