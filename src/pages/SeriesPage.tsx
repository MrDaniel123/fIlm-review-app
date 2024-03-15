import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useTvSeriesById } from '../hooks/useTvSeriesById';
import { TvSeriesbyIdResponseType } from '../types/tvSeriesByIdType';
import HeaderCard from '../features/headerCard/HeaderCard';

const StyledSeriesPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 32px;
	padding-bottom: 80px;
`;

type HeaderCardTypeSeriesType = {
	backDropImagePath: string;
	posterPath: string;
	header: string;
	description: string;
	genres: { id: number; name: string }[];
	vote: number;
	popularity: number;
	firstAirDate: string;
	lastAirDate: string;
	productionCompany: string;
};
function TvSeriesPage() {
	const { tv } = useParams();
	const { data } = useTvSeriesById(tv!);

	let dataToHeaderCard: HeaderCardTypeSeriesType | undefined = undefined;

	if (data) {
		let genre = data.genres.map(genre => {
			return {
				id: genre.id,
				name: genre.name,
			};
		});

		let company = data.networks[0].name;

		dataToHeaderCard = {
			backDropImagePath: data.backdrop_path,
			posterPath: data.poster_path,
			header: data.name,
			description: data.overview,
			genres: genre,
			vote: data.vote_average,
			popularity: data.popularity,
			firstAirDate: data.first_air_date,
			lastAirDate: data.last_air_date,
			productionCompany: company,
		};
	}

	return (
		<StyledSeriesPage>
			{dataToHeaderCard && <HeaderCard data={dataToHeaderCard} type={'series'} />}
		</StyledSeriesPage>
	);
}

export default TvSeriesPage;
