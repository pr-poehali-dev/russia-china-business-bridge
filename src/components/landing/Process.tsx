import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, steps, advantages, plans } from "./theme";

export default function Process() {
  return (
    <>
      {/* ── ЭТАПЫ РАБОТЫ ── */}
      <section id="process" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Как мы работаем</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>Этапы работы</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>Прозрачный процесс — от идеи до запуска.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="card section-reveal p-6 rounded-2xl"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-lg font-black"
                style={{ background: PANEL, border: `1px solid ${LINE}`, color: ACCENT }}>
                {s.num}
              </div>
              <h3 className="font-bold text-sm mb-1.5" style={{ color: INK }}>{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: SUB }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ЦЕНЫ ── */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Тарифы</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>Прозрачные цены</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl mx-auto" style={{ color: SUB }}>Честные цены без скрытых платежей — точную стоимость назовём после консультации.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:items-stretch">
          {plans.map((plan, i) => {
            const featured = i === 1;
            return (
              <div key={i}
                className="card section-reveal p-6 md:p-7 rounded-2xl flex flex-col relative"
                style={featured
                  ? { background: INK, border: `1px solid ${INK}`, boxShadow: "0 18px 40px rgba(17,19,24,0.18)" }
                  : { background: "#fff", border: `1px solid ${LINE}` }
                }>
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold text-white whitespace-nowrap"
                    style={{ background: ACCENT }}>Популярный</span>
                )}
                <h3 className="font-bold text-base mb-3" style={{ color: featured ? "#fff" : INK }}>{plan.name}</h3>
                <div className="mb-5">
                  <span className="text-3xl font-black tracking-tight" style={{ color: featured ? "#fff" : INK }}>{plan.price}</span>
                </div>
                <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                  {plan.feats.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: featured ? "#D1D5DB" : SUB }}>
                      <Icon name="Check" size={16} style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact"
                  className="btn-press w-full py-3 rounded-full text-sm font-semibold text-center transition-all"
                  style={featured
                    ? { background: ACCENT, color: "#fff" }
                    : { background: PANEL, color: INK, border: `1px solid ${LINE}` }
                  }>
                  Заказать
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── НАШИ ПРЕИМУЩЕСТВА ── */}
      <section id="advantages" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Наши преимущества</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>Работаем на результат</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((a, i) => (
            <div key={i} className="card section-reveal flex items-center gap-4 p-6 rounded-2xl"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="card-icon w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <Icon name={a.icon as "Globe"} size={20} style={{ color: ACCENT }} />
              </div>
              <span className="font-bold text-sm md:text-base" style={{ color: INK }}>{a.title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}