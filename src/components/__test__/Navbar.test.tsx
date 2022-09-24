import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";

test("renders daisy ui", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
