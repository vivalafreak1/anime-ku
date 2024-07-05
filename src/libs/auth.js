// src/libs/auth.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function authUserSession(req, res) {
  const session = await getServerSession({ req, res, ...authOptions });
  return session?.user ?? null;
}
