import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, included, promotion, whyUs } from "./theme";

export default function Features() {
  return (
    <>
      {/* ── ЧТО ВХОДИТ ── */}
      <section id="included" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Что входит</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>Что входит в разработку сайта</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>Полный набор — без скрытых доплат.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {included.map((f, i) => (
            <div key={i} className="card section-reveal flex items-start gap-3 p-4 rounded-2xl"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <Icon name="Check" size={14} style={{ color: ACCENT }} />
              </div>
              <span className="text-sm font-medium" style={{ color: INK }}>{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ПРОДВИЖЕНИЕ ── */}
      <section id="promotion" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal card rounded-3xl p-6 md:p-12" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="md:w-2/5">
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Продвижение</p>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4" style={{ color: INK }}>Продвижение сайтов</h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: SUB }}>
                Создать сайт — это только первый шаг. Чтобы он приносил прибыль, его необходимо продвигать. Мы работаем на результат и помогаем вашему бизнесу получать больше заявок и клиентов.
              </p>
            </div>
            <div className="md:w-3/5 grid sm:grid-cols-2 gap-3">
              {promotion.map((p, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl" style={{ background: PANEL }}>
                  <Icon name="TrendingUp" size={16} style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }} />
                  <span className="text-sm font-medium" style={{ color: INK }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ ВЫБИРАЮТ НАС ── */}
      <section id="why" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Преимущества</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>Почему выбирают нас</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {whyUs.map((w, i) => (
            <div key={i} className="card section-reveal flex items-start gap-3 p-5 rounded-2xl"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="card-icon w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
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
