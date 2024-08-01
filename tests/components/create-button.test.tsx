import React from "react";
import Button from "../../src/components/button";
import { describe, expect, test, vi } from "vitest";
import { render } from "../test-utils";
import { screen } from "@testing-library/react";

describe("Button", () => {
  test("renders button with correct props", () => {
    const handleSubmit = vi.fn();
    const buttonTag = "Submit";

    render(
      <Button value={buttonTag} type="submit" handleClick={handleSubmit} />,
    );

    const button = screen.getByRole("button", { name: buttonTag });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });
});
