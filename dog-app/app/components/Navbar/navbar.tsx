
"use client";

import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      
      {/* Logo */}
      <div className="logo-section">
        
        <Link href="/" className="logo-link">
      
          <Image className="logo-image"

            src="/petme_white_logo.png"
            alt="Dog Logo"
            width={50}
            height={50}
          />
          <span className="brand">Pet Me </span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
        
        
      
      </div>
     
      

    </nav>
  );
}