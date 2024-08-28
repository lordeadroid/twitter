import ReactDOM from "react-dom/client";
import "@mantine/notifications/styles.css";
import "./index.css";
import theme from "./theme.ts";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <Notifications position="top-right" />
    <App />
  </MantineProvider>
);
