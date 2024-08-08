import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { LoginComponent } from "./components/Utilities/Login-component";
import { SignupPage } from "./pages/Signup/SignupPage";
import { FeedPage } from "./pages/Feed/FeedPage";
import { MyUserProfilePage } from "./pages/UserProfile/MyUserProfilePage";
import { Layout } from "./components/Layout";
import { UserProfilePage } from "./pages/UserProfile/StandardUserProfile";
import {MyFriends} from "./components/Friend/MyFriends";
import {RemoveFriend} from "./components/Friend/RemoveFriend";

import { AllComments } from "./pages/AllCommentsTest/Allcomments";

// docs: https://reactrouter.com/en/main/start/overview
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginComponent />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/posts",
        element: <FeedPage />,
      },
      {
        path: "/my-profile",
        element: <MyUserProfilePage />,
      },
      {
        path: '/my-friends',
        element: <MyFriends />,
      },
      {
        path: "/profile/:id",
        element: <UserProfilePage />,
      },

      { path: '/remove-friend',
        element: <RemoveFriend />,
      },
      {
        path: "/allcomments",
        element: <AllComments />,
      },
    ],
    
  },

]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;