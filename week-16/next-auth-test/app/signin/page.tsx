"use client";

import { signIn } from "next-auth/react";

export default function() {
  return (
    <button onClick={async () => await signIn("github")}>SignIn with GitHub</button>
  )
}
