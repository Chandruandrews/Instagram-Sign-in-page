import { useContext } from "react";
import { UserContext } from "./userContext";
import { Link } from "react-router-dom";

function UserTable() {
    const { users } = useContext(UserContext);
    
    return (
        <div>
            <h1>Registered Users</h1>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Full Name</th>
                        <th>UserName</th>
                        <th>Possword</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.fullName}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link to="/">Back to Signup</Link>
        </div>
    );
}

export default UserTable;
