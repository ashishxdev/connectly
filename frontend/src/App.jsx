import React from 'react'
import CallPage from "./pages/CallPage"
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import OnboardingPage from "./pages/OnboardingPage"
import NotificationsPage from "./pages/NotificationsPage"
import SignUpPage from "./pages/SignUpPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage'
import { Toaster } from "react-hot-toast"
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from './lib/axios'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/call",
    element: <CallPage />
  },
  {
    path: "/chat",
    element: <ChatPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/notifications",
    element: <NotificationsPage />
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />
  },
  {
    path: "/signup",
    element: <SignUpPage />
  },

])
const App = () => {

  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res.data;
    },
    retry: false, // auth check
  })
  console.log(data)

  return (
    <div className='h-screen' data-theme="night">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
