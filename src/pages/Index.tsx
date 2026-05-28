import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/bb17128b-ea04-4f01-97c5-328a546810c3.jpg";

const services = [
  {
    icon: "Globe",
    title: "网站开发",
    subtitle: "Website Development",
    desc: "为俄罗斯市场打造专业网站。SEO优化、移动端适配、现代化设计。",
    color: "#C0392B",
  },
  {
    icon: "Megaphone",
    title: "Яндекс广告",
    subtitle: "Yandex Advertising",
    desc: "俄罗斯最大搜索引擎的精准广告投放。快速吸引目标客户群体。",
    color: "#D4A017",
  },
  {
    icon: "Share2",
    title: "社交媒体运营",
    subtitle: "Social Media Management",
    desc: "专业管理VK、Telegram等俄罗斯主流社交平台，建立品牌影响力。",
    color: "#C0392B",
  },
  {
    icon: "TrendingUp",
    title: "市场推广",
    subtitle: "Market Promotion",
    desc: "全方位的俄罗斯市场推广策略，帮助中国品牌快速打开俄罗斯市场。",
    color: "#D4A017",
  },
];

const portfolio = [
  {
    category: "电商平台",
    title: "华俄贸易中心",
    result: "销售额提升 340%",
    period: "6个月",
  },
  {
    category: "餐饮连锁",
    title: "北京烤鸭坊",
    result: "月访客 +12,000",
    period: "3个月",
  },
  {
    category: "建材出口",
    title: "长城建材集团",
    result: "询盘增长 280%",
    period: "4个月",
  },
  {
    category: "美容行业",
    title: "上海美妆品牌",
    result: "品牌知名度 +5倍",
    period: "8个月",
  },
];

const testimonials = [
  {
    name: "王建国",
    company: "华俄进出口有限公司",
    text: "与该团队合作后，我们的网站流量增加了5倍。他们深刻理解俄罗斯市场，专业水平令人印象深刻。",
    rating: 5,
  },
  {
    name: "李晓梅",
    company: "北京健康科技",
    text: "Яндекс广告效果超出预期，两个月内就收回了投资成本。强烈推荐！",
    rating: 5,
  },
  {
    name: "张伟",
    company: "深圳电子制造商",
    text: "他们的社交媒体团队非常专业，VK上的粉丝在三个月内从零增长到一万。",
    rating: 5,
  },
];

const blogPosts = [
  {
    tag: "市场洞察",
    title: "2024年中国企业进入俄罗斯市场的5大关键策略",
    desc: "如何在当前地缘政治背景下，把握俄罗斯市场的黄金机遇...",
    date: "2024年3月",
  },
  {
    tag: "广告技巧",
    title: "Яндекс广告入门：为什么它比Google更适合俄罗斯",
    desc: "详解俄罗斯最大搜索引擎的广告系统，手把手教你投放第一个广告...",
    date: "2024年2月",
  },
  {
    tag: "社媒运营",
    title: "VK与Telegram：如何选择适合您业务的俄罗斯社交平台",
    desc: "深入分析两大俄罗斯主流社交平台的特点与适用场景...",
    date: "2024年1月",
  },
];

const team = [
  {
    name: "亚历山大·索科洛夫",
    role: "首席执行官 & 创始人",
    exp: "15年俄中商业经验",
    emoji: "👨‍💼",
  },
  {
    name: "陈美华",
    role: "中国市场总监",
    exp: "精通中俄双语营销",
    emoji: "👩‍💼",
  },
  {
    name: "伊万·彼得罗夫",
    role: "数字营销专家",
    exp: "Яндекс认证专家",
    emoji: "👨‍💻",
  },
  {
    name: "刘芳",
    role: "网站开发负责人",
    exp: "100+项目经验",
    emoji: "👩‍💻",
  },
];

const stats = [
  { num: "150+", label: "成功项目" },
  { num: "98%", label: "客户满意度" },
  { num: "7年", label: "行业经验" },
  { num: "3倍", label: "平均ROI提升" },
];

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "服务" },
    { href: "#portfolio", label: "案例" },
    { href: "#team", label: "团队" },
    { href: "#blog", label: "博客" },
    { href: "#reviews", label: "评价" },
    { href: "#contact", label: "联系我们" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] font-chinese overflow-x-hidden">
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: "rgba(8,8,8,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(212,160,23,0.1)",
        }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #C0392B, #E74C3C)" }}
          >
            俄
          </div>
          <span className="text-white font-bold text-lg tracking-wide">俄中推广</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors"
              style={{ color: "#888" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:block px-5 py-2 rounded-full text-sm font-bold text-[#080808]"
          style={{ background: "linear-gradient(135deg, #D4A017, #F5D76E)" }}
        >
          免费咨询
        </a>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 pt-20 px-6 flex flex-col gap-4"
          style={{ background: "rgba(8,8,8,0.97)" }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white text-2xl font-bold py-3 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-6 py-3 rounded-full text-center font-bold text-[#080808]"
            style={{ background: "linear-gradient(135deg, #D4A017, #F5D76E)" }}
          >
            免费咨询
          </a>
        </div>
      )}

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(192,57,43,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(212,160,23,0.1) 0%, transparent 50%), #0a0a0a",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(192,57,43,0.4) 0%, transparent 70%)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, rgba(212,160,23,0.5) 0%, transparent 70%)" }}
          />
          <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[200px] opacity-[0.03] select-none font-black leading-none text-white">
            中
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold tracking-widest"
              style={{
                background: "rgba(192,57,43,0.15)",
                border: "1px solid rgba(192,57,43,0.3)",
                color: "#E74C3C",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              专业俄罗斯市场推广机构
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 text-white">
              让您的
              <br />
              <span className="animate-shimmer">中国品牌</span>
              <br />
              <span>征服俄罗斯</span>
            </h1>

            <p className="text-[#999] text-lg mb-10 leading-relaxed max-w-lg">
              我们专为中国企业提供全方位的俄罗斯市场进入服务。网站开发、Яндекс广告、社交媒体运营——一站式解决方案。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full text-base font-bold text-[#080808] transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #D4A017, #F5D76E)",
                  boxShadow: "0 0 40px rgba(212,160,23,0.3)",
                }}
              >
                免费获取方案 →
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 rounded-full text-base font-bold text-white transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                查看案例
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-14">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black" style={{ color: "var(--gold)" }}>
                    {s.num}
                  </div>
                  <div className="text-[#666] text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "radial-gradient(circle, rgba(192,57,43,0.2) 0%, transparent 70%)",
                animation: "float 6s ease-in-out infinite",
              }}
            />
            <img
              src={HERO_IMAGE}
              alt="Россия-Китай бизнес"
              className="relative z-10 w-full rounded-3xl object-cover"
              style={{
                aspectRatio: "1/1",
                boxShadow: "0 40px 100px rgba(192,57,43,0.2), 0 0 0 1px rgba(212,160,23,0.1)",
                animation: "float 6s ease-in-out infinite",
              }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(192,57,43,0.2), rgba(212,160,23,0.1))",
                border: "1px solid rgba(212,160,23,0.2)",
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555]">
          <span className="text-xs tracking-widest">向下滚动</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* DIVIDER */}
      <div className="divider-gold mx-12 opacity-30" />

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="section-reveal text-center mb-16">
            <span
              className="text-xs tracking-[0.3em] font-bold uppercase mb-4 block"
              style={{ color: "var(--gold)" }}
            >
              我们的服务
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">全方位推广服务</h2>
            <p className="text-[#666] text-lg max-w-xl mx-auto">
              从网站建设到广告投放，我们提供中国企业进入俄罗斯市场所需的一切
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="section-reveal card-dark card-hover rounded-2xl p-8 cursor-pointer">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${s.color}22`, border: `1px solid ${s.color}44` }}
                >
                  <Icon name={s.icon as "Globe"} size={26} style={{ color: s.color }} />
                </div>
                <h3 className="text-white font-black text-xl mb-1">{s.title}</h3>
                <p className="text-xs mb-4" style={{ color: s.color }}>
                  {s.subtitle}
                </p>
                <p className="text-[#777] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 px-6 md:px-12" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="container mx-auto">
          <div className="section-reveal text-center mb-16">
            <span
              className="text-xs tracking-[0.3em] font-bold uppercase mb-4 block"
              style={{ color: "var(--gold)" }}
            >
              成功案例
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">我们的成果</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((p, i) => (
              <div key={i} className="section-reveal card-dark card-hover rounded-2xl p-8 text-center group">
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "var(--gold)" }}
                >
                  {p.category}
                </div>
                <h3 className="text-white font-bold text-lg mb-6">{p.title}</h3>
                <div
                  className="text-3xl font-black mb-2 text-white"
                  style={{ transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                >
                  {p.result}
                </div>
                <div className="text-[#555] text-sm">用时 {p.period}</div>
              </div>
            ))}
          </div>

          <div className="section-reveal text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-[#080808]"
              style={{ background: "linear-gradient(135deg, #D4A017, #F5D76E)" }}
            >
              获取您的推广方案
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="section-reveal text-center mb-16">
            <span
              className="text-xs tracking-[0.3em] font-bold uppercase mb-4 block"
              style={{ color: "var(--gold)" }}
            >
              专业团队
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">了解我们的团队</h2>
            <p className="text-[#666] text-lg max-w-xl mx-auto">
              深耕俄中商业领域多年，我们的团队精通两国市场规则与文化差异
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <div key={i} className="section-reveal card-dark card-hover rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">{t.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-1">{t.name}</h3>
                <p className="text-sm mb-3" style={{ color: "var(--gold)" }}>
                  {t.role}
                </p>
                <p className="text-[#666] text-sm">{t.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 px-6 md:px-12" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="container mx-auto">
          <div className="section-reveal text-center mb-16">
            <span
              className="text-xs tracking-[0.3em] font-bold uppercase mb-4 block"
              style={{ color: "var(--gold)" }}
            >
              知识博客
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">行业洞察</h2>
            <p className="text-[#666] text-lg">关于中俄商业推广的实用指南与最新趋势</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((b, i) => (
              <div
                key={i}
                className="section-reveal card-dark card-hover rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className="h-2 w-full"
                  style={{ background: i % 2 === 0 ? "var(--red)" : "var(--gold)" }}
                />
                <div className="p-8">
                  <span
                    className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "rgba(192,57,43,0.15)" : "rgba(212,160,23,0.15)",
                      color: i % 2 === 0 ? "#E74C3C" : "var(--gold)",
                    }}
                  >
                    {b.tag}
                  </span>
                  <h3
                    className="text-white font-bold text-lg mt-4 mb-3 leading-tight"
                    style={{ transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                  >
                    {b.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed mb-4">{b.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#555] text-xs">{b.date}</span>
                    <span className="text-sm font-bold" style={{ color: "var(--gold)" }}>
                      阅读更多 →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="section-reveal text-center mb-16">
            <span
              className="text-xs tracking-[0.3em] font-bold uppercase mb-4 block"
              style={{ color: "var(--gold)" }}
            >
              客户评价
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">他们信任我们</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="section-reveal card-dark rounded-2xl p-8"
                style={{ border: "1px solid rgba(212,160,23,0.15)" }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <span key={j} style={{ color: "var(--gold)" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#bbb] text-base leading-relaxed mb-8 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white"
                    style={{
                      background: "rgba(192,57,43,0.2)",
                      border: "1px solid rgba(192,57,43,0.3)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-[#555] text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-12" style={{ background: "rgba(255,255,255,0.01)" }}>
        <div className="container mx-auto max-w-4xl">
          <div
            className="section-reveal rounded-3xl p-12 md:p-16 text-center"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(192,57,43,0.15) 0%, rgba(212,160,23,0.05) 50%, transparent 100%)",
              border: "1px solid rgba(212,160,23,0.2)",
            }}
          >
            <span
              className="text-xs tracking-[0.3em] font-bold uppercase mb-4 block"
              style={{ color: "var(--gold)" }}
            >
              联系我们
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">准备好了吗？</h2>
            <p className="text-[#666] text-lg mb-12 max-w-lg mx-auto">
              免费获取您专属的俄罗斯市场推广方案。我们的专家将在24小时内与您联系。
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="您的姓名"
                className="w-full px-5 py-4 rounded-xl text-white text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
              <input
                type="text"
                placeholder="微信 / WhatsApp / 电话"
                className="w-full px-5 py-4 rounded-xl text-white text-sm outline-none"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
              />
            </div>
            <textarea
              placeholder="描述您的业务和推广目标..."
              rows={4}
              className="w-full px-5 py-4 rounded-xl text-white text-sm outline-none mb-6 resize-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                transition: "border-color 0.3s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(212,160,23,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />

            <button
              className="w-full md:w-auto px-12 py-4 rounded-full text-lg font-black text-[#080808] transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #D4A017, #F5D76E)",
                boxShadow: "0 0 60px rgba(212,160,23,0.25)",
              }}
            >
              发送申请 — 免费咨询
            </button>

            <div
              className="flex flex-wrap justify-center gap-8 mt-12 pt-12"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="flex items-center gap-3 text-[#777] text-sm">
                <Icon name="MessageCircle" size={18} style={{ color: "var(--gold)" }} />
                <span>微信: RussiaChinaBiz</span>
              </div>
              <div className="flex items-center gap-3 text-[#777] text-sm">
                <Icon name="Mail" size={18} style={{ color: "var(--gold)" }} />
                <span>info@russia-china.ru</span>
              </div>
              <div className="flex items-center gap-3 text-[#777] text-sm">
                <Icon name="Phone" size={18} style={{ color: "var(--gold)" }} />
                <span>+7 (495) 000-00-00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-12" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs"
              style={{ background: "linear-gradient(135deg, #C0392B, #E74C3C)" }}
            >
              俄
            </div>
            <span className="text-white font-bold">俄中推广</span>
          </div>
          <p className="text-[#444] text-sm">© 2024 俄中推广机构. 保留所有权利</p>
          <div className="flex gap-4">
            {["Globe", "MessageCircle", "Phone"].map((ic) => (
              <div
                key={ic}
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Icon name={ic as "Globe"} size={16} style={{ color: "var(--gold)" }} />
              </div>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          background: linear-gradient(90deg, #D4A017 0%, #F5D76E 40%, #fff 50%, #F5D76E 60%, #D4A017 100%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .card-dark {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(212,160,23,0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(192,57,43,0.15);
        }
        .divider-gold {
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4A017, transparent);
        }
        :root {
          --gold: #D4A017;
          --red: #C0392B;
        }
      `}</style>
    </div>
  );
}
