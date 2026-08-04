import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, PANEL, LOGO, BRAND, navLinks } from "./theme";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = typeof window !== "undefined" && !!localStorage.getItem("client_token");

  const linkTo = (href: string) => (href.startsWith("#") ? `/${href}` : href);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50" style={{ background: "rgba(246,247,248,0.8)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
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
            <Link to={isLoggedIn ? "/cabinet" : "/register"}
              className="hidden md:block px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: INK }}>{isLoggedIn ? "Кабинет" : "Регистрация"}</Link>
            <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}
              onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={18} style={{ color: INK }} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-20 px-6 flex flex-col gap-1" style={{ background: PANEL }}>
          {navLinks.map((l) => (
            <Link key={l.href} to={linkTo(l.href)}
              className="text-lg font-semibold py-4"
              style={{ color: INK, borderBottom: `1px solid ${LINE}` }}
              onClick={() => setMenuOpen(false)}>{l.label}</Link>
          ))}
          <Link to={isLoggedIn ? "/cabinet" : "/register"} className="mt-4 py-3.5 rounded-full text-center font-semibold text-white"
            style={{ background: INK }} onClick={() => setMenuOpen(false)}>
            {isLoggedIn ? "Кабинет" : "Регистрация"}
          </Link>
        </div>
      )}
    </>
  );
}