import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import "@fontsource/barlow-condensed/400.css"
import "@fontsource/barlow-condensed/500.css"
import "@fontsource/barlow-condensed/600.css"
import "./index.css"
import Home from "./pages/home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Rockets from "./pages/Rockets"
import Profile from "./pages/profile"
import Root from "./pages/root"
import { ErrorPage } from "./pages/error-page"
import Missions from "./pages/Missions"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/rockets",
        element: <Rockets />,
      },
      {
        path: "/missions",
        element: <Missions />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
