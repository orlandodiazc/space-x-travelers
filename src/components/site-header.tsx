import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

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
];

export function SiteHeader() {
  const [isOpen, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
    document.body.style.position = "fixed";
  }

  function closeMenu() {
    setOpen(false);
    document.body.style.position = "";
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 640) closeMenu();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="z-40 w-full">
      <div className="flex items-center justify-between gap-2 p-6 sm:pe-0 sm:ps-10 sm:pt-0 lg:ps-20 lg:pt-4">
        <Link to="/" className="flex items-center">
          <Icons.logo />
        </Link>
        <Button
          className="z-10 sm:hidden"
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
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
            className="fixed inset-0 overflow-y-scroll sm:hidden"
            onClick={closeMenu}
          >
            <div
              className="ms-auto min-h-full w-[65%] bg-black/5 backdrop-blur-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col pe-8 ps-14 pt-28">
                <MainNav items={navItems} closeMenu={closeMenu} />
              </div>
            </div>
          </div>
        )}
        <Separator className="z-10 -mr-12 ml-16 hidden lg:block" />
        <div className="hidden sm:flex">
          <MainNav items={navItems} closeMenu={closeMenu} />
        </div>
      </div>
    </header>
  );
}
