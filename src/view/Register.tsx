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

export default function Register({ children, message, ...props }: AppProps) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const  handleSubmit = async () => {
        if (!username || !password || !email) {
            toast.error("请填写所有必填项")
            return
        }
        if (password !== confirmPassword) {
            toast.error("两次输入的密码不一致")
            return
        }
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            toast.error("请输入有效的邮箱地址")
            return
        }
        
        try {
            const response = await client.post('/api/user/register', {
                username,
                email,
                password
            });
            
            if (response.status === 200) {
                toast.success("注册成功");
                // 注册成功后跳转到登录页
                window.location.href = '/login';
            }
        } catch (error) {
                // 显示后端返回的错误信息
                console.log(error); // 后端返回的错误信息，根据实际情况进行处理
        }
    }

    return <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100" {...props}>
    <Card className="mx-auto max-w-sm">
        <CardHeader>
            <CardTitle className="text-xl">注册账号</CardTitle>
            <CardDescription>
                创建一个新账号以开始使用
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
                    <Label htmlFor="email">邮箱</Label>
                    <Input 
                        id="email" 
                        type="email"
                        placeholder="请输入邮箱地址" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">确认密码</Label>
                    <Input 
                        id="confirmPassword" 
                        type="password"
                        placeholder="请再次输入密码"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" className="w-full" onClick={handleSubmit}>
                    注册
                </Button>
            </div>
            <div className="mt-4 text-center text-sm">
                已有账号？{" "}
                <a href="#" className="underline">
                    立即登录
                </a>
            </div>
        </CardContent>
    </Card>
    </div>
}