import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SiteHeader from "@/components/landing/SiteHeader";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Process from "@/components/landing/Process";
import BlogPreview from "@/components/landing/BlogPreview";
import ContactFooter from "@/components/landing/ContactFooter";
import SiteFooter from "@/components/landing/SiteFooter";
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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen font-chinese" style={{ background: PANEL, color: INK }}>
      <SiteHeader />
      <Hero />
      <Features />
      <Process />
      <BlogPreview />
      <ContactFooter />
      <SiteFooter />
    </div>
  );
}