import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "../component/sidebar";
import Admin_Nav from "../component/admin-nav";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/manage-users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    fetchUsers();
  }, []);

  const handleViewDetails = (user) => {
    Swal.fire({
      title: 'User Details',
      html: `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Password:</strong> ${user.password}</p>
        <p><strong>Shipping Address:</strong> ${user.shipping_address}</p>
        <p><strong>Billing Address:</strong> ${user.billing_address}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Security Answer:</strong> ${user.security_answer}</p>
        <p><strong>Age:</strong> ${user.age}</p>
      `,
      showCancelButton: true,
      confirmButtonText: 'Delete User',
      cancelButtonText: 'Close',
      preConfirm: () => handleDeleteUser(user.username)
    });
  };

  const handleDeleteUser = async (username) => {
    try {
      const response = await fetch(`/api/manage-users/${username}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      Swal.fire('Deleted!', 'User has been deleted.', 'success');
      setUsers(users.filter(user => user.username !== username));
    } catch (error) {
      console.error(error);
      Swal.fire('Error!', 'Failed to delete user.', 'error');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black ">

    <Admin_Nav />
    <Sidebar />
    
    <div className="container mx-auto my-10 h-full ml-14 mt-14 mb-10 md:ml-64 ">
      <h1 className="text-2xl font-bold mb-5 ml-8 my-4 text-center">Manage Users</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-left ml-8 font-bold text-xl">Username</th>
            <th className="py-2 text-left ml-4 font-bold text-xl ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.username}>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleViewDetails(user)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageUsers;
