import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import "./App.css";
import PostFeed from "./components/PostFeed";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="home" element={<PostFeed />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
