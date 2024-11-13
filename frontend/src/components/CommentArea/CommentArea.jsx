import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'

const CommentArea = (props) => {
    return (
        <>
            <CommentList
                fetchBook={props.fetchBook}
                comments={props.comments}
            />
            <AddComment fetchBook={props.fetchBook} comments={props.comments} />
        </>
    )
}

export default CommentArea
