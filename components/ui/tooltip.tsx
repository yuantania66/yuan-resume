"use client"

import React, { useState, useRef, useEffect } from 'react'

interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export function Tooltip({ content, children, position = 'top', className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [tooltipStyle, setTooltipStyle] = useState({})
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const showTooltip = () => {
    setIsVisible(true)
  }

  const hideTooltip = () => {
    setIsVisible(false)  // 恢复隐藏逻辑，鼠标移走后隐藏tooltip
  }

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      
      // 查找父级的 hero-contact-item 元素
      const heroContactItem = triggerRef.current.closest('.hero-contact-item')
      let containerRect = triggerRect
      
      if (heroContactItem) {
        containerRect = heroContactItem.getBoundingClientRect()
      }
      
      let left = 0
      let top = 0

      switch (position) {
        case 'top':
          left = containerRect.left + containerRect.width / 2
          top = containerRect.top - 50
          break
        case 'bottom':
          left = containerRect.left + containerRect.width / 2
          top = containerRect.bottom + 10
          break
        case 'left':
          left = containerRect.left - 10
          top = containerRect.top + containerRect.height / 2
          break
        case 'right':
          left = containerRect.right + 10
          top = containerRect.top + containerRect.height / 2
          break
      }



      setTooltipStyle({
        left: `${left}px`,
        top: `${top}px`,
        position: 'fixed',
        zIndex: 9999,
        transform: 'translateX(-50%)'
      })
    }
  }, [isVisible, position])

  return (
    <div 
      ref={triggerRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={hideTooltip}
      className="inline-block"
    >
      {children}
      
      {isVisible && (
        <div
          className={`fixed bg-black text-white px-3 py-2 rounded-md shadow-lg text-xs whitespace-nowrap pointer-events-none ${className}`}
          style={tooltipStyle}
        >
          {content}
        </div>
      )}
    </div>
  )
}
