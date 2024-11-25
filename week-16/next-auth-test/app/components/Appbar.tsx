"use client"
import { signIn, signOut, useSession } from "next-auth/react";

export default function Appbar() {
  const session = useSession();
  return (
    <div>
      {/* <Appbar /> */}
      <button onClick={() => signIn()}>Signin</button>
      <button onClick={() => signOut()}>SignOut</button>
      {JSON.stringify(session)};
    </div>
  );
}
