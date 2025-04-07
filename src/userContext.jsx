import { createContext, useState } from "react";
import { Link } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

const addUser = (userData) => {
    setUsers((prev) => [...prev, userData]);
};
    return (
        <UserContext.Provider value={{ users, addUser }}>
            {children}
        </UserContext.Provider>
    );
    <Link to="/userTable">Go to table</Link>
};
