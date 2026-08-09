import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, ACCENT, PANEL, MINT, DARK } from "./theme";
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
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-4 md:pt-8 pb-8">
        <div className="section-reveal relative overflow-hidden rounded-[28px] md:rounded-[36px]"
          style={{ background: DARK, minHeight: 460 }}>
          <img src="/hero-seo.png" alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0"
            style={{ background: `linear-gradient(100deg, ${DARK} 8%, rgba(20,19,32,0.85) 45%, rgba(20,19,32,0.35) 100%)` }} />
          <div className="relative p-7 md:p-14 lg:p-16 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-semibold"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: MINT }} />
              {t("heroBadge")}
            </div>
            <h1 className="font-black leading-[1.02] mb-5 tracking-tight text-[38px] md:text-[60px] text-white">
              {t("heroTitlePre")}
              <span style={{ color: MINT }}>{t("heroTitleAccent")}</span>
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              {t("heroDesc")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a href="#contact"
                className="btn-press px-7 py-3.5 rounded-full text-[15px] font-bold text-center"
                style={{ background: MINT, color: INK }}>{t("heroBtnChat")}</a>
              <a href="#services"
                className="btn-press px-7 py-3.5 rounded-full text-[15px] font-semibold text-center text-white"
                style={{ background: "rgba(255,255,255,0.12)" }}>
                {t("heroBtnServices")}
              </a>
            </div>
          </div>
        </div>

        <div className="section-reveal -mt-10 md:-mt-14 relative mx-1 md:mx-6 rounded-[24px] md:rounded-[32px] p-6 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
          style={{ background: "#fff", boxShadow: "0 24px 60px rgba(18,16,28,0.12)" }}>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4" style={{ color: INK }}>
              {t("servicesTitle")}
            </h2>
            <a href="#contact" className="btn-press inline-block px-6 py-3 rounded-full text-sm font-bold text-white"
              style={{ background: INK }}>{t("heroBtnChat")}</a>
          </div>
          <div className="flex-1 flex flex-col gap-2.5">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: PANEL }}>
              <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#fff" }}>
                <span className="w-5 h-5 rounded-md flex items-center justify-center font-black text-white text-[13px]"
                  style={{ background: "#FC3F1D" }}>Я</span>
              </span>
              <span className="text-sm font-semibold" style={{ color: INK }}>{t("withYandex")}</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={{ background: PANEL }}>
              <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-black"
                style={{ background: "#fff", color: "#4285F4" }}>G</span>
              <span className="text-sm font-semibold" style={{ color: INK }}>{t("withGoogle")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t("servicesTag")}</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t("servicesTitle")}</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>{t("servicesSubtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const dark = i % 3 !== 0;
            return (
              <Link key={i} to={`/service/${s.slug}`} className="card section-reveal p-6 md:p-7 rounded-[24px] flex flex-col group"
                style={dark
                  ? { background: DARK, border: `1px solid ${DARK}` }
                  : { background: ACCENT, border: `1px solid ${ACCENT}` }}>
                <div className="card-icon w-11 h-11 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(255,255,255,0.14)" }}>
                  <Icon name={s.icon as "Globe"} size={20} style={{ color: dark ? MINT : "#fff" }} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.68)" }}>{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold mt-6 px-4 py-2 rounded-full self-start"
                  style={dark ? { background: MINT, color: INK } : { background: "#fff", color: INK }}>
                  {t("more")} <Icon name="ArrowRight" size={14} className="arrow-slide" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}