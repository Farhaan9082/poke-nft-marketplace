"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { ConnectWallet } from "@thirdweb-dev/react";
import { MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="mb-10 text-left">
            PokeNFT Marketplace
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">
          {sidebarLinks.map(({ route, label }) => {
            const isActive =
              (pathname.includes(route) && route.length > 1) ||
              pathname === route;

            return (
              <Link href={route} key={label}>
                <div
                  className={` ${
                    isActive && "bg-secondary"
                  } flex text-sm p-3 rounded-md`}
                >
                  {label}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-16">
          <Separator className="mb-2" />
          <SheetDescription>Settings</SheetDescription>
          <div className="flex items-center justify-between">
            <p>Theme</p>
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const Navbar = () => {
  const { theme } = useTheme();
  const themeValue = theme === "light" ? "light" : "dark";
  const pathname = usePathname();

  return (
    <nav>
      <div className="p-3 border-b md:p-4">
        <div className="lg:hidden flex justify-between items-center">
          <Sidebar />
          <ConnectWallet
            theme={themeValue}
            switchToActiveChain={true}
            modalSize={"wide"}
          />
        </div>
        <div className="hidden lg:flex justify-between items-center">
          <h1 className="text-xl font-semibold select-none">
            PokeNFT Marketplace
          </h1>
          <div className="flex items-center gap-10">
            {sidebarLinks.map(({ route, label }) => {
              const isActive =
                (pathname.includes(route) && route.length > 1) ||
                pathname === route;

              return (
                <Link href={route} key={label}>
                  <div
                    className={` ${
                      isActive && "opacity-100"
                    } opacity-60 hover:opacity-100 transition-opacity`}
                  >
                    {label}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <ConnectWallet
              theme={themeValue}
              switchToActiveChain={true}
              modalSize={"wide"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
