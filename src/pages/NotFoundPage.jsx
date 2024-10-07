import 'bootstrap/dist/css/bootstrap.min.css'
import { BookContextProvider } from '../components/context/BookContext'
import NavAndFootLayout from '../components/Layouts/NavAndFootLayout'
import Main from '../components/Main/Main'
function NotFoundPage() {
    return (
        <>
            <BookContextProvider>
                <NavAndFootLayout>
                    <Main classname={'py-3'}>
                        <div className="text-white">Page Not Found</div>
                    </Main>
                </NavAndFootLayout>
            </BookContextProvider>
        </>
    )
}

export default NotFoundPage
