import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from ".";

describe("App", () => {
  it("Renders a header with certain text", () => {
    render(<App />);
    expect(screen.getByText("test")).toBeDefined();
  });
});
