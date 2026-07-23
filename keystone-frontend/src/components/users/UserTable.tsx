import "./UserTable.css";

import type { User } from "../../types/user";

type UserTableProps={

users:User[];

};

function UserTable({users}:UserTableProps){

    return(

        <div className="user-table-container">

            <table className="user-table">

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Employee ID</th>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Role</th>

                        <th>Department</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map((user)=>(

                            <tr key={user.id}>

                                <td>{user.id}</td>

                                <td>{user.employeeId}</td>

                                <td>{user.fullName}</td>

                                <td>{user.email}</td>

                                <td>{user.role}</td>

                                <td>{user.department}</td>

                                <td>{user.status}</td>

                                <td>

                                    <button className="view-btn">

                                        View

                                    </button>

                                    <button className="edit-btn">

                                        Edit

                                    </button>

                                    <button className="delete-btn">

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default UserTable;