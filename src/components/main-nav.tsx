import { twMerge } from "tailwind-merge"

import { NavItem } from "../types/nav"
import { Link, useLocation } from "react-router-dom"

interface MainNavProps {
  items?: NavItem[]
  closeMenu: () => void
}

export function MainNav({ items, closeMenu }: MainNavProps) {
  const { pathname } = useLocation()
  return (
    <div className="flex flex-col sm:h-24 sm:flex-row sm:justify-center sm:rounded-bl-md sm:bg-white/5 sm:px-8 sm:backdrop-blur-lg lg:rounded-l-md lg:pe-36 lg:ps-32">
      {items?.length ? (
        <nav className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-12">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  to={item.href}
                  onClick={closeMenu}
                  className={twMerge(
                    "flex h-full items-center border-b-4 py-1.5 text-lg uppercase hover:text-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                    pathname === item.href
                      ? "border-white"
                      : "border-transparent hover:border-white/50"
                  )}
                >
                  <span className="flex gap-4">
                    <span className="hidden w-3 lg:block">0{index}</span>
                    <span>{item.title}</span>
                  </span>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
