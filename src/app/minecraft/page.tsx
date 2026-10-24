import Navbar from "@/components/Navbar";
import PingTest from "@/components/PingTest";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import CommunityDiscord from "@/components/CommunityDiscord";
import { Gamepad2, Cpu, Shield, Sparkles } from "lucide-react";

export default function MinecraftPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-28">
        {/* Minecraft Hero Banner */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-sky-50 to-white dark:from-[#0d1f3b] dark:to-[#070d18] border-b border-sky-100 dark:border-sky-950/60 text-center">
          <div className="max-w-5xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-4">
              <Gamepad2 className="w-3.5 h-3.5 text-sky-500" />
              <span>Java 1.8 ~ 1.21.x &amp; Bedrock Crossplay</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Hospedagem de Servidores Minecraft
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Equipada com processadores <strong className="text-slate-900 dark:text-white">AMD Ryzen 9 9950X (Zen 5)</strong>, SSDs NVMe Gen4 e proteção Anti-DDoS de 228 Tbps para seu mundo nunca cair.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Cpu className="w-4 h-4 text-sky-500" /> Ryzen 9 9950X @ 5.7GHz
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Shield className="w-4 h-4 text-emerald-500" /> Cloudflare Magic Transit 228 Tbps
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500" /> GeyserMC + Floodgate Integrado
              </span>
            </div>
          </div>
        </section>

        {/* Latency Checker */}
        <PingTest />

        {/* Plans */}
        <Plans />

        {/* Discord CTA */}
        <CommunityDiscord />

        {/* FAQ */}
        <Faq />
      </main>

      <Footer />
    </div>
  );
}
