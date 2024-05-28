import { useState, useEffect } from "react";

type DataFetcherProps = {
  kind: "hot" | "iced";
};

export function DataFetcher({ kind }: DataFetcherProps) {
  const [data, setData] = useState<{ id: string; name: string }[] | null>(null);

  const fetchData = async () => {
    const response = await fetch(`https://api.sampleapis.com/coffee/${kind}`);
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
