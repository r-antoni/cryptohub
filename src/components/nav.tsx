"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Datafeed",
    path: "/feed"
  },
  {
    name: "Cryptocurrencies",
    path: "/market"
  },
  {
    name: "Swap",
    path: "/swap"
  },
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-5 text-sm pt-1 font-medium text-slate-600">
      {links.map((link, index) =>{
        return (
          <Link className={`${link.path === pathname && "text-blue-400 border-b-2 border-blue-400"}`} href={link.path} key={index}>
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav