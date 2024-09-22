import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import { action as logoutAction } from "./components/pages/Logout/Logout";
import { action as loginAction } from "./components/pages/LoginPage/action";
import RootLayout from "./components/organisms/RootLayout/RootLayout";
import { tokenLoader } from "./util/auth";
import Home from "./components/pages/Home/Home";
import { About } from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import EventRootLayout from "./components/organisms/EventRootLayout/EventRootLayout";
import {
  Events,
  loader as EventLoader,
} from "./components/pages/Events/Events";
import EventDetails, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./components/pages/EventDetail/EventDetails";

import EditEvent from "./components/pages/EditEvent/EditEvent";

import NewEvent from "./components/pages/NewEvent/NewEvent";

import { action as editEventAction } from "./components/organisms/EventForm/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <Events />, loader: EventLoader },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetails /> },
              { path: "edit", element: <EditEvent />, action: editEventAction },
            ],
          },
          {
            path: "new",
            element: <NewEvent />,
            action: editEventAction,
          },
        ],
      },

      {
        path: "admin",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

// Import other pages/components as needed

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
