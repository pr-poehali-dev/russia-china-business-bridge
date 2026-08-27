import { INK, SUB, LINE, ACCENT, PANEL } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function ProcessSteps() {
  const { lang } = useLang();
  const t = useT(lang);
  const { steps } = useContent(lang);
  return (
    <section id="process" className="w-full px-4 md:px-10 lg:px-16 py-14 md:py-16">
      <div className="section-reveal mb-8 md:mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t("processTag")}</p>
        <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t("processTitle")}</h2>
        <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>{t("processSubtitle")}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <div key={i} className="card section-reveal rounded-2xl overflow-hidden flex flex-col"
            style={{ background: PANEL, border: `1px solid ${LINE}` }}>
            <div className="relative" style={{ background: PANEL }}>
              <img src={s.img} alt={s.title} className="w-full" style={{ aspectRatio: "1 / 1", objectFit: "cover", filter: "invert(1) hue-rotate(180deg)", opacity: 0.88 }} />
              <div className="absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black"
                style={{ background: ACCENT, color: "#fff", boxShadow: "0 4px 12px rgba(255,90,31,0.35)" }}>
                {s.num}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm mb-1.5" style={{ color: INK }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: SUB }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}