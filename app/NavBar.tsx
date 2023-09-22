"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <>
      <div className="flex bg-slate-200 p-5">
        <Link href="/" className="mr-5">
          Next js nav
        </Link>
        <Link href="/users" className="mr-5">
          Users
        </Link>
        <Link href="/products" className="mr-5">
          Products
        </Link>
        {status === "loading" && <div>loading ...</div>}
        {status === "authenticated" && <div>{session.user!.name}</div>}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </>
  );
};
export default NavBar;
