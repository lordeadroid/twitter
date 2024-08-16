import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import Page from "./components/Page";
import ErrorPage from "./pages/error";
import ExplorePage from "./pages/explore";
import NavPanel from "./components/nav-panel";
import { Divider, Flex } from "@mantine/core";
import ProfilePanel from "./components/profile-panel";
import { createBrowserRouter, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Page>
      <NavPanel width="20%" />
      <Divider orientation="vertical" />
      <Flex w="55%">
        <Outlet />
      </Flex>
      <Divider orientation="vertical" />
      <ProfilePanel width="25%" />
    </Page>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/explore", element: <ExplorePage /> },
    ],
    errorElement: <ErrorPage />,
  },
  { path: "/auth", element: <AuthPage /> },
]);

export default Router;
