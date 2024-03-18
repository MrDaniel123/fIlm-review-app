import styled from 'styled-components';

import { ActrosDetals } from '../../types/actors/actrosDetals';
import { useState } from 'react';
import { breakPoint } from '../../styles/style';
import { ShowMoreButton } from './ShowMorebutton';
import { Biography } from './Biography';
import { DetalsPharagraph, DetalsWrapper } from './Detals';
import { PorofileImage } from './ProfileImage';
import { ActorName } from './ActrorName';

const StyledActrosDetals = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 1.6rem;
	flex-wrap: wrap;
	position: relative;
	width: 90%;
	max-width: 1280px;

	@media (min-width: ${breakPoint.large}px) {
		flex-wrap: nowrap;
	}
`;

type ActrosDetalsProps = {
	actor: ActrosDetals;
};

function ActroDetals({ actor }: ActrosDetalsProps) {
	const [showMoreBiography, setShowMoreBiography] = useState(false);

	const handleShowMoreBiography = () => {
		setShowMoreBiography(!showMoreBiography);
	};

	let gender: string = '';
	if (actor.gender === 0) {
		gender = 'Not set / not specified';
	} else if (actor.gender === 1) {
		gender = 'Female';
	} else if (actor.gender === 2) {
		gender = 'Male';
	} else if (actor.gender === 3) {
		gender = 'Non-binary';
	}

	return (
		<StyledActrosDetals>
			<PorofileImage
				src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
				alt='Actror Profile'
			/>
			<DetalsWrapper>
				<ActorName>{actor.name}</ActorName>
				<DetalsPharagraph>
					<strong>Know For: </strong>
					<bdi>{actor.known_for_department}</bdi>
				</DetalsPharagraph>
				<DetalsPharagraph>
					<strong>Gender: </strong>
					<bdi>{gender}</bdi>
				</DetalsPharagraph>
				<DetalsPharagraph>
					<strong>Birth Date: </strong>
					<bdi>{actor.birthday}</bdi>
				</DetalsPharagraph>
				<DetalsPharagraph>
					<strong>Place Of Birth: </strong>
					<bdi>{actor.place_of_birth}</bdi>
				</DetalsPharagraph>

				<Biography>
					<strong>Biography: </strong>
					{showMoreBiography ? (
						<span>{actor.biography}</span>
					) : (
						<span>{actor.biography.slice(0, 300)}</span>
					)}
				</Biography>
				<ShowMoreButton onClick={handleShowMoreBiography}>
					{showMoreBiography ? 'Show Less' : 'Show More'}
				</ShowMoreButton>
			</DetalsWrapper>
		</StyledActrosDetals>
	);
}

export default ActroDetals;
