import React from "react";
import { render, screen } from "@testing-library/react";
import NavbarItem from "../Navbar/NavbarItem"

test("renders daisy ui", () => {
  render(<NavbarItem />);
  const linkElement = screen.getByText(/imaginary friends/i);
  expect(linkElement).toBeInTheDocument();
});
