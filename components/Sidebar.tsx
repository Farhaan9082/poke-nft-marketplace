"use client";

import { sidebarLinks } from "@/constants";
import { Card } from "./ui/card";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="max-md:hidden">
      <Card className="h-full py-3 px-3">
        <div className="flex flex-col gap-4">
          {sidebarLinks.map(({ route, label }) => {
            const isActive =
              (pathname.includes(route) && route.length > 1) ||
              pathname === route;

            return (
              <Link href={route} key={label}>
                <div
                  className={`flex items-center gap-3 rounded-md p-3 ${
                    isActive && "bg-secondary"
                  }`}
                >
                  <p className="text-sm max-lg:hidden">{label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Card>
    </aside>
  );
};
