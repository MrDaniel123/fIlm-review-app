import { ReviewType } from '../../types/review/reviewType';

export const preparingDataToReview = (reviewsData: ReviewType) => {
	const filteredReviews = reviewsData.results.filter(review => {
		if (review.content.length >= 300 && review.author_details.avatar_path) {
			return true;
		}
	});

	const reviews = filteredReviews.map(review => {
		return {
			author: review.author,
			content: review.content,
			reviewUrl: review.url,
			avatarPath: review.author_details.avatar_path,
			id: review.id,
			data: review.updated_at,
		};
	});

	return reviews;
};
