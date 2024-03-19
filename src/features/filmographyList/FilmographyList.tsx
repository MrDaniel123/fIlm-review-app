import styled from 'styled-components';
import { type ActorFilmography } from '../../types/actors/actorFilmography';
import { NavLink } from 'react-router-dom';
import { Header } from './Header';

const StyledFilmographyList = styled.section`
	max-width: 1280px;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 16px;
`;

const List = styled.ol`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 12px;
	width: 90%;
	max-width: 800px;
	list-style-type: disc;
	padding: 2rem;
	border-radius: var(--border-radius-medium);
	box-shadow: var(--shadow-primary);
`;

const ListElement = styled.li`
	font-size: 16px;
	font-family: bold;
	width: 100%;

	border: 1px solid #000000;
	border-radius: var(--border-radius-small);
	padding: 1rem;
	cursor: pointer;

	&:hover {
		color: #5050c7;
		background-color: #bababa;
	}
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
