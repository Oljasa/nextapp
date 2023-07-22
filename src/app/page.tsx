import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log(session)
    redirect("/api/auth/signin");
  }
  console.log(session);
  console.log('hello')
  return (
    <div className="flex h-screen items-center justify-center ">
      This is a protected page
    </div>
  );
};

export default Home;
