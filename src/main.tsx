import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Hermano } from "./components/hermano.component.tsx";
import { Hijo } from "./components/hijo.component.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.redux.ts";

const ruta = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/hermano",
        Component: Hermano,
      },
      {
        path: "/hijo",
        Component: Hijo,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={ruta} />
    </Provider>
  </StrictMode>,
);
