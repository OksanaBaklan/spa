import React from 'react';
import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import List from '../components/List';

afterEach(cleanup);

describe("List", () => {
    it("`List` Component should render", () => {
        render(<List />);
        const linkOnScreen = screen.getByText(/link to google/i);
        expect(linkOnScreen).toBeInTheDocument();
    });
    it("All Links from array should be rendered on screen", () => {
        render(<List />);
        const googleLink = screen.getByText(/link to google/i);
        const facebookLink = screen.getByText(/link to facebook/i);
        const amazonLink = screen.getByText(/link to amazon/i);
        expect(googleLink).toBeVisible();
        expect(facebookLink).toBeVisible();
        expect(amazonLink).toBeVisible();
    });
});