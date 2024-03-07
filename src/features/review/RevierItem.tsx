import styled from 'styled-components';
import { breakPoint } from '../../styles/style';

const arrowButton = require('../../assets/arrowButton.png');

const StyledReviewItem = styled.article`
	position: relative;
	box-shadow: var(--shadow-primary);
	border-radius: var(--border-radius-medium);

	@media (min-width: ${breakPoint.large}px) {
		width: 45%;
	}
`;

const HeaderWrapper = styled.div`
	float: left;
	max-width: 12rem;
	margin: 1rem;
	border: 4px solid #53504363;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	border-radius: var(--border-radius-small);

	background-color: #ffffff;
`;

const Avatar = styled.img`
	height: 8rem;
	width: 7rem;
	border-radius: 16px;
	margin: 1rem 0rem 1rem 0rem;
`;

const Header = styled.h2`
	margin-bottom: 1rem;
	width: 100%;
	font-size: var(--font-small);
	text-align: center;

	@media (max-width: ${breakPoint.medium}px) {
		font-size: var(--font-small);
	}
`;

const Descrition = styled.p`
	font-size: var(--font-medium);
	margin: 1rem 2rem;
	margin-bottom: 6rem;
	background-color: #e8ebff;
	border-radius: 16px;
	padding: 2rem;
	text-align: justify;

	@media (max-width: ${breakPoint.medium}px) {
		font-size: var(--font-small);
	}
`;

const ReviewLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	cursor: pointer;
	border-radius: 50px;
	padding: 0.2rem 1rem;
	box-shadow: var(--shadow-primary);
	position: absolute;
	right: 1rem;
	bottom: 1rem;
	font-size: 1.4rem;
`;

const ReviewData = styled.h4`
	position: absolute;
	left: 2rem;
	bottom: 1rem;
	font-size: var(--font-small);
	color: var(--color-river-bed);
`;

type ReviewItemProps = {
	author: string;
	content: string;
	reviewUrl: string;
	avatarPath: string;
	id: string;
	data: string;
};

function RevierItem({ author, content, reviewUrl, avatarPath, id, data }: ReviewItemProps) {
	return (
		<StyledReviewItem>
			<HeaderWrapper>
				<Avatar
					src={`https://image.tmdb.org/t/p/w138_and_h175_face/${avatarPath}`}
					alt={'Reviewer profile avatar'}
				/>
				<Header>{author}</Header>
			</HeaderWrapper>
			<Descrition>{content.slice(0, 400)}</Descrition>
			<ReviewLink href={reviewUrl} target={'_blank'}>
				Show Review <img src={arrowButton} alt='Arrow button' />
			</ReviewLink>
			<ReviewData>{data}</ReviewData>
		</StyledReviewItem>
	);
}

export default RevierItem;
