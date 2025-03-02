import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "./logo";

const routes = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Logo />
          <span className="text-xl font-bold text-primary">Abhirami Mirror Industry</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:flex-1 md:justify-center md:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === route.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
        </div>

        {/* Get a Quote Button */}
        <div className="hidden md:flex">
          <Link href="/get-a-quote">
            <Button className="px-5 py-2 text-sm font-medium bg-primary text-white rounded-xl shadow-md transition-transform transform hover:scale-105">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="ml-auto">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === route.path ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {route.name}
                </Link>
              ))}
              <Link href="/get-a-quote" className="mt-4">
                <Button className="w-full bg-primary text-white rounded-lg shadow-md py-2 text-center">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
