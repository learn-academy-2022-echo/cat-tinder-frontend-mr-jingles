import React from 'react'
import { screen, render } from '@testing-library/react'
import CatEdit from './CatEdit'
import { BrowserRouter } from 'react-router-dom'


describe("<CatEdit/>", () => {
    test("render CatEdit page without crashing", () => {
        render(
            <BrowserRouter>
                <CatEdit/>
            </BrowserRouter>
        )
        const heading = screen.getByText(/Update Cat Profile/i)
        expect(div).toBeInTheDocument()

    })

    test(" has multiple input fields on the form", () => {
        render(
            <BrowserRouter>
                <CatEdit/>
            </BrowserRouter>
        )
        const textbox = screen.getAllByRole("textbox")
        screen.debug(textbox)
        expect(textbox[0]).toBeEnabled()
        expect(textbox.length).toBeGreaterThan(0)
    })

})