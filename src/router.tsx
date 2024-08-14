import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import ErrorPage from "./pages/error";
import ExplorePage from "./pages/explore";
import { Flex } from "@mantine/core";
import { createBrowserRouter, Outlet } from "react-router-dom";

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
      { path: "/explore", element: <ExplorePage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Router;
