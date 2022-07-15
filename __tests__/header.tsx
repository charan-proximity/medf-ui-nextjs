import { render, screen, waitFor } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
  test("renders a Header", () => {
    render(<Header />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      /Online Consultation/
    );
    expect(screen.getByRole("link")).toHaveTextContent(/MEDFIT/);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
