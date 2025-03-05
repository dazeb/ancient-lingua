import Link from "next/link";
import { Languages, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Languages className="h-6 w-6" />
              <span className="font-bold text-xl">AncientLingua</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover and explore ancient texts through advanced translation and research tools.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social and Copyright */}
          <div className="space-y-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AncientLingua. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
