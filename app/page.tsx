"use client";
//import house from "@/public/images/hilly-island.jpeg"; // next js auto optimise huge image into like .webp forma
import { Metadata } from "next";
//import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <p>loading..</p>,
  ssr: false,
}); // this is how lazy load component is done.

export default async function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    // <main className="relative h-screen">
    //   <Image
    //     className="object-cover"
    //     src="https://bit.ly/react-cover"
    //     alt="Main Home"
    //     fill
    //     sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
    //     quality={100}
    //     priority
    //   />
    // </main>
    <main>
      <h1>Herro Worrd in Pippens font</h1>
      <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "Next.js App",
// };
