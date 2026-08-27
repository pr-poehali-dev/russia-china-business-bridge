import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SiteHeader from "@/components/landing/SiteHeader";
import SiteFooter from "@/components/landing/SiteFooter";
import { INK, SUB, LINE, ACCENT, PANEL, MINT, DARK, CHAT_URL } from "@/components/landing/theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function ServicePage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const t = useT(lang);
  const { services } = useContent(lang);
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center" style={{ background: "#000", color: INK }}>
        <h1 className="text-2xl font-black">{t("serviceNotFound")}</h1>
        <Link to="/" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: ACCENT }}>
          {t("toHome")}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-chinese" style={{ background: "#000", color: INK }}>
      <SiteHeader />

      <article className="w-full px-4 md:px-10 lg:px-16 py-10 md:py-16">
        {/* breadcrumb */}
        <Link to="/#services" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-70" style={{ color: SUB }}>
          <Icon name="ArrowLeft" size={15} /> {t("allServices")}
        </Link>

        {/* header */}
        <div className="section-reveal rounded-[28px] md:rounded-[36px] p-7 md:p-12" style={{ background: DARK }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
            style={{ background: "rgba(255,255,255,0.12)" }}>
            <Icon name={service.icon as "Globe"} size={26} style={{ color: MINT }} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">{service.title}</h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.72)" }}>{service.intro}</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <span className="px-4 py-2 rounded-full text-sm font-bold" style={{ background: MINT, color: INK }}>
              {t("priceLabel")}{service.price}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: "rgba(255,255,255,0.12)" }}>
              {t("termLabel")}{service.term}
            </span>
          </div>
        </div>

        {/* preview */}
        <section className="section-reveal mt-10 md:mt-14">
          <div className="card rounded-[28px] overflow-hidden" style={{ background: PANEL, border: `1px solid ${LINE}`, boxShadow: "0 20px 50px rgba(17,19,24,0.08)" }}>
            <img src={service.preview} alt={service.title} className="w-full" style={{ objectFit: "cover" }} />
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: SUB }}>{t("exampleLabel")}{service.title}</p>
        </section>

        {/* what is */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-4 tracking-tight" style={{ color: INK }}>{t("whatIsTitle")}</h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: SUB }}>{service.whatIs}</p>
        </section>

        {/* for whom */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>{t("forWhomTitle")}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.forWhom.map((f, i) => (
              <div key={i} className="card flex items-start gap-3 p-5 rounded-[22px]" style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: ACCENT }}>
                  <Icon name="Check" size={14} style={{ color: "#fff" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: INK }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* features */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>{t("whatIncludedTitle")}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.features.map((f, i) => (
              <div key={i} className="card flex items-start gap-3 p-5 rounded-[22px]" style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <Icon name="Sparkles" size={16} style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm font-medium" style={{ color: INK }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>{t("otherServices")}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {services.filter((o) => o.slug !== service.slug).map((o) => (
              <Link key={o.slug} to={`/service/${o.slug}`}
                className="card flex items-center gap-4 p-5 rounded-[22px] group"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: PANEL }}>
                  <Icon name={o.icon as "Globe"} size={20} style={{ color: ACCENT }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-sm mb-0.5" style={{ color: INK }}>{o.title}</div>
                  <div className="text-xs" style={{ color: SUB }}>{o.price} · {o.term}</div>
                </div>
                <Icon name="ArrowRight" size={16} className="arrow-slide flex-shrink-0" style={{ color: ACCENT }} />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-reveal mt-12 md:mt-16">
          <div className="rounded-[32px] p-6 md:p-12 text-center" style={{ background: DARK, boxShadow: "0 24px 60px rgba(18,16,28,0.24)" }}>
            <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight text-white">{t("needSuchSite")}</h2>
            <p className="text-sm md:text-base mb-8 max-w-lg mx-auto" style={{ color: "#9CA3AF" }}>
              {t("needSuchSiteDesc")}
            </p>
            <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
              className="btn-press inline-block px-10 py-3.5 rounded-full text-[15px] font-bold text-white"
              style={{ background: ACCENT }}>
              {t("getConsult")}
            </a>
          </div>
        </section>
      </article>

      <SiteFooter />

      <style>{`.section-reveal { opacity: 1; transform: none; }`}</style>
    </div>
  );
}