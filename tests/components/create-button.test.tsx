import React from "react";
import CreateButton from "../../src/components/CreateButton";
import { describe, expect, test, vi } from "vitest";
import { render } from "../test-utils";
import { screen } from "@testing-library/react";

describe("CreateButton", () => {
  test("renders button with correct props", () => {
    const handleClick = vi.fn();

    render(
      <CreateButton value="Submit" type="submit" handleClick={handleClick} />
    );

    const button = screen.getByRole("button", { name: /submit/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });
});
