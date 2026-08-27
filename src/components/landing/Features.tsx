import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function Features() {
  const { lang } = useLang();
  const t = useT(lang);
  const { promotion, whyUs } = useContent(lang);
  return (
    <>
      {/* ── ПРОДВИЖЕНИЕ ── */}
      <section id="promotion" className="w-full px-4 md:px-10 lg:px-16 py-14 md:py-16">
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-12">
          <Link to="/promotion"
            className="section-reveal glow-card group relative overflow-hidden rounded-[26px] p-8 md:p-11 flex flex-col justify-center">
            <span className="glow glow-a" />
            <p className="relative z-10 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{t("promoTag")}</p>
            <h2 className="relative z-10 text-3xl md:text-4xl font-black tracking-tight leading-[1.08] pl-5"
              style={{ color: INK, borderLeft: `3px solid ${ACCENT}` }}>
              {t("promoTitle")}
            </h2>
            <p className="relative z-10 mt-6 text-base md:text-lg leading-relaxed" style={{ color: SUB }}>
              {t("promoDesc")}
            </p>
            <div className="relative z-10 flex flex-wrap gap-2.5 mt-7">
              <span className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${LINE}` }}>
                <span className="w-5 h-5 rounded-md flex items-center justify-center font-black text-white text-[12px]"
                  style={{ background: "#FC3F1D" }}>Я</span>
                {t("withYandex")}
              </span>
              <span className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${LINE}` }}>
                <span className="w-5 h-5 rounded-md flex items-center justify-center font-black text-[12px]"
                  style={{ background: "#fff", color: "#4285F4" }}>G</span>
                {t("withGoogle")}
              </span>
            </div>
            <span className="relative z-10 inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full mt-7 self-start text-white"
              style={{ background: ACCENT }}>
              {t("promoMore")} <Icon name="ArrowRight" size={14} className="arrow-slide" />
            </span>
          </Link>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {promotion.map((p, i) => (
              <div key={i} className="section-reveal">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(140deg, rgba(255,90,31,0.22), rgba(60,60,220,0.18))", border: `1px solid ${LINE}` }}>
                  <Icon name={p.icon as "Star"} size={22} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-black text-lg md:text-xl mb-2 tracking-tight" style={{ color: INK }}>{p.text}</h3>
                <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: SUB }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ ВЫБИРАЮТ НАС ── */}
      <section id="why" className="w-full px-4 md:px-10 lg:px-16 py-14 md:py-16">
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-12">
          <div className="section-reveal glow-card relative overflow-hidden rounded-[26px] p-8 md:p-11 flex flex-col justify-center">
            <span className="glow glow-b" />
            <p className="relative z-10 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{t("whyTag")}</p>
            <h2 className="relative z-10 text-3xl md:text-5xl font-black tracking-tight leading-[1.05] pl-5"
              style={{ color: INK, borderLeft: `3px solid ${ACCENT}` }}>
              {t("whyTitle")}
            </h2>
            <p className="relative z-10 mt-6 text-base md:text-lg leading-relaxed" style={{ color: SUB }}>
              {t("whySubtitle")}
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {whyUs.map((w, i) => (
              <div key={i} className="section-reveal">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(140deg, rgba(255,90,31,0.22), rgba(60,60,220,0.18))", border: `1px solid ${LINE}` }}>
                  <Icon name={w.icon as "Star"} size={22} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-black text-lg md:text-xl mb-2 tracking-tight" style={{ color: INK }}>{w.title}</h3>
                <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: SUB }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}