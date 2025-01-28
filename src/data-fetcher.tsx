import { useEffect, useState } from "react";

type DataFetcherProps = {
  kind: "hot" | "cold";
};

/**
 * Fetches data from an API and presents it to the user.
 *
 * First, review the code to see if there are any issues of improvements you
 * would make.
 *
 * Second, consider the UX of this component. How would you change it or
 * improve it for a real-world product.
 */
export function DataFetcher({ kind }: DataFetcherProps) {
  const [data, setData] = useState<{ id: string; name: string }[] | null>(null);

  const fetchData = async () => {
    const response = await fetch(`/${kind}.json`);
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data</h2>

      {data && (
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
