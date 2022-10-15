import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
