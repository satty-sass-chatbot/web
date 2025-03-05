import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from ".";

describe("Title component", () => {
  it("renders the children text correctly", () => {
    const { getByText } = render(<Title>Test Title</Title>);
    expect(getByText("Test Title")).toBeInTheDocument();
  });

  it("applies the correct classes", () => {
    const { container } = render(<Title>Test Title</Title>);
    const h1Element = container.querySelector("h1");
    expect(h1Element).toHaveClass("text-4xl");
    expect(h1Element).toHaveClass("font-bold");
    expect(h1Element).toHaveClass("text-center");
    expect(h1Element).toHaveClass("mt-4");
  });
});
