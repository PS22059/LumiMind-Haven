"use client";

import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";


function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
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
          
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              userProfileMode="navigation"
              userProfileUrl="/dashboard"
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
