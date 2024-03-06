import React from 'react';
import { useParams } from 'react-router-dom';
import { useMovieById } from '../hooks/useMovieById';

import HeaderCard from '../features/headerCard/HeaderCard';
import styled from 'styled-components';
import Scroller from '../features/scroller/Scroller';

import { useActrosFromMovie } from '../hooks/useActrosFromMovie';
import { ActrosListType } from '../types/actorsListType';

const StyledMoviePage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 32px;
	/* height: 300vh; */
`;

type ActrosType = {
	header: string;
	paragraph: string;
	imagePath: string;
	id: number;
};

function MoviePage() {
	const movieId = useParams();
	const { data: movie, isError, isLoading } = useMovieById(movieId!.movieId!);
	const { data: actrosData } = useActrosFromMovie(movieId!.movieId!);
	let actros: ActrosType[] | undefined = undefined;

	if (actrosData) {
		actros = actrosData.cast.map(actor => {
			return {
				header: actor.character,
				paragraph: actor.name,
				imagePath: actor.profile_path,
				id: actor.id,
			};
		});
	}

	if (isLoading) return <div>Loading</div>;
	return (
		<StyledMoviePage>
			{movie && <HeaderCard data={movie}></HeaderCard>}
			{actros && <Scroller data={actros.slice(0, 20)} name={'Actros'} linkTo={'person'} />}
		</StyledMoviePage>
	);
}

export default MoviePage;
