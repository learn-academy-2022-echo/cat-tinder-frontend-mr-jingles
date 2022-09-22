import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Header from './Header'

describe('<Header/>', () => {
    test('shows up without crashing', () => {
        render(
        <BrowserRouter>
        <Header/> 
        </BrowserRouter>)
              
              const indexLink = screen.getByText(/Find your Cat/i)
              expect(indexLink).toBeInTheDocument()
    })
})
