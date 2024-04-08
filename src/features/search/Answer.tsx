import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const personAvatar = require('../../assets/perosnAvatar.png');

const StyledAnsver = styled(NavLink)`
	border: none;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	width: 80%;
	height: 50px;
	border: 1px solid #000;
	border-radius: 10px;
	padding: 5px 10px;
`;

const Poster = styled.img`
	width: 3rem;
`;

const Name = styled.h3`
	font-size: 2rem;
	font-weight: bold;
`;

type Props = {
	name: string | undefined;
	mediaType: string | undefined;
	imagePath: string | undefined;
	id: number;
	hideSearch: () => void;
};

function Answer({ name, mediaType, imagePath, id, hideSearch }: Props) {
	console.log(mediaType);

	if (mediaType === 'movie') {
		return (
			<StyledAnsver to={`movie/${id}`} onClick={hideSearch}>
				<Poster src={`https://image.tmdb.org/t/p/w92${imagePath}`} alt='Movie' />
				<Name>{name}</Name>
			</StyledAnsver>
		);
	}

	if (mediaType === 'tv') {
		return (
			<StyledAnsver to={`tv/${id}`} onClick={hideSearch}>
				<Poster src={`https://image.tmdb.org/t/p/w92${imagePath}`} alt='Movie' />
				<Name>{name}</Name>
			</StyledAnsver>
		);
	}

	if (mediaType === 'person') {
		return (
			<StyledAnsver to={`person/${id}`} onClick={hideSearch}>
				<Poster src={personAvatar} alt='Movie' />
				<Name>{name}</Name>
			</StyledAnsver>
		);
	}

	return null;
}

export default Answer;
