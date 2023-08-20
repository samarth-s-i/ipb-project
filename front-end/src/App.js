import React  from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn.jsx";
import UserHome from "./Components/UserHome.jsx";
import SignUp from "./Components/SignUp.jsx";
import ViewUser from "./Components/ViewUser.jsx";
import UpdateUser from "./Components/UpdateUser.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/viewuser" element={<ViewUser/>} />
          <Route path="/updateuser" element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
