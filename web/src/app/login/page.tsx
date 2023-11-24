'use client';

import { UserClient } from "@/utils/api/user-client";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function LoginPage(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = () => {
        const userClient = new UserClient()
        userClient.login(email, password).then(() => {
            window.location.href = '/'
        })
    }
    
    return (
        <main>
            <Stack alignItems={'center'} marginTop={20}>
                <Card variant="outlined" style={{maxWidth: '320px'}}>
                    <Stack gap={4} padding={4}>
                        <Typography variant="h5" align="center">Workout Diary</Typography>
                        <TextField label="Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)}/>
                        <TextField label="Senha" variant="outlined"  type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <Button variant="contained" color="primary" onClick={login}>Log In</Button>
                    </Stack>
                </Card>
            </Stack>
        </main>
    )
}