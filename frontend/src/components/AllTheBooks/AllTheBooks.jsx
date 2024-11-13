import { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SingleBook from '../SingleBook/SingleBook'
import { BookContext } from '../context/BookContext'

const AllTheBooks = () => {
    const [books, setBooks] = useState([])
    const { textToSearch } = useContext(BookContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${process.env.BE_URL}/books`)
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
                            <SingleBook
                                asin={book.asin}
                                title={book.title}
                                price={book.price}
                                img={book.img}
                                category={book.category}
                                _id={book._id}
                            />
                        </Col>
                    ))
            ) : (
                <div className="text-white">Caricamento in corso...</div>
            )}
        </Row>
    )
}
export default AllTheBooks
