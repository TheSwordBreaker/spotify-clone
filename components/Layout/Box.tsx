import React from "react"

import { cn } from "@/lib/utils"

interface BoxProps {
  children: React.ReactNode
  className?: string
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={cn("h-fit w-full rounded-lg bg-neutral-900", className)}>
      {children}
    </div>
  )
}

export default Box
