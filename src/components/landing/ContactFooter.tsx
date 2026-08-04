import { useState } from "react";
import Icon from "@/components/ui/icon";
import { INK, ACCENT } from "./theme";

const SEND_LEAD_URL = "https://functions.poehali.dev/1100be7f-4dcd-40b5-9c02-827ddf22ef61";

const contacts = [
  { icon: "MessageCircle", text: "Напишите в Max", href: "https://max.ru/u/f9LHodD0cOI1V0FgyQPvD3KYqH0JhZ9FjlJOLtmC6aBl0py9u_CJcZ6G-7w" },
  { icon: "Mail", text: "info@bsmnv.ru", href: "mailto:info@bsmnv.ru" },
  { icon: "Phone", text: "+7 (919) 186-12-22", href: "tel:+79191861222" },
];

export default function ContactFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const submit = async () => {
    if (!name.trim() || !email.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(SEND_LEAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

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
            {status === "ok" ? (
              <div className="flex flex-col items-start justify-center rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(74,222,128,0.15)" }}>
                  <Icon name="Check" size={28} style={{ color: "#4ade80" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5">Заявка отправлена!</h3>
                <p className="text-sm mb-5" style={{ color: "#9CA3AF" }}>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
                <button onClick={() => setStatus("idle")}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:bg-white/10"
                  style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>Отправить ещё одну</button>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  <div className="relative">
                    <Icon name="User" size={17} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#6B7280" }} />
                    <input type="text" placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-gray-500 transition-all focus:border-white/40 focus:bg-white/[0.09]"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
                  </div>
                  <div className="relative">
                    <Icon name="Mail" size={17} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#6B7280" }} />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-gray-500 transition-all focus:border-white/40 focus:bg-white/[0.09]"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
                  </div>
                </div>
                <textarea placeholder="Опишите ваш проект и задачи..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl text-sm outline-none mb-4 resize-none text-white placeholder:text-gray-500 transition-all focus:border-white/40 focus:bg-white/[0.09]"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
                <button onClick={submit} disabled={status === "sending"}
                  className="btn-press btn-accent w-full mt-auto px-10 py-3.5 rounded-full text-[15px] font-semibold text-white disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{ background: ACCENT }}>
                  {status === "sending" ? (
                    <><Icon name="LoaderCircle" size={17} className="animate-spin" /> Отправляем...</>
                  ) : (
                    <>Получить консультацию <Icon name="ArrowRight" size={17} /></>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-sm mt-3 flex items-center gap-1.5" style={{ color: "#f87171" }}>
                    <Icon name="CircleAlert" size={15} /> Заполните имя и email или попробуйте ещё раз.
                  </p>
                )}
                <p className="text-xs mt-3" style={{ color: "#6B7280" }}>Нажимая кнопку, вы соглашаетесь на обработку данных.</p>
              </div>
            )}
            <div className="flex flex-col gap-2.5">
              {contacts.map((c) => (
                <a key={c.text} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all hover:bg-white/[0.06] group"
                  style={{ color: "#D1D5DB", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors" style={{ background: "rgba(255,90,31,0.12)" }}>
                    <Icon name={c.icon as "Mail"} size={17} style={{ color: ACCENT }} />
                  </span>
                  <span className="flex-1 group-hover:text-white transition-colors">{c.text}</span>
                  <Icon name="ArrowUpRight" size={15} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#9CA3AF" }} />
                </a>
              ))}
              <div className="flex items-center gap-4 mt-3 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="p-2.5 rounded-2xl bg-white shrink-0">
                  <img src="/wechat-qr.png" alt="WeChat QR" className="w-24 h-24" />
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>Отсканируйте QR-код, чтобы добавить нас в WeChat</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}