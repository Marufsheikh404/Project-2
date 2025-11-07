import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Admin = () => {
    const axiosSecure = useAxiosSecure();
    const [searchedUser, setSearchedUser] = useState(null);
    const [email, setEmail] = useState("");

    // Search User
    const searchUser = async () => {
        try {
            const res = await axiosSecure.get(`/users/search?email=${email}`);
            setSearchedUser(res.data);
        } catch {
            Swal.fire("Not Found", "No user exists with this email", "error");
            setSearchedUser(null);
        }
    };

    // Make Admin
    const makeAdmin = async () => {
        await axiosSecure.patch(`/users/make-admin/${searchedUser.email}`);
        Swal.fire("Success!", "User is now an Admin", "success");
        searchUser();
    };

    // Remove Admin
    const removeAdmin = async () => {
        await axiosSecure.patch(`/users/remove-admin/${searchedUser.email}`);
        Swal.fire("Removed!", "User is no longer Admin", "warning");
        searchUser();
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Manage User Roles</h2>

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter email..."
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary" onClick={searchUser}>
                    Search
                </button>
            </div>

            {searchedUser && (
                <div className="card bg-base-100 p-4 shadow-md w-80">
                    <h3 className="text-lg font-semibold">{searchedUser.email}</h3>
                    <p>Current Role: <b>{searchedUser.role}</b></p>

                    {searchedUser.role !== "admin" ? (
                        <button className="btn btn-success mt-3" onClick={makeAdmin}>
                            Make Admin
                        </button>
                    ) : (
                        <button className="btn btn-error mt-3" onClick={removeAdmin}>
                            Remove Admin
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Admin;
