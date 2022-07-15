import { render, screen, waitFor } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  test("renders a home", () => {
    render(<Home />);
    const heading = screen.getByText(/Specialists/i);
    expect(heading).toBeInTheDocument();
  });
});
