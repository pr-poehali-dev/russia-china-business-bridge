import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_3D_MAN = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/f1e7a2ba-7373-4f6b-84ce-8b934720a6e8.jpg";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const stats = [
  { num: "7年", desc: "自2017年起帮助中国企业进入俄罗斯市场", bg: "#EEF2FF" },
  { num: "150+", desc: "成功完成项目，受保障交易", bg: "#EDFAF1" },
  { num: "98%", desc: "来自俄罗斯的活跃客户满意度", bg: "#FFFBEB" },
  { num: "24小时", desc: "专家响应时间，工作日内", bg: "#FAF0FF" },
];

const services = [
  { icon: "Globe", title: "网站开发", desc: "为俄罗斯市场打造专业网站。SEO优化、移动端适配。" },
  { icon: "Megaphone", title: "Яндекс广告", desc: "俄罗斯最大搜索引擎精准广告，快速获客。" },
  { icon: "Share2", title: "社交媒体运营", desc: "管理VK、Telegram等主流俄罗斯社交平台。" },
  { icon: "TrendingUp", title: "市场推广", desc: "全方位俄罗斯市场推广策略，帮助品牌落地。" },
  { icon: "FileText", title: "博客与内容", desc: "中俄双语内容营销，提升品牌信任度。" },
  { icon: "BarChart2", title: "数据分析", desc: "全面分析推广效果，持续优化ROI。" },
];

const categories = ["全部", "网站", "社媒", "广告", "内容", "分析"];

const projects = [
  {
    cat: "电商",
    title: "华俄贸易中心 | 俄罗斯全渠道推广",
    sub: "官网: chinatrade.ru | 评分: 5  项目数: 12  月收入: 429 815 руб.",
    price: "1 462 964 ₽",
  },
  {
    cat: "餐饮",
    title: "北京烤鸭坊 | 莫斯科品牌推广",
    sub: "社媒: vk.com/pekingduck | 评分: 5  粉丝: 12 000  月增长: 3 000",
    price: "259 259 ₽",
  },
  {
    cat: "建材",
    title: "长城建材集团 | Яндекс广告投放",
    sub: "广告: yandex.ru/adv | 评分: 5  询盘: 280/月  转化: 18%",
    price: "890 000 ₽",
  },
  {
    cat: "美容",
    title: "上海美妆品牌 | 全渠道数字营销",
    sub: "官网: beautysh.ru | 评分: 5  月访客: 45 000  转化: 4.2%",
    price: "540 000 ₽",
  },
  {
    cat: "科技",
    title: "深圳电子制造商 | B2B推广",
    sub: "官网: szelec.ru | 评分: 5  B2B询盘: 150/月  成交: 28%",
    price: "1 200 000 ₽",
  },
];

const solutions = [
  { emoji: "💼", title: "大型企业", desc: "完整的市场进入方案，包括网站、广告、PR全套服务，专属顾问全程陪跑" },
  { emoji: "💰", title: "高回报项目", desc: "ROI最高的推广组合，精准定位高价值客户群体" },
  { emoji: "📊", title: "初创企业", desc: "低成本高效入市方案，适合刚进入俄罗斯市场的中国企业" },
  { emoji: "📱", title: "社媒运营", desc: "专业VK和Telegram账号运营，快速积累俄罗斯本地粉丝" },
  { emoji: "🔥", title: "热门推荐", desc: "当前最受欢迎、性价比最高的推广服务套餐" },
];

const testimonials = [
  { name: "王建国", company: "华俄进出口有限公司", text: "合作后网站流量增加5倍，他们深刻理解俄罗斯市场。", rating: 5 },
  { name: "李晓梅", company: "北京健康科技", text: "Яндекс广告效果超出预期，两个月内收回投资成本。", rating: 5 },
  { name: "张伟", company: "深圳电子制造商", text: "VK粉丝三个月内从零增长到一万，非常专业。", rating: 5 },
];

const team = [
  { name: "亚历山大·索科洛夫", role: "首席执行官", exp: "15年俄中商业", emoji: "👨‍💼" },
  { name: "陈美华", role: "中国市场总监", exp: "双语营销专家", emoji: "👩‍💼" },
  { name: "伊万·彼得罗夫", role: "数字营销专家", exp: "Яндекс认证", emoji: "👨‍💻" },
  { name: "刘芳", role: "开发负责人", exp: "100+项目", emoji: "👩‍💻" },
];

const blogPosts = [
  { tag: "市场洞察", title: "2024年中国企业进入俄罗斯市场的5大关键策略", date: "2024年3月" },
  { tag: "广告技巧", title: "Яндекс广告入门：为什么它比Google更适合俄罗斯", date: "2024年2月" },
  { tag: "社媒运营", title: "VK与Telegram：如何选择适合您业务的俄罗斯社交平台", date: "2024年1月" },
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
    <div className="min-h-screen bg-white font-chinese" style={{ color: "var(--text-main)" }}>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
              style={{ background: "var(--blue)" }}>俄</div>
            <span className="font-bold text-lg" style={{ color: "var(--text-main)" }}>俄中推广</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium transition-colors hover:text-blue-600"
                style={{ color: "var(--text-muted)" }}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact"
              className="hidden md:block px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--blue)" }}>
              免费咨询
            </a>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={22} style={{ color: "var(--text-main)" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 px-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-xl font-semibold py-3 border-b border-gray-100"
              style={{ color: "var(--text-main)" }} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="mt-4 px-6 py-3 rounded-lg text-center font-semibold text-white"
            style={{ background: "var(--blue)" }}>
            免费咨询
          </a>
        </div>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #3B5EDB 60%, #4F6EF7 100%)" }}>
        {/* floating icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { icon: "Globe", x: "8%", y: "20%" },
            { icon: "Key", x: "5%", y: "70%" },
            { icon: "Lock", x: "85%", y: "15%" },
            { icon: "Lock", x: "78%", y: "75%" },
            { icon: "CircleDollarSign", x: "60%", y: "65%" },
          ].map((item, i) => (
            <div key={i} className="absolute opacity-20"
              style={{ left: item.x, top: item.y }}>
              <Icon name={item.icon as "Globe"} size={32} style={{ color: "white" }} />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-4">
              在俄罗斯推广<br />您的中国业务
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              网站开发、Яндекс广告、社交媒体运营 — 一站式解决方案
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services"
                className="px-7 py-3 rounded-xl text-base font-bold text-white transition-all hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)" }}>
                了解服务
              </a>
              <a href="#contact"
                className="px-7 py-3 rounded-xl text-base font-bold transition-all hover:opacity-90"
                style={{ background: "white", color: "var(--blue)" }}>
                免费获取方案
              </a>
            </div>
            {/* slider dots */}
            <div className="flex gap-2 mt-10">
              <div className="w-3 h-3 rounded-full bg-white" />
              <div className="w-3 h-3 rounded-full bg-white/40" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img src={HERO_3D_MAN} alt="Business"
              className="w-72 md:w-96 rounded-2xl object-cover"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.25)" }} />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="section-reveal rounded-2xl p-6" style={{ background: s.bg }}>
              <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: "var(--blue)" }}>{s.num}</div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR PROJECTS */}
      <section id="portfolio" className="py-12" style={{ background: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="section-reveal flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: "var(--text-main)" }}>热门推广案例</h2>
            <a href="#contact"
              className="hidden md:flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white"
              style={{ background: "var(--blue)" }}>
              <Icon name="ChevronRight" size={16} />
              查看所有案例
            </a>
          </div>

          {/* tabs */}
          <div className="section-reveal flex flex-wrap gap-2 mb-6">
            {categories.map((c, i) => (
              <button key={i} onClick={() => setActiveTab(i)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={activeTab === i
                  ? { background: "var(--blue)", color: "white" }
                  : { background: "white", color: "var(--text-muted)", border: "1px solid #E2E8F0" }
                }>
                {c}
              </button>
            ))}
          </div>

          {/* list */}
          <div className="section-reveal bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #E2E8F0" }}>
            {projects.map((p, i) => (
              <div key={i}
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-blue-50 transition-colors"
                style={{ borderBottom: i < projects.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
                    style={{ background: "var(--blue)" }}>
                    {p.cat[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: "var(--text-main)" }}>{p.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{p.sub}</div>
                  </div>
                </div>
                <div className="text-sm font-bold ml-4 flex-shrink-0" style={{ color: "var(--blue)" }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / SOLUTIONS */}
      <section id="services" className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal mb-10">
          <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--text-main)" }}>不知从何开始？</h2>
          <p style={{ color: "var(--text-muted)" }}>根据您的目标选择最合适的推广方案</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {solutions.slice(0, 3).map((s, i) => (
            <div key={i} className="section-reveal flex items-start justify-between p-6 rounded-2xl cursor-pointer hover:shadow-md transition-all bg-white"
              style={{ border: "1px solid #E2E8F0" }}>
              <div className="pr-4">
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-main)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
              <span className="text-4xl flex-shrink-0">{s.emoji}</span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {solutions.slice(3).map((s, i) => (
            <div key={i} className="section-reveal flex items-start justify-between p-6 rounded-2xl cursor-pointer hover:shadow-md transition-all bg-white"
              style={{ border: "1px solid #E2E8F0" }}>
              <div className="pr-4">
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-main)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
              <span className="text-4xl flex-shrink-0">{s.emoji}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-12" style={{ background: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="section-reveal flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--text-main)" }}>我们的服务</h2>
              <p style={{ color: "var(--text-muted)" }}>全方位帮助中国企业进入俄罗斯市场</p>
            </div>
            <img
              src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/03ba3332-b200-46b0-bcd9-0505d5448801.jpg"
              alt="services illustration"
              className="w-48 h-48 rounded-2xl object-cover flex-shrink-0"
              style={{ boxShadow: "0 8px 32px rgba(59,94,219,0.12)" }}
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={i} className="section-reveal bg-white rounded-2xl p-6 cursor-pointer hover:shadow-md transition-all"
                style={{ border: "1px solid #E2E8F0" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--blue-light)" }}>
                  <Icon name={s.icon as "Globe"} size={22} style={{ color: "var(--blue)" }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "var(--text-main)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/56dc42a0-5ef5-4e06-8b21-4af7b1789918.jpg"
            alt="team illustration"
            className="w-48 h-48 rounded-2xl object-cover flex-shrink-0"
            style={{ boxShadow: "0 8px 32px rgba(59,94,219,0.12)" }}
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--text-main)" }}>我们的团队</h2>
            <p style={{ color: "var(--text-muted)" }}>深耕俄中商业领域，精通两国文化与市场</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {team.map((t, i) => (
            <div key={i} className="section-reveal bg-white rounded-2xl p-6 text-center hover:shadow-md transition-all"
              style={{ border: "1px solid #E2E8F0" }}>
              <div className="text-5xl mb-3">{t.emoji}</div>
              <div className="font-bold text-sm mb-1" style={{ color: "var(--text-main)" }}>{t.name}</div>
              <div className="text-xs font-medium mb-1" style={{ color: "var(--blue)" }}>{t.role}</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.exp}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-12" style={{ background: "#F5F7FA" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="section-reveal flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-black mb-1" style={{ color: "var(--text-main)" }}>行业博客</h2>
              <p style={{ color: "var(--text-muted)" }}>中俄商业推广实用指南</p>
            </div>
            <img
              src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/0fcd6408-4941-493c-95be-f0e00d5c41d2.jpg"
              alt="blog illustration"
              className="w-40 h-40 rounded-2xl object-cover flex-shrink-0"
              style={{ boxShadow: "0 8px 32px rgba(59,94,219,0.12)" }}
            />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {blogPosts.map((b, i) => (
              <div key={i} className="section-reveal bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-md transition-all"
                style={{ border: "1px solid #E2E8F0" }}>
                <div className="h-1.5 w-full" style={{ background: "var(--blue)" }} />
                <div className="p-6">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
                    {b.tag}
                  </span>
                  <h3 className="font-bold text-sm mt-3 mb-4 leading-snug" style={{ color: "var(--text-main)" }}>{b.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{b.date}</span>
                    <span className="text-xs font-semibold" style={{ color: "var(--blue)" }}>阅读更多 →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-16 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black mb-2" style={{ color: "var(--text-main)" }}>客户评价</h2>
          <p style={{ color: "var(--text-muted)" }}>中国企业主的真实反馈</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="section-reveal bg-white rounded-2xl p-6 hover:shadow-md transition-all"
              style={{ border: "1px solid #E2E8F0" }}>
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "var(--text-muted)" }}>"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: "var(--blue)" }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "var(--text-main)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WECHAT BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-4 md:px-8">
        <div className="section-reveal rounded-3xl overflow-hidden flex flex-col md:flex-row items-center gap-0"
          style={{ background: "linear-gradient(135deg, #07C160 0%, #0BAB52 100%)", boxShadow: "0 16px 60px rgba(7,193,96,0.25)" }}>
          <div className="flex-1 p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-xl">💬</span>
              </div>
              <span className="text-sm font-bold tracking-widest uppercase opacity-80">WeChat 微信</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
              有任何问题？<br />请直接联系我！
            </h2>
            <p className="text-white/80 text-base mb-6 leading-relaxed">
              我是 <strong className="text-white">VITǍLY 维塔利</strong>，俄罗斯专家。<br />
              关于网站开发、广告投放、社媒运营——所有问题都可以通过微信联系我，我将亲自为您解答。
            </p>
            <div className="flex items-center gap-3 bg-white/15 rounded-2xl px-5 py-3 w-fit">
              <span className="text-2xl">🇷🇺</span>
              <div>
                <div className="font-black text-lg">VITǍLY 维塔利</div>
                <div className="text-white/70 text-sm">Россия · 俄罗斯</div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10 flex flex-col items-center gap-4">
            <div className="bg-white rounded-2xl p-4" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}>
              <img
                src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/bucket/5fa91614-330c-4deb-9927-17ed121f6ba1.jpg"
                alt="WeChat QR код VITALY"
                className="w-48 h-48 md:w-56 md:h-56 object-contain"
              />
            </div>
            <p className="text-white/80 text-sm text-center">扫描二维码添加微信好友</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12" style={{ background: "#F5F7FA" }}>
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="section-reveal bg-white rounded-3xl p-8 md:p-12 text-center"
            style={{ border: "1px solid #E2E8F0", boxShadow: "0 8px 40px rgba(59,94,219,0.08)" }}>
            <h2 className="text-2xl md:text-4xl font-black mb-3" style={{ color: "var(--text-main)" }}>准备好进入俄罗斯市场了吗？</h2>
            <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
              免费获取您专属的市场推广方案，专家24小时内联系您
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <input type="text" placeholder="您的姓名"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")} />
              <input type="text" placeholder="微信 / WhatsApp / 电话"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")} />
            </div>
            <textarea placeholder="描述您的业务和推广目标..." rows={3}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none mb-4 resize-none"
              style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}
              onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
              onBlur={(e) => (e.target.style.borderColor = "#E2E8F0")} />
            <button className="w-full md:w-auto px-10 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90"
              style={{ background: "var(--blue)" }}>
              发送申请 — 免费咨询
            </button>
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8"
              style={{ borderTop: "1px solid #F1F5F9" }}>
              {[
                { icon: "MessageCircle", text: "微信: RussiaChinaBiz" },
                { icon: "Mail", text: "info@russia-china.ru" },
                { icon: "Phone", text: "+7 (495) 000-00-00" },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <Icon name={c.icon as "Mail"} size={15} style={{ color: "var(--blue)" }} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 md:px-8 bg-white" style={{ borderTop: "1px solid #E2E8F0" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{ background: "var(--blue)" }}>俄</div>
            <span className="font-bold" style={{ color: "var(--text-main)" }}>俄中推广机构</span>
          </div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>© 2024 俄中推广机构. 保留所有权利</p>
          <div className="flex gap-3">
            {["Globe", "MessageCircle", "Phone"].map((ic) => (
              <div key={ic} className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80 transition-all"
                style={{ background: "var(--blue-light)" }}>
                <Icon name={ic as "Globe"} size={14} style={{ color: "var(--blue)" }} />
              </div>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        :root {
          --blue: #3B5EDB;
          --blue-light: #EEF2FF;
          --blue-mid: #4B6EEB;
          --text-main: #1A2340;
          --text-muted: #6B7A99;
        }
        .section-reveal {
          opacity: 0; transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .section-reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
}