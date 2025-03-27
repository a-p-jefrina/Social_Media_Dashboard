import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Explore from "./components/Explore";
import Feed from "./components/Feed";
import ExplorePage from "./pages/ExplorePage";
import Premium from "./pages/Premium";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <Sidebar />
        <Routes>
          <Route
            path="/explore"
            element={
              <>
                <ExplorePage />
              </>
            }
          ></Route>
          <Route
            path="/premium"
            element={
              <>
                <Premium />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Feed />
              </>
            }
          ></Route>
        </Routes>
        {/* Explore */}
        <Explore className="explore" />
      </div>
    </Router>
  );
}

export default App;
