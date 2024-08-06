import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Home/HomePage";
import { LoginComponent } from "./components/Login-component";
import { SignupPage } from "./pages/Signup/SignupPage";
import { FeedPage } from "./pages/Feed/FeedPage";
import { UserProfilePage } from "./pages/UserProfile/UserProfilePage";
import { Layout } from "./components/Layout";
import {EditProfile} from "./components/User/EditProfile";
import {MyFriends} from "./pages/MyFriends"

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
        element: <UserProfilePage />,
      },
      {
        path: '/my-profile-settings',
        element: <EditProfile  />,
      },
      {
        path: '/my-friends',
        element: <MyFriends />,
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