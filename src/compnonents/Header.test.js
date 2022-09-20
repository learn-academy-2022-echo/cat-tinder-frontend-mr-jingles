import { screen, render } from "@testing-library/react"
import Header from './Header'

describe('<Header/>', () => {
    test('shows up without crashing', () => {
        //Arrange
        render(<Header/>) 
        //Act -
        //can be interactions like clicking
        //be passive actions like seeing something       
        const element = screen.getByText(/Cat Tinder/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})
