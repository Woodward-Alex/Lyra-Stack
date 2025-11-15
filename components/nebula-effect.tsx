"use client"

import { useEffect, useState } from "react"

export function NebulaEffect() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = window.scrollY / totalScroll
      setScrollProgress(currentProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Moving nebula clouds */}
      <div
        className="absolute w-[800px] h-[800px] bg-gradient-radial from-lyra-purple/10 via-lyra-blue/5 to-transparent rounded-full blur-3xl"
        style={{
          left: "10%",
          top: `${20 - scrollProgress * 50}%`,
          transition: "top 0.1s ease-out",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] bg-gradient-radial from-lyra-blue/10 via-lyra-purple/5 to-transparent rounded-full blur-3xl"
        style={{
          right: "15%",
          top: `${40 + scrollProgress * 30}%`,
          transition: "top 0.1s ease-out",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-radial from-lyra-purple/8 via-lyra-blue/4 to-transparent rounded-full blur-3xl"
        style={{
          left: "50%",
          top: `${60 - scrollProgress * 40}%`,
          transition: "top 0.1s ease-out",
        }}
      />
    </div>
  )
}
