import { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import fantasy from '../../data/fantasy.json'
import SingleBook from '../SingleBook/SingleBook'
import { BookContext } from '../context/BookContext'

const AllTheBooks = () => {
    const [books, setBooks] = useState(fantasy)
    const { textToSearch, bookSelected, setBookSelected } =
        useContext(BookContext)
    return (
        <Row>
            {books
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
                            />
                        </div>
                    </Col>
                ))}
        </Row>
    )
}
export default AllTheBooks
