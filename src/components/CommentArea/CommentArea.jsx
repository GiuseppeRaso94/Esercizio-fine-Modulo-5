import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddComment from '../AddComment/AddComment'
import CommentList from '../CommentList/CommentList'

const CommentArea = ({ asin }) => {
    const [comments, setComments] = useState([])
    const { bookId } = useParams()
    useEffect(() => {
        fetch(
            `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`
        )
            .then((response) => response.json())
            .then((comments) => {
                setComments(comments)
            })
    }, [])

    function addComment(comment) {
        setComments([...comments, comment])
    }

    function deleteComment(commentToDelete) {
        setComments(
            comments.filter((comment) => comment._id !== commentToDelete._id)
        )
    }
    return (
        <>
            <CommentList deleteComment={deleteComment} reviews={comments} />
            <AddComment addComment={addComment} asin={bookId} />
        </>
    )
}

export default CommentArea
