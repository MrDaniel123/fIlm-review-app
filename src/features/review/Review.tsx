import styled from 'styled-components';
import RevierItem from './RevierItem';

const StyledReview = styled.section`
	display: flex;
	justify-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 16px;
	width: 90%;
	min-width: 320px;
	max-width: 1280px;
`;

type ReviewData = {
	author: string;
	content: string;
	reviewUrl: string;
	avatarPath: string;
	id: string;
	data: string;
};

type ReviewType = {
	data: ReviewData[];
};

function Review({ data: rewierData }: ReviewType) {
	const renderReviewItem = rewierData.map(review => {
		return (
			<RevierItem
				key={review.id}
				author={review.author}
				content={review.content}
				id={review.id}
				reviewUrl={review.reviewUrl}
				avatarPath={review.avatarPath}
				data={review.data}
			/>
		);
	});
	return <StyledReview>{renderReviewItem}</StyledReview>;
}

export default Review;
