import Icon from "@/components/ui/icon";
import { INK, ACCENT } from "./theme";

const contacts = [
  { icon: "MessageCircle", text: "Напишите в Max", href: "https://max.ru/u/f9LHodD0cOI1V0FgyQPvD3KYqH0JhZ9FjlJOLtmC6aBl0py9u_CJcZ6G-7w" },
  { icon: "Mail", text: "info@bsmnv.ru", href: "mailto:info@bsmnv.ru" },
  { icon: "Phone", text: "+7 (919) 186-12-22", href: "tel:+79191861222" },
];

export default function ContactFooter() {
  return (
    <>
      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="section-reveal rounded-3xl p-6 md:p-14 text-left" style={{ background: INK, boxShadow: "0 24px 60px rgba(17,19,24,0.2)" }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>Готовы начать?</p>
          <h2 className="text-2xl md:text-5xl font-black mb-4 tracking-tight text-white">Создаём сайты, которые продают!</h2>
          <p className="text-sm md:text-base mb-8 md:mb-9 max-w-xl" style={{ color: "#9CA3AF" }}>
            Если вам нужен современный сайт, который будет работать на ваш бизнес и приносить клиентов, свяжитесь с нами уже сегодня. Мы бесплатно проконсультируем и предложим лучшее решение.
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-left">
            <div className="flex flex-col">
              <div className="grid sm:grid-cols-2 gap-3 mb-3">
                {["Ваше имя", "Email"].map((ph) => (
                  <input key={ph} type="text" placeholder={ph}
                    className="w-full px-5 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-gray-500 transition-all focus:border-white/40"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
                ))}
              </div>
              <textarea placeholder="Опишите ваш проект и задачи..." rows={3}
                className="w-full px-5 py-3.5 rounded-xl text-sm outline-none mb-4 resize-none text-white placeholder:text-gray-500 transition-all focus:border-white/40"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
              <button className="btn-press btn-accent w-full mt-auto px-10 py-3.5 rounded-full text-[15px] font-semibold text-white"
                style={{ background: ACCENT }}>Получить консультацию</button>
            </div>
            <div className="flex flex-col gap-4">
              {contacts.map((c) => (
                <a key={c.text} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white" style={{ color: "#9CA3AF" }}>
                  <Icon name={c.icon as "Mail"} size={16} style={{ color: ACCENT }} />
                  {c.text}
                </a>
              ))}
              <div className="flex flex-col items-start gap-3 mt-2 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="p-3 rounded-2xl bg-white">
                  <img src="/wechat-qr.png" alt="WeChat QR" className="w-32 h-32" />
                </div>
                <p className="text-xs" style={{ color: "#9CA3AF" }}>Отсканируйте QR-код, чтобы добавить нас в WeChat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}