import React from "react";
import { render, screen } from "@testing-library/react";
import Section1 from "../Index/Section1";

test("renders daisy ui", () => {
  render(<Section1 />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
