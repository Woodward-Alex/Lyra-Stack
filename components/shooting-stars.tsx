"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  left: string
  top: string
  animationDuration: string
  animationDelay: string
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const createStar = () => {
      const newStar: Star = {
        id: Date.now(),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 50}%`,
        animationDuration: `${Math.random() * 2 + 1}s`,
        animationDelay: "0s",
      }

      setStars((prev) => [...prev, newStar])

      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id))
      }, 3000)
    }

    const interval = setInterval(createStar, 4000)
    createStar()

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-lyra-blue-light rounded-full animate-shooting-star"
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  )
}
