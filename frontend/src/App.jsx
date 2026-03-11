import React from 'react'
import CallPage from "./pages/CallPage"
import ChatPage from "./pages/ChatPage"
import LoginPage from "./pages/LoginPage"
import OnboardingPage from "./pages/OnboardingPage"
import NotificationsPage from "./pages/NotificationsPage"
import SignUpPage from "./pages/SignUpPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from './pages/HomePage'


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
  return (
    <div className='h-screen' data-theme="night">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
