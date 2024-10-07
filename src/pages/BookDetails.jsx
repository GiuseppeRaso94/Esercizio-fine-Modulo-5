import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from '../components/CommentArea/CommentArea'
import { BookContextProvider } from '../components/context/BookContext'
import NavAndFootLayout from '../components/Layouts/NavAndFootLayout'
import Main from '../components/Main/Main'
import fantasy from '../data/fantasy.json'
function BookDetails() {
    const { bookId } = useParams()
    return (
        <>
            <BookContextProvider>
                <NavAndFootLayout>
                    <Main
                        classname={'py-3 d-flex flex-column align-items-center'}
                    >
                        {fantasy
                            .filter((book) => book.asin === bookId)
                            .map((book) => (
                                <Card
                                    className="border border-0 h-100 mb-3"
                                    id="singlebook"
                                >
                                    <Card.Img variant="top" src={book.img} />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                        <Card.Text>
                                            {book.price + ' $'}
                                        </Card.Text>
                                        <Card.Text>{book.asin}</Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        <CommentArea />
                    </Main>
                </NavAndFootLayout>
            </BookContextProvider>
        </>
    )
}

export default BookDetails
