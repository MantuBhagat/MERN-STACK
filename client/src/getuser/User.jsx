import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([
    // { id: 1, name: "Mantu", email: "samtnut@fvn", address: "Canada" },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (err) {
        console.log("Error while fetching data", err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="p-8 bg-gray-100 min-h-screen">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600">
          Add User
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-2 border">SL No.</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Address</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user.id} className="text-center">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{user.name}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.address}</td>
                    <td className="border px-4 py-2 space-x-2">
                      <button className="text-blue-600 hover:underline">
                        Update
                      </button>

                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
