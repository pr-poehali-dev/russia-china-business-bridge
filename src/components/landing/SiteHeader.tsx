import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, PANEL, ACCENT, BRAND } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = typeof window !== "undefined" && !!localStorage.getItem("client_token");
  const { lang, toggle } = useLang();
  const t = useT(lang);
  const { navLinks } = useContent(lang);

  const linkTo = (href: string) => (href.startsWith("#") ? `/${href}` : href);

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <button onClick={toggle}
      className={`px-3 py-2 rounded-full text-sm font-semibold transition-all hover:opacity-80 flex items-center gap-1.5 ${className}`}
      style={{ background: PANEL, border: `1px solid ${LINE}`, color: INK }}
      aria-label="Сменить язык">
      <Icon name="Globe" size={15} style={{ color: SUB }} />
      {lang === "ru" ? "中文" : "RU"}
    </button>
  );

  return (
    <>
      {/* ── NAV ── */}
      <nav className="sticky top-3 md:top-5 z-50 px-3 md:px-6">
        <div className="mx-auto w-full max-w-5xl rounded-full pl-5 pr-2 md:pl-7 md:pr-2.5 flex items-center justify-between h-14 md:h-16"
          style={{ background: "rgba(18,18,20,0.82)", backdropFilter: "blur(16px)", border: `1px solid ${LINE}`, boxShadow: "0 12px 40px rgba(0,0,0,0.6)" }}>
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt={BRAND}
              style={{ width: 42, height: 42, objectFit: "contain" }}
            />
            <span className="font-bold text-lg" style={{ color: INK }}>{BRAND}</span>
          </Link>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.href} to={linkTo(l.href)} className="text-sm transition-colors hover:opacity-70"
                style={{ color: SUB }}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LangSwitch className="hidden md:flex" />
            <Link to={isLoggedIn ? "/cabinet" : "/register"}
              className="hidden md:block px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: ACCENT }}>{isLoggedIn ? t("cabinet") : t("register")}</Link>
            <button onClick={toggle}
              className="tap md:hidden h-11 px-4 flex items-center justify-center gap-1.5 rounded-full text-sm font-semibold transition-all"
              style={{ background: PANEL, border: `1px solid ${LINE}`, color: INK }}
              aria-label="Сменить язык">
              <Icon name="Globe" size={16} style={{ color: SUB }} />
              {lang === "ru" ? "中文" : "RU"}
            </button>
            <button className="tap md:hidden w-11 h-11 flex items-center justify-center rounded-full"
              style={{ background: PANEL, border: `1px solid ${LINE}` }}
              onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={20} style={{ color: INK }} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-24 px-5 flex flex-col gap-2.5 overflow-y-auto" style={{ background: "#000" }}>
          {navLinks.map((l) => (
            <Link key={l.href} to={linkTo(l.href)}
              className="tap flex items-center justify-between text-lg font-bold px-5 py-5 rounded-2xl"
              style={{ color: INK, background: PANEL, border: `1px solid ${LINE}` }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
              <Icon name="ChevronRight" size={20} style={{ color: SUB }} />
            </Link>
          ))}
          <Link to={isLoggedIn ? "/cabinet" : "/register"}
            className="tap mt-3 py-5 rounded-2xl text-center text-lg font-bold text-white"
            style={{ background: ACCENT }} onClick={() => setMenuOpen(false)}>
            {isLoggedIn ? t("cabinet") : t("register")}
          </Link>
        </div>
      )}
    </>
  );
}