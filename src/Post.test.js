import { render, screen } from "@testing-library/react";
import Post from "./components/Post";

test("renders tweet text", () => {
  render(<Post text="Life is Too Short for Long-Term Grudges" />);

  expect(
    screen.getByText(/Life is Too Short for Long-Term Grudges/i)
  ).toBeInTheDocument();
});
