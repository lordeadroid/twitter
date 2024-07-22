import { Flex } from "@mantine/core";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import ErrorPage from "./pages/error";

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
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default Router;
