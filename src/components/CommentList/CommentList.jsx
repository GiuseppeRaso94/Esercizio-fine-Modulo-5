import API_TOKEN from '../../data/api_token'
import SingleComment from '../SingleComment/SingleComment'
const CommentList = (props) => {
    function handleDeleteReview(reviewId) {
        fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${reviewId}`,
            {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((review) => {
                props.deleteComment(review)
            })
    }

    return (
        <>
            {props.reviews.map((review) => {
                return (
                    <SingleComment
                        key={review._id}
                        review={review}
                        handleDeleteReview={handleDeleteReview}
                    />
                )
            })}
        </>
    )
}
export default CommentList
