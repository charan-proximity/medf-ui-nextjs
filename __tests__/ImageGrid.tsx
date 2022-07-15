import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { homeImages } from "../assets";

import ImageGrid from "../components/ImageGrid";

describe(" Date Widget tests", () => {
  const SpecialtyData = [
    { name: "Dermatology", imgSrc: homeImages.Dermatology, link: "" },
    { name: "GeneralPhysician", imgSrc: homeImages.GenPhysician, link: "" },
    { name: "ENT", imgSrc: homeImages.ENT, link: "" },
    { name: "Ortho", imgSrc: homeImages.Ortho, link: "" },
  ];
  const onImageClick = jest.fn();

  test("should be able to render the dates ", async () => {
    const { debug } = render(
      <ImageGrid SpecialtyData={SpecialtyData} onImageClick={onImageClick} />
    );
    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(SpecialtyData.length);
    expect(imgs).toMatchSnapshot();
  });
});
