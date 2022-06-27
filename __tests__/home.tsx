import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/index";

describe("Home", () => {
  test("renders a home", () => {
    render(<Home />);
    const heading = screen.getByText(/Specialists/i);
    expect(heading).toBeInTheDocument();
  });

  test("Display 10 images and redirect to speciality page ", async () => {
    // find images
    render(<Home />);
    const specialityImgs = await screen.findAllByRole("img");
    expect(specialityImgs).toHaveLength(10);
    userEvent.click(specialityImgs[0]);
  });
});
