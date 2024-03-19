import styled from 'styled-components';
import { type ActorFilmography } from '../../types/actors/actorFilmography';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';
import { ListElement } from './ListElement';
import { List } from './List';

const StyledFilmographyList = styled.section`
	max-width: 1280px;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 16px;
`;

type FilmographyListProps = {
	list: ActorFilmography;
};

function FilmographyList({ list }: FilmographyListProps) {
	const renderListElement = list.cast.map(el => {
		let linkTo = '/movie/';
		if (el.media_type === 'tv') {
			linkTo = '/tv/';
		}

		return (
			<ListElement key={el.id + Math.random()}>
				<NavLink to={`${linkTo}${el.id}`}>{el.title || el.name}</NavLink>
			</ListElement>
		);
	});

	return (
		<StyledFilmographyList>
			<Header>Filmography</Header>
			<List>{renderListElement}</List>
		</StyledFilmographyList>
	);
}

export default FilmographyList;
