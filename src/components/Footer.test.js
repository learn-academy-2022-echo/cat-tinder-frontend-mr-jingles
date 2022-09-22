import { screen, render } from "@testing-library/react"
import Footer from './Footer'


describe('<Footer/>', () => {
    test('renders the Footer page', () => {
        render(<Footer/>)
        
        const element = screen.getByText(/Francisco Solis & Elijah Barreto/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})