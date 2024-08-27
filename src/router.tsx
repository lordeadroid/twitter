import { Divider, Flex } from "@mantine/core";
import { createBrowserRouter, Outlet } from "react-router-dom";

import AuthPage from "./pages/auth";
import ChatPage from "./pages/chat";
import HomePage from "./pages/home";
import Page from "./components/page";
import ErrorPage from "./pages/error";
import ExplorePage from "./pages/explore";
import MessagesPage from "./pages/messages";
import NavPanel from "./components/nav-panel";
import ProfilePanel from "./components/profile-panel";

const Layout = () => {
  return (
    <Page h="100vh" p="2rem 4rem">
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
      { path: "/chat/:user", element: <ChatPage /> },
      { path: "/explore", element: <ExplorePage /> },
      { path: "/messages", element: <MessagesPage /> },
    ],
    errorElement: <ErrorPage />,
  },
  { path: "/auth", element: <AuthPage /> },
]);

export default Router;
