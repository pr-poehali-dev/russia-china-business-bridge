import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, steps, advantages } from "./theme";

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

      {/* ── НАШИ ПРЕИМУЩЕСТВА ── */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
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
