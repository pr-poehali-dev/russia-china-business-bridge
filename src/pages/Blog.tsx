import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/landing/SiteHeader";
import SiteFooter from "@/components/landing/SiteFooter";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, PANEL, ACCENT } from "@/components/landing/theme";

const BLOG_URL = "https://functions.poehali.dev/c2493cbe-a257-4317-9ffd-57b35e57a3a8";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  cover_url: string;
  created_at: string | null;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [active, setActive] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BLOG_URL)
      .then((r) => r.json())
      .then((d) => setPosts(d.posts || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const fmt = (iso: string | null) =>
    iso ? new Date(iso).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" }) : "";

  return (
    <div className="min-h-screen font-chinese" style={{ background: PANEL, color: INK }}>
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {active ? (
          <article>
            <button onClick={() => setActive(null)} className="flex items-center gap-2 text-sm mb-6 hover:opacity-70" style={{ color: SUB }}>
              <Icon name="ArrowLeft" size={16} /> Все статьи
            </button>
            {active.cover_url && (
              <img src={active.cover_url} alt={active.title} className="w-full rounded-2xl mb-6 object-cover" style={{ maxHeight: 380 }} />
            )}
            <p className="text-sm mb-2" style={{ color: SUB }}>{fmt(active.created_at)}</p>
            <h1 className="text-3xl md:text-4xl font-black mb-6 leading-tight">{active.title}</h1>
            <div className="text-lg leading-relaxed whitespace-pre-wrap" style={{ color: "#2b2f36" }}>
              {active.content}
            </div>
          </article>
        ) : (
          <>
            <div className="mb-10">
              <p className="text-sm font-semibold mb-2" style={{ color: ACCENT }}>Блог</p>
              <h1 className="text-3xl md:text-5xl font-black leading-tight">Новости и статьи</h1>
            </div>

            {loading ? (
              <p style={{ color: SUB }}>Загружаем...</p>
            ) : posts.length === 0 ? (
              <div className="text-center py-20" style={{ color: SUB }}>
                <Icon name="Newspaper" size={44} className="mx-auto mb-3" />
                <p>Пока нет публикаций</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-5">
                {posts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActive(p)}
                    className="text-left rounded-2xl overflow-hidden bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ border: `1px solid ${LINE}` }}
                  >
                    {p.cover_url ? (
                      <img src={p.cover_url} alt={p.title} className="w-full h-44 object-cover" />
                    ) : (
                      <div className="w-full h-44 flex items-center justify-center" style={{ background: PANEL }}>
                        <Icon name="Newspaper" size={36} style={{ color: SUB }} />
                      </div>
                    )}
                    <div className="p-5">
                      <p className="text-xs mb-1.5" style={{ color: SUB }}>{fmt(p.created_at)}</p>
                      <h2 className="text-lg font-bold mb-2 leading-snug">{p.title}</h2>
                      {p.excerpt && <p className="text-sm line-clamp-3" style={{ color: SUB }}>{p.excerpt}</p>}
                      <span className="inline-flex items-center gap-1 text-sm font-semibold mt-3" style={{ color: ACCENT }}>
                        Читать <Icon name="ArrowRight" size={15} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <div className="mt-12">
              <Link to="/" className="inline-flex items-center gap-2 text-sm hover:opacity-70" style={{ color: SUB }}>
                <Icon name="ArrowLeft" size={16} /> На главную
              </Link>
            </div>
          </>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
