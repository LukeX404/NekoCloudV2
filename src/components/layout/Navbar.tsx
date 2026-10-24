"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Menu, X, User, Zap, Server, HardDrive, Gamepad2 } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "/", icon: null },
    { label: "Minecraft", href: "/minecraft", icon: Gamepad2 },
    { label: "VPS", href: "/vps", icon: Server },
    { label: "Bare Metal", href: "/bare-metal", icon: HardDrive },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#070d18]/85 backdrop-blur-xl shadow-lg shadow-sky-500/5 border-b border-sky-100/80 dark:border-sky-950/80 py-2.5"
          : "bg-white/60 dark:bg-[#070d18]/60 backdrop-blur-md border-b border-sky-100/40 dark:border-sky-950/40 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full rounded-[15px] bg-white dark:bg-[#091122] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-sky-500 group-hover:rotate-12 transition-transform duration-300"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M32 28 C22 28 17 38 18 48 C19 55 25 58 32 58 C39 58 45 55 46 48 C47 38 42 28 32 28 Z" />
                  <ellipse cx="14" cy="27" rx="5.5" ry="8" transform="rotate(-25 14 27)" />
                  <ellipse cx="25" cy="18" rx="6" ry="9" transform="rotate(-10 25 18)" />
                  <ellipse cx="39" cy="18" rx="6" ry="9" transform="rotate(10 39 18)" />
                  <ellipse cx="50" cy="27" rx="5.5" ry="8" transform="rotate(25 50 27)" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Neko<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Cloud</span>
              </span>
              <span className="text-[10px] -mt-1 font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
                Ryzen 9 9950X
              </span>
            </div>
          </Link>

          {/* Navigation Links with Neon Blue Hover Underline */}
          <nav className="hidden md:flex items-center p-1 rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-bold rounded-xl transition-all duration-200 flex items-center gap-1.5 group ${
                    active
                      ? "text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md shadow-sky-500/25"
                      : "text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-300 hover:bg-white/70 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        active ? "text-white" : "text-sky-500 group-hover:scale-110 transition-transform"
                      }`}
                    />
                  )}
                  <span>{link.label}</span>
                  {/* Subtle Neon Blue Hover Underline */}
                  {!active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8] group-hover:w-3/4 transition-all duration-300 pointer-events-none" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <div className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              9950X Online
            </div>

            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-[#0b1528]/80 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/60 hover:text-sky-500 dark:hover:text-sky-400 transition-all hover:scale-105"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 transition-transform" />
              )}
            </button>

            <Link
              href="/login"
              className="px-4 py-2 text-xs lg:text-sm font-bold rounded-2xl text-slate-800 dark:text-white bg-white/70 dark:bg-slate-900/80 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <User className="w-3.5 h-3.5 text-sky-500" />
              <span>Área do Cliente</span>
            </Link>

            <Link
              href="/minecraft"
              className="px-4 py-2 text-xs lg:text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 rounded-2xl shadow-md shadow-sky-500/25 transition-all hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 fill-white" />
              <span>Ver Planos</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/50"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/50"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070d18]/95 backdrop-blur-2xl border-b border-sky-100 dark:border-sky-950/80 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Menu de Navegação
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Ryzen 9 9950X
              </div>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-3 text-sm font-bold rounded-xl transition-colors flex items-center gap-2.5 ${
                    active
                      ? "text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-md"
                      : "text-slate-800 dark:text-slate-200 hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/50"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-sky-500" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={handleLinkClick}
                className="w-full text-center py-3 text-sm font-bold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-sky-500" />
                <span>Área do Cliente (Login)</span>
              </Link>
              <Link
                href="/minecraft"
                onClick={handleLinkClick}
                className="w-full text-center py-3 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl shadow-md shadow-sky-500/25"
              >
                Planos Minecraft
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
