import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    const container = render(<Header />);

    expect(container).toBeInTheDocument();
  });
});
