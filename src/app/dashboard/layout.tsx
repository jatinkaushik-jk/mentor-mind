"use client";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Stars } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const pathSegments = path
    .split("/")
    .filter((segment) => segment)
    .slice(1);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky z-10 top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center justify-between w-full pr-1 sm:pr-4">
            <Breadcrumb>
              <BreadcrumbList>
                {pathSegments.length > 0 ? (
                  <>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="/dashboard">
                        Dashboard
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {/* <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize">
                        {path.split("dashboard/")[1]}
                      </BreadcrumbPage>
                    </BreadcrumbItem> */}
                    {pathSegments.map((segment, index) => {
                      const href = `/dashboard/${pathSegments
                        .slice(0, index + 1)
                        .join("/")}`;
                      const isLast = index === pathSegments.length - 1;
                      return (
                        <div key={href} className="flex items-center">
                          <BreadcrumbSeparator className="mr-1" />
                          <BreadcrumbItem>
                            {isLast ? (
                              <BreadcrumbPage className="capitalize">
                                {decodeURIComponent(segment)}
                              </BreadcrumbPage>
                            ) : (
                              <BreadcrumbLink
                                href={href}
                                className="capitalize"
                              >
                                {decodeURIComponent(segment)}
                              </BreadcrumbLink>
                            )}
                          </BreadcrumbItem>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbPage>Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
            <Button variant={"outline"}>
              <Stars />
              Upgrade to Pro
            </Button>
          </div>
        </header>
        <main>
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
