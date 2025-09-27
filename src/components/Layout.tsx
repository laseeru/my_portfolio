"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Speaking", href: "/speaking" },
    { label: "Writing", href: "/writing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-950/70 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-lg">
            Abdul-Rashid / Portfolio
          </Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-600 dark:hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-600 dark:text-blue-400 font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Abdul-Rashid Dasana Abdulai • Made with Next.js + Tailwind
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:blaseeru@email.com"
                className="text-sm text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Email
              </a>
              <a
                href="https://github.com/laseeru"
                className="text-sm text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-handle"
                className="text-sm text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
