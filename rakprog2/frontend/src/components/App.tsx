import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Counter from "./Counter"
import MyProfile from "./MyProfile"
import AppHeader from "./Header"
import Landing from "./Landing"

const App: React.FC = () => {
  const profileName = "Rain Erik";

  return (
    <Router>
      <AppHeader profileName={profileName} />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/landing"
              replace
            />
          }
        />{" "}
        <Route
          path="/landing"
          element={<Landing />}
        />{" "}
        <Route
          path="/myprofile"
          element={<MyProfile />}
        />{" "}
        <Route
          path="/counter"
          element={<Counter />}
        />{" "}
      </Routes>
    </Router>
  )
}


export default App