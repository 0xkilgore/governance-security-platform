"use client"

import { useEffect, useRef } from "react"

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Grid properties
    const gridSize = 30
    const dotSize = 1.2
    const lineWidth = 0.5
    const primaryColor = "#42c5f5"
    const secondaryColor = "#2a3a4a"

    // Draw function
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      // Calculate grid dimensions
      const cols = Math.ceil(width / gridSize) + 1
      const rows = Math.ceil(height / gridSize) + 1

      // Draw grid lines
      ctx.strokeStyle = secondaryColor
      ctx.lineWidth = lineWidth

      // Vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let i = 0; i < rows; i++) {
        const y = i * gridSize
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Draw intersection points with subtle wave effect
      ctx.fillStyle = primaryColor

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize

          // Add a subtle wave effect to dots
          const time = Date.now() / 1500
          const waveX = Math.sin(time + i * 0.3) * 3
          const waveY = Math.cos(time + j * 0.3) * 3

          ctx.beginPath()
          ctx.arc(x + waveX, y + waveY, dotSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      requestAnimationFrame(draw)
    }

    // Start animation
    draw()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
