import { Star } from 'react-ionicons'

const SingleComment = ({ review, handleDeleteReview }) => {
    return (
        <div className="d-flex justify-content-between align-items-center py-2 text-white w-100">
            <div>
                <div>{`${review.author}`}</div>
                <div>
                    {Array.from(Array(review.rate), (e, i) => {
                        return (
                            <Star
                                key={review._id + i}
                                color={'#de7921'}
                                height="24px"
                                width="24px"
                            />
                        )
                    })}
                </div>
                <div>{`${review.comment}`}</div>
            </div>
            <button
                className="btn btn-danger"
                onClick={() => handleDeleteReview(review._id)}
            >
                Delete Review
            </button>
        </div>
    )
}
export default SingleComment
