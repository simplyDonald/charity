import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../About";

test("renders daisy ui", () => {
  render(<About />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
