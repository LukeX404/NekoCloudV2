"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaSteam, FaGoogle } from "react-icons/fa";
import { Lock, Mail, ArrowLeft, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoNotice("Login demonstrativo: Sistema de autenticação desativado na landing page.");
    setTimeout(() => setDemoNotice(null), 4000);
  };

  const handleSocialLogin = (provider: "Google" | "Steam") => {
    setDemoNotice(`Login social com ${provider} em modo demonstração.`);
    setTimeout(() => setDemoNotice(null), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-28 pb-16 px-4 bg-grid-pattern relative">
        {/* Glow blur effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md mx-auto">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a página inicial</span>
            </Link>
          </div>

          {/* Login Card */}
          <div className="rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-sky-500/10 p-7 sm:p-9 relative overflow-hidden">
            {/* Top brand icon */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white mx-auto shadow-md shadow-sky-500/30 mb-3">
                <span className="font-black text-2xl">N</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Área do Cliente
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Acesse o painel para gerenciar seus servidores de Minecraft e VPS
              </p>
            </div>

            {/* Demo Notice Banner */}
            {demoNotice && (
              <div className="mb-5 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-700 dark:text-sky-300 flex items-center gap-2 animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span>{demoNotice}</span>
              </div>
            )}

            {/* Social Logins: Google & Steam */}
            <div className="space-y-3 mb-6">
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="w-full py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800/90 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-3 shadow-sm hover:scale-[1.01]"
              >
                <FaGoogle className="w-4 h-4 text-red-500" />
                <span>Entrar com Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin("Steam")}
                className="w-full py-3 px-4 rounded-xl bg-[#171a21] hover:bg-[#1b2838] text-white font-semibold text-sm border border-slate-700 transition-all flex items-center justify-center gap-3 shadow-md hover:scale-[1.01]"
              >
                <FaSteam className="w-5 h-5 text-white" />
                <span>Entrar com a Steam</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
              <span className="bg-white dark:bg-[#0b1528] px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 absolute">
                Ou use seu e-mail
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Endereço de E-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Senha
                  </label>
                  <button
                    type="button"
                    onClick={() => setDemoNotice("Recuperação de senha desativada no modo demonstração.")}
                    className="text-xs text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    Esqueceu?
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 dark:focus:border-sky-400"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                />
                <label htmlFor="remember" className="ml-2 text-xs text-slate-600 dark:text-slate-400">
                  Lembrar meus dados neste dispositivo
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-md shadow-sky-500/25 hover:shadow-sky-500/35 transition-all mt-2 active:scale-95"
              >
                Entrar na Conta
              </button>
            </form>

            {/* Disclaimer */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-center">
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Painel protegido por Cloudflare &amp; 2FA
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
