import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./userContext";
import Instagram from "./insta";
import UserTable from "./UserTable";

function App() {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Instagram />} />
                    <Route path="/users" element={<UserTable />} />
                </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;
