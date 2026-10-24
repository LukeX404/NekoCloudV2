"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/data/plans";
import { Star, MessageCircle, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-20 md:py-28 bg-slate-50/60 dark:bg-[#070d18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-sky-500" />
            <span>Avaliações Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            O que Nossos Clientes Dizem
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Descubra por que centenas de administradores e comunidades confiam a hospedagem dos seus mundos à NekoCloud.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-white dark:bg-[#0b1528] border border-slate-200/90 dark:border-slate-800/80 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:border-sky-300 dark:hover:border-sky-800 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {t.highlightTag && (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
                      {t.highlightTag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/70 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sky-500/30 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
