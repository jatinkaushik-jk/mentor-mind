import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  SignedOut,
  SignUpButton,
  SignedIn,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Getting Started", href: "#getting-started" },
];

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto bg-background">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/logo-ltr-dark.png"
            alt="logo"
            width={200}
            height={50}
            className="aspect-auto "
          />
        </Link>
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <NavigationMenu
              orientation="vertical"
              className="w-full mx-auto items-start"
            >
              <NavigationMenuList className="flex-col items-center justify-between py-2 pb-20 h-svh text-center w-full">
                <div className="flex flex-col gap-y-2">
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle() + " text-lg"}
                        >
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </div>
                <div className="flex flex-col gap-y-2 w-full">
                  <SignedOut>
                    <NavigationMenuItem className="w-full">
                      <Button asChild className="w-full">
                        <SignInButton>Login</SignInButton>
                      </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="w-full">
                      <Button asChild variant="ghost" className="w-full">
                        <SignUpButton></SignUpButton>
                      </Button>
                    </NavigationMenuItem>
                  </SignedOut>
                  <SignedIn>
                    <Button asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  </SignedIn>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex space-x-2">
          <SignedOut>
            <Button asChild>
              <SignInButton>Login</SignInButton>
            </Button>
            <Button asChild variant="outline">
              <SignUpButton></SignUpButton>
            </Button>
          </SignedOut>
        </div>

        <SignedIn>
          <div className="flex flex-row gap-x-4 items-center">
            <UserButton />
            <Button asChild className="hidden lg:flex">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </SignedIn>
      </div>
    </>
  );
};

export default Navbar;
