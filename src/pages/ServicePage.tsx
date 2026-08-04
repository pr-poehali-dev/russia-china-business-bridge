import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SiteHeader from "@/components/landing/SiteHeader";
import SiteFooter from "@/components/landing/SiteFooter";
import { INK, SUB, LINE, ACCENT, PANEL, services } from "@/components/landing/theme";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center" style={{ background: PANEL, color: INK }}>
        <h1 className="text-2xl font-black">Услуга не найдена</h1>
        <Link to="/" className="px-6 py-3 rounded-full text-sm font-semibold text-white" style={{ background: INK }}>
          На главную
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-chinese" style={{ background: PANEL, color: INK }}>
      <SiteHeader />

      <article className="max-w-4xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* breadcrumb */}
        <Link to="/#services" className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:opacity-70" style={{ color: SUB }}>
          <Icon name="ArrowLeft" size={15} /> Все услуги
        </Link>

        {/* header */}
        <div className="section-reveal">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: "#fff", border: `1px solid ${LINE}` }}>
            <Icon name={service.icon as "Globe"} size={26} style={{ color: ACCENT }} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4" style={{ color: INK }}>{service.title}</h1>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: SUB }}>{service.intro}</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
              Стоимость: {service.price}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
              Срок: {service.term}
            </span>
          </div>
        </div>

        {/* preview */}
        <section className="section-reveal mt-10 md:mt-14">
          <div className="card rounded-3xl overflow-hidden" style={{ background: "#fff", border: `1px solid ${LINE}`, boxShadow: "0 20px 50px rgba(17,19,24,0.08)" }}>
            <img src={service.preview} alt={`Пример: ${service.title}`} className="w-full" style={{ objectFit: "cover" }} />
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: SUB }}>Пример оформления · {service.title}</p>
        </section>

        {/* what is */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-4 tracking-tight" style={{ color: INK }}>Что это такое</h2>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: SUB }}>{service.whatIs}</p>
        </section>

        {/* for whom */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>Кому подойдёт</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.forWhom.map((f, i) => (
              <div key={i} className="card flex items-start gap-3 p-4 rounded-2xl" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                  <Icon name="Check" size={14} style={{ color: ACCENT }} />
                </div>
                <span className="text-sm font-medium" style={{ color: INK }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* features */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>Что входит</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.features.map((f, i) => (
              <div key={i} className="card flex items-start gap-3 p-4 rounded-2xl" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <Icon name="Sparkles" size={16} style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm font-medium" style={{ color: INK }}>{f}</span>
              </div>
            ))}
          </div>
        </section>

        {/* OTHER SERVICES */}
        <section className="section-reveal mt-12 md:mt-16">
          <h2 className="text-xl md:text-2xl font-black mb-6 tracking-tight" style={{ color: INK }}>Другие услуги</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {services.filter((o) => o.slug !== service.slug).map((o) => (
              <Link key={o.slug} to={`/service/${o.slug}`}
                className="card flex items-center gap-4 p-5 rounded-2xl group"
                style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: PANEL, border: `1px solid ${LINE}` }}>
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
          <div className="rounded-3xl p-6 md:p-12 text-center" style={{ background: INK, boxShadow: "0 24px 60px rgba(17,19,24,0.2)" }}>
            <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tight text-white">Нужен такой сайт?</h2>
            <p className="text-sm md:text-base mb-8 max-w-lg mx-auto" style={{ color: "#9CA3AF" }}>
              Расскажите о задаче — бесплатно проконсультируем, предложим решение и назовём точную стоимость.
            </p>
            <Link to="/#contact"
              className="btn-press btn-accent inline-block px-10 py-3.5 rounded-full text-[15px] font-semibold text-white"
              style={{ background: ACCENT }}>
              Получить консультацию
            </Link>
          </div>
        </section>
      </article>

      <SiteFooter />

      <style>{`.section-reveal { opacity: 1; transform: none; }`}</style>
    </div>
  );
}