import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { result } from '../../types/nowPLayingType';

const Wrapper = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 130px;
	min-height: 200px;
	text-decoration: none;

	/* background-color: cadetblue; */
`;

const ImagePoster = styled.img`
	height: 150px;
	width: 100px;
	border-radius: 12px;
`;

const Title = styled.h4`
	font-size: 12px;
	text-transform: uppercase;
	font-weight: bold;
	width: 100%;
	text-align: center;
	color: black;
`;

const Date = styled.h6`
	font-size: 8px;
	font-weight: lighter;
	color: black;
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
