import { StrictMode, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route path="/panel" element={<Panel />}/> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
