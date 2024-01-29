import React from 'react';
import { MovieById } from '../../types/movieByIdType';
import styled from 'styled-components';
import { borderRadius, breakPoint, colors, fontSizes } from '../../styles/style';

import { Poster } from './Poster';
import { Title } from './Title';
import { Description } from './Description';
import { AdwanceInfromation } from './AdwanceInformation';
import { StarReview } from './StarReview';
import { Genre } from './Genre';

const logoStart = require('../../assets/logoStar.png');

const MainReviewWrapper = styled.div<{ $bgcImageUrl: string }>`
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

const SectionWrapper = styled.section`
	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	grid-template-rows: 2fr;
	align-items: center;
	gap: 12px;
	position: relative;
	padding: 24px 0;
	max-width: 1400px;
	width: 90%;
	min-width: 360px;
	min-height: 540px;
	margin: 48px 0;
	border-radius: ${borderRadius.posterNormal};
	background-color: ${colors.popUpFilterBlack};

	@media (min-width: ${breakPoint.large}px) {
		grid-template-columns: 2fr 3fr;
		grid-template-rows: auto;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		justify-items: flex-start;
	}
`;

const GenreWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	width: 90%;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		justify-content: flex-start;
		gap: 24px;
	}
`;

const AdwanceInformationWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}
`;

//!!Fix undefinded type
type Props = {
	data: MovieById | undefined;
};

function ReviewCard({ data }: Props) {
	const genresRender = data?.genres.map(genre => (
		<Genre key={genre.id}>
			<h4>{genre.name}</h4>
		</Genre>
	));
	return (
		<>
			<MainReviewWrapper $bgcImageUrl={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}>
				<SectionWrapper>
					<Poster src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} />
					<Title>{data?.title}</Title>
					<Description>{data?.overview}</Description>
					<GenreWrapper>{genresRender}</GenreWrapper>
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
				</SectionWrapper>
			</MainReviewWrapper>
		</>
	);
}

export default ReviewCard;
