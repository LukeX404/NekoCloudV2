"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar, Footer } from "@/components";
import { FaSteam, FaGoogle } from "react-icons/fa";
import { Lock, Mail, ArrowLeft, ShieldCheck, AlertCircle, Sparkles, Server, CheckCircle2 } from "lucide-react";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoNotice("Demonstração: Autenticação desativada na landing page.");
    setTimeout(() => setDemoNotice(null), 4000);
  };

  const handleSocialLogin = (provider: "Google" | "Steam") => {
    setDemoNotice(`Autenticação com ${provider} em modo demonstração.`);
    setTimeout(() => setDemoNotice(null), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a página inicial</span>
            </Link>
          </div>

          <div className="rounded-3xl bg-white/90 dark:bg-[#091122]/90 border border-slate-200 dark:border-sky-950/80 shadow-2xl shadow-sky-500/10 overflow-hidden backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12">
            <div className="hidden lg:flex lg:col-span-5 relative p-10 flex-col justify-between bg-gradient-to-br from-sky-900/40 via-blue-950/50 to-[#070d18] border-r border-slate-200/50 dark:border-slate-800/80 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-400 border border-sky-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Painel NekoCloud</span>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight">
                  Controle total sobre seus servidores.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Gerencie versões de Minecraft, acesse o console em tempo real, instale modpacks e configure suas instâncias VPS.
                </p>
              </div>

              <div className="relative z-10 my-6 rounded-2xl overflow-hidden border border-sky-400/30 shadow-xl group">
                <Image
                  src="/og-image.jpg"
                  alt="NekoCloud Panel Artwork"
                  width={400}
                  height={220}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-3">
                  <div className="flex items-center gap-2 text-[11px] text-sky-300 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ryzen 9 9950X Nodes Operacionais
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Instalação de Mods &amp; Plugins com 1 clique</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Acesso SFTP e Gerenciador de Arquivos web</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Subdomínio gratuito e Anti-DDoS ativo</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
              <div className="text-center sm:text-left mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white mb-3 shadow-md shadow-sky-500/30">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 28 C22 28 17 38 18 48 C19 55 25 58 32 58 C39 58 45 55 46 48 C47 38 42 28 32 28 Z" />
                    <ellipse cx="14" cy="27" rx="5.5" ry="8" transform="rotate(-25 14 27)" />
                    <ellipse cx="25" cy="18" rx="6" ry="9" transform="rotate(-10 25 18)" />
                    <ellipse cx="39" cy="18" rx="6" ry="9" transform="rotate(10 39 18)" />
                    <ellipse cx="50" cy="27" rx="5.5" ry="8" transform="rotate(25 50 27)" />
                  </svg>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  Acessar Painel
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Entre na sua conta para gerenciar servidores e instâncias
                </p>
              </div>

              {demoNotice && (
                <div className="mb-5 p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-xs font-bold text-sky-600 dark:text-sky-300 flex items-center gap-2 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>{demoNotice}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("Google")}
                  className="py-3 px-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-2.5 shadow-sm hover:scale-[1.02]"
                >
                  <FaGoogle className="w-4 h-4 text-rose-500" />
                  <span>Entrar com Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin("Steam")}
                  className="py-3 px-4 rounded-2xl bg-[#171a21] hover:bg-[#1b2838] text-white font-bold text-xs border border-slate-700 transition-all flex items-center justify-center gap-2.5 shadow-sm hover:scale-[1.02]"
                >
                  <FaSteam className="w-4 h-4 text-white" />
                  <span>Entrar com a Steam</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center my-5">
                <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
                <span className="bg-white dark:bg-[#091122] px-3 text-[10px] font-black uppercase tracking-wider text-slate-400 absolute">
                  Ou acesse com e-mail
                </span>
              </div>

              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    E-mail Cadastrado
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="admin@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Senha
                    </label>
                    <button
                      type="button"
                      onClick={() => setDemoNotice("Recuperação desativada no modo demonstração.")}
                      className="text-xs text-sky-500 font-semibold hover:underline"
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 shadow-sm"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                  />
                  <label htmlFor="remember" className="ml-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                    Lembrar credenciais neste navegador
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all mt-2 active:scale-95"
                >
                  Entrar no Painel
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 text-center">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Conexão segura com criptografia ponta a ponta
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
