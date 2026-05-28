import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/f1e7a2ba-7373-4f6b-84ce-8b934720a6e8.jpg";
const IMG_SERVICES = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/03ba3332-b200-46b0-bcd9-0505d5448801.jpg";
const IMG_TEAM = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/56dc42a0-5ef5-4e06-8b21-4af7b1789918.jpg";
const IMG_BLOG = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/0fcd6408-4941-493c-95be-f0e00d5c41d2.jpg";
const IMG_WECHAT = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/bucket/5fa91614-330c-4deb-9927-17ed121f6ba1.jpg";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const stats = [
  { num: "7年", desc: "帮助中国企业进入俄罗斯市场", icon: "Clock", color: "#6366F1" },
  { num: "150+", desc: "成功完成的推广项目", icon: "CheckCircle", color: "#8B5CF6" },
  { num: "98%", desc: "客户满意度", icon: "Star", color: "#EC4899" },
  { num: "24h", desc: "专家响应时间", icon: "Zap", color: "#F59E0B" },
];

const services = [
  { icon: "Globe", title: "网站开发", desc: "为俄罗斯市场打造专业网站，SEO优化、移动端适配。", grad: "from-violet-500 to-indigo-500" },
  { icon: "Megaphone", title: "Яндекс广告", desc: "俄罗斯最大搜索引擎精准广告，快速获客。", grad: "from-pink-500 to-rose-500" },
  { icon: "Share2", title: "社交媒体运营", desc: "管理VK、Telegram等主流俄罗斯社交平台。", grad: "from-cyan-500 to-blue-500" },
  { icon: "TrendingUp", title: "市场推广", desc: "全方位俄罗斯市场推广策略，帮助品牌落地。", grad: "from-emerald-500 to-teal-500" },
  { icon: "FileText", title: "内容营销", desc: "中俄双语内容营销，提升品牌信任度。", grad: "from-orange-500 to-amber-500" },
  { icon: "BarChart2", title: "数据分析", desc: "全面分析推广效果，持续优化ROI。", grad: "from-fuchsia-500 to-purple-500" },
];

const categories = ["全部", "网站", "社媒", "广告", "内容", "分析"];

const projects = [
  { cat: "电商", title: "华俄贸易中心 | 俄罗斯全渠道推广", sub: "chinatrade.ru | 评分: 5  项目数: 12  月收入: 429 815 руб.", price: "1 462 964 ₽", color: "#6366F1" },
  { cat: "餐饮", title: "北京烤鸭坊 | 莫斯科品牌推广", sub: "vk.com/pekingduck | 评分: 5  粉丝: 12 000  月增长: 3 000", price: "259 259 ₽", color: "#EC4899" },
  { cat: "建材", title: "长城建材集团 | Яндекс广告投放", sub: "yandex.ru/adv | 评分: 5  询盘: 280/月  转化: 18%", price: "890 000 ₽", color: "#8B5CF6" },
  { cat: "美容", title: "上海美妆品牌 | 全渠道数字营销", sub: "beautysh.ru | 评分: 5  月访客: 45 000  转化: 4.2%", price: "540 000 ₽", color: "#F59E0B" },
  { cat: "科技", title: "深圳电子制造商 | B2B推广", sub: "szelec.ru | 评分: 5  B2B询盘: 150/月  成交: 28%", price: "1 200 000 ₽", color: "#10B981" },
];

const solutions = [
  { emoji: "💼", title: "大型企业", desc: "完整的市场进入方案，网站、广告、PR全套，专属顾问全程陪跑", color: "#6366F1" },
  { emoji: "💰", title: "高回报项目", desc: "ROI最高的推广组合，精准定位高价值客户群体", color: "#EC4899" },
  { emoji: "📊", title: "初创企业", desc: "低成本高效入市方案，适合刚进入俄罗斯市场的中国企业", color: "#8B5CF6" },
  { emoji: "📱", title: "社媒运营", desc: "专业VK和Telegram账号运营，快速积累俄罗斯本地粉丝", color: "#0EA5E9" },
  { emoji: "🔥", title: "热门推荐", desc: "当前最受欢迎、性价比最高的推广服务套餐", color: "#F59E0B" },
];

const testimonials = [
  { name: "王建国", company: "华俄进出口有限公司", text: "合作后网站流量增加5倍，他们深刻理解俄罗斯市场，专业水平令人印象深刻。", rating: 5 },
  { name: "李晓梅", company: "北京健康科技", text: "Яндекс广告效果超出预期，两个月内收回了投资成本。强烈推荐！", rating: 5 },
  { name: "张伟", company: "深圳电子制造商", text: "VK粉丝三个月内从零增长到一万，团队非常专业高效。", rating: 5 },
];

const team = [
  { name: "亚历山大", role: "首席执行官", exp: "15年俄中商业", emoji: "👨‍💼", color: "#6366F1" },
  { name: "陈美华", role: "中国市场总监", exp: "双语营销专家", emoji: "👩‍💼", color: "#EC4899" },
  { name: "伊万", role: "数字营销专家", exp: "Яндекс认证", emoji: "👨‍💻", color: "#8B5CF6" },
  { name: "刘芳", role: "开发负责人", exp: "100+项目经验", emoji: "👩‍💻", color: "#0EA5E9" },
];

const blogPosts = [
  { tag: "市场洞察", title: "2024年中国企业进入俄罗斯市场的5大关键策略", date: "2024年3月", color: "#6366F1" },
  { tag: "广告技巧", title: "Яндекс广告入门：为什么它比Google更适合俄罗斯", date: "2024年2月", color: "#EC4899" },
  { tag: "社媒运营", title: "VK与Telegram：如何选择适合业务的俄罗斯社交平台", date: "2024年1月", color: "#8B5CF6" },
];

export default function Index() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "服务" },
    { href: "#portfolio", label: "案例" },
    { href: "#team", label: "团队" },
    { href: "#blog", label: "博客" },
    { href: "#reviews", label: "评价" },
    { href: "#contact", label: "联系" },
  ];

  return (
    <div className="min-h-screen font-chinese" style={{ background: "#F8F7FF", color: "#1A1A2E" }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 glass" style={{ borderBottom: "1px solid rgba(99,102,241,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
              style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}>俄</div>
            <span className="font-black text-lg" style={{ color: "#1A1A2E" }}>俄中推广</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium transition-all hover:text-violet-600"
                style={{ color: "#6B7280" }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact"
              className="hidden md:block px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)", boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}>
              免费咨询
            </a>
            <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg"
              style={{ background: "rgba(99,102,241,0.08)" }}
              onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={20} style={{ color: "#6366F1" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 glass pt-20 px-6 flex flex-col gap-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="text-xl font-bold py-4 border-b"
              style={{ color: "#1A1A2E", borderColor: "rgba(99,102,241,0.1)" }}
              onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="mt-4 py-4 rounded-2xl text-center font-bold text-white"
            style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}>
            免费咨询
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{
        background: "linear-gradient(135deg, #0F0C29 0%, #302B63 50%, #24243E 100%)",
        minHeight: "92vh",
      }}>
        {/* mesh blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full opacity-30 animate-float"
            style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)", top: "-10%", left: "-10%" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-20 animate-float"
            style={{ background: "radial-gradient(circle, #EC4899 0%, transparent 70%)", bottom: "-10%", right: "5%", animationDelay: "2s" }} />
          <div className="absolute w-[300px] h-[300px] rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)", top: "40%", left: "50%" }} />
          {/* grid lines */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 py-20 md:py-32">
          <div className="flex-1">
            {/* badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold tracking-widest"
              style={{ background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.4)", color: "#A5B4FC" }}>
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              专业俄罗斯市场推广机构
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
              在俄罗斯<br />
              <span className="text-gradient">推广您的</span><br />
              中国业务
            </h1>
            <p className="text-lg mb-10 leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              网站开发、Яндекс广告、社交媒体运营 — 一站式解决方案，专为中国企业量身定制
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact"
                className="px-8 py-4 rounded-2xl text-base font-bold text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)", boxShadow: "0 8px 32px rgba(99,102,241,0.4)" }}>
                免费获取方案 →
              </a>
              <a href="#portfolio"
                className="px-8 py-4 rounded-2xl text-base font-bold text-white transition-all hover:scale-105"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)" }}>
                查看案例
              </a>
            </div>
            {/* mini stats */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[{ n: "150+", l: "成功项目" }, { n: "98%", l: "满意度" }, { n: "7年", l: "经验" }].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-black text-gradient">{s.n}</div>
                  <div className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40 animate-float"
              style={{ background: "linear-gradient(135deg,#6366F1,#EC4899)", transform: "scale(1.1)" }} />
            <img src={HERO_IMG} alt="Russia China Business"
              className="relative z-10 w-72 md:w-[420px] rounded-3xl object-cover animate-float"
              style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)" }} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="section-reveal glass rounded-3xl p-6 card-hover text-center"
              style={{ boxShadow: "0 8px 32px rgba(99,102,241,0.07)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${s.color}18` }}>
                <Icon name={s.icon as "Clock"} size={22} style={{ color: s.color }} />
              </div>
              <div className="text-3xl font-black mb-1" style={{ color: s.color }}>{s.num}</div>
              <p className="text-xs leading-snug" style={{ color: "#9CA3AF" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#6366F1" }}>成功案例</p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1A2E" }}>热门推广项目</h2>
          </div>
          <a href="#contact"
            className="hidden md:flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)", boxShadow: "0 4px 20px rgba(99,102,241,0.3)" }}>
            查看全部 <Icon name="ArrowRight" size={15} />
          </a>
        </div>
        <div className="section-reveal flex flex-wrap gap-2 mb-6">
          {categories.map((c, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={activeTab === i
                ? { background: "linear-gradient(135deg,#6366F1,#8B5CF6)", color: "white", boxShadow: "0 4px 16px rgba(99,102,241,0.35)" }
                : { background: "white", color: "#9CA3AF", border: "1px solid #E5E7EB" }
              }>{c}</button>
          ))}
        </div>
        <div className="section-reveal glass rounded-3xl overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(99,102,241,0.08)" }}>
          {projects.map((p, i) => (
            <div key={i}
              className="flex items-center justify-between px-6 py-5 cursor-pointer transition-all hover:bg-violet-50/60 group"
              style={{ borderBottom: i < projects.length - 1 ? "1px solid rgba(99,102,241,0.07)" : "none" }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: p.color }}>
                  {p.cat[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm mb-0.5 group-hover:text-violet-700 transition-colors" style={{ color: "#1A1A2E" }}>{p.title}</div>
                  <div className="text-xs" style={{ color: "#9CA3AF" }}>{p.sub}</div>
                </div>
              </div>
              <div className="text-sm font-black ml-4 flex-shrink-0" style={{ color: p.color }}>{p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="py-12" style={{ background: "linear-gradient(180deg,#F8F7FF 0%,#EEF2FF 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="section-reveal mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#6366F1" }}>推广方案</p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1A2E" }}>不知从何开始？</h2>
            <p className="mt-2 text-base" style={{ color: "#9CA3AF" }}>根据您的目标选择最适合的方案</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {solutions.slice(0, 3).map((s, i) => (
              <div key={i} className="section-reveal glass rounded-3xl p-6 card-hover cursor-pointer flex items-start justify-between gap-4"
                style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.06)" }}>
                <div>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl mb-4"
                    style={{ background: `${s.color}15` }}>{s.emoji}</div>
                  <h3 className="font-black text-base mb-2" style={{ color: "#1A1A2E" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{s.desc}</p>
                </div>
                <Icon name="ArrowUpRight" size={18} style={{ color: s.color, flexShrink: 0 }} />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {solutions.slice(3).map((s, i) => (
              <div key={i} className="section-reveal glass rounded-3xl p-6 card-hover cursor-pointer flex items-start justify-between gap-4"
                style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.06)" }}>
                <div>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-xl mb-4"
                    style={{ background: `${s.color}15` }}>{s.emoji}</div>
                  <h3 className="font-black text-base mb-2" style={{ color: "#1A1A2E" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{s.desc}</p>
                </div>
                <Icon name="ArrowUpRight" size={18} style={{ color: s.color, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#6366F1" }}>我们的服务</p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1A2E" }}>全方位推广服务</h2>
            <p className="mt-2 text-base" style={{ color: "#9CA3AF" }}>从网站建设到广告投放，一站式搞定</p>
          </div>
          <img src={IMG_SERVICES} alt="services" className="w-40 h-40 rounded-3xl object-cover flex-shrink-0 card-hover"
            style={{ boxShadow: "0 16px 48px rgba(99,102,241,0.18)" }} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="section-reveal glass rounded-3xl p-6 card-hover cursor-pointer group overflow-hidden relative"
              style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.06)" }}>
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-gradient-to-br ${s.grad} translate-x-8 -translate-y-8`} />
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 bg-gradient-to-br ${s.grad}`}
                style={{ boxShadow: "0 4px 16px rgba(99,102,241,0.3)" }}>
                <Icon name={s.icon as "Globe"} size={22} />
              </div>
              <h3 className="font-black text-base mb-2" style={{ color: "#1A1A2E" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9CA3AF" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="py-20" style={{ background: "linear-gradient(180deg,#F8F7FF 0%,#EEF2FF 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="section-reveal flex flex-col md:flex-row items-center gap-8 mb-12">
            <img src={IMG_TEAM} alt="team" className="w-40 h-40 rounded-3xl object-cover flex-shrink-0 card-hover"
              style={{ boxShadow: "0 16px 48px rgba(99,102,241,0.15)" }} />
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#6366F1" }}>专业团队</p>
              <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1A2E" }}>了解我们的团队</h2>
              <p className="mt-2 text-base" style={{ color: "#9CA3AF" }}>深耕俄中商业领域，精通两国文化与市场</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {team.map((t, i) => (
              <div key={i} className="section-reveal glass rounded-3xl p-7 text-center card-hover"
                style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.06)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: `${t.color}15` }}>{t.emoji}</div>
                <div className="font-black text-sm mb-1" style={{ color: "#1A1A2E" }}>{t.name}</div>
                <div className="text-xs font-semibold mb-1" style={{ color: t.color }}>{t.role}</div>
                <div className="text-xs" style={{ color: "#9CA3AF" }}>{t.exp}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#6366F1" }}>知识博客</p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1A2E" }}>行业洞察</h2>
            <p className="mt-2 text-base" style={{ color: "#9CA3AF" }}>中俄商业推广实用指南</p>
          </div>
          <img src={IMG_BLOG} alt="blog" className="w-36 h-36 rounded-3xl object-cover flex-shrink-0 card-hover"
            style={{ boxShadow: "0 16px 48px rgba(99,102,241,0.15)" }} />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {blogPosts.map((b, i) => (
            <div key={i} className="section-reveal glass rounded-3xl overflow-hidden card-hover cursor-pointer group"
              style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.06)" }}>
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${b.color}, ${b.color}99)` }} />
              <div className="p-7">
                <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: `${b.color}15`, color: b.color }}>{b.tag}</span>
                <h3 className="font-black text-sm mt-4 mb-4 leading-snug group-hover:text-violet-600 transition-colors"
                  style={{ color: "#1A1A2E" }}>{b.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>{b.date}</span>
                  <span className="text-xs font-bold" style={{ color: b.color }}>阅读更多 →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20" style={{ background: "linear-gradient(180deg,#F8F7FF 0%,#EEF2FF 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="section-reveal text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#6366F1" }}>客户评价</p>
            <h2 className="text-3xl md:text-5xl font-black" style={{ color: "#1A1A2E" }}>他们信任我们</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="section-reveal glass rounded-3xl p-7 card-hover"
                style={{ boxShadow: "0 4px 24px rgba(99,102,241,0.06)" }}>
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} className="text-amber-400">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "#6B7280" }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-sm"
                    style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#1A1A2E" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "#9CA3AF" }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WECHAT ── */}
      <section className="py-12 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 40%, #047857 100%)", boxShadow: "0 24px 80px rgba(4,120,87,0.3)" }}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-bold"
                style={{ background: "rgba(255,255,255,0.1)", color: "#6EE7B7" }}>
                <span>💬</span> WeChat 微信 — 直接联系
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4">
                有任何问题？<br />请直接联系我！
              </h2>
              <p className="text-green-100 text-base mb-6 leading-relaxed">
                我是 <strong className="text-white">VITǍLY 维塔利</strong>，俄罗斯专家。<br />
                关于网站开发、广告投放、社媒运营的所有问题，<br />
                我将亲自为您解答，全程中文沟通。
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl w-fit"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <span className="text-3xl">🇷🇺</span>
                <div>
                  <div className="font-black text-white text-lg">VITǍLY 维塔利</div>
                  <div className="text-green-300 text-sm">Россия · 俄罗斯专家</div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col items-center gap-4">
              <div className="bg-white p-4 rounded-3xl" style={{ boxShadow: "0 16px 60px rgba(0,0,0,0.2)" }}>
                <img src={IMG_WECHAT} alt="WeChat QR VITALY" className="w-52 h-52 object-contain" />
              </div>
              <p className="text-green-200 text-sm text-center font-medium">📱 扫描二维码，添加微信好友</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-12 px-4 md:px-8" style={{ background: "linear-gradient(180deg,#F8F7FF 0%,#EEF2FF 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="section-reveal glass rounded-3xl p-8 md:p-14 text-center"
            style={{ boxShadow: "0 16px 60px rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.12)" }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#6366F1" }}>联系我们</p>
            <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ color: "#1A1A2E" }}>准备好了吗？</h2>
            <p className="text-base mb-10" style={{ color: "#9CA3AF" }}>
              免费获取您专属的俄罗斯市场推广方案，专家24小时内联系您
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              {[{ ph: "您的姓名" }, { ph: "微信 / WhatsApp / 电话" }].map((f) => (
                <input key={f.ph} type="text" placeholder={f.ph}
                  className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all"
                  style={{ background: "#F3F4F6", border: "2px solid transparent" }}
                  onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
                  onBlur={(e) => (e.target.style.borderColor = "transparent")} />
              ))}
            </div>
            <textarea placeholder="描述您的业务和推广目标..." rows={3}
              className="w-full px-5 py-4 rounded-2xl text-sm outline-none mb-5 resize-none transition-all"
              style={{ background: "#F3F4F6", border: "2px solid transparent" }}
              onFocus={(e) => (e.target.style.borderColor = "#6366F1")}
              onBlur={(e) => (e.target.style.borderColor = "transparent")} />
            <button className="w-full md:w-auto px-12 py-4 rounded-2xl text-base font-black text-white transition-all hover:scale-105 hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)", boxShadow: "0 8px 32px rgba(99,102,241,0.4)" }}>
              发送申请 — 免费咨询 🚀
            </button>
            <div className="flex flex-wrap justify-center gap-8 mt-10 pt-10"
              style={{ borderTop: "1px solid rgba(99,102,241,0.1)" }}>
              {[
                { icon: "MessageCircle", text: "微信: VITALY维塔利" },
                { icon: "Mail", text: "info@russia-china.ru" },
                { icon: "Phone", text: "+7 (495) 000-00-00" },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#6B7280" }}>
                  <Icon name={c.icon as "Mail"} size={16} style={{ color: "#6366F1" }} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4 md:px-8" style={{ borderTop: "1px solid rgba(99,102,241,0.1)", background: "#F8F7FF" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
              style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}>俄</div>
            <span className="font-black" style={{ color: "#1A1A2E" }}>俄中推广机构</span>
          </div>
          <p className="text-sm" style={{ color: "#9CA3AF" }}>© 2024 俄中推广机构. 保留所有权利</p>
          <div className="flex gap-3">
            {["Globe", "MessageCircle", "Phone"].map((ic) => (
              <div key={ic} className="w-9 h-9 rounded-xl flex items-center justify-center cursor-pointer card-hover"
                style={{ background: "rgba(99,102,241,0.08)" }}>
                <Icon name={ic as "Globe"} size={15} style={{ color: "#6366F1" }} />
              </div>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .text-gradient {
          background: linear-gradient(135deg,#6366F1 0%,#8B5CF6 50%,#EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.95);
        }
        .card-hover { transition: transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(99,102,241,0.12); }
        .section-reveal { opacity:0; transform:translateY(28px); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
        .section-reveal.visible { opacity:1; transform:translateY(0); }
      `}</style>
    </div>
  );
}
