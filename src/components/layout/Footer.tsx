"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaDiscord, 
  FaSteam, 
  FaInstagram, 
  FaTwitter, 
  FaGithub, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                <span className="font-black text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  Neko<span className="text-sky-400">Cloud</span>
                </span>
                <span className="text-[10px] -mt-1 font-semibold text-sky-400 tracking-wider uppercase">
                  Minecraft &amp; Cloud Hosting
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Hospedagem de alto desempenho equipada com processadores <strong className="text-white">AMD Ryzen 9 9950X (Zen 5)</strong>, proteção Anti-DDoS Cloudflare de 228 Tbps e ativação automática.
            </p>

            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Comunidade &amp; Redes
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all hover:scale-110 shadow-sm"
                >
                  <FaDiscord size={18} />
                </a>
                <a
                  href="https://steamcommunity.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Steam"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-600 hover:border-sky-500 transition-all hover:scale-110 shadow-sm"
                >
                  <FaSteam size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all hover:scale-110 shadow-sm"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-400 transition-all hover:scale-110 shadow-sm"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all hover:scale-110 shadow-sm"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all hover:scale-110 shadow-sm"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Infraestrutura Ryzen 9 9950X operacional
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/minecraft" className="hover:text-sky-400 transition-colors">
                  Minecraft Hosting
                </Link>
              </li>
              <li>
                <Link href="/vps" className="hover:text-sky-400 transition-colors">
                  VPS Cloud KVM
                </Link>
              </li>
              <li>
                <Link href="/bare-metal" className="hover:text-sky-400 transition-colors">
                  Bare Metal (Dedicados)
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-sky-400 transition-colors">
                  Área do Cliente (Login)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Produtos &amp; Soluções
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/minecraft" className="hover:text-sky-400 transition-colors">
                  Servidores Java &amp; Bedrock
                </Link>
              </li>
              <li>
                <Link href="/vps" className="hover:text-sky-400 transition-colors">
                  VPS Ryzen 9 9950X
                </Link>
              </li>
              <li>
                <Link href="/bare-metal" className="hover:text-sky-400 transition-colors">
                  Servidores Dedicados EPYC
                </Link>
              </li>
              <li>
                <span className="text-xs px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  Anti-DDoS 228 Tbps Incluso
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaDiscord className="w-4 h-4 text-indigo-400" />
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  Discord Oficial
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sky-400 transition-colors"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <a
                  href="mailto:contato@nekocloud.com.br"
                  className="hover:text-sky-400 transition-colors"
                >
                  contato@nekocloud.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p suppressHydrationWarning>
            &copy; {currentYear} NekoCloud. Licença MIT - Código Livre para Uso.
          </p>
          <p className="text-center md:text-right">
            Minecraft é uma marca registrada da Mojang Studios / Microsoft. Projeto conceitual sem afiliação direta.
          </p>
        </div>
      </div>
    </footer>
  );
}
