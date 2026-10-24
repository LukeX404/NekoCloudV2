"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  User,
  Zap,
  Server,
  HardDrive,
  Gamepad2,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Minecraft", href: "/minecraft", icon: Gamepad2, badge: "Zen 5" },
    { label: "VPS Cloud", href: "/vps", icon: Server, badge: null },
    { label: "Bare Metal", href: "/bare-metal", icon: HardDrive, badge: "Dedicado" },
  ];

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#060c18]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-sky-500/20 shadow-lg shadow-sky-950/5"
          : "bg-white/40 dark:bg-[#060c18]/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-md shadow-sky-500/25 group-hover:scale-105 group-hover:shadow-sky-500/40 transition-all duration-300">
              <div className="w-full h-full rounded-[14px] bg-white dark:bg-[#081226] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-sky-500 group-hover:rotate-12 transition-transform duration-300"
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
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                  Neko<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-300">Cloud</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                  9950X
                </span>
              </div>
              <span className="text-[10px] -mt-1 font-semibold text-slate-400 dark:text-slate-400 tracking-wider">
                Hospedagem &amp; Cloud
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                pathname === "/"
                  ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 font-bold"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40"
              }`}
            >
              Início
            </Link>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    active
                      ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 font-bold"
                      : "text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/40"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-sky-500" : "text-slate-400 group-hover:text-sky-400"}`} />
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 rounded-full font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Ping Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>11ms SP (Fibra)</span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0a1324] text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-500 dark:hover:text-sky-400 transition-all hover:scale-105"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600 transition-transform" />
              )}
            </button>

            {/* Client Login Button */}
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-sky-50 dark:hover:bg-sky-950/60 hover:text-sky-600 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2"
            >
              <User className="w-4 h-4 text-sky-500" />
              <span>Área do Cliente</span>
            </Link>

            {/* Primary Action Button */}
            <Link
              href="/minecraft"
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Zap className="w-4 h-4 fill-white" />
              <span>Ver Planos</span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-sky-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#070e1e]/98 backdrop-blur-2xl border-b border-sky-100 dark:border-sky-950/80 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-400">
              <span className="font-bold uppercase tracking-wider">Navegação</span>
              <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Rede 11ms SP
              </span>
            </div>

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-between ${
                pathname === "/"
                  ? "text-white bg-gradient-to-r from-sky-500 to-blue-600"
                  : "text-slate-800 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-800/60"
              }`}
            >
              <span>Início</span>
              <ChevronRight className="w-4 h-4 opacity-40" />
            </Link>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-between ${
                    active
                      ? "text-white bg-gradient-to-r from-sky-500 to-blue-600"
                      : "text-slate-800 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${active ? "text-white" : "text-sky-500"}`} />
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 opacity-40 ${active ? "text-white" : "text-slate-400"}`} />
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-bold rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-sky-500" />
                <span>Área do Cliente (Login)</span>
              </Link>
              <Link
                href="/minecraft"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 fill-white" />
                <span>Ver Planos Minecraft</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
