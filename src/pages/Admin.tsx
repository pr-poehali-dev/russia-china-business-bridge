import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const ADMIN_LEADS_URL = "https://functions.poehali.dev/d388196c-10ff-4159-b333-d4d8ae169390";

interface Lead {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string | null;
}

const menu = [
  { icon: "User", label: "Профиль", active: true },
  { icon: "Inbox", label: "Заявки" },
  { icon: "MessageCircle", label: "Мессенджер", badge: 10 },
  { icon: "Phone", label: "Звонки" },
  { icon: "Users", label: "Клиенты" },
  { icon: "BarChart3", label: "Статистика" },
  { icon: "Image", label: "Материалы" },
  { icon: "Settings", label: "Настройки" },
];

export default function Admin() {
  const [password, setPassword] = useState(() => localStorage.getItem("admin_pw") || "");
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(ADMIN_LEADS_URL, {
        headers: { "X-Admin-Password": pw },
      });
      if (res.status === 401) {
        setError("Неверный пароль");
        setAuthed(false);
        localStorage.removeItem("admin_pw");
        return;
      }
      if (!res.ok) throw new Error();
      const data = await res.json();
      setLeads(data.leads || []);
      setAuthed(true);
      localStorage.setItem("admin_pw", pw);
    } catch {
      setError("Не удалось загрузить заявки");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (password) load(password);
  }, []);

  const logout = () => {
    localStorage.removeItem("admin_pw");
    setAuthed(false);
    setPassword("");
    setLeads([]);
  };

  const fmt = (iso: string | null) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const initials = (name: string) =>
    name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("") || "?";

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] px-4">
        <div className="w-full max-w-sm bg-[#17171a] rounded-2xl border border-white/10 p-8">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-5">
            <Icon name="Shield" size={26} className="text-white" />
          </div>
          <h1 className="text-xl font-bold mb-1 text-white">Вход в кабинет</h1>
          <p className="text-sm text-gray-400 mb-6">Введите пароль администратора</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load(password)}
            placeholder="Пароль"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder:text-gray-500 outline-none focus:border-blue-500 mb-3"
          />
          {error && <p className="text-sm text-red-400 mb-3">{error}</p>}
          <button
            onClick={() => load(password)}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold disabled:opacity-60 transition-colors"
          >
            {loading ? "Проверяем..." : "Войти"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <div className="max-w-6xl mx-auto flex gap-4 px-3 md:px-4 py-4">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 shrink-0">
          <nav className="space-y-1 sticky top-4">
            {menu.map((m) => (
              <button
                key={m.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  m.active ? "bg-white/10 text-white font-medium" : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon name={m.icon as "User"} size={20} />
                <span className="flex-1 text-left">{m.label}</span>
                {m.badge && <span className="text-xs bg-blue-600 text-white rounded-full px-1.5 py-0.5">{m.badge}</span>}
              </button>
            ))}
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors mt-2"
            >
              <Icon name="LogOut" size={20} />
              <span className="flex-1 text-left">Выйти</span>
            </button>
          </nav>
        </aside>

        {/* Main */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Profile header */}
          <div className="bg-[#17171a] rounded-2xl border border-white/10 p-5 md:p-6 flex items-center gap-5">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
              <Icon name="User" size={40} className="text-white/90" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-xl md:text-2xl font-bold">Администратор</h1>
              <p className="text-sm text-gray-400 flex items-center gap-1.5 mt-1">
                <Icon name="MapPin" size={14} /> Панель управления заявками
              </p>
            </div>
            <button
              onClick={() => load(password)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium transition-colors"
            >
              <Icon name="RefreshCw" size={16} /> Обновить
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4">
              <p className="text-2xl font-bold">{leads.length}</p>
              <p className="text-xs text-gray-400 mt-0.5">Всего заявок</p>
            </div>
            <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4">
              <p className="text-2xl font-bold">{leads.filter((l) => l.created_at && new Date(l.created_at).toDateString() === new Date().toDateString()).length}</p>
              <p className="text-xs text-gray-400 mt-0.5">Сегодня</p>
            </div>
            <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4">
              <p className="text-2xl font-bold">{new Set(leads.map((l) => l.email)).size}</p>
              <p className="text-xs text-gray-400 mt-0.5">Уникальных</p>
            </div>
          </div>

          {/* Leads */}
          <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4 md:p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold flex items-center gap-2">
                <Icon name="Inbox" size={18} /> Заявки
              </h2>
              <button onClick={() => load(password)} className="sm:hidden text-gray-400 hover:text-white">
                <Icon name="RefreshCw" size={16} />
              </button>
            </div>

            {leads.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <Icon name="Inbox" size={40} className="mx-auto mb-3" />
                <p>Заявок пока нет</p>
              </div>
            ) : (
              <div className="space-y-3">
                {leads.map((l) => (
                  <div key={l.id} className="bg-white/[0.03] rounded-xl border border-white/5 p-4 hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 text-sm font-semibold">
                        {initials(l.name)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-semibold truncate">{l.name}</p>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{fmt(l.created_at)}</span>
                        </div>
                        <a href={`mailto:${l.email}`} className="text-sm text-blue-400 hover:underline">{l.email}</a>
                        {l.message && <p className="text-sm text-gray-300 whitespace-pre-wrap mt-2">{l.message}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
