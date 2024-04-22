import Image from "next/image";

export default function Home() {
  return (
    <>
      <form action="/results">
        <input name="url" type="url" />
        <button>Check it</button>
      </form>
    </>
  );
}
