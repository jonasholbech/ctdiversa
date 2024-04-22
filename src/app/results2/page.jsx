"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page({ searchParams }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function a() {
      const params = new URLSearchParams(searchParams);
      const response = await fetch(
        `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
      );
      setData(await response.json());
    }
    a();
  }, []);

  return (
    <main>
      {data ? (
        <div>{JSON.stringify(data, null, 2)}</div>
      ) : (
        <div>jeg er et skelet</div>
      )}
    </main>
  );
}
