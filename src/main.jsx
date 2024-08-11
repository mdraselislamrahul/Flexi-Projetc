import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Home from "./Components/Home/Home";
import Beauty from "./Components/Home/Controversial/Beauty/Beauty";
import Fashion from "./Components/Home/Controversial/Fashion/Fashion";
import Lifestyle from "./Components/Home/Controversial/Lifestyle/Lifestyle";
import Food from "./Components/Home/Controversial/Food/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
  {
    path: "/buty",
    element: <Beauty></Beauty>
  },
  {
    path: "/style",
    element: <Fashion></Fashion>
  },
  {
    path: "/lifeStyle",
    element: <Lifestyle></Lifestyle>
  },
  {
    path: "/food",
    element: <Food></Food>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);