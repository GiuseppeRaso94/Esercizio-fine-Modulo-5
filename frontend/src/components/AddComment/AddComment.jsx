import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
const AddComment = (props) => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const { bookId } = useParams()
    const [comment, setComment] = useState({
        commentAuthor: currentUser,
        book: bookId,
        rate: 1,
        comment: '',
    })

    function reset() {
        document.getElementById('commentTextArea').value = ''
        document.getElementById('rateSelect').value = 1
        setComment({
            commentAuthor: currentUser,
            book: bookId,
            rate: 1,
            comment: '',
        })
        props.getBook()
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        if (comment.comment) {
            fetch(`${process.env.BE_URL}/comments/create`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(comment),
            }).then(() => {
                reset()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your comment has been saved',
                    showConfirmButton: false,
                    timer: 1500,
                })
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Something is missing!',
                text: 'Please enter a comment before submit the form',
            })
        }
    }

    return (
        <form
            onSubmit={handleOnSubmit}
            className="d-flex flex-column gap-3 pt-3 w-100"
        >
            <textarea
                className="w-100 p-2"
                placeholder="Type your review here"
                id="commentTextArea"
                onChange={(e) =>
                    setComment({ ...comment, comment: `${e.target.value}` })
                }
            ></textarea>
            <p className="text-white m-0">Rate the book from 1 to 5</p>
            <select
                className="w-100 h-100 p-2"
                id="rateSelect"
                onChange={(e) => {
                    setComment({
                        ...comment,
                        rate: `${e.target.value}`,
                    })
                }}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button
                className="btn btn-info"
                type="submit"
                onClick={(e) => handleOnSubmit(e)}
            >
                Save Review
            </button>
        </form>
    )
}
export default AddComment
