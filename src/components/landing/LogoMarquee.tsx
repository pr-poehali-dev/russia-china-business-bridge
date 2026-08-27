import { LINE, SUB } from "./theme";
import { useLang } from "@/i18n/LanguageContext";

const logos = [
  { name: "Yandex", url: "https://cdn.simpleicons.org/yandex/ffffff" },
  { name: "Google", url: "https://cdn.simpleicons.org/google/ffffff" },
  { name: "Telegram", url: "https://cdn.simpleicons.org/telegram/ffffff" },
  { name: "WhatsApp", url: "https://cdn.simpleicons.org/whatsapp/ffffff" },
  { name: "WeChat", url: "https://cdn.simpleicons.org/wechat/ffffff" },
  { name: "Alibaba", url: "https://cdn.simpleicons.org/alibabadotcom/ffffff" },
  { name: "Notion", url: "https://cdn.simpleicons.org/notion/ffffff" },
  { name: "Shopify", url: "https://cdn.simpleicons.org/shopify/ffffff" },
  { name: "WordPress", url: "https://cdn.simpleicons.org/wordpress/ffffff" },
  { name: "Figma", url: "https://cdn.simpleicons.org/figma/ffffff" },
  { name: "VK", url: "https://cdn.simpleicons.org/vk/ffffff" },
  { name: "Stripe", url: "https://cdn.simpleicons.org/stripe/ffffff" },
  { name: "Baidu", url: "https://cdn.simpleicons.org/baidu/ffffff" },
];

export default function LogoMarquee() {
  const { lang } = useLang();
  const title = lang === "zh" ? "我们合作的平台与服务" : "Работаем с платформами и сервисами";

  return (
    <section className="w-full py-8 md:py-10" style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
      <p className="text-center text-xs font-bold tracking-widest uppercase mb-7 px-4" style={{ color: SUB }}>
        {title}
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {logos.map((l) => (
                <div key={`${dup}-${l.name}`} className="flex items-center gap-3 px-7 md:px-10 opacity-55 hover:opacity-100 transition-opacity">
                  <img src={l.url} alt={l.name} className="h-7 md:h-8 w-auto" loading="lazy" />
                  <span className="text-base md:text-lg font-bold whitespace-nowrap text-white">{l.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}