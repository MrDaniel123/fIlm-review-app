import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledSelector = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 16px;
	padding-left: 1rem;
	width: 90%;
	max-width: 1440px;
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
	disabled?: boolean;
	linkTo?: 'movies' | 'tv-series';
};

function Selector({ categories, name, acturalPath, disabled, linkTo = 'movies' }: SelectroProps) {
	const [openSelector, setopenSelector] = useState(false);

	const renderCategories = categories.map(category => (
		<AnchorHeader onClick={() => setopenSelector(false)} key={category}>
			<NavLink to={`/${linkTo}/${category}`}>{category}</NavLink>
		</AnchorHeader>
	));

	return (
		<StyledSelector>
			{!openSelector && (
				<div>
					<AnchorButton onClick={() => (disabled ? null : setopenSelector(true))}>
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
