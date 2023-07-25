import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Button } from "./ui/button"
import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Rockets",
    href: "/rockets",
  },
  {
    title: "Missions",
    href: "/missions",
  },
  {
    title: "Profile",
    href: "/profile",
  },
]

export function SiteHeader() {
  const [isOpen, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  return (
    <header
      className={twMerge(
        "z-40 w-full sm:absolute",
        show ? "fixed" : "hidden sm:block"
      )}
    >
      <div className="flex items-center justify-between gap-2 p-6 sm:pe-0 sm:ps-10 sm:pt-0 lg:ps-20 lg:pt-10">
        <Link to="/" className="flex items-center">
          <Icons.logo />
        </Link>
        <Button
          className="z-10 sm:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? (
            <Icons.close className="w-6" />
          ) : (
            <Icons.menu className="w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
        {isOpen && (
          <div
            className="absolute inset-0 w-full animate-in fade-in-100 slide-in-from-right sm:hidden"
            onClick={() => setOpen(false)}
          >
            <div
              className="ms-auto min-h-screen w-[65%] bg-black/5 backdrop-blur-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col pe-8 ps-16 pt-28">
                <MainNav items={navItems} closeMenu={() => setOpen(false)} />
              </div>
            </div>
          </div>
        )}
        <Separator className="z-10 -mr-12 ml-16 hidden lg:block" />
        <div className="hidden sm:flex">
          <MainNav items={navItems} closeMenu={() => setOpen(false)} />
        </div>
      </div>
    </header>
  )
}
