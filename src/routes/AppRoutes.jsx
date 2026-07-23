import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";
import ResumeUpload from "../pages/ResumeUpload";
import MCQ from "../pages/MCQ";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route
  path="/resume-upload"
  element={<ResumeUpload />}
/>
<Route
  path="/mcq"
  element={
    <ProtectedRoute>
      <MCQ />
    </ProtectedRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}