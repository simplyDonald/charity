import React from "react";
import { render, screen } from "@testing-library/react";
import SectionA from "../SectionA";

test("renders daisy ui", () => {
  render(<SectionA />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
