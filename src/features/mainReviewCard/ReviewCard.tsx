import React from 'react';
import { MovieById } from '../../types/movieByIdType';
import styled from 'styled-components';

import { breakPoint } from '../../styles/breakpoints';

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
	border-radius: 32px;
	background-color: #00000069;

	@media (min-width: ${breakPoint.large}px) {
		grid-template-columns: 2fr 3fr;
		grid-template-rows: auto;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		justify-items: flex-start;
	}
`;

//TODO Create a poster UI component Autsinde the fedatures
const Poster = styled.img`
	width: 300px;
	height: 450px;
	border-radius: 12px;
	object-fit: cover;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 1/2;
		grid-row: 1/6;
	}
	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		width: 350px;
		height: 500px;
		margin-left: 16px;
	}
`;

const Title = styled.h1`
	font-size: 64px;
	font-weight: bold;
	color: white;
	width: 100%;
	text-align: center;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
		grid-row: 1/2;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		font-size: 74px;
		text-align: left;
		width: 90%;
	}
`;

const Description = styled.p`
	color: white;
	font-size: 18px;
	width: 90%;
	text-align: center;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		font-size: 24px;
		text-align: left;
	}
`;

const GenreWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 90%;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		justify-content: flex-start;
		gap: 24px;
	}
`;

const Genre = styled.div`
	background: linear-gradient(264.99deg, #369a52 5.42%, #3e9a36 99.19%);
	border-radius: 66px;
	padding: 8px 12px;

	&& h4 {
		font-size: 20px;
		color: white;
	}
`;

const StarReview = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(90deg, #22994a 1.52%, #275e4a 101.3%);
	border-radius: 93px;
	padding: 4px 12px;

	& span {
		font-size: 26px;
		font-weight: bold;
		color: white;
		margin-right: 8px;
	}

	& img {
		width: 35px;
	}

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		padding: 12px 20px;

		& span {
			font-size: 32px;
			margin-right: 16px;
		}
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

const AdwanceInfromation = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 50%;

	& h4 {
		width: 100%;
		font-size: 24px;
		color: white;
		text-align: center;
	}

	& span {
		width: 100%;
		font-size: 18px;
		text-align: center;
		color: #ffffff87;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		padding: 8px 0;
		& h4 {
			font-size: 28px;
		}

		& span {
			font-size: 22px;
		}
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
