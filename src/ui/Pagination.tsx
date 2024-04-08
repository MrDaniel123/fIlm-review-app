import { hover } from '@testing-library/user-event/dist/hover';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledPagination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 90%;
`;

const PaginateButton = styled(NavLink)`
	padding: 0.6rem 0.8rem;
	font-weight: bold;
	border: 3px solid #000000;
	border-radius: var(--border-radius-small);
	font-size: 2rem;
	transition: 0.3s;

	&.active {
		border: 3px solid #0e5ed7;
	}

	&:hover {
		background-color: #d6d6d6;
	}
`;

const DotLine = styled.span`
	font-size: 3rem;
`;

type PaginationProps = {
	totalPages: number;
	actualPage: string;
	linkTo: string;
};

function Pagination({ totalPages, actualPage, linkTo }: PaginationProps) {
	if (actualPage === undefined || actualPage === '1' || actualPage === '2' || actualPage === '3') {
		return (
			<StyledPagination>
				<PaginateButton to={`/${linkTo}/1`} className={`${actualPage === undefined && 'active'}`}>
					1
				</PaginateButton>
				<PaginateButton to={`/${linkTo}/2`}>2</PaginateButton>
				<PaginateButton to={`/${linkTo}/3`}>3</PaginateButton>
				<PaginateButton to={`/${linkTo}/4`}>4</PaginateButton>
				<DotLine>...</DotLine>
				<PaginateButton to={`/${linkTo}/${totalPages - 1}`}>{totalPages - 1}</PaginateButton>
			</StyledPagination>
		);
	}

	if (Number(actualPage) >= totalPages - 2) {
		return (
			<StyledPagination>
				<PaginateButton to={`/${linkTo}/1`}>1</PaginateButton>
				<DotLine>...</DotLine>
				<PaginateButton to={`/${linkTo}/${totalPages - 4}`}>{totalPages - 4}</PaginateButton>
				<PaginateButton to={`/${linkTo}/${totalPages - 3}`}>{totalPages - 3}</PaginateButton>
				<PaginateButton to={`/${linkTo}/${totalPages - 2}`}>{totalPages - 2}</PaginateButton>
				<PaginateButton to={`/${linkTo}/${totalPages - 1}`}>{totalPages - 1}</PaginateButton>
			</StyledPagination>
		);
	}

	return (
		<StyledPagination>
			<PaginateButton to={`/${linkTo}/1`}>1</PaginateButton>
			<DotLine>...</DotLine>
			<PaginateButton to={`/${linkTo}/${Number(actualPage) - 1}`}>
				{Number(actualPage) - 1}
			</PaginateButton>
			<PaginateButton to={`/${linkTo}/${actualPage}`}>{actualPage}</PaginateButton>
			<PaginateButton to={`/${linkTo}/${Number(actualPage) + 1}`}>
				{Number(actualPage) + 1}
			</PaginateButton>
			<DotLine>...</DotLine>
			<PaginateButton to={`/${linkTo}/${totalPages - 1}`}>{totalPages - 1}</PaginateButton>
		</StyledPagination>
	);
}

export default Pagination;
