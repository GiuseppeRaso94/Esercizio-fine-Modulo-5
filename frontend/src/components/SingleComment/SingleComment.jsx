import { Star } from 'react-ionicons'
import Swal from 'sweetalert2'

const SingleComment = (props) => {
    function handleDeleteComment(commentId) {
        fetch(`${process.env.BE_URL}/comments/delete/${commentId}`, {
            method: 'DELETE',
        }).then(() => {
            props.fetchBook()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your comment has been deleted',
                showConfirmButton: false,
                timer: 1500,
            })
        })
    }
    return (
        <div className="d-flex justify-content-between align-items-center py-2 text-white w-100">
            <div>
                <div>{`${props.comment.commentAuthor}`}</div>
                <div>
                    {Array.from(Array(props.comment.rate), (e, i) => {
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
                <div>{`${props.comment.comment}`}</div>
            </div>
            <button
                className="btn btn-danger"
                onClick={() => handleDeleteComment(props.comment._id)}
            >
                Delete Review
            </button>
        </div>
    )
}
export default SingleComment
