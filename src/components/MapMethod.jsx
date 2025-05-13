import React from "react";

const MapMethod = () => {
  const employees = [
    {
      id: 1,
      name: "abc",
      role: "manager",
      address: { city: "abcd", street: 23 },
    },
    {
      id: 2,
      name: "absdfc",
      role: "admin",
      address: { city: "peshawar", street: 25 },
    },
    {
      id: 3,
      name: "shayan",
      role: "employee",
      address: { city: "charsadda", street: 29 },
    },
    {
      id: 4,
      name: "ali",
      role: "manager",
      address: { city: "shalam", street: 34 },
    },
    {
      id: 5,
      name: "khan",
      role: "employee",
      address: { city: "charsadda", street: 21 },
    },
    {
      id: 6,
      name: "fdw",
      role: "employee",
      address: { city: "peshawar", street: 54 },
    },
    {
      id: 7,
      name: "asif",
      role: "project manager",
      address: { city: "dir", street: 27 },
    },
    {
      id: 8,
      name: "hlj",
      role: "manager",
      address: { city: "abfd", street: 56 },
    },
    {
      id: 9,
      name: "abc",
      role: "manager",
      address: { city: "abcd", street: 23 },
    },
    {
      id: 10,
      name: "fdse",
      role: "employee",
      address: { city: "abc", street: 12 },
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Employees Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 border">Id</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Role</th>
              <th className="py-2 px-4 border">Address City</th>
              <th className="py-2 px-4 border">Address Street</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((user, index) => (
              <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
                <td className="py-2 px-4 border">{user.id}</td>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.role}</td>
                <td className="py-2 px-4 border">{user.address.city}</td>
                <td className="py-2 px-4 border">{user.address.street}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MapMethod;
