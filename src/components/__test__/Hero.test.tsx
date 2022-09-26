import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "../Index/Hero"

test("renders daisy ui", () => {
  render(<Hero />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
