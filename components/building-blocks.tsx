"use client"

import { useEffect, useState } from "react"

export function BuildingBlocks() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-64 h-64 mx-auto mb-8">
      {/* Building blocks animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-20 h-20 bg-gradient-to-br from-lyra-accent/30 to-lyra-medium/30 backdrop-blur-sm border border-lyra-accent/30 rounded-lg transform rotate-45 animate-pulse-glow`}
            style={{
              transform: `translateY(${i * -15}px) translateX(${i * 5}px) rotate(45deg)`,
              animationDelay: `${i * 0.5}s`,
              zIndex: 3 - i,
            }}
          >
            <div className="absolute inset-2 bg-gradient-to-br from-lyra-accent/20 to-lyra-lightest/20 rounded border border-lyra-accent/20">
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-lyra-lightest rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
            </div>
          </div>
        ))}
      </div>

      {/* Sparkle effects */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 bg-lyra-accent rounded-full animate-ping"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  )
}
