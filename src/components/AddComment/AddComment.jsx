import { useState } from 'react'
import API_TOKEN from '../../data/api_token'

const AddComment = (props) => {
    const [comment, setComment] = useState({ elementId: props.asin })
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
            <input
                className="w-100 h-100 p-2"
                type="number"
                min="1"
                max="5"
                value={comment.rate}
                placeholder="Type your rating from 1 to 5"
                onChange={(e) => {
                    setComment({ ...comment, rate: `${e.target.value}` })
                }}
            ></input>
            <button className="btn btn-info" type="submit">
                Save Review
            </button>
        </form>
    )
}
export default AddComment
