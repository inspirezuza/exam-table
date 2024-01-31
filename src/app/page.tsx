"use client";
import { LoginPage } from "@/components/component/login-page";
import { Button } from "@/components/ui/button";
import { testScript } from "@/lib/test";
import Image from "next/image";

export default function Home() {
  function test() {
    testScript();
    console.log("hello");
  }
  return (
    <>
      {/* <LoginPage /> */}
      <div className="bg-slate-500 h-screen w-full flex justify-center items-center">
        <Button onClick={test}>test ja</Button>
      </div>
    </>
  );
}
