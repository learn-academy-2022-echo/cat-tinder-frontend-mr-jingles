import { screen, render } from '@testing-library/react'
import CatIndex from './CatIndex'
import mockCats from '../mockCats'
import { BrowserRouter } from 'react-router-dom'

describe('CatIndex />', () => {
    test('renders the cards for each cat by the index', () => {
        render(
            <BrowserRouter> 
                <CatIndex cats={mockCats}/>
            </BrowserRouter>
             )
            mockCats.forEach(cat => {
            const element = screen.getByText(cat.name)
            expect(element).toBeInTheDocument()
        })
    })
})

export default CatIndex