import { screen, render } from '@testing-library/react'
import CatNew from './CatNew'
import { BrowserRouter } from 'react-router-dom'
import mockCats from '../mockCats'

describe("<CatNew/>", ()=>{
  test("renders create profile page without crashing", ()=>{
    render(
        <BrowserRouter>
                <CatNew cats={mockCats}/>
        </BrowserRouter>
    )
    
    
    expect(screen.getByText('Create a Profile')).toBeInTheDocument
    ()
  })
})