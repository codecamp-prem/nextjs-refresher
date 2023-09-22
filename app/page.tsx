import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>herro {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">users</Link>
      <ProductCard />
    </main>
  );
}
