import { useEffect } from "react";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Process from "@/components/landing/Process";
import ContactFooter from "@/components/landing/ContactFooter";
import { INK, PANEL } from "@/components/landing/theme";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen font-chinese" style={{ background: PANEL, color: INK }}>
      <Hero />
      <Features />
      <Process />
      <ContactFooter />

      <style>{`
        .card {
          transition: transform 0.28s cubic-bezier(.22,1,.36,1), box-shadow 0.28s ease, border-color 0.28s ease;
          box-shadow: 0 1px 2px rgba(17,19,24,0.04);
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(17,19,24,0.10);
          border-color: rgba(255,90,31,0.35) !important;
        }
        .card-icon { transition: transform 0.28s cubic-bezier(.22,1,.36,1), background 0.28s ease; }
        .card:hover .card-icon { transform: scale(1.08) rotate(-4deg); background: #FFF1EA; }
        .arrow-slide { transition: transform 0.25s ease; }
        .card:hover .arrow-slide { transform: translate(3px,-3px); }
        .btn-press { transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease; }
        .btn-press:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(17,19,24,0.18); }
        .btn-press:active { transform: translateY(0); }
        .btn-accent:hover { box-shadow: 0 10px 24px rgba(255,90,31,0.35) !important; }
        .row-item { transition: background 0.18s ease, padding-left 0.2s ease; }
        .row-item:hover { background: #FAFAFA; padding-left: 26px; }
      `}</style>
    </div>
  );
}
