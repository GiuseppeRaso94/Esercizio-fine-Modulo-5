import { useState } from 'react'
import API_TOKEN from '../../data/api_token'

const AddComment = (props) => {
    const [comment, setComment] = useState({ elementId: props.bookId })
    function handleOnSubmit(e) {
        e.preventDefault()
        fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
        })
            .then((response) => response.json())
            .then((review) => {
                props.addComment(review)
                comment.comment = ''
                comment.rate = ''
            })
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className="d-flex flex-column gap-3 pt-3 w-100"
        >
            <textarea
                className="w-100 p-2"
                placeholder="Type your review here"
                value={comment.comment}
                onChange={(e) =>
                    setComment({ ...comment, comment: `${e.target.value}` })
                }
            ></textarea>
            <p className="text-white m-0">Rate the book from 1 to 5</p>
            <select
                className="w-100 h-100 p-2"
                onChange={(e) => {
                    setComment({ ...comment, rate: `${e.target.value}` })
                }}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="btn btn-info" type="submit">
                Save Review
            </button>
        </form>
    )
}
export default AddComment
