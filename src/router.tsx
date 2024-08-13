import { Flex } from "@mantine/core";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import AuthPage from "./pages/auth";

const Layout = () => {
  return (
    <Flex>
      <Outlet />
    </Flex>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/auth", element: <AuthPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Router;
