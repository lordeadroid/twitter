import { describe, expect, test } from "vitest";
import { render } from "../../test-utils";
import App from "../../../src/App";
import React from "react";
import { screen } from "@testing-library/react";

describe("Login Page", () => {
  test("render home page", () => {
    render(<App />);
    const page = screen.getByText("Login To Twitter");

    expect(page).toBeInTheDocument();
  });
});
