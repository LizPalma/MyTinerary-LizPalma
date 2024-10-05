import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import CallAction from "./Pages/CallAction";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import StandarLayout from "./Layaout/StandarLayout";
import CallActionLayouts from "./Layaout/CallActionLayouts";

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      
    ],
  },
  { element: <CallActionLayouts></CallActionLayouts>,
    children: [
      { path: "/callaction", element: <CallAction></CallAction> },
      { path: "/callaction/:id/:name", element: <CallAction></CallAction> },
    ],
  },
  { path: "/*", element: <NotFound></NotFound> },
]);


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;