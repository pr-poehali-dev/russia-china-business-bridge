import { useState, useEffect, useRef, useCallback } from "react";
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

export default function Cabinet() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [unread, setUnread] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

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
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
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

  return (
    <div className="min-h-screen" style={{ background: "#F6F7F8" }}>
      <nav className="sticky top-0 z-50" style={{ background: "rgba(246,247,248,0.8)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${LINE}` }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={LOGO} alt={BRAND} style={{ width: 30, height: 30, objectFit: "contain", mixBlendMode: "multiply" }} />
            <span className="font-bold text-[15px]" style={{ color: INK }}>{BRAND}</span>
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={openChat} className="relative hover:opacity-70" style={{ color: INK }} aria-label="Сообщения">
              <Icon name="MessageCircle" size={22} />
              {unread > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full text-[11px] font-bold text-white flex items-center justify-center" style={{ background: ACCENT }}>
                  {unread > 9 ? "9+" : unread}
                </span>
              )}
            </button>
            <button onClick={logout} className="flex items-center gap-1.5 text-sm hover:opacity-70" style={{ color: SUB }}>
              <Icon name="LogOut" size={16} /> Выйти
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 mb-5 flex items-center gap-5" style={{ border: `1px solid ${LINE}` }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 text-2xl font-bold text-white" style={{ background: ACCENT }}>
            {profile.name.trim()[0]?.toUpperCase() || "?"}
          </div>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: INK }}>{profile.name}</h1>
            <p className="text-sm mt-0.5" style={{ color: SUB }}>{profile.email}</p>
            <p className="text-xs mt-1" style={{ color: SUB }}>С нами с {fmt(profile.created_at)}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6" style={{ border: `1px solid ${LINE}` }}>
            <Icon name="FolderKanban" size={24} style={{ color: ACCENT }} />
            <h3 className="font-semibold mt-3" style={{ color: INK }}>Мои проекты</h3>
            <p className="text-sm mt-1" style={{ color: SUB }}>Здесь появятся ваши заказанные сайты и их статус.</p>
          </div>
          <Link to="/#contact" className="bg-white rounded-2xl p-6 hover:shadow-sm transition-shadow" style={{ border: `1px solid ${LINE}` }}>
            <Icon name="Plus" size={24} style={{ color: ACCENT }} />
            <h3 className="font-semibold mt-3" style={{ color: INK }}>Новая заявка</h3>
            <p className="text-sm mt-1" style={{ color: SUB }}>Оставьте заявку на разработку нового сайта.</p>
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4" style={{ color: INK }}>Услуги для вас</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cabinetServices.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 flex flex-col hover:shadow-sm transition-shadow" style={{ border: `1px solid ${LINE}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,90,31,0.1)" }}>
                  <Icon name={s.icon as "Rocket"} size={22} style={{ color: ACCENT }} />
                </div>
                <h3 className="font-semibold" style={{ color: INK }}>{s.title}</h3>
                <p className="text-sm mt-1.5 flex-1" style={{ color: SUB }}>{s.desc}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-bold" style={{ color: INK }}>{s.price}</span>
                  <button onClick={() => { setUnread(0); chatRef.current?.scrollIntoView({ behavior: "smooth" }); }}
                    className="text-sm font-semibold px-4 py-1.5 rounded-full text-white transition-all hover:opacity-90"
                    style={{ background: ACCENT }}>Заказать</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={chatRef} className="bg-white rounded-3xl mt-8 overflow-hidden flex flex-col" style={{ border: `1px solid ${LINE}`, height: 520 }}>
          <div className="px-6 py-4 flex items-center gap-2" style={{ borderBottom: `1px solid ${LINE}` }}>
            <Icon name="MessageCircle" size={18} style={{ color: ACCENT }} />
            <h3 className="font-semibold" style={{ color: INK }}>Чат с менеджером</h3>
            {unread > 0 && (
              <span className="min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold text-white flex items-center justify-center" style={{ background: ACCENT }}>
                {unread}
              </span>
            )}
          </div>
          <div className="flex-1 min-h-0" onClick={() => setUnread(0)}>
            <ChatBox role="client" auth={{ token: localStorage.getItem("client_token") || undefined }} />
          </div>
        </div>
      </main>
    </div>
  );
}