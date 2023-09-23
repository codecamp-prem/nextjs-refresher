import house from "@/public/images/hilly-island.jpeg"; // next js auto optimise huge image into like .webp forma
import Image from "next/image";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image src={house} alt="Main Home" />
      <Image
        className="object-cover"
        src="https://bit.ly/react-cover"
        alt="Main Home"
        fill
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
