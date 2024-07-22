import "@testing-library/jest-dom";
import React from "react";
import { MantineProvider } from "@mantine/core";
import theme from "../src/theme";

const AllProviders = ({ children }: { children: React.JSX.Element }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);

export default AllProviders;
