'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { useState } from "react"
import { client } from "../axios/client"

type AppProps = {
    children?: React.ReactNode,
    message?: string,
}

export default function Login({ children, message, ...props }: AppProps) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = async () => {
        if (!username || !password) {
            toast.error("请输入用户名和密码")
            return
        }
        const response = await client.post('/api/user/login', {
            username,
            password
        });
    }

    return <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100" {...props}>
    <Card className="mx-auto max-w-sm">
        <CardHeader>
            <CardTitle className="text-xl">登录</CardTitle>
            <CardDescription>
                请输入您的用户名和密码登录
            </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="username">用户名</Label>
                    <Input 
                        id="username" 
                        placeholder="请输入用户名" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">密码</Label>
                    <Input 
                        id="password" 
                        type="password"
                        placeholder="请输入密码"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" className="w-full" onClick={handleSubmit}>
                    登录
                </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                还没有账号？{" "}
                <a href="/register" className="underline">
                    立即注册
                </a>
            </div>
        </CardContent>
    </Card>
    </div>
}