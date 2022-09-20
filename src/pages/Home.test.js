import { screen, render } from "@testing-library/react"
import Home from './Home'

describe('<Home />', () => {
    test('shows up without crashing', () => {
        //Arrange
        render(<Home/>) 
        //Act -
        //can be interactions like clicking
        //be passive actions like seeing something       
        const element = screen.getByText(/Welcome to Cat Tinder Home/i)
        // Assert
        expect(element).toBeInTheDocument()
    })
})
