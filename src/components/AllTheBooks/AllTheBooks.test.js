import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import fantasy from '../../data/fantasy.json'
import { BookContextProvider } from '../context/BookContext'
import NavAndFootLayout from '../Layouts/NavAndFootLayout'
import Main from '../Main/Main'
import Welcome from '../Welcome/Welcome'
import AllTheBooks from './AllTheBooks'
describe('Test AllTheBooks Component', () => {
    it('check if the number of the cards rendered are the same of the number of objects in the file json', () => {
        const { getAllByText } = render(
            <MemoryRouter>
                <BookContextProvider>
                    <NavAndFootLayout>
                        <Main classname={'py-3'}>
                            <Welcome />
                            <AllTheBooks />
                        </Main>
                    </NavAndFootLayout>
                </BookContextProvider>
            </MemoryRouter>
        )
        const classNameToSearch = 'fantasy'
        const cardsNumber = getAllByText(classNameToSearch).length
        expect(cardsNumber === fantasy.length).toBe(true)
    })
})
