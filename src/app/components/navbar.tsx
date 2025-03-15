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
              <NavigationMenuItem>
                <Link href="#home" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#features" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Features
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#getting-started" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Getting Started
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#team" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Team
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
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
              <NavigationMenuList className="flex-col items-center justify-between py-2 pb-24 h-screen text-center w-full">
                <div className="flex flex-col gap-y-2">
                  <NavigationMenuItem>
                    <Link href="#home" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle() + " text-lg"}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle() + " text-lg"}
                      >
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#features" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle() + " text-lg"}
                      >
                        Features
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#get-started" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle() + " text-lg"}
                      >
                        Getting Started
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#team" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle() + " text-lg"}
                      >
                        Team
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
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
            <Button asChild variant="ghost">
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
