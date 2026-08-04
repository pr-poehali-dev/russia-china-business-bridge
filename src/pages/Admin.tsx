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

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-xl font-bold mb-1 text-gray-900">Вход в кабинет</h1>
          <p className="text-sm text-gray-500 mb-6">Введите пароль администратора</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load(password)}
            placeholder="Пароль"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-gray-400 mb-3"
          />
          {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
          <button
            onClick={() => load(password)}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold disabled:opacity-60"
          >
            {loading ? "Проверяем..." : "Войти"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900">Заявки с сайта</h1>
            <p className="text-sm text-gray-500">Всего: {leads.length}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => load(password)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
              <Icon name="RefreshCw" size={15} /> Обновить
            </button>
            <button onClick={logout} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
              <Icon name="LogOut" size={15} /> Выйти
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {leads.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Icon name="Inbox" size={40} className="mx-auto mb-3" />
            <p>Заявок пока нет</p>
          </div>
        ) : (
          <div className="space-y-3">
            {leads.map((l) => (
              <div key={l.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="font-semibold text-gray-900">{l.name}</p>
                    <a href={`mailto:${l.email}`} className="text-sm text-blue-600 hover:underline">{l.email}</a>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{fmt(l.created_at)}</span>
                </div>
                {l.message && <p className="text-sm text-gray-600 whitespace-pre-wrap">{l.message}</p>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}