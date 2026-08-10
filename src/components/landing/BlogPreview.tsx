import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { INK, SUB, LINE, ACCENT } from "./theme";
import { useLang } from "@/i18n/LanguageContext";

const BLOG_URL = "https://functions.poehali.dev/c2493cbe-a257-4317-9ffd-57b35e57a3a8";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  cover_url: string;
  created_at: string | null;
}

export default function BlogPreview() {
  const { lang } = useLang();
  const zh = lang === "zh";
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(BLOG_URL)
      .then((r) => r.json())
      .then((d) => setPosts((d.posts || []).slice(0, 3)))
      .catch(() => {});
  }, []);

  if (posts.length === 0) return null;

  const fmt = (iso: string | null) =>
    iso ? new Date(iso).toLocaleDateString(zh ? "zh-CN" : "ru-RU", { day: "numeric", month: "long", year: "numeric" }) : "";

  return (
    <section className="w-full px-4 md:px-10 lg:px-16 py-14 md:py-16">
      <div className="section-reveal flex items-end justify-between mb-8 md:mb-10 gap-4">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{zh ? "博客" : "Блог"}</p>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>
            {zh ? "新闻与文章" : "Новости и статьи"}
          </h2>
        </div>
        <Link to="/blog" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold whitespace-nowrap hover:opacity-70" style={{ color: ACCENT }}>
          {zh ? "全部文章" : "Все статьи"} <Icon name="ArrowRight" size={15} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {posts.map((p) => (
          <Link
            key={p.id}
            to="/blog"
            className="section-reveal text-left rounded-2xl overflow-hidden bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
            style={{ border: `1px solid ${LINE}` }}
          >
            {p.cover_url ? (
              <img src={p.cover_url} alt={p.title} className="w-full h-44 object-cover" />
            ) : (
              <div className="w-full h-44 flex items-center justify-center" style={{ background: "#F4F1FB" }}>
                <Icon name="Newspaper" size={36} style={{ color: SUB }} />
              </div>
            )}
            <div className="p-5">
              <p className="text-xs mb-1.5" style={{ color: SUB }}>{fmt(p.created_at)}</p>
              <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: INK }}>{p.title}</h3>
              {p.excerpt && <p className="text-sm line-clamp-2" style={{ color: SUB }}>{p.excerpt}</p>}
            </div>
          </Link>
        ))}
      </div>

      <Link to="/blog" className="sm:hidden mt-6 inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70" style={{ color: ACCENT }}>
        {zh ? "全部文章" : "Все статьи"} <Icon name="ArrowRight" size={15} />
      </Link>
    </section>
  );
}
