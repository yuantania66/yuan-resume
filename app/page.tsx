"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // 自动跳转到启动页面
    router.push('/loading')
  }, [router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <div className="text-2xl font-mono mb-4">正在跳转...</div>
        <div className="text-green-400 animate-pulse">Loading...</div>
      </div>
    </div>
  )
}
