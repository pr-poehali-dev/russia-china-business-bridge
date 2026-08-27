import Icon from "@/components/ui/icon";
import { ACCENT, LINE, CHAT_URL } from "./theme";
import { useLang } from "@/i18n/LanguageContext";
import { useT } from "@/i18n/strings";

export default function MobileDock() {
  const { lang } = useLang();
  const t = useT(lang);

  return (
    <div className="app-dock lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 pb-3"
      style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 35%, #000 100%)" }}>
      <div className="flex items-center gap-2.5">
        <a href="#services"
          className="tap w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.07)", border: `1px solid ${LINE}` }}
          aria-label={t("heroBtnServices")}>
          <Icon name="LayoutGrid" size={22} style={{ color: "#fff" }} />
        </a>
        <a href="#pricing"
          className="tap w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.07)", border: `1px solid ${LINE}` }}
          aria-label={t("pricingTitle")}>
          <Icon name="Tag" size={22} style={{ color: "#fff" }} />
        </a>
        <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
          className="tap flex-1 h-14 rounded-2xl flex items-center justify-center gap-2 text-[15px] font-bold text-white"
          style={{ background: ACCENT, boxShadow: "0 10px 30px rgba(255,90,31,0.35)" }}>
          <Icon name="MessageCircle" size={19} />
          {t("heroBtnChat")}
        </a>
      </div>
    </div>
  );
}
