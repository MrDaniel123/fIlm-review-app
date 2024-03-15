import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { type MovieById } from '../../types/movieByIdType';
import { breakPoint } from '../../styles/style';

import Genres from './Genre';
import { Poster } from './Poster';
import { Title } from './Title';
import { Description } from './Description';
import { AdwanceInfromation } from './AdwanceInformation';
import { StarReview } from './StarReview';

const logoStart = require('../../assets/logoStar.png');

const StyledheaderCard = styled(motion.div)<{ $bgcImageUrl: string }>`
	z-index: -999999;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 80px;

	width: 100%;

	background-image: url(${props => props.$bgcImageUrl});
	background-size: cover;
	background-position: center;
`;

const Wrapper = styled.header<{ $bgcImageUrl: string }>`
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	grid-template-rows: 2fr;
	align-items: center;
	gap: 1.2rem;
	position: relative;
	padding: 24px 0;
	max-width: 1400px;
	width: 90%;
	min-width: 36rem;
	min-height: 54rem;
	margin: 48px 0;
	border-radius: var(--border-radius-large);
	background: rgba(0, 0, 0, 0.5);
	backdrop-filter: saturate(250%) blur(4px);

	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

	@media (min-width: ${breakPoint.large}px) {
		grid-template-columns: 2fr 3fr;
		grid-template-rows: auto;
	}
`;

const AdwanceInformationWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	justify-items: center;
	gap: 12px;
	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}
`;

// type HeaderCardDataType = {
// 	backDropImagePath: string;
// 	posterPath: string;
// 	header: string;
// 	description: string;
// 	genres?: { id: number; name: string }[];
// 	vote: number;
// 	budget?: number;
// 	revenue?: number;
// 	date?: string;
// 	runtime?: string;
// 	status?: string;
// 	popularity?: number;
// };

type Genres = {
	id: number;
	name: string;
};

type HeaderCardMovieProps = {
	backDropImagePath: string;
	posterPath: string;
	header: string;
	description: string;
	genres: Genres[];
	vote: number;
	budget: number;
	revenue: number;
	date: string;
	runtime: number;
};

type HeaderCardTvSeriesProps = {
	backDropImagePath: string;
	posterPath: string;
	header: string;
	description: string;
	genres: Genres[];
	vote: number;
	popularity: number;
	firstAirDate: string;
	lastAirDate: string;
	productionCompany: string;
};

type HeaderCardMovieType = {
	type: 'movie';
	data: HeaderCardMovieProps;
};

type HeaderCardTvSeriesType = {
	type: 'series';
	data: HeaderCardTvSeriesProps;
};

type HeaderCardProps = HeaderCardMovieType | HeaderCardTvSeriesType;

function HeaderCard(props: HeaderCardProps) {
	return (
		<StyledheaderCard
			$bgcImageUrl={`https://image.tmdb.org/t/p/original${props.data.backDropImagePath}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}>
			<Wrapper $bgcImageUrl={`https://image.tmdb.org/t/p/original${props.data.backDropImagePath}`}>
				<Poster src={`https://image.tmdb.org/t/p/w500${props.data.posterPath}`} />
				<Title>{props.data.header}</Title>
				<Description>{props.data.description}</Description>
				<Genres data={props.data.genres} />
				<StarReview>
					<span>{props.data.vote.toFixed(1)}</span>
					<img src={logoStart} alt='' />
				</StarReview>
				<AdwanceInformationWrapper>
					{props.type === 'movie' && (
						<>
							<AdwanceInfromation>
								{props.data.budget && ''}
								<h4>Budget</h4>
								<span>{props.data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}$</span>
							</AdwanceInfromation>
							<AdwanceInfromation>
								<h4>Revenue</h4>
								<span>{props.data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}$</span>
							</AdwanceInfromation>
							<AdwanceInfromation>
								<h4>Relase Datet</h4>
								<span>{props.data.date}</span>
							</AdwanceInfromation>

							<AdwanceInfromation>
								<h4>Runtime</h4>
								<span>{props.data.runtime} Min</span>
							</AdwanceInfromation>
						</>
					)}

					{props.type === 'series' && (
						<>
							<AdwanceInfromation>
								<h4>Company</h4>
								<span>{props.data.productionCompany}</span>
							</AdwanceInfromation>
							<AdwanceInfromation>
								<h4>First Episode date</h4>
								<span>{props.data.firstAirDate} </span>
							</AdwanceInfromation>
							<AdwanceInfromation>
								<h4>Popularity</h4>
								<span>{props.data.popularity}</span>
							</AdwanceInfromation>

							<AdwanceInfromation>
								<h4>Last Episode date</h4>
								<span>{props.data.lastAirDate} </span>
							</AdwanceInfromation>
						</>
					)}
				</AdwanceInformationWrapper>
			</Wrapper>
		</StyledheaderCard>
	);
}

export default HeaderCard;
