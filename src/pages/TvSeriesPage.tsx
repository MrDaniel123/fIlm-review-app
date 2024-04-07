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

	let actualCategory = 'popular';
	if (location.pathname.includes('trending')) {
		actualCategory = 'trending';
	} else if (location.pathname.includes('onTheAir')) {
		actualCategory = 'onTheAir';
	} else if (location.pathname.includes('topRated')) {
		actualCategory = 'topRated';
	}

	return (
		<StyledPersonsPage>
			<Selector
				categories={['popular', 'trending', 'topRated', 'onTheAir']}
				name={'Tv Series'}
				linkTo={'tv-series'}
				actualCategory={actualCategory}
			/>
			<Outlet />
		</StyledPersonsPage>
	);
}

export default TvSeriesPage;
