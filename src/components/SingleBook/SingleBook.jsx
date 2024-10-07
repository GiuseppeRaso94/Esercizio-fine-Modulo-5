import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const SingleBook = (book) => {
    return (
        <Card className="border border-0 h-100">
            <Card.Img variant="top" src={book.img} />
            <Card.Body className="p-0 pt-3 d-flex flex-column justify-content-between">
                <Card.Title className="px-3">{book.title}</Card.Title>
                <Card.Text className="px-3">{book.price + ' $'}</Card.Text>
                <Card.Text className="px-3">{book.asin}</Card.Text>
                <Link
                    to={`/book-details/${book.asin}`}
                    className="text-decoration-none"
                >
                    <Button className="btn btn-info w-100">Details</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default SingleBook
