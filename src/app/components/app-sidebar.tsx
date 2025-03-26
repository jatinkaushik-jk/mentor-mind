"use client";
import {
  Settings,
  Stars,
  BookOpen,
  ChartLine,
  MessageSquare,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Stars,
  },
  {
    title: "Learnings",
    url: "/dashboard/learnings",
    icon: BookOpen,
  },
  {
    title: "Career Insights",
    url: "/dashboard/careers",
    icon: ChartLine,
  },
  {
    title: "AI Mentor",
    url: "/dashboard/ai-mentor",
    icon: MessageSquare,
  },
  {
    title: "Community",
    url: "/dashboard/community",
    icon: Users,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const path = usePathname();
  const { isSignedIn, user } = useUser();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="p-4 mt-2">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/logo-ltr-dark.png"
                alt="logo"
                width={150}
                height={50}
                className="aspect-auto "
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="p-2 mt-2">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={path === item.url}>
                    <Link href={item.url} className="p-4 py-[1.1rem]">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SignedIn>
          <div className="flex flex-row items-center p-4 gap-x-2">
            <UserButton />
            <div className="leading-6 cursor-context-menu">
              <div>
                <b>{(isSignedIn && user?.fullName) || "new user"}</b>
              </div>
              <div className="text-sm">
                {(isSignedIn && user?.emailAddresses[0].emailAddress) ||
                  "user@email.com"}
              </div>
            </div>
          </div>
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  );
}
