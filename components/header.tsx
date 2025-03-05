"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { UserMenu } from "@/components/user-menu";
import Link from "next/link";
import { 
  Languages, 
  History, 
  Menu, 
  Users,
  GraduationCap
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import { useRouter } from "next/navigation";

const navigation = [
  { name: 'Translate', href: '/', icon: Languages },
  { name: 'Authors', href: '/authors', icon: Users },
  { name: 'History', href: '/history', icon: History },
  { name: 'Research', href: '/research', icon: GraduationCap }
];

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleNavigation = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-2">
                  <Languages className="h-6 w-6" />
                  <span>AncientLingua</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="flex items-center justify-start space-x-2 px-2 py-2 w-full hover:bg-accent"
                      onClick={() => handleNavigation(item.href)}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Button>
                  );
                })}
              </nav>
              <SheetFooter className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between w-full">
                  <ModeToggle />
                  <UserMenu />
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <Languages className="h-6 w-6" />
            <span className="font-bold text-xl">AncientLingua</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <div className="hidden md:block">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
