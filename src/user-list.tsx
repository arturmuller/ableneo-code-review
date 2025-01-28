import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type UserListProps = {
  users: User[];
};

/**
 * Filters a list of users by name provided as props via an input field contained
 * within this component.
 *
 * First, code review this component. Do you understand every part of it? Can
 * you catch eny issues or mistakes? Anything you would change or improve?
 * If so -- why?
 *
 * Second, change the internal logic of this component to filter not just name,
 * but by name and email, and make sure the search is case-insensitive.
 */
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
          setFilteredUsers(
            users.filter((user) =>
              user.name.toLowerCase().includes(e.target.value),
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
