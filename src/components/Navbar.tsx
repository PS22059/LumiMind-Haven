"use client";

import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center justify-between px-4 container mx-auto">
        {/* LEFT SECTION - LOGO */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-2xl font-mono hover:opacity-80 transition-opacity"
          >
            <img 
              src="/logo.png" 
              alt="Lumi Mind Logo" 
              className="h-12 w-12 object-contain rounded-full"
            />
            <span className="text-xl font-semibold" style={{ color: '#3365b5' }}>LumiMind Haven
            </span>
          </Link>
        </div>

        {/* MIDDLE SECTION - NAVIGATION */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground text-primary transition-colors font-bold">
            Trang chủ
          </Link>
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, 'about')}
            className="text-foreground text-primary transition-colors font-bold"
          >
            Về chúng tôi
          </a>
          <a 
            href="#how-it-works" 
            onClick={(e) => handleScroll(e, 'how-it-works')}
            className="text-foreground text-primary transition-colors font-bold"
          >
            Cách thức hoạt động
          </a>
          <a 
            href="#counselors" 
            onClick={(e) => handleScroll(e, 'counselors')}
            className="text-foreground text-primary transition-colors font-bold"
          >
            Cố vấn
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="text-foreground text-primary transition-colors font-bold"
          >
            Liên hệ
          </a>
        </div>

        {/* RIGHT SECTION - ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
          
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              userProfileMode="navigation"
              userProfileUrl="/dashboard"
            />
          </SignedIn>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-3">
            <Link 
              href="/" 
              className="block text-foreground text-primary transition-colors font-bold"
              onClick={() => setIsOpen(false)}
            >
              Trang chủ
            </Link>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="block text-foreground text-primary transition-colors font-bold"
            >
              Về chúng tôi
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleScroll(e, 'how-it-works')}
              className="block text-foreground text-primary transition-colors font-bold"
            >
              Cách thức hoạt động
            </a>
            <a 
              href="#counselors" 
              onClick={(e) => handleScroll(e, 'counselors')}
              className="block text-foreground text-primary transition-colors font-bold"
            >
              Cố vấn
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="block text-foreground text-primary transition-colors font-bold"
            >
              Liên hệ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
