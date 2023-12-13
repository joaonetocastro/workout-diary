'use client'

import { Auth } from "@/utils/auth"
import { useEffect } from "react"

export function LogoutPage() {
    useEffect(() => {
        Auth.removeToken()
    }, [])
    return <h1>Saindo...</h1>
}