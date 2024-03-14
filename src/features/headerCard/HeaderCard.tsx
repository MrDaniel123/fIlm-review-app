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

//!!Fix undefinded type
type Props = {
	data: MovieById | undefined;
};

function HeaderCard({ data }: Props) {
	return (
		<StyledheaderCard
			$bgcImageUrl={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}>
			<Wrapper $bgcImageUrl={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}>
				<Poster src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
				<Title>{data?.title}</Title>
				<Description>{data?.overview}</Description>
				<Genres data={data?.genres} />
				<StarReview>
					<span>{data?.vote_average.toFixed(1)}</span>
					<img src={logoStart} alt='' />
				</StarReview>
				<AdwanceInformationWrapper>
					<AdwanceInfromation>
						<h4>Budget</h4>
						<span>{data?.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}$</span>
					</AdwanceInfromation>
					<AdwanceInfromation>
						<h4>Revenue</h4>
						<span>{data?.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}$</span>
					</AdwanceInfromation>
					<AdwanceInfromation>
						<h4>Relase Datet</h4>
						<span>{data?.release_date}</span>
					</AdwanceInfromation>
					<AdwanceInfromation>
						<h4>Runtime</h4>
						<span>{data?.runtime} Min</span>
					</AdwanceInfromation>
				</AdwanceInformationWrapper>
			</Wrapper>
		</StyledheaderCard>
	);
}

export default HeaderCard;
