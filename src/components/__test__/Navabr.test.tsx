import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

test("renders daisy ui", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/daisyUI/i);
  expect(linkElement).toBeInTheDocument();
});
