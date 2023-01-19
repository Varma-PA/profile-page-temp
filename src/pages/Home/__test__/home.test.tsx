import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import HomePage from "../index";
import "@testing-library/jest-dom";

test("Rendering Home Component", () => {
  render(<HomePage />);
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});
