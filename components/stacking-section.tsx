"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface StackingSectionProps {
  children: ReactNode
  index: number
  totalSections: number
  className?: string
}

export function StackingSection({ children, index, totalSections, className = "" }: StackingSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      // Calculate progress as section moves through viewport
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight / 2)))

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = 0.85 + scrollProgress * 0.15
  const opacity = 0.3 + scrollProgress * 0.7
  const translateY = (1 - scrollProgress) * 50

  const stackOffset = index * 20

  return (
    <div
      ref={sectionRef}
      className={`sticky transition-all duration-300 ease-out ${className}`}
      style={{
        top: `${80 + stackOffset}px`,
        transform: `scale(${scale}) translateY(${translateY}px)`,
        opacity: opacity,
        zIndex: index + 1,
      }}
    >
      <div className="relative rounded-3xl border border-lyra-medium/30 overflow-hidden backdrop-blur-sm bg-gradient-to-b from-lyra-dark/50 to-lyra-darkest/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-lyra-blue/5 via-transparent to-lyra-purple/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,170,238,0.03),transparent_70%)] pointer-events-none" />

        {children}
      </div>
    </div>
  )
}
