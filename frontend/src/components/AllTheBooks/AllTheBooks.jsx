import { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'
import SingleBook from '../SingleBook/SingleBook'
import { BookContext } from '../context/BookContext'

const AllTheBooks = () => {
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(9)
    const [totalPages, setTotalPages] = useState(1)
    const [books, setBooks] = useState([])
    const { textToSearch } = useContext(BookContext)
    const [isLoading, setIsLoading] = useState(true)

    const getBooks = async () => {
        try {
            const response = await fetch(
                `${process.env.BE_URL}/books?page=${page}&pageSize=${pageSize}`
            )
            const data = await response.json()
            setBooks(data.books)
            setTotalPages(data.totalPages)
            setIsLoading(false)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getBooks()
    }, [page, pageSize])
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
            <ResponsivePagination
                current={page}
                total={totalPages}
                onPageChange={(page) => {
                    setPage(page)
                }}
            />
        </Row>
    )
}
export default AllTheBooks
