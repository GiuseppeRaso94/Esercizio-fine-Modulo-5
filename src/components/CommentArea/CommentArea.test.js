import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import fetchMock from 'jest-fetch-mock'
import { MemoryRouter } from 'react-router-dom'
import { BookContextProvider } from '../context/BookContext'
import NavAndFootLayout from '../Layouts/NavAndFootLayout'
import Main from '../Main/Main'
import CommentArea from './CommentArea'
fetchMock.enableMocks()
beforeEach(() => {
    fetchMock.resetMocks()
})
describe('Test CommentArea Component', () => {
    it('should render correctly the CommentArea component', () => {
        fetchMock.mockResponseOnce(
            JSON.stringify({
                comments: [{ id: 1, comment: 'comment 1' }],
            })
        )
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <BookContextProvider>
                    <NavAndFootLayout>
                        <Main classname={'py-3'}>
                            <CommentArea />
                        </Main>
                    </NavAndFootLayout>
                </BookContextProvider>
            </MemoryRouter>
        )
        const addReviewInput = getByPlaceholderText('Type your review here')
        const addRatingInput = getByPlaceholderText('Rate 1-5')
        const saveReviewButton = getByText('Save Review')
        expect(addReviewInput).toBeInTheDocument()
        expect(addRatingInput).toBeInTheDocument()
        expect(saveReviewButton).toBeInTheDocument()
    })
})
