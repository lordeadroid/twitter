import "@mantine/core/styles.css";
import theme from "./theme";
import { Flex, MantineProvider } from "@mantine/core";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/home/Homepage";
import LoginPage from "./Pages/login/LoginPage";
import SignupPage from "./Pages/signup/SignupPage";
import ErrorPage from "./Pages/error/Error-Page";

const Layout = () => {
  return (
    <Flex>
      <Outlet />
    </Flex>
  );
};

const router = createBrowserRouter([
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

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
