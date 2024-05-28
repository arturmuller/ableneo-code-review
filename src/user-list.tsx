import { useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

export function UserList({ users }: UserListProps) {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users by name or email"
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase();
          setFilteredUsers(
            users.filter((user) =>
              user.name.toLowerCase().includes(searchTerm),
            ),
          );
        }}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.name}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
