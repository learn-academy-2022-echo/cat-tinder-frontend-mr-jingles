import { screen, render } from "@testing-library/react"
import NotFound from './NotFound'

describe('<NotFound />', () => {
    test('shows the NotFound page for the user', () => {
        //Arrange
        render(<NotFound/>) 
        //Act -
        //can be interactions like clicking
        //be passive actions like seeing something       
        const element = screen.getByText(/Not Found/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})
