import { render, screen } from "@testing-library/react";
import ShoppingApp from "./App";

test("renders learn react link", () => {
  render(<ShoppingApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
