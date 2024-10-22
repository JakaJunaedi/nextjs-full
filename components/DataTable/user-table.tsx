import { getUsers } from "@/lib/fetchData";

const UserTable = async () => {
  const users = await getUsers();

  if (!users?.length) return <h1>Tidak Ada Data</h1>;

  return (
    <table className="w-full bg-gray-300 mt-2">
      <thead className="border-b border-gray-950">
        <tr>
          <th className="py-3 px-6 text-left text-sm">Name</th>
          <th className="py-3 px-6 text-left text-sm">Email</th>
          <th className="py-3 px-6 text-left text-sm">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-3 px-6">{user.name}</td>
            <td className="py-3 px-6">{user.email}</td>
            <td className="py-3 px-6">{user.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
