import { Star } from 'react-ionicons'

const SingleComment = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center py-2 text-white w-100">
            <div>
                <div>{`${props.author}`}</div>
                <div>
                    {Array.from(Array(props.rate), (e, i) => {
                        return (
                            <Star
                                key={props._id + i}
                                color={'#de7921'}
                                height="24px"
                                width="24px"
                                role="star"
                            />
                        )
                    })}
                </div>
                <div>{`${props.comment}`}</div>
            </div>
            <button
                className="btn btn-danger"
                onClick={() => props.handleDeleteReview(review._id)}
            >
                Delete Review
            </button>
        </div>
    )
}
export default SingleComment
