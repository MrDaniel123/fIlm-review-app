import styled from 'styled-components';
import { type Genres as GenresType } from '../../types/movieByIdType';
import { breakPoint } from '../../styles/style';

const GenresWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.2rem;
	width: 90%;

	@media (min-width: ${breakPoint.large}px) {
		grid-column: 2/3;
	}

	@media (min-width: ${breakPoint.extraExtraLarge}px) {
		justify-content: flex-start;
		gap: 2.4rem;
	}
`;

const Genre = styled.div`
	background: linear-gradient(264.99deg, #369a52 5.42%, #3e9a36 99.19%);
	border-radius: 66px;
	padding: 8px 12px;

	&& h4 {
		font-size: var(--font-medium);
		color: var(--color-white);
	}
`;

type Props = {
	data: GenresType[] | undefined;
};

function Genres({ data }: Props) {
	const genresRender = data?.map(genre => (
		<Genre key={genre.id}>
			<h4>{genre.name}</h4>
		</Genre>
	));

	return <GenresWrapper>{data && genresRender}</GenresWrapper>;
}

export default Genres;
