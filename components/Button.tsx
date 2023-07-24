import React, { FC, forwardRef } from "react"

import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, disabled, type = "button", ...props },
  ref
) {
  return (
    <button
      type={type}
      className={cn(
        `w-full rounded-full border border-transparent bg-green-500 p-3
        font-bold text-black transition hover:opacity-75
        disabled:cursor-not-allowed disabled:opacity-50
        `,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}>
      {children}
    </button>
  )
})

export default Button
