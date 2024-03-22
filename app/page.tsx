"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <h1>hi there</h1>
      <div className="flex flex-col gap-2">
        <Link href="profile/1">go to id:1</Link>
        <Link href="profile/2">go to id:2</Link>
        <Link href="profile/3">go to id:3</Link>
      </div>
    </>
  );
}
