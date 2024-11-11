import 'bootstrap/dist/css/bootstrap.min.css'
import AllTheBooks from '../components/AllTheBooks/AllTheBooks'
import { BookContextProvider } from '../components/context/BookContext'
import NavAndFootLayout from '../components/Layouts/NavAndFootLayout'
import Main from '../components/Main/Main'
import Welcome from '../components/Welcome/Welcome'
function HomePage() {
    return (
        <>
            <BookContextProvider>
                <NavAndFootLayout>
                    <Main classname={'py-3'}>
                        <Welcome />
                        <AllTheBooks />
                    </Main>
                </NavAndFootLayout>
            </BookContextProvider>
        </>
    )
}

export default HomePage
