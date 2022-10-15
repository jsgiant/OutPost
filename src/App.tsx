import { createContext, useReducer } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PostFeed from "./components/PostFeed";

import "./App.css";

//@ts-ignore
export const UserContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return {...action.payload};
    default:
      return state
  }
}

function App() {
  const [user, dispatch] = useReducer(reducer, {});

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="home" element={<PostFeed />} />
      </Route>
    )
  );

  return <UserContext.Provider value={[user, dispatch]}>
      <RouterProvider router={router} />
  </UserContext.Provider>
}

export default App;
