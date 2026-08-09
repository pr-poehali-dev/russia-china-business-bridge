import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, MINT, DARK } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function Features() {
  const { lang } = useLang();
  const t = useT(lang);
  const { included, promotion, whyUs } = useContent(lang);
  return (
    <>
      {/* ── ЧТО ВХОДИТ ── */}
      <section id="included" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t("includedTag")}</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t("includedTitle")}</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>{t("includedSubtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {included.map((f, i) => (
            <div key={i} className="card section-reveal flex items-start gap-3 p-5 rounded-[22px]"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: ACCENT }}>
                <Icon name="Check" size={14} style={{ color: "#fff" }} />
              </div>
              <span className="text-sm font-medium" style={{ color: INK }}>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ПРОДВИЖЕНИЕ ── */}
      <section id="promotion" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <Link to="/promotion" className="section-reveal card group block rounded-[32px] p-6 md:p-12" style={{ background: DARK, border: `1px solid ${DARK}` }}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-2/5">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: MINT }}>{t("promoTag")}</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4 text-white">{t("promoTitle")}</h2>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                {t("promoDesc")}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold px-5 py-2.5 rounded-full"
                style={{ background: MINT, color: INK }}>
                {t("promoMore")} <Icon name="ArrowRight" size={14} className="arrow-slide" />
              </span>
            </div>
            <div className="md:w-3/5 grid sm:grid-cols-2 gap-3">
              {promotion.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5 p-4 rounded-2xl" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <Icon name="TrendingUp" size={16} style={{ color: MINT, flexShrink: 0, marginTop: 2 }} />
                  <span className="text-sm font-medium text-white">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </section>

      {/* ── ПОЧЕМУ ВЫБИРАЮТ НАС ── */}
      <section id="why" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t("whyTag")}</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t("whyTitle")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyUs.map((w, i) => (
            <div key={i} className="card section-reveal flex items-start gap-3 p-5 rounded-[22px]"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="card-icon w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: PANEL }}>
                <Icon name="Star" size={15} style={{ color: ACCENT }} />
              </div>
              <span className="text-sm font-medium" style={{ color: INK }}>{w}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}