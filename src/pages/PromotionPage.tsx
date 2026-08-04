import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SiteHeader from "@/components/landing/SiteHeader";
import SiteFooter from "@/components/landing/SiteFooter";
import { INK, SUB, LINE, ACCENT, PANEL } from "@/components/landing/theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function PromotionPage() {
  const { lang } = useLang();
  const t = useT(lang);
  const { promotionPage } = useContent(lang);
  const p = promotionPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-chinese" style={{ background: PANEL, color: INK }}>
      <SiteHeader />

      <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* breadcrumb */}
        <Link to="/#promotion" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-70" style={{ color: SUB }}>
          <Icon name="ArrowLeft" size={15} /> {t("toHome")}
        </Link>

        {/* header */}
        <div className="section-reveal">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: "#fff", border: `1px solid ${LINE}` }}>
            <Icon name="Megaphone" size={26} style={{ color: ACCENT }} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4" style={{ color: INK }}>{t("promoTitle")}</h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: SUB }}>{p.intro}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
              {t("payForResult")}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
              {t("allChannels")}
            </span>
          </div>
        </div>

        {/* preview */}
        <section className="section-reveal mt-10 md:mt-14">
          <div className="card rounded-3xl overflow-hidden" style={{ background: "#fff", border: `1px solid ${LINE}`, boxShadow: "0 20px 50px rgba(17,19,24,0.08)" }}>
            <img src={p.preview} alt={t("analyticsAlt")} className="w-full" style={{ objectFit: "cover" }} />
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: SUB }}>{t("analyticsCaption")}</p>
        </section>

        {/* what is */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-4 tracking-tight" style={{ color: INK }}>{t("howItWorks")}</h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: SUB }}>{p.whatIs}</p>
        </section>

        {/* channels */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>{t("adChannels")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.channels.map((c, i) => (
              <div key={i} className="card p-6 rounded-2xl" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <div className="card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                  <Icon name={c.icon as "Globe"} size={20} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-bold text-base mb-1.5" style={{ color: INK }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SUB }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* audience */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>{t("forWhomUseful")}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {p.audience.map((a, i) => (
              <div key={i} className="card p-6 rounded-2xl" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                    <Icon name={a.icon as "Globe"} size={18} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-bold text-base" style={{ color: INK }}>{a.title}</h3>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {a.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: SUB }}>
                      <Icon name="Check" size={16} style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* benefits */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>{t("whyProfit")}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {p.benefits.map((b, i) => (
              <div key={i} className="card flex items-start gap-4 p-6 rounded-2xl" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <div className="card-icon w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                  <Icon name={b.icon as "Globe"} size={20} style={{ color: ACCENT }} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: INK }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: SUB }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* cases */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>{t("clientResults")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.cases.map((c, i) => (
              <div key={i} className="card p-6 rounded-2xl" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <h3 className="font-bold text-sm mb-4" style={{ color: INK }}>{c.niche}</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: ACCENT }}>
                    <Icon name="TrendingUp" size={15} /> {c.traffic}
                  </div>
                  <div className="text-sm" style={{ color: SUB }}>{c.top}</div>
                  <div className="text-xs" style={{ color: SUB }}>{c.term}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-reveal mt-12 md:mt-16">
          <div className="rounded-3xl p-6 md:p-12 text-center" style={{ background: INK, boxShadow: "0 24px 60px rgba(17,19,24,0.2)" }}>
            <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight text-white">{t("readyAttract")}</h2>
            <p className="text-sm md:text-base mb-8 max-w-lg mx-auto" style={{ color: "#9CA3AF" }}>
              {t("readyAttractDesc")}
            </p>
            <Link to="/#contact"
              className="btn-press btn-accent inline-block px-10 py-3.5 rounded-full text-[15px] font-semibold text-white"
              style={{ background: ACCENT }}>
              {t("getConsult")}
            </Link>
          </div>
        </section>
      </article>

      <SiteFooter />

      <style>{`.section-reveal { opacity: 1; transform: none; }`}</style>
    </div>
  );
}