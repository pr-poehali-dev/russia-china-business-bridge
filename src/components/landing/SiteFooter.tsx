import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT, BRAND, CHAT_URL } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";
import { useContent } from "@/i18n/content";

export default function SiteFooter() {
  const { lang } = useLang();
  const t = useT(lang);
  const { navLinks } = useContent(lang);
  const linkTo = (href: string) => (href.startsWith("#") ? `/${href}` : href);
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-4 md:px-10 lg:px-16 pt-16 md:pt-24 pb-8">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full blur-[100px] opacity-40"
        style={{ background: "radial-gradient(circle, rgba(255,90,31,0.35) 0%, rgba(255,90,31,0) 70%)" }} />

      <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
        <div>
          <Link to="/" className="inline-flex items-center gap-2.5 mb-8">
            <img src="/logo.png" alt={BRAND} style={{ width: 40, height: 40, objectFit: "contain" }} />
            <span className="font-black text-xl" style={{ color: INK }}>{BRAND}</span>
          </Link>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.05]" style={{ color: INK }}>
            {t("footTitle")}
            <br />
            {t("footTitleAccent")}
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: SUB }}>
            {t("footDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-9">
            <a href="/#pricing"
              className="btn-press btn-accent px-8 py-4 rounded-full text-[15px] font-bold text-center text-white"
              style={{ background: ACCENT }}>
              {t("pricingTitle")}
            </a>
            <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
              className="btn-press px-8 py-4 rounded-full text-[15px] font-semibold text-center inline-flex items-center justify-center gap-2"
              style={{ background: "#fff", color: "#101014" }}>
              {t("heroBtnChat")}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:pt-4">
          <div>
            <p className="font-bold text-base mb-5" style={{ color: INK }}>{t("footPages")}</p>
            <div className="flex flex-col gap-3.5">
              {navLinks.map((l) => (
                <Link key={l.href} to={linkTo(l.href)} className="text-sm transition-colors hover:text-white"
                  style={{ color: SUB }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-base mb-5" style={{ color: INK }}>{t("footInfo")}</p>
            <div className="flex flex-col gap-3.5">
              <Link to="/register" className="text-sm transition-colors hover:text-white" style={{ color: SUB }}>
                {t("register")}
              </Link>
              <Link to="/cabinet" className="text-sm transition-colors hover:text-white" style={{ color: SUB }}>
                {t("cabinet")}
              </Link>
              <a href="mailto:info@bsmnv.ru" className="text-sm transition-colors hover:text-white" style={{ color: SUB }}>
                info@bsmnv.ru
              </a>
              <a href="tel:+79191861222" className="text-sm transition-colors hover:text-white" style={{ color: SUB }}>
                +7 (919) 186-12-22
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 text-center"
        style={{ borderTop: `1px solid ${LINE}` }}>
        <p className="text-sm" style={{ color: SUB }}>© {year} {BRAND}. {t("footRights")}</p>
        <div className="flex items-center gap-4">
          <a href="https://max.ru/u/f9LHodD0cOI1V0FgyQPvD3KYqH0JhZ9FjlJOLtmC6aBl0py9u_CJcZ6G-7w" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ border: `1px solid ${LINE}` }}>
            <Icon name="MessageCircle" size={16} style={{ color: SUB }} />
          </a>
          <a href="mailto:info@bsmnv.ru"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ border: `1px solid ${LINE}` }}>
            <Icon name="Mail" size={16} style={{ color: SUB }} />
          </a>
          <a href="tel:+79191861222"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ border: `1px solid ${LINE}` }}>
            <Icon name="Phone" size={16} style={{ color: SUB }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
