import { useState } from "react";
import { DataFetcher } from "./data-fetcher";
import { UserList } from "./user-list";

const users = [
  { id: "a", name: "Mary", email: "mary@example.com" },
  { id: "b", name: "John", email: "john@example.com" },
  { id: "c", name: "Alex", email: "alex@example.com" },
];

export function App() {
  const [kind, setKind] = useState<"hot" | "cold">("hot");
  const toggleKind = () => setKind(kind === "cold" ? "hot" : "cold");

  return (
    <div>
      <h1>Ableneo Code Review</h1>
      <UserList users={users} />
      <button type="button" onClick={toggleKind}>
        Toggle kind
      </button>
      <DataFetcher kind={kind} />
    </div>
  );
}
