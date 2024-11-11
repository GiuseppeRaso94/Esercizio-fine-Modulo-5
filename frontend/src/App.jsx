import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookDetails from './pages/BookDetails'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/book-details/:bookId" element={<BookDetails />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
