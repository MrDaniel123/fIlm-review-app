import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSelector = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 16px;

	width: 90%;
	max-width: 1280px;
`;

const AnchorHeader = styled.h3`
	font-size: 2.8rem;
	color: #28ffb2;
	padding: 5px;

	&::first-letter {
		text-transform: uppercase;
	}
`;

const AnchorButton = styled.button`
	border: none;
	width: 200px;
	border-radius: 40px;
	background-color: #302e88;

	&::first-letter {
		text-transform: uppercase;
	}
`;

const AnchorWrapper = styled.div`
	position: fixed;
`;

const CategoryAnchor = styled.div`
	background-color: #302e88;
	border-radius: 30px;
	padding: 5px 15px;
	width: 200px;
	height: 190px;
`;

const ActualCategory = styled.h3`
	font-size: 2.8rem;

	&::first-letter {
		text-transform: uppercase;
	}
`;

type SelectroProps = {
	categories: string[];
	name: string;
	acturalPath: string;
};

function Selector({ categories, name, acturalPath }: SelectroProps) {
	const [openSelector, setopenSelector] = useState(false);

	const renderCategories = categories.map(category => (
		<AnchorHeader onClick={() => setopenSelector(false)}>
			<NavLink to={`/movies/${category}`}>{category}</NavLink>
		</AnchorHeader>
	));

	return (
		<StyledSelector>
			{!openSelector && (
				<div>
					<AnchorButton onClick={() => setopenSelector(true)}>
						<AnchorHeader>{acturalPath}</AnchorHeader>
					</AnchorButton>
				</div>
			)}

			{openSelector && (
				<CategoryAnchor>
					<AnchorWrapper>{renderCategories}</AnchorWrapper>
				</CategoryAnchor>
			)}

			<ActualCategory>{name}</ActualCategory>
		</StyledSelector>
	);
}

export default Selector;
