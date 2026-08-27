import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, HERO_IMG, CHAT_URL } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function Hero() {
  const { lang } = useLang();
  const t = useT(lang);
  const { services } = useContent(lang);
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full px-4 md:px-10 lg:px-16 pt-10 md:pt-20 pb-14 md:pb-24 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 w-[720px] h-[720px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,90,31,0.18) 0%, rgba(255,90,31,0) 65%)" }} />
        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="section-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7 text-xs font-semibold"
              style={{ background: "rgba(255,255,255,0.07)", border: `1px solid ${LINE}`, color: "#fff" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              {t("heroBadge")}
            </div>
            <h1 className="font-black leading-[0.98] mb-6 tracking-tight text-[42px] md:text-[72px] text-white">
              {t("heroTitlePre")}
              <span style={{ color: ACCENT }}>{t("heroTitleAccent")}</span>
            </h1>
            <p className="text-base md:text-lg mb-9 leading-relaxed max-w-lg" style={{ color: SUB }}>
              {t("heroDesc")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
                className="btn-press btn-accent px-8 py-4 rounded-full text-[15px] font-bold text-center text-white"
                style={{ background: ACCENT }}>{t("heroBtnChat")}</a>
              <a href="#services"
                className="btn-press px-8 py-4 rounded-full text-[15px] font-semibold text-center"
                style={{ background: "#fff", color: "#101014" }}>
                {t("heroBtnServices")}
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-10">
              <span className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <span className="w-5 h-5 rounded-md flex items-center justify-center font-black text-white text-[12px]"
                  style={{ background: "#FC3F1D" }}>Я</span>
                {t("withYandex")}
              </span>
              <span className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <span className="w-5 h-5 rounded-md flex items-center justify-center font-black text-[12px]"
                  style={{ background: "#fff", color: "#4285F4" }}>G</span>
                {t("withGoogle")}
              </span>
            </div>
          </div>

          <div className="section-reveal relative">
            <div className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full blur-[70px] opacity-70"
              style={{ background: "radial-gradient(circle, rgba(255,90,31,0.42) 0%, rgba(255,90,31,0.14) 45%, rgba(255,90,31,0) 72%)" }} />
            <img src={HERO_IMG} alt=""
              className="hero-float relative w-full max-w-[560px] mx-auto h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="w-full px-4 md:px-10 lg:px-16 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t("servicesTag")}</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t("servicesTitle")}</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>{t("servicesSubtitle")}</p>
        </div>
        <div className="snap-row lg:grid lg:grid-cols-3 lg:gap-5 -mx-4 px-4 lg:mx-0 lg:px-0">
          {services.map((s, i) => {
            const wide = i !== 1;
            const span = i === 0 ? "lg:col-span-2" : i === 2 ? "lg:col-span-3" : "";
            return (
              <Link key={i} to={`/service/${s.slug}`}
                className={`glow-card tap section-reveal group relative overflow-hidden rounded-[26px] ${span} ${wide ? `flex flex-col lg:items-center gap-6 lg:gap-10 p-6 md:p-10 ${i === 2 ? "lg:flex-row-reverse" : "lg:flex-row"}` : "flex flex-col p-6 md:p-9"}`}>
                <span className="glow glow-a" />
                <span className="glow glow-b" />
                <div className={`relative z-10 ${wide ? "lg:w-1/2" : ""}`}>
                  <div className="card-icon w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(255,90,31,0.14)" }}>
                    <Icon name={s.icon as "Globe"} size={20} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-black text-xl md:text-2xl mb-3 tracking-tight text-white">{s.title}</h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: SUB }}>{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold mt-6 px-5 py-2.5 rounded-full"
                    style={{ background: ACCENT, color: "#fff" }}>
                    {t("more")} <Icon name="ArrowRight" size={14} className="arrow-slide" />
                  </span>
                </div>
                {wide && (
                  <div className="relative z-10 lg:w-1/2 flex justify-center">
                    <img src={s.preview} alt=""
                      className="w-full max-w-[420px] rounded-2xl object-cover h-[180px] md:h-[240px] transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ border: `1px solid ${LINE}` }} />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}