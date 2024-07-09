import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Board from "./Board";

describe("<Board /> rendering", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<Board />);
    });

    // snapshot test (board always has lights on)
    test("matches snapshot", () => {
        const {asFragment} = render(<Board chanceLightStartsOn={1}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe("Win message works", () => {
    test("win message displays when lights out", () => {
        // board always unlit
        const {getByText} = render(<Board chanceLightStartsOn={0}/>);
        expect(getByText('You won!')).toBeInTheDocument();
    })

    test("win message displays when click wins game", () => {
        const {queryByText, queryByRole} = render(
            <Board nrows={1} ncols={1} chanceLightStartsOn={1}/>
        );
        
        // before winning game
        expect(queryByText("You won!")).not.toBeInTheDocument();

        // clicking cell -> win game
        const cell = queryByRole("button");
        fireEvent.click(cell)
        
        expect(queryByText("You won!")).toBeInTheDocument();
    })
});

describe("Cell click", () => {
    test("Cells toggle light correctly", () => {
        const {getAllByRole} = render(
            <Board nrows={3} ncols={3} chanceLightStartsOn={1}/>
        );
        const cells = getAllByRole("button");

        // checks that all cells are lit
        cells.forEach(cell => 
            expect(cell).toHaveClass("Cell-lit")
        );

        // click middle cell
        fireEvent.click(cells[4]);

        const unlitIdx = [1, 3, 4, 5, 7];
        
        // checks that clicked cell and surrounding cells are unlit
        for (let idx of unlitIdx){
            expect(cells[idx]).not.toHaveClass("Cell-lit");
        }
        
    });
})