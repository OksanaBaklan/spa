import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, screen } from "@testing-library/react";
import Animals from "../components/AnimalsInHTML";


// check node version
const nodeVersion = process.versions.node;
if(nodeVersion.split(".")[0] < 18) {
console.log('\x1b[41m','Your current node version is:', `${nodeVersion}`,' Please update your version of Node ','\x1b[0m');  // eslint-disable-line no-console
}

afterEach(cleanup);

describe("List from Object Array", () => {
  it("`AnimalsInHTML` component should render", () => {
    render(<Animals />);
    const animal = screen.getByText(/horse/i);
    expect(animal).toBeInTheDocument();
  });
  it("List of animals should be rendered on screen", () => {
    render(<Animals />);
    expect(screen.getByText(/horse/i)).toBeVisible();
    expect(screen.getByText(/turtle/i)).toBeVisible();
    expect(screen.getByText(/elephant/i)).toBeVisible();
    expect(screen.getByText(/monkey/i)).toBeVisible();
  });
});
