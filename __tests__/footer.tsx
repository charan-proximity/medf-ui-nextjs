import { render, screen, waitFor } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  test("should render without fail", () => {
    render(<Footer />);
    expect(screen.getByRole("link")).toHaveTextContent(/Powered by Charan/i);
  });
});
