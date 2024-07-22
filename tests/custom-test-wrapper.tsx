import "@testing-library/jest-dom";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import theme from "../src/theme";
import Router from "../src/router";

const AllProviders = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={Router} />
    </MantineProvider>
  );
};

export default AllProviders;
