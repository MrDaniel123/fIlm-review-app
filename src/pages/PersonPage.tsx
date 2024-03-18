import styled from 'styled-components';
import ActroDetals from '../features/actorDetals/ActroDetals';
import { useParams } from 'react-router-dom';
import { useActroDetals } from '../hooks/actros/useActrosDetals';
import { breakPoint } from '../styles/style';

const StyledPersonPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	margin: 80px 0;

	@media (min-width: ${breakPoint.large}px) {
		margin: 120px 0;
	}
`;

function PersonPage() {
	const { personId } = useParams();
	const { data: actor } = useActroDetals(personId!);

	return <StyledPersonPage>{actor && <ActroDetals actor={actor} />}</StyledPersonPage>;
}

export default PersonPage;
