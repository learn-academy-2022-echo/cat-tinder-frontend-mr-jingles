import { screen, render } from "@testing-library/react"
import Footer from './Footer'

describe('<Footer/>', () => {
    test('renders the Footer page', () => {
        //Arrange
        render(<Footer/>) 
        //Act -
        //can be interactions like clicking
        //be passive actions like seeing something       
        const element = screen.getByText(/Francisco Solis & Elijah Barreto/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})