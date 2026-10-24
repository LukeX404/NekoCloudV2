"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Mail, Phone, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#hero" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-sky-500/30">
                <span className="font-black text-lg">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  Neko<span className="text-sky-400">Cloud</span>
                </span>
                <span className="text-[10px] -mt-1 font-semibold text-sky-400 tracking-wider uppercase">
                  Minecraft Hosting
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Hospedagem de servidores Minecraft de alto desempenho equipada com processadores AMD Ryzen 9 7950X, proteção Anti-DDoS Cloudflare e ativação automática.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Todos os sistemas operacionais e servidores online
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-sky-400 transition-colors">
                  Planos Minecraft
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-sky-400 transition-colors">
                  Vantagens &amp; Infra
                </a>
              </li>
              <li>
                <a href="#teste-ping" className="hover:text-sky-400 transition-colors">
                  Teste de Ping
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-sky-400 transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Localizações
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#planos" className="hover:text-sky-400 transition-colors">
                  🇧🇷 Brasil (São Paulo)
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-sky-400 transition-colors">
                  🇨🇦 Canadá (BHS)
                </a>
              </li>
              <li>
                <span className="text-xs px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                  Java &amp; Bedrock Crossplay
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Atendimento
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400" />
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
                <Phone className="w-4 h-4 text-emerald-400" />
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

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} NekoCloud. Todos os direitos reservados.
          </p>
          <p className="text-center md:text-right">
            Minecraft é uma marca registrada da Mojang Studios / Microsoft. A NekoCloud não é afiliada ou endossada pela Mojang.
          </p>
        </div>
      </div>
    </footer>
  );
}
