import styled from 'styled-components';
import { colors } from '../../styles/style';

const searchLogo = require('../../assets/logoSearch.png');

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& img {
		cursor: pointer;
		border-radius: 0.8rem;
		padding: 1rem;
		width: 60px;
		&:hover {
			background-color: ${colors.whiteHover};
		}
	}
`;

const StyledSearchButton = styled.button`
	border: none;
	background-color: transparent;
`;

type Props = {
	type?: 'full' | 'small';
	showSearch: () => void;
};

function SearchButton({ type, showSearch }: Props) {
	return (
		<SearchContainer>
			<StyledSearchButton onClick={() => showSearch()}>
				<img src={searchLogo} alt='Search logo' />
			</StyledSearchButton>
		</SearchContainer>
	);
}

export default SearchButton;
