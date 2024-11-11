import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
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
        const categoryToSearch = 'Genre: fantasy'
        const cardsNumber = getAllByText(categoryToSearch).length
        expect(cardsNumber === fantasy.length).toBe(true)
    })
    it('check the number of the cards rendered after the search in the navbar', () => {
        const { getByPlaceholderText, getAllByRole } = render(
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
        const searchBar = getByPlaceholderText('Search the book')
        fireEvent.change(searchBar, { target: { value: 'Destiny' } })
        const cardsFoundInJson = fantasy.filter((book) =>
            book.title?.toUpperCase().includes(searchBar.value.toUpperCase())
        ).length
        const cardsFoundInDom = getAllByRole('card').length
        expect(cardsFoundInJson === cardsFoundInDom).toBe(true)
    })
})
