import React from "react";
import {render} from "@testing-library/react";
import Cell from "./Cell";

// smoke test
test("it renders without crashing", () => {
    render (
        <table>
            <tbody>
                <tr>
                    <Cell isLit={false} />
                </tr>
            </tbody>
        </table>
    )
})

// snapshot test
test("matches snapshot", () => {
    const {asFragment} = render(        
                <table>
                    <tbody>
                        <tr>
                            <Cell isLit={false} />
                        </tr>
                    </tbody>
                </table>);
    expect(asFragment()).toMatchSnapshot();
})