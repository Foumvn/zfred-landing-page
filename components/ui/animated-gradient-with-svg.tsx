"use client"

import type React from "react"
import { useMemo, useRef } from "react"
import { cn } from "@/lib/utils"
import { useDimensions } from "@/components/hooks/use-debounced-dimensions"

interface AnimatedGradientProps {
  colors: string[]
  speed?: number
  blur?: "light" | "medium" | "heavy"
}

const deterministicValue = (min: number, max: number, seed: number) => {
  return min + (seed % 100) / 100 * (max - min)
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ colors, speed = 5, blur = "light" }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)

  const randomValues = useMemo(() => {
    return colors.map((_, index) => {
      const seed = index + 1
      const value = (offset: number) => (((seed * (offset + 7)) % 100) / 100) - 0.5

      return {
        top: ((seed * 23) % 50),
        left: ((seed * 41) % 50),
        tx1: value(1),
        ty1: value(2),
        tx2: value(3),
        ty2: value(4),
        tx3: value(5),
        ty3: value(6),
        tx4: value(7),
        ty4: value(8),
        widthMultiplier: deterministicValue(0.5, 1.5, seed * 3),
        heightMultiplier: deterministicValue(0.5, 1.5, seed * 5),
      }
    })
  }, [colors])

  const circleSize = useMemo(() => {
    if (dimensions.width === 0 && dimensions.height === 0) {
      return 400 // Default size for SSR
    }
    return Math.max(dimensions.width, dimensions.height)
  }, [dimensions.width, dimensions.height])

  const blurClass = blur === "light" ? "blur-2xl" : blur === "medium" ? "blur-3xl" : "blur-[100px]"

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => {
          const randomValue = randomValues[index]
          if (!randomValue) return null

          return (
            <svg
              key={index}
              className="absolute animate-background-gradient"
              style={
                {
                  top: `${randomValue.top}%`,
                  left: `${randomValue.left}%`,
                  "--background-gradient-speed": `${1 / speed}s`,
                  "--tx-1": randomValue.tx1,
                  "--ty-1": randomValue.ty1,
                  "--tx-2": randomValue.tx2,
                  "--ty-2": randomValue.ty2,
                  "--tx-3": randomValue.tx3,
                  "--ty-3": randomValue.ty3,
                  "--tx-4": randomValue.tx4,
                  "--ty-4": randomValue.ty4,
                } as React.CSSProperties
              }
              width={circleSize * randomValue.widthMultiplier}
              height={circleSize * randomValue.heightMultiplier}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill={color} className="opacity-30 dark:opacity-[0.15]" />
            </svg>
          )
        })}
      </div>
    </div>
  )
}

export { AnimatedGradient }
