import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from '../components/CommentArea/CommentArea'
import { BookContextProvider } from '../components/context/BookContext'
import NavAndFootLayout from '../components/Layouts/NavAndFootLayout'
import Main from '../components/Main/Main'
function BookDetails() {
    const [book, setBook] = useState(undefined)
    const { bookId } = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:4050/books/' + bookId)
            .then((res) => res.json())
            .then((data) => {
                setBook(data.book)
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            <BookContextProvider>
                <NavAndFootLayout>
                    <Main
                        classname={'py-3 d-flex flex-column align-items-center'}
                    >
                        {!isLoading ? (
                            <Card
                                className="border border-0 h-100 mb-3"
                                id="singlebook"
                                key={bookId}
                            >
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.price + ' $'}</Card.Text>
                                    <Card.Text>{book.asin}</Card.Text>
                                </Card.Body>
                            </Card>
                        ) : (
                            <div className="text-white">
                                Caricamento in corso...
                            </div>
                        )}
                        <CommentArea />
                    </Main>
                </NavAndFootLayout>
            </BookContextProvider>
        </>
    )
}

export default BookDetails
