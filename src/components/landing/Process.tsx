import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, MINT, DARK } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function Process() {
  const { lang } = useLang();
  const t = useT(lang);
  const { plans } = useContent(lang);
  return (
    <>
      {/* ── ЦЕНЫ ── */}
      <section id="pricing" className="w-full px-4 md:px-10 lg:px-16 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t("pricingTag")}</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t("pricingTitle")}</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl mx-auto" style={{ color: SUB }}>{t("pricingSubtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:items-stretch">
          {plans.map((plan, i) => {
            const featured = i === 1;
            return (
              <div key={i}
                className="card section-reveal p-6 md:p-8 rounded-[26px] flex flex-col relative"
                style={featured
                  ? { background: DARK, border: `1px solid ${DARK}`, boxShadow: "0 22px 50px rgba(18,16,28,0.22)" }
                  : { background: PANEL, border: `1px solid ${LINE}` }
                }>
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap"
                    style={{ background: MINT, color: INK }}>{t("popular")}</span>
                )}
                <h3 className="font-bold text-base mb-3" style={{ color: featured ? "#fff" : INK }}>{plan.name}</h3>
                <div className="mb-5">
                  <span className="text-3xl font-black tracking-tight" style={{ color: featured ? "#fff" : INK }}>{plan.price}</span>
                </div>
                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {plan.feats.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: featured ? "#D1D5DB" : SUB }}>
                      <Icon name="Check" size={16} style={{ color: featured ? MINT : ACCENT, flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                  className="btn-press w-full py-3 rounded-full text-sm font-semibold text-center transition-all"
                  style={featured
                    ? { background: MINT, color: INK }
                    : { background: PANEL, color: INK, border: `1px solid ${LINE}` }
                  }>
                  {t("order")}
                </a>
              </div>
            );
          })}
        </div>
      </section>

    </>
  );
}