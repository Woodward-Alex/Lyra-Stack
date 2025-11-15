"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale"
  delay?: number
}

export function ScrollSection({ children, className = "", animation = "fade-up", delay = 0 }: ScrollSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })

  const animationClasses = {
    "fade-up": "translate-y-12 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "translate-x-12 opacity-0",
    "slide-right": "-translate-x-12 opacity-0",
    scale: "scale-95 opacity-0",
  }

  const visibleClasses = "translate-y-0 translate-x-0 opacity-100 scale-100"

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? visibleClasses : animationClasses[animation]
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
