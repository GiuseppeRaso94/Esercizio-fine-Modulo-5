import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'

const CommentArea = (props) => {
    return (
        <>
            <CommentList getBook={props.getBook} comments={props.comments} />
            <AddComment getBook={props.getBook} comments={props.comments} />
        </>
    )
}

export default CommentArea
