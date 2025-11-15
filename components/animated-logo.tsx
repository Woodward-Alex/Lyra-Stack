"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface AnimatedLogoProps {
  className?: string
  width?: number
  height?: number
  navVersion?: boolean
}

export function AnimatedLogo({ className = "", width = 56, height = 56, navVersion = false }: AnimatedLogoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      setHasError(false)
      video.play().catch((error) => {
        console.error("Error playing video:", error)
        setHasError(true)
      })
    }

    const handleError = () => {
      console.error("Error loading logo video")
      setHasError(true)
      setIsLoaded(true)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("error", handleError)

    // Force load
    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("error", handleError)
    }
  }, [])

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-full ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#070c16] opacity-70 pointer-events-none z-10 rounded-full"></div>
        <Image
          src="/lyra-logo.png"
          alt="Lyra Stack"
          width={width}
          height={height}
          className="w-full h-full object-cover rounded-full opacity-75"
          style={{ mixBlendMode: "screen" }}
        />
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-lyra-darkest flex items-center justify-center rounded-full">
          <div className="w-6 h-6 border-2 border-lyra-blue-light border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#070c16] opacity-70 pointer-events-none z-10 rounded-full"></div>

      <video
        ref={videoRef}
        className={`w-full h-full object-cover rounded-full ${isLoaded ? "opacity-75" : "opacity-0"} transition-opacity duration-500`}
        width={width}
        height={height}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          mixBlendMode: "screen",
        }}
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/social_u6993159931_Create_a_company_logo_Lyra_Stack._Lyra_the_conste_d595a5c4-ca17-4941-81c3-697b146ae97a_0-GRxIxAOwiLRUczuLR0b2sBIYa3aQwp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
