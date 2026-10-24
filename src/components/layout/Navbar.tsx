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
      setScrolled(window.scrollY > 20);
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
          ? "bg-white/90 dark:bg-[#070d18]/90 backdrop-blur-md shadow-lg shadow-sky-500/5 border-b border-sky-100 dark:border-sky-950/60 py-3"
          : "bg-white/70 dark:bg-[#070d18]/70 backdrop-blur-sm border-b border-sky-100/60 dark:border-sky-950/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-sky-500/30 group-hover:scale-105 transition-transform">
              <span className="font-black text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Neko<span className="text-sky-500">Cloud</span>
              </span>
              <span className="text-[10px] -mt-1 font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
                Ryzen 9 9950X Hosting
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                    active
                      ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 shadow-sm"
                      : "text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50/50 dark:hover:bg-sky-950/30"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-sky-500" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Area do Cliente (Login) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status indicator */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              9950X Online
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 dark:hover:text-sky-400 transition-all hover:scale-105"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-sky-600 transition-transform" />
              )}
            </button>

            {/* Login / Client Area Button */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold rounded-xl text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2"
            >
              <User className="w-4 h-4 text-sky-500" />
              <span>Área do Cliente</span>
            </Link>

            {/* Quick Action Plan Button */}
            <Link
              href="/minecraft"
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl shadow-md shadow-sky-500/25 transition-all hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Ver Planos</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/50"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-sky-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/50"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070d18]/95 backdrop-blur-xl border-b border-sky-100 dark:border-sky-950/80 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Menu de Páginas
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
                  className={`px-4 py-3 text-base font-semibold rounded-xl transition-colors flex items-center gap-2.5 ${
                    active
                      ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60"
                      : "text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/50"
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
                className="w-full text-center py-3 text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-sky-500" />
                <span>Área do Cliente (Login)</span>
              </Link>
              <Link
                href="/minecraft"
                onClick={handleLinkClick}
                className="w-full text-center py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl shadow-md shadow-sky-500/25"
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
