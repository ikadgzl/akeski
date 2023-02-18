import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// TODO:
// 1) implement React Router Dom for routing,authentication and authorization
// 2) implement form validation such as Formik and Yup / or I just found out that Mantine have form validation package
// 3) implement React Query for network requests, caching, error handling etc.
// 4) implement React Toasts or custom component for notification UX
// 5) write unit tests with Jest and React Testing Library
// 6) implement i18n
// 7) implement eslint and prettier
// 8) implement path alias
// 9) implement design system, theming using Mantine
// 10) make web app responsive

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        globalStyles: () => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
          },
          body: {
            backgroundColor: "rgb(248, 249, 250)",
          },
        }),
        // Override any other properties from default theme
        fontFamily: "Open Sans, sans serif",
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
