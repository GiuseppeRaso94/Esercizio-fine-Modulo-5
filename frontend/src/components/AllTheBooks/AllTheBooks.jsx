import { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from '../SingleBook/SingleBook'
import { BookContext } from '../context/BookContext'

const AllTheBooks = () => {
    const [books, setBooks] = useState([])
    const { textToSearch, bookSelected, setBookSelected } =
        useContext(BookContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:4050/books')
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.books)
                setIsLoading(false)
            })
    }, [])
    return (
        <Row>
            {!isLoading ? (
                books
                    .filter((book) =>
                        book.title
                            ?.toUpperCase()
                            .includes(textToSearch.toUpperCase())
                    )
                    .map((book) => (
                        <Col md={6} lg={4} key={book.asin} className="mb-3">
                            <div
                                onClick={(e) => {
                                    setBookSelected(book)
                                }}
                                className={`h-100`}
                            >
                                <SingleBook
                                    asin={book.asin}
                                    title={book.title}
                                    price={book.price}
                                    img={book.img}
                                    category={book.category}
                                    _id={book._id}
                                />
                            </div>
                        </Col>
                    ))
            ) : (
                <div className="text-white">Caricamento in corso...</div>
            )}
        </Row>
    )
}
export default AllTheBooks
