import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Input from "../src/components/ui/input";

describe("Input Component", () => {
  it("expect to render search icon", () => {
    render(<Input />);

    const searchIcon = screen.getAllByRole("img")[0];

    expect(searchIcon).toBeInTheDocument();
  });
});
