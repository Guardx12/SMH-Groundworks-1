"use client"

import { useEffect, useRef, useState } from "react"

export function BouncingLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const velocity = useRef({ dx: 1.2, dy: 0.8 })
  const animRef = useRef<number>(0)
  const logoSize = 160

  useEffect(() => {
    const container = containerRef.current?.parentElement
    if (!container) return

    const rect = container.getBoundingClientRect()
    setPos({
      x: rect.width / 2 - logoSize / 2,
      y: rect.height / 2 - logoSize / 2,
    })

    let currentX = rect.width / 2 - logoSize / 2
    let currentY = rect.height / 2 - logoSize / 2

    const animate = () => {
      const bounds = container.getBoundingClientRect()
      const maxX = bounds.width - logoSize
      const maxY = bounds.height - logoSize

      currentX += velocity.current.dx
      currentY += velocity.current.dy

      if (currentX <= 0 || currentX >= maxX) {
        velocity.current.dx *= -1
        currentX = Math.max(0, Math.min(currentX, maxX))
      }
      if (currentY <= 0 || currentY >= maxY) {
        velocity.current.dy *= -1
        currentY = Math.max(0, Math.min(currentY, maxY))
      }

      setPos({ x: currentX, y: currentY })
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-20 pointer-events-none">
      <div
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          width: logoSize,
          height: logoSize,
        }}
        className="absolute top-0 left-0 will-change-transform"
      >
        {/* Using plain img to avoid Next.js image optimization issues with animation */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="SMH Groundworks Ltd"
          width={logoSize}
          height={logoSize}
          className="rounded-full drop-shadow-[0_0_20px_rgba(180,180,180,0.3)]"
        />
      </div>
    </div>
  )
}
