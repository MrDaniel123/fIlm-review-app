import { useState } from 'react';
import styled from 'styled-components';
import { useMultiSearch } from '../../hooks/search/useMultiSearch';
import Answer from './Answer';

const StyledSearch = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 1.6rem;
	background-color: #ffffff;
	width: 100%;
	/* height: 60%; */
	padding: 1.6rem 0;
	border-bottom: 1px solid black;
	padding-top: 80px;
`;

const Input = styled.input`
	width: 80%;
	height: 4rem;
	font-size: 1.6rem;
	padding: 0.5rem;
`;

type Props = {
	hideSearch: () => void;
};

function Search({ hideSearch }: Props) {
	const [searchQuery, setSearchQuery] = useState('');
	const { data: searchAnswers } = useMultiSearch(searchQuery);
	const searchAnswersMin = searchAnswers?.results.slice(0, 5);

	const handleSetQuery = (e: any) => {
		setSearchQuery(e);
	};

	const renderAnswers = searchAnswersMin?.map(result => (
		<Answer
			key={result.id}
			id={result.id}
			name={result.media_type === 'movie' ? result.title : result.name}
			mediaType={result.media_type}
			imagePath={result.media_type === 'perosn' ? result.profile_path : result.poster_path}
			hideSearch={hideSearch}
		/>
	));

	return (
		<StyledSearch>
			<Input type='text' onChange={e => handleSetQuery(e.target.value)} />
			{searchAnswers && renderAnswers}
		</StyledSearch>
	);
}

export default Search;
