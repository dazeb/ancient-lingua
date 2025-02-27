"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Languages, History, BookMarked, User, BookOpen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Languages className="h-6 w-6" />
          <span className="font-bold text-xl">AncientLingua</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Translate
          </Link>
          <Link href="/history" className="text-sm font-medium hover:underline">
            History
          </Link>
          <Link href="/glossary" className="text-sm font-medium hover:underline">
            Glossary
          </Link>
          <Link href="/research" className="text-sm font-medium hover:underline">
            Research
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}