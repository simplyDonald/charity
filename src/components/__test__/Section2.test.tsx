import React from "react";
import { render, screen } from "@testing-library/react";
import Section2 from "../Section2";

test("renders daisy ui", () => {
  render(<Section2 />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
