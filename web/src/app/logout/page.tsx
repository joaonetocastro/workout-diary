import { cookies } from 'next/headers'
import { LogoutPage } from "@/components/logout-page";

export default async function Logout() {
    async function setCookie() {
        'use server'
        cookies().set('access_token', 'deleted')
    }

    setCookie()
    return (<LogoutPage />)
}