import { useSearchParams } from "react-router";

export default function QueryStringExample() {
  const [searchParams] = useSearchParams();

  // อ่านค่าจาก query string
  const name = searchParams.get("name") || "Unknown";
  const age = searchParams.get("age") || "N/A";

  return (
    <div>
      <h1>Query String Example</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
