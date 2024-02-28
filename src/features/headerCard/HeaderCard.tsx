import React from 'react';
import { MovieById } from '../../types/movieByIdType';
import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

import { Poster } from './Poster';
import { Title } from './Title';
import { Description } from './Description';
import { AdwanceInfromation } from './AdwanceInformation';
import { StarReview } from './StarReview';
import Genres from './Genre';

const logoStart = require('../../assets/logoStar.png');

const Foo = styled.div<{ $bgcImageUrl: string }>`
	position: absolute;
	top: 0;
	left: 0;
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

const StyledHeaderCard = styled.header<{ $bgcImageUrl: string }>`
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
	background-color: var(--color-black-filter);

	&::after {
		content: '';
		background-image: url(${props => props.$bgcImageUrl});
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background-size: cover;
		background-position: center;
		border-radius: var(--border-radius-large);
	}

	@media (min-width: ${breakPoint.large}px) {
		grid-template-columns: 2fr 3fr;
		grid-template-rows: auto;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		justify-items: flex-start;
	}
`;

const AdwanceInformationWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	justify-items: center;
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
		<>
			<StyledHeaderCard $bgcImageUrl={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}>
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
			</StyledHeaderCard>
		</>
	);
}

export default HeaderCard;
