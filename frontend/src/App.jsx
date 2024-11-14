import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './middlewares/ProtectedRoutes.jsx'
import BookDetails from './pages/BookDetails.jsx'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route
                        path="/book-details/:bookId"
                        element={<BookDetails />}
                    />
                </Route>
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
