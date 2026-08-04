import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const BLOG_URL = "https://functions.poehali.dev/c2493cbe-a257-4317-9ffd-57b35e57a3a8";

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  cover_url: string;
  published: boolean;
  created_at: string | null;
}

const empty: Post = { id: 0, title: "", excerpt: "", content: "", cover_url: "", published: true, created_at: null };

export default function BlogPanel({ password }: { password: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch(`${BLOG_URL}?all=1`, { headers: { "X-Admin-Password": password } });
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
      }
    } catch {
      /* ignore */
    }
  }, [password]);

  useEffect(() => {
    load();
  }, [load]);

  const save = async () => {
    if (!editing || !editing.title.trim()) return;
    setSaving(true);
    try {
      const method = editing.id ? "PUT" : "POST";
      const res = await fetch(BLOG_URL, {
        method,
        headers: { "Content-Type": "application/json", "X-Admin-Password": password },
        body: JSON.stringify(editing),
      });
      if (res.ok) {
        setEditing(null);
        load();
      }
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id: number) => {
    if (!confirm("Удалить статью?")) return;
    await fetch(BLOG_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "X-Admin-Password": password },
      body: JSON.stringify({ id }),
    });
    load();
  };

  const togglePublish = async (p: Post) => {
    await fetch(BLOG_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Admin-Password": password },
      body: JSON.stringify({ ...p, published: !p.published }),
    });
    load();
  };

  if (editing) {
    return (
      <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4 md:p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold flex items-center gap-2">
            <Icon name="PenLine" size={18} /> {editing.id ? "Редактировать статью" : "Новая статья"}
          </h2>
          <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-white">
            <Icon name="X" size={18} />
          </button>
        </div>
        <input
          value={editing.title}
          onChange={(e) => setEditing({ ...editing, title: e.target.value })}
          placeholder="Заголовок"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-blue-500"
        />
        <input
          value={editing.cover_url}
          onChange={(e) => setEditing({ ...editing, cover_url: e.target.value })}
          placeholder="Ссылка на обложку (необязательно)"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-blue-500"
        />
        <textarea
          value={editing.excerpt}
          onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
          placeholder="Краткое описание (для превью)"
          rows={2}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-blue-500 resize-none"
        />
        <textarea
          value={editing.content}
          onChange={(e) => setEditing({ ...editing, content: e.target.value })}
          placeholder="Текст статьи"
          rows={10}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-blue-500 resize-y"
        />
        <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={editing.published}
            onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
            className="w-4 h-4 accent-blue-500"
          />
          Опубликовать сразу
        </label>
        <div className="flex gap-3">
          <button
            onClick={save}
            disabled={saving || !editing.title.trim()}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold disabled:opacity-60 transition-colors"
          >
            {saving ? "Сохраняем..." : "Сохранить"}
          </button>
          <button onClick={() => setEditing(null)} className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-medium transition-colors">
            Отмена
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#17171a] rounded-2xl border border-white/10 p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold flex items-center gap-2">
          <Icon name="Newspaper" size={18} /> Блог
        </h2>
        <button
          onClick={() => setEditing({ ...empty })}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition-colors"
        >
          <Icon name="Plus" size={16} /> Написать
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <Icon name="Newspaper" size={40} className="mx-auto mb-3" />
          <p>Статей пока нет</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <div key={p.id} className="bg-white/[0.03] rounded-xl border border-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold truncate">{p.title}</p>
                    <span className={`text-[11px] rounded-full px-2 py-0.5 shrink-0 ${p.published ? "bg-green-500/20 text-green-400" : "bg-white/10 text-gray-400"}`}>
                      {p.published ? "Опубликовано" : "Черновик"}
                    </span>
                  </div>
                  {p.excerpt && <p className="text-sm text-gray-400 mt-1 line-clamp-2">{p.excerpt}</p>}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => togglePublish(p)} title={p.published ? "Снять с публикации" : "Опубликовать"} className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white">
                    <Icon name={p.published ? "EyeOff" : "Eye"} size={16} />
                  </button>
                  <button onClick={() => setEditing(p)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white">
                    <Icon name="Pencil" size={16} />
                  </button>
                  <button onClick={() => remove(p.id)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-red-400">
                    <Icon name="Trash2" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
