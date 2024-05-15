import { DataFetcher } from "./data-fetcher";
import { UserList } from "./user-list";

export function App() {
  return (
    <div>
      <h1>Ableneo Code Review</h1>

      <UserList
        users={[
          { id: "a", name: "Mary", email: "mary@example.com" },
          { id: "b", name: "John", email: "john@example.com" },
          { id: "c", name: "Alex", email: "alex@example.com" },
        ]}
      />

      <DataFetcher kind="hot" />
    </div>
  );
}
