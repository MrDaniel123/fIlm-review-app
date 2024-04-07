import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Selector from '../ui/Selector';

const StyledPersonsPage = styled.div`
	width: 100%;
	padding: 120px 0;
	display: flex;
	gap: 1.6rem;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

function TvSeriesPage() {
	const location = useLocation();

	return (
		<StyledPersonsPage>
			<Selector
				categories={['popular', 'trending', 'topRated', 'onTheAir']}
				name={'Tv Series'}
				acturalPath={location.pathname.slice(11, location.pathname.length)}
				linkTo={'tv-series'}
			/>
			<Outlet />
		</StyledPersonsPage>
	);
}

export default TvSeriesPage;
