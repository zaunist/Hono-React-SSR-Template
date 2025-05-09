'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type AppProps = {
    children: React.ReactNode,
    message: string,
}

export default function Home({ children, message, ...props }: AppProps) {

    return <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100" {...props}>
        <Card className="w-full max-w-4xl mx-4">
            <CardHeader>
                <CardTitle className="text-3xl">欢迎来到我的主页</CardTitle>
                <CardDescription>
                    这是一个使用 Hono + React + SSR + shadcn/ui 构建的示例网站
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">技术栈特点</h2>
                        <div className="grid gap-4 md:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Hono</CardTitle>
                                    <CardDescription>
                                        轻量级的 Web 框架
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>React SSR</CardTitle>
                                    <CardDescription>
                                        服务端渲染提升性能
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>shadcn/ui</CardTitle>
                                    <CardDescription>
                                        可重用的UI组件
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">开始使用</h2>
                        <div className="flex gap-4">
                            <Button variant="outline" onClick={() => window.location.href = 'https://github.com/zaunist'}>
                               点个关注不迷路 GitHub
                            </Button>
                            <Button variant="secondary" onClick={() => window.location.href = '/login'}>
                                登录跳转
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
}