import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import ChatBox from "@/components/ChatBox";
import { INK, ACCENT, SUB, LINE, LOGO, BRAND } from "@/components/landing/theme";

const AUTH_URL = "https://functions.poehali.dev/6d242237-1045-4f33-8502-7385b80072c9";

interface Profile {
  id: number;
  name: string;
  email: string;
  created_at: string | null;
  unread?: number;
}

const cabinetServices = [
  { icon: "Rocket", title: "Экспресс-запуск сайта", desc: "Готовый сайт за 3 дня под ключ с базовым наполнением.", price: "от 15 000 ₽" },
  { icon: "Search", title: "SEO-продвижение", desc: "Выведем сайт в топ поисковиков и приведём клиентов.", price: "от 20 000 ₽/мес" },
  { icon: "Megaphone", title: "Реклама и таргет", desc: "Настройка контекстной и таргетированной рекламы.", price: "от 12 000 ₽" },
  { icon: "Palette", title: "Редизайн сайта", desc: "Обновим внешний вид и повысим конверсию.", price: "от 25 000 ₽" },
  { icon: "Wrench", title: "Техподдержка", desc: "Обновления, правки и защита сайта каждый месяц.", price: "от 5 000 ₽/мес" },
  { icon: "FileText", title: "Наполнение контентом", desc: "Тексты, фото и статьи для вашего сайта.", price: "от 8 000 ₽" },
];

type Tab = "profile" | "services" | "chat";

export default function Cabinet() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [unread, setUnread] = useState(0);
  const [tab, setTab] = useState<Tab>("profile");

  const fetchProfile = useCallback(async () => {
    const token = localStorage.getItem("client_token");
    if (!token) return null;
    const res = await fetch(AUTH_URL, { headers: { "X-Auth-Token": token } });
    if (!res.ok) throw new Error();
    return res.json();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("client_token");
    if (!token) {
      navigate("/register");
      return;
    }
    fetchProfile()
      .then((data) => {
        setProfile(data);
        setUnread(data.unread || 0);
      })
      .catch(() => {
        localStorage.removeItem("client_token");
        navigate("/register");
      })
      .finally(() => setLoading(false));
  }, [navigate, fetchProfile]);

  useEffect(() => {
    const t = setInterval(() => {
      fetchProfile().then((data) => data && setUnread(data.unread || 0)).catch(() => {});
    }, 6000);
    return () => clearInterval(t);
  }, [fetchProfile]);

  const openChat = () => {
    setUnread(0);
    setTab("chat");
  };

  const logout = () => {
    localStorage.removeItem("client_token");
    localStorage.removeItem("client_name");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#F6F7F8" }}>
        <Icon name="LoaderCircle" size={32} className="animate-spin" style={{ color: SUB }} />
      </div>
    );
  }

  if (!profile) return null;

  const fmt = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString("ru-RU", { day: "2-digit", month: "long", year: "numeric" }) : "");

  const menu = [
    { icon: "User", label: "Профиль", tab: "profile" as Tab },
    { icon: "LayoutGrid", label: "Услуги", tab: "services" as Tab },
    { icon: "MessageCircle", label: "Сообщения", tab: "chat" as Tab, badge: unread || undefined },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#F6F7F8", color: INK }}>
      <div className="max-w-6xl mx-auto flex gap-4 px-3 md:px-4 py-4">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 shrink-0">
          <Link to="/" className="flex items-center gap-2.5 px-3 py-2 mb-2">
            <img src={LOGO} alt={BRAND} style={{ width: 28, height: 28, objectFit: "contain", mixBlendMode: "multiply" }} />
            <span className="font-bold text-[15px]" style={{ color: INK }}>{BRAND}</span>
          </Link>
          <nav className="space-y-1.5 sticky top-4">
            {menu.map((m) => {
              const active = tab === m.tab;
              return (
                <button
                  key={m.label}
                  onClick={() => { setTab(m.tab); if (m.tab === "chat") setUnread(0); }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all"
                  style={active
                    ? { background: INK, color: "#fff", fontWeight: 600, boxShadow: "0 6px 16px rgba(17,19,24,0.18)" }
                    : { color: SUB }}
                >
                  <Icon name={m.icon as "User"} size={19} style={{ color: active ? ACCENT : SUB }} />
                  <span className="flex-1 text-left">{m.label}</span>
                  {m.badge && <span className="text-xs text-white rounded-full px-1.5 py-0.5" style={{ background: ACCENT }}>{m.badge}</span>}
                </button>
              );
            })}
            <div className="pt-2 mt-2" style={{ borderTop: `1px solid ${LINE}` }}>
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors hover:bg-white"
                style={{ color: SUB }}
              >
                <Icon name="LogOut" size={19} />
                <span className="flex-1 text-left">Выйти</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Mobile top bar */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-4" style={{ background: "rgba(246,247,248,0.9)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${LINE}` }}>
          <Link to="/" className="flex items-center gap-2">
            <img src={LOGO} alt={BRAND} style={{ width: 26, height: 26, objectFit: "contain", mixBlendMode: "multiply" }} />
            <span className="font-bold text-sm" style={{ color: INK }}>{BRAND}</span>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={openChat} className="relative" style={{ color: INK }} aria-label="Сообщения">
              <Icon name="MessageCircle" size={22} />
              {unread > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-[11px] font-bold text-white flex items-center justify-center" style={{ background: ACCENT }}>
                  {unread > 9 ? "9+" : unread}
                </span>
              )}
            </button>
            <button onClick={logout} style={{ color: SUB }} aria-label="Выйти"><Icon name="LogOut" size={20} /></button>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 min-w-0 space-y-4 pt-14 md:pt-0">
          {/* Profile header */}
          <div className="relative bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(17,19,24,0.06)" }}>
            <div className="h-20 md:h-24" style={{ background: `linear-gradient(120deg, ${INK} 0%, #262a33 100%)` }} />
            <div className="px-5 md:px-8 pb-6 flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0 text-3xl font-bold text-white ring-4 ring-white" style={{ background: ACCENT }}>
                {profile.name.trim()[0]?.toUpperCase() || "?"}
              </div>
              <div className="flex-1 min-w-0 sm:pb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: INK }}>{profile.name}</h1>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(255,90,31,0.12)", color: ACCENT }}>Клиент</span>
                </div>
                <p className="text-sm mt-1" style={{ color: SUB }}>{profile.email}</p>
                <p className="text-xs mt-1.5 flex items-center gap-1.5" style={{ color: SUB }}>
                  <Icon name="Calendar" size={13} /> С нами с {fmt(profile.created_at)}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile tabs */}
          <div className="md:hidden flex gap-1 p-1 rounded-2xl" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(17,19,24,0.05)" }}>
            {menu.map((m) => (
              <button key={m.label} onClick={() => { setTab(m.tab); if (m.tab === "chat") setUnread(0); }}
                className="flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1"
                style={tab === m.tab ? { background: INK, color: "#fff" } : { color: SUB }}>
                <Icon name={m.icon as "User"} size={15} style={{ color: tab === m.tab ? ACCENT : SUB }} />
                {m.label}
                {m.badge && <span className="text-[10px]">({m.badge})</span>}
              </button>
            ))}
          </div>

          {tab === "profile" && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group bg-white rounded-2xl p-6 transition-all hover:-translate-y-0.5" style={{ boxShadow: "0 2px 12px rgba(17,19,24,0.05)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,90,31,0.1)" }}>
                  <Icon name="FolderKanban" size={22} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-semibold text-[15px]" style={{ color: INK }}>Мои проекты</h3>
                <p className="text-sm mt-1.5" style={{ color: SUB }}>Здесь появятся ваши заказанные сайты и их статус.</p>
              </div>
              <button onClick={() => setTab("chat")} className="group bg-white rounded-2xl p-6 text-left transition-all hover:-translate-y-0.5" style={{ boxShadow: "0 2px 12px rgba(17,19,24,0.05)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,90,31,0.1)" }}>
                  <Icon name="Plus" size={22} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-semibold text-[15px] flex items-center gap-1.5" style={{ color: INK }}>
                  Новая заявка
                  <Icon name="ArrowRight" size={15} className="transition-transform group-hover:translate-x-1" style={{ color: ACCENT }} />
                </h3>
                <p className="text-sm mt-1.5" style={{ color: SUB }}>Оставьте заявку на разработку нового сайта.</p>
              </button>
            </div>
          )}

          {tab === "services" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cabinetServices.map((s) => (
                <div key={s.title} className="group bg-white rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1" style={{ boxShadow: "0 2px 12px rgba(17,19,24,0.05)" }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ background: "rgba(255,90,31,0.1)" }}>
                    <Icon name={s.icon as "Rocket"} size={22} style={{ color: ACCENT }} />
                  </div>
                  <h3 className="font-semibold text-[15px]" style={{ color: INK }}>{s.title}</h3>
                  <p className="text-sm mt-1.5 flex-1 leading-relaxed" style={{ color: SUB }}>{s.desc}</p>
                  <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: `1px solid ${LINE}` }}>
                    <span className="text-[15px] font-bold" style={{ color: INK }}>{s.price}</span>
                    <button onClick={openChat}
                      className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: ACCENT }}>Заказать</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "chat" && (
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col" style={{ boxShadow: "0 2px 12px rgba(17,19,24,0.05)", height: 560 }}>
              <div className="px-6 py-4 flex items-center gap-2.5" style={{ borderBottom: `1px solid ${LINE}` }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,90,31,0.1)" }}>
                  <Icon name="Headset" size={17} style={{ color: ACCENT }} />
                </div>
                <div>
                  <h3 className="font-semibold text-[15px] leading-tight" style={{ color: INK }}>Чат с менеджером</h3>
                  <p className="text-xs" style={{ color: SUB }}>Обычно отвечаем в течение часа</p>
                </div>
              </div>
              <div className="flex-1 min-h-0" onClick={() => setUnread(0)}>
                <ChatBox role="client" auth={{ token: localStorage.getItem("client_token") || undefined }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}