import SingleComment from '../SingleComment/SingleComment'
const CommentList = (props) => {
    return (
        <>
            {props.comments.map((comment, i) => {
                return (
                    <SingleComment
                        key={i}
                        fetchBook={props.fetchBook}
                        comment={comment}
                    />
                )
            })}
        </>
    )
}
export default CommentList
