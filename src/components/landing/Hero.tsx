import { useState } from "react";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, LOGO, BRAND, navLinks, services } from "./theme";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50" style={{ background: "rgba(246,247,248,0.8)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img
              src={LOGO}
              alt={BRAND}
              style={{ width: 30, height: 30, objectFit: "contain", mixBlendMode: "multiply" }}
            />
            <span className="font-bold text-[15px]" style={{ color: INK }}>{BRAND}</span>
          </div>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm transition-colors hover:opacity-70"
                style={{ color: SUB }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact"
              className="hidden md:block px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: INK }}>
              Заказать сайт
            </a>
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
            <a key={l.href} href={l.href}
              className="text-lg font-semibold py-4"
              style={{ color: INK, borderBottom: `1px solid ${LINE}` }}
              onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="mt-4 py-3.5 rounded-full text-center font-semibold text-white"
            style={{ background: INK }} onClick={() => setMenuOpen(false)}>
            Заказать сайт
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-12 md:pt-24 pb-14 md:pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 section-reveal text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 md:mb-7 text-xs font-semibold"
              style={{ background: "#fff", border: `1px solid ${LINE}`, color: SUB }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Создание сайтов под ключ · от 5 дней
            </div>
            <h1 className="font-black leading-[1.05] mb-5 md:mb-6 tracking-tight"
              style={{ fontSize: "clamp(2rem,7vw,4.2rem)", color: INK }}>
              Создание сайтов под ключ за{" "}
              <span style={{ color: ACCENT }}>5 дней</span>
            </h1>
            <p className="text-base md:text-lg mb-7 md:mb-9 leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: SUB }}>
              Создаём профессиональные сайты под ключ всего за 5 дней — от простых лендингов до крупных интернет-магазинов и корпоративных порталов. Не просто красивый сайт, а эффективный инструмент для роста продаж.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
              <a href="#contact"
                className="btn-press btn-accent px-6 py-3.5 rounded-full text-[15px] font-semibold text-white text-center"
                style={{ background: INK }}>
                Получить консультацию →
              </a>
              <a href="#services"
                className="btn-press px-6 py-3.5 rounded-full text-[15px] font-semibold text-center"
                style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
                Наши услуги
              </a>
            </div>
          </div>
          <div className="flex-1 w-full section-reveal">
            <img src="/hero-illustration.png"
              alt="Создание сайтов" className="w-full"
              style={{ objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(17,19,24,0.12))" }} />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Наши услуги</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>Разрабатываем проекты любой сложности</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>Выберите формат сайта под ваши задачи — сделаем под ключ.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div key={i} className="card section-reveal p-6 rounded-2xl"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <Icon name={s.icon as "Globe"} size={20} style={{ color: ACCENT }} />
              </div>
              <h3 className="font-bold text-base mb-1.5" style={{ color: INK }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: SUB }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}