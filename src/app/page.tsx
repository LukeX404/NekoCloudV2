import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VersionsTicker from "@/components/VersionsTicker";
import PingTest from "@/components/PingTest";
import Plans from "@/components/Plans";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import CommunityDiscord from "@/components/CommunityDiscord";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#070d18] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <VersionsTicker />
        <PingTest />
        <Plans />
        <Features />
        <Showcase />
        <CommunityDiscord />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
