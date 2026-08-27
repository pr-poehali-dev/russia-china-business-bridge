import { INK, SUB, ACCENT } from "./theme";
import StepIcon from "./StepIcon";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

const stepIcons = ["consult", "design", "build", "test", "launch", "support"] as const;

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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {steps.map((s, i) => (
          <div key={i} className="section-reveal flex gap-5">
            <span className="text-3xl md:text-4xl font-black tracking-tight leading-none pt-1"
              style={{ color: "rgba(255,255,255,0.22)" }}>
              0{s.num}.
            </span>
            <div>
              <StepIcon name={stepIcons[i]} size={56} />
              <h3 className="font-black text-xl md:text-2xl mt-5 mb-2 tracking-tight" style={{ color: INK }}>{s.title}</h3>
              <p className="text-sm md:text-[15px] leading-relaxed max-w-xs" style={{ color: SUB }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}