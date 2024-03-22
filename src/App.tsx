import { useState } from "react";
import "./App.scss";
import MainPage from "./components/mainPage/MainPage";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
