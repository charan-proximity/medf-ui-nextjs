import { render, screen, waitFor } from "@testing-library/react";
import SuccessModal from "../components/SuccessModal";

describe("Success Modal component", () => {
  test("renders a SuccessModal", () => {
    const toggleSuccessModal = true;
    const onClickOk = jest.fn();
    render(
      <SuccessModal
        toggleSuccessModal={toggleSuccessModal}
        onClickOk={onClickOk}
      />
    );

    expect(
      screen.getByText(/Your booking has been confirmed/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /ok/i })).toBeInTheDocument();
  });
});
