import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, PANEL, services } from "./theme";

export default function Hero() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-12 md:pt-24 pb-14 md:pb-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 section-reveal text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 md:mb-7 text-xs font-semibold"
              style={{ background: "#fff", border: `1px solid ${LINE}`, color: SUB }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Создание сайтов под ключ · от 5 дней
            </div>
            <h1 className="font-black leading-[1.05] mb-5 md:mb-6 tracking-tight"
              style={{ fontSize: "clamp(2rem,7vw,4.2rem)", color: INK }}>
              Создание сайтов под ключ за{" "}
              <span style={{ color: ACCENT }}>5 дней</span>
            </h1>
            <p className="text-base md:text-lg mb-7 md:mb-9 leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: SUB }}>
              Создаём профессиональные сайты под ключ всего за 5 дней — от простых лендингов до крупных интернет-магазинов и корпоративных порталов. Не просто красивый сайт, а эффективный инструмент для роста продаж.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start">
              <a href="#contact"
                className="btn-press btn-accent px-6 py-3.5 rounded-full text-[15px] font-semibold text-white text-center"
                style={{ background: INK }}>
                Получить консультацию →
              </a>
              <a href="#services"
                className="btn-press px-6 py-3.5 rounded-full text-[15px] font-semibold text-center"
                style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
                Наши услуги
              </a>
            </div>
          </div>
          <div className="flex-1 w-full section-reveal flex flex-col items-center gap-4">
            <img src="/hero-seo.png"
              alt="Создание сайтов" className="w-full hero-float"
              style={{ objectFit: "contain", filter: "drop-shadow(0 20px 40px rgba(17,19,24,0.12))" }} />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
                <span className="w-6 h-6 rounded-md flex items-center justify-center font-black text-white text-base"
                  style={{ background: "#FC3F1D" }}>Я</span>
                Работаем с Яндекс
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-sm font-semibold"
                style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
                <span className="w-6 h-6 rounded-md flex items-center justify-center font-black text-base"
                  style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                  <span style={{ color: "#4285F4" }}>G</span>
                </span>
                Работаем с Google
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal mb-8 md:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>Наши услуги</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>Разрабатываем проекты любой сложности</h2>
          <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: SUB }}>Выберите формат сайта под ваши задачи — сделаем под ключ.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Link key={i} to={`/service/${s.slug}`} className="card section-reveal p-6 rounded-2xl flex flex-col group"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="card-icon w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <Icon name={s.icon as "Globe"} size={20} style={{ color: ACCENT }} />
              </div>
              <h3 className="font-bold text-base mb-1.5" style={{ color: INK }}>{s.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: SUB }}>{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold mt-4" style={{ color: ACCENT }}>
                Подробнее <Icon name="ArrowRight" size={14} className="arrow-slide" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}