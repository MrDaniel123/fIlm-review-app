import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Scroller from '../features/scroller/Scroller';
import ActroDetals from '../features/actorDetals/ActroDetals';
import FilmographyList from '../features/filmographyList/FilmographyList';

import { useActroDetals } from '../hooks/actros/useActrosDetals';
import { useActorFilmography } from '../hooks/actros/useActorFilmography';
import { useActorMovies } from '../hooks/actros/useActorMovies';
import { useActortvSeries } from '../hooks/actros/useActorTvSeries';

import { preparingActorMoviestoScroller } from '../utils/preparingDataToScroller/actorMovies';
import { preparingActorTvSeriestoScroller } from '../utils/preparingDataToScroller/actorTvSeries';
import { breakPoint } from '../styles/style';

const StyledPersonPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 32px;
	padding: 80px 0;

	@media (min-width: ${breakPoint.large}px) {
		padding: 120px 0;
	}
`;

function PersonPage() {
	const { personId } = useParams();
	const { data: actor } = useActroDetals(personId!);
	const { data: actorMovies } = useActorMovies(personId!);
	const { data: actorTvSeries } = useActortvSeries(personId!);
	const { data: actorFilmography } = useActorFilmography(personId!);

	return (
		<StyledPersonPage>
			{actor && <ActroDetals actor={actor} />}
			{actorMovies && actorMovies.cast.length >= 20 ? (
				<Scroller
					data={preparingActorMoviestoScroller(actorMovies)}
					name={'Know For Movies'}
					linkTo={'movie'}
				/>
			) : null}
			{actorTvSeries && actorTvSeries.cast.length >= 20 ? (
				<Scroller
					data={preparingActorTvSeriestoScroller(actorTvSeries)}
					name={'Know For TvSeries'}
					linkTo={'tv-series'}
				/>
			) : null}

			{actorFilmography && <FilmographyList list={actorFilmography} />}
		</StyledPersonPage>
	);
}

export default PersonPage;
