import Icon from "@/components/ui/icon";
import { INK, LINE, ACCENT, LOGO, BRAND } from "./theme";

const contacts = [
  { icon: "MessageCircle", text: "Telegram / WhatsApp" },
  { icon: "Mail", text: "info@webstudio.ru" },
  { icon: "Phone", text: "+7 (495) 000-00-00" },
];

export default function ContactFooter() {
  return (
    <>
      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal rounded-3xl p-6 md:p-14 text-center" style={{ background: INK, boxShadow: "0 24px 60px rgba(17,19,24,0.2)" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Готовы начать?</p>
          <h2 className="text-2xl md:text-5xl font-black mb-4 tracking-tight text-white">Создаём сайты, которые продают!</h2>
          <p className="text-sm md:text-base mb-8 md:mb-9 max-w-xl mx-auto" style={{ color: "#9CA3AF" }}>
            Если вам нужен современный сайт, который будет работать на ваш бизнес и приносить клиентов, свяжитесь с нами уже сегодня. Мы бесплатно проконсультируем и предложим лучшее решение.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              {["Ваше имя", "Телефон / Telegram / WhatsApp"].map((ph) => (
                <input key={ph} type="text" placeholder={ph}
                  className="w-full px-5 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-gray-500 transition-all focus:border-white/40"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
              ))}
            </div>
            <textarea placeholder="Опишите ваш проект и задачи..." rows={3}
              className="w-full px-5 py-3.5 rounded-xl text-sm outline-none mb-4 resize-none text-white placeholder:text-gray-500 transition-all focus:border-white/40"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
            <button className="btn-press btn-accent w-full sm:w-auto px-10 py-3.5 rounded-full text-[15px] font-semibold text-white"
              style={{ background: ACCENT }}>
              Получить бесплатную консультацию
            </button>
            <div className="flex flex-wrap justify-center gap-6 mt-9 pt-9" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {contacts.map((c) => (
                <div key={c.text} className="flex items-center gap-2 text-sm" style={{ color: "#9CA3AF" }}>
                  <Icon name={c.icon as "Mail"} size={16} style={{ color: ACCENT }} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4 md:px-8" style={{ borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <img
              src={LOGO}
              alt={BRAND}
              style={{ width: 28, height: 28, objectFit: "contain", mixBlendMode: "multiply" }}
            />
            <span className="font-bold text-sm" style={{ color: INK }}>{BRAND}</span>
          </div>
          <div className="flex gap-2">
            {["Globe", "MessageCircle", "Phone"].map((ic) => (
              <div key={ic} className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-50"
                style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <Icon name={ic as "Globe"} size={15} style={{ color: INK }} />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}