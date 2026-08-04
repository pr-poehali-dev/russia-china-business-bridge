import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const VISITS_URL = "https://functions.poehali.dev/d2fa8ce2-4e8e-4656-84e7-2c2befb0909a";

interface CountryStat {
  country: string;
  code: string;
  count: number;
}

interface Stats {
  total: number;
  unique: number;
  today: number;
  countries: CountryStat[];
}

const flag = (code: string) => {
  if (!code || code.length !== 2) return "🌐";
  return String.fromCodePoint(...[...code.toUpperCase()].map((c) => 127397 + c.charCodeAt(0)));
};

export default function StatsPanel({ password }: { password: string }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(VISITS_URL, { headers: { "X-Admin-Password": password } });
      if (res.ok) setStats(await res.json());
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  }, [password]);

  useEffect(() => {
    load();
  }, [load]);

  const max = stats?.countries.reduce((m, c) => Math.max(m, c.count), 0) || 1;

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4">
          <p className="text-2xl font-bold">{stats?.total ?? "—"}</p>
          <p className="text-xs text-gray-400 mt-0.5">Всего визитов</p>
        </div>
        <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4">
          <p className="text-2xl font-bold">{stats?.unique ?? "—"}</p>
          <p className="text-xs text-gray-400 mt-0.5">Уникальных гостей</p>
        </div>
        <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4">
          <p className="text-2xl font-bold">{stats?.today ?? "—"}</p>
          <p className="text-xs text-gray-400 mt-0.5">Сегодня</p>
        </div>
      </div>

      <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4 md:p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold flex items-center gap-2">
            <Icon name="Globe" size={18} /> Посетители по странам
          </h2>
          <button onClick={load} className="text-gray-400 hover:text-white">
            <Icon name="RefreshCw" size={16} />
          </button>
        </div>

        {loading ? (
          <div className="text-center py-16 text-gray-500">Загружаем...</div>
        ) : !stats || stats.countries.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <Icon name="Globe" size={40} className="mx-auto mb-3" />
            <p>Пока нет данных о посещениях</p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {stats.countries.map((c) => (
              <div key={c.country + c.code} className="flex items-center gap-3">
                <span className="text-xl w-7 text-center shrink-0">{flag(c.code)}</span>
                <span className="text-sm w-32 truncate shrink-0">{c.country}</span>
                <div className="flex-1 h-2.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: `${(c.count / max) * 100}%` }} />
                </div>
                <span className="text-sm font-semibold w-10 text-right shrink-0">{c.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
