"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"

import { cn } from "@/lib/utils"

import Button from "../Button"

interface HeaderProps {
  className?: string
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  const router = useRouter()
  const handleLogout = () => {
    // handle logout in future
  }
  return (
    <div
      className={cn(
        `h-fit bg-gradient-to-b
        from-emerald-800 p-6`,
        className
      )}>
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="hidden items-center gap-x-2 md:flex">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75 ">
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75 ">
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex items-center gap-x-2 md:hidden">
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <HiHome className={cn(`text-black`)} size={20} />
          </button>
          <button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
            <BiSearch className={cn(`text-black`)} size={20} />
          </button>
        </div>

        <div className={cn(`flex items-center justify-between gap-x-4`)}>
          <>
            <div>
              <Button className="bg-transparent font-medium text-neutral-300">
                Sign up
              </Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2">Log in</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header
