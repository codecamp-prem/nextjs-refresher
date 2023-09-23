import house from "@/public/images/hilly-island.jpeg"; // next js auto optimise huge image into like .webp forma
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <Image src={house} alt="Main Home" />
    </main>
  );
}
