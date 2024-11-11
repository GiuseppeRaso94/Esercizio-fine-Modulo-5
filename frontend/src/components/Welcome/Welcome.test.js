import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Welcome from './Welcome'

describe('Test Welcome Component', () => {
    it('should render correctly the Welcome Component', () => {
        const { getByText } = render(<Welcome />)
        const innerText = 'Welcome to Epi.Books !'
        const element = getByText(innerText)
        expect(element).toBeInTheDocument()
    })
})
