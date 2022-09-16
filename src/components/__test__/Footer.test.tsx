import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("renders daisy ui", () => {
  render(<Footer />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
