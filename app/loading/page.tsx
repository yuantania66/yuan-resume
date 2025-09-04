"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoadingPage() {
  const [displayText, setDisplayText] = useState('')
      const [currentIndex, setCurrentIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const [countdown, setCountdown] = useState(3)
    const [isCursorPaused, setIsCursorPaused] = useState(false)
  
  const router = useRouter()

  const fullText = "面试官您好，本网站全部由 AI 生成。接下来将为您跳转至个人简历页面，敬请查看。"

  useEffect(() => {
    // 打字效果
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 150)

      return () => clearTimeout(timer)
    } else {
      // 打字完成后，开始2秒倒计时
      let remainingTime = 2
      setCountdown(remainingTime)
      
      const countdownTimer = setInterval(() => {
        remainingTime -= 1
        setCountdown(remainingTime)
        
                         if (remainingTime <= 0) {
          clearInterval(countdownTimer)
          // 自动跳转功能已开启
          router.push('/main')
        }
      }, 1000)

      return () => clearInterval(countdownTimer)
    }
  }, [currentIndex, fullText, router])

  useEffect(() => {
    // 光标闪烁效果
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] flex items-center justify-center overflow-hidden relative">
      {/* 背景网格效果 */}
      <div className="absolute inset-0 opacity-25">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-[#64c8ff]/35 relative">
            </div>
          ))}
        </div>
      </div>
      
      {/* 移动光标 - 在线条上游走 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 水平移动的光标 */}
        <div className="cursor-walker cursor-horizontal-1"></div>
        <div className="cursor-walker cursor-horizontal-2"></div>
        <div className="cursor-walker cursor-horizontal-3"></div>
        
        {/* 垂直移动的光标 */}
        <div className="cursor-walker cursor-vertical-1"></div>
        <div className="cursor-walker cursor-vertical-2"></div>
        <div className="cursor-walker cursor-vertical-3"></div>
      </div>
      

      
      {/* 扫描线效果 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#64c8ff]/8 to-transparent animate-scan"></div>

      {/* 主要内容 - 电脑屏幕 */}
      <div className="relative z-10 bg-black border-0 rounded-xl">
        {/* 电脑屏幕框架 */}
        <div className="bg-transparent border-4 border-[#333333] rounded-xl p-3 md:p-6 shadow-2xl w-[95vw] max-w-[700px] h-[45vh] max-h-[350px] md:h-[50vh] md:max-h-[400px] mx-auto relative">
          
          {/* 控制按钮组 - 在显示屏框架的右下角 */}
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 z-20 flex flex-col items-end gap-1 md:gap-2">
            {/* 跳过按钮 */}
            <button
              onClick={() => router.push('/main')}
              className="group relative px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/50 hover:to-purple-600/50 text-blue-200 hover:text-white rounded-md text-xs font-mono transition-all duration-300 border border-blue-500/50 hover:border-purple-400/70 backdrop-blur-sm shadow-md hover:shadow-purple-500/40 hover:scale-105"
            >
              {/* 按钮内容 */}
              <div className="relative flex items-center gap-1.5">
                <span>跳过</span>
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 4l8 6-8 6V4z" />
                  <path d="M6 4l8 6-8 6V4z" />
                </svg>
              </div>
              
              {/* 悬停提示 */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-purple-500/30 backdrop-blur-sm">
                <span>直接跳转</span>
                {/* 提示框箭头 */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 border-l border-t border-purple-500/30 rotate-45"></div>
              </div>
            </button>
            
            {/* 自动跳转倒计时提示 */}
            {currentIndex >= fullText.length && (
              <div className="text-white/70 text-xs text-center">
                <span>自动跳转倒计时: </span>
                <span className="font-bold">{countdown}</span>
                <span> 秒</span>
              </div>
            )}
          </div>
          
          {/* 屏幕边框装饰 */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-[#533483] rounded-full"></div>
          {/* 屏幕反光效果 */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#64c8ff]/5 to-transparent rounded-lg pointer-events-none"></div>
          
          {/* 屏幕内容区域 */}
          <div className="bg-black rounded-lg p-3 md:p-6 font-mono w-full h-full flex flex-col relative">
            
            {/* 终端标题栏 */}
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#333333] flex-shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              <div className="text-[#e0e0e0] text-xs md:text-sm ml-4">Terminal - yuanyuanyuan@resume</div>
            </div>
            
            {/* 终端内容区域 - 固定高度 */}
            <div className="flex-1 space-y-5 overflow-hidden">
              {/* 命令提示符 */}
              <div className="text-blue-400 text-lg md:text-xl lg:text-2xl">
                <span className="text-blue-300">$</span> 
                <span className="text-blue-400"> yuanyuanyuan@resume</span>
                <span className="text-blue-300">:~$</span>
              </div>
              
              {/* 输入命令 - 固定高度和宽度容器 */}
              <div className="h-22 w-full flex items-start">
                <div className="text-blue-400 text-sm md:text-lg lg:text-xl leading-relaxed w-full">
                  <span className="text-blue-300">echo</span> 
                  <span className="text-blue-400"> "</span>
                  <span className="text-blue-200 break-words">{displayText}</span>
                  <span className={`text-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                  <span className="text-blue-400">"</span>
                </div>
              </div>
              
              {/* 系统状态 */}
              {currentIndex >= fullText.length && (
                <div className="text-blue-500 text-sm md:text-base animate-pulse">
                  <span className="text-blue-400">$</span> 
                  <span className="text-blue-300"> 系统就绪</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* 装饰性元素 */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 text-[#64c8ff]/60 font-mono text-xs">
        <div>SYSTEM: Loading...</div>
        <div>STATUS: Initializing</div>
      </div>
      
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-[#64c8ff]/60 font-mono text-xs">
        <div>VERSION: 1.0.0</div>
        <div>BUILD: AI-Generated</div>
      </div>
      
      {/* 进度条 */}
      <div className="absolute bottom-20 md:bottom-32 left-1/2 transform -translate-x-1/2 w-48 md:w-64 lg:w-96">
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${(currentIndex / fullText.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
