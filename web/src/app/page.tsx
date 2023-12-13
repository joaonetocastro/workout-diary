'use client'
import { HomePage } from "@/components/home-page";
import { Auth } from "@/utils/auth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default async function Home(...props: any) {
  useLayoutEffect(() => {
    if (!Auth.isAuthenticated) {
      redirect('/login')
    }
  })
  return <HomePage />
}
