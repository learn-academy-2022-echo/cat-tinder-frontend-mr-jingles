import { MemoryRouter, Route, Routes } from "react-router-dom"
import CatShow from "./CatShow"
import mockCats from "../mockCats";
import { render, screen } from "@testing-library/react"

const renderComponent = () => {
    render (
        <MemoryRouter initialEntries={["/catshow/1"]}>
        <Routes>
          <Route path='CatShow/:id' element={<CatShow cats={mockCats} />}/>
        </Routes>
      </MemoryRouter>
    )
  }

describe('catShow', () => {
    test('renders a card that gets called on for view with enjoys info', () => {
        renderComponent()
        expect(screen.getByText(mockCats[0].enjoys)).toBeInTheDocument()
    })
  })