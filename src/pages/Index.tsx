import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG    = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/f1e7a2ba-7373-4f6b-84ce-8b934720a6e8.jpg";
const IMG_HERO2   = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/9c3ffff3-65e1-4670-9a4e-73b6d6737061.jpg";
const IMG_SERVICES= "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/03ba3332-b200-46b0-bcd9-0505d5448801.jpg";
const IMG_TEAM    = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/56dc42a0-5ef5-4e06-8b21-4af7b1789918.jpg";
const IMG_BLOG    = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/0fcd6408-4941-493c-95be-f0e00d5c41d2.jpg";
const IMG_WECHAT  = "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/bucket/5fa91614-330c-4deb-9927-17ed121f6ba1.jpg";

/* ─── scroll reveal ─── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach(e => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── data ─── */
const services = [
  { icon: "Globe",      title: "网站开发",    tag: "Web Dev",    desc: "为俄罗斯市场打造专业网站，SEO优化、移动端适配。" },
  { icon: "Megaphone",  title: "Яндекс广告",  tag: "Ads",        desc: "俄罗斯最大搜索引擎精准广告投放，快速获客。" },
  { icon: "Share2",     title: "社交媒体",    tag: "SMM",        desc: "管理VK、Telegram等主流俄罗斯社交平台。" },
  { icon: "TrendingUp", title: "市场推广",    tag: "Marketing",  desc: "全方位俄罗斯市场推广策略，帮助品牌落地。" },
  { icon: "FileText",   title: "内容营销",    tag: "Content",    desc: "中俄双语内容营销，提升品牌信任度。" },
  { icon: "BarChart2",  title: "数据分析",    tag: "Analytics",  desc: "全面分析推广效果，持续优化ROI。" },
];

const projects = [
  { cat: "电商", title: "华俄贸易中心", sub: "全渠道推广 · 12项目", price: "1 462 964 ₽", delta: "+340%" },
  { cat: "餐饮", title: "北京烤鸭坊",  sub: "莫斯科品牌推广",       price: "259 259 ₽",   delta: "+12K 访客" },
  { cat: "建材", title: "长城建材集团", sub: "Яндекс广告投放",       price: "890 000 ₽",   delta: "+280%" },
  { cat: "美容", title: "上海美妆品牌", sub: "全渠道数字营销",       price: "540 000 ₽",   delta: "×5 知名度" },
  { cat: "科技", title: "深圳电子制造商",sub: "B2B推广方案",         price: "1 200 000 ₽", delta: "+150 询盘" },
];

const testimonials = [
  { name: "王建国", co: "华俄进出口有限公司", text: "合作后网站流量增加5倍，他们深刻理解俄罗斯市场，专业水平令人印象深刻。" },
  { name: "李晓梅", co: "北京健康科技",        text: "Яндекс广告效果超出预期，两个月内收回投资成本。强烈推荐！" },
  { name: "张伟",   co: "深圳电子制造商",      text: "VK粉丝三个月从零增长到一万，团队非常专业高效。" },
];

const team = [
  { name: "亚历山大", role: "CEO & 创始人",  yrs: "15年",  emoji: "👨‍💼" },
  { name: "陈美华",   role: "中国市场总监",  yrs: "双语",  emoji: "👩‍💼" },
  { name: "伊万",     role: "数字营销专家",  yrs: "Яндекс", emoji: "👨‍💻" },
  { name: "刘芳",     role: "开发负责人",    yrs: "100+",  emoji: "👩‍💻" },
];

const blog = [
  { tag: "市场洞察", title: "2026年中国企业进入俄罗斯市场的5大关键策略", date: "2026.03" },
  { tag: "广告技巧", title: "Яндекс广告入门：为什么它比Google更适合俄罗斯", date: "2026.02" },
  { tag: "社媒运营", title: "VK与Telegram：如何选择适合业务的俄罗斯平台",  date: "2026.01" },
];

/* ─── floating wechat button ─── */
function WeChatFloat() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-3xl shadow-2xl p-5 flex flex-col items-center gap-3 animate-scale"
          style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.18)", border: "1px solid rgba(0,0,0,0.06)" }}>
          <img src={IMG_WECHAT} alt="WeChat QR" className="w-48 h-48 object-contain rounded-2xl" />
          <div className="text-center">
            <div className="font-black text-sm" style={{ color: "#064E3B" }}>VITǍLY 维塔利</div>
            <div className="text-xs mt-0.5" style={{ color: "#6B7280" }}>扫码添加微信，立即咨询</div>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{ background: "linear-gradient(135deg,#07C160,#059669)", boxShadow: "0 8px 32px rgba(7,193,96,0.4)" }}>
        {open ? "✕" : "💬"}
      </button>
    </div>
  );
}

/* ═══════════════════════════════ MAIN ═══════════════════════════════ */
export default function Index() {
  useReveal();
  const [tab, setTab] = useState(0);
  const [menu, setMenu] = useState(false);
  const cats = ["全部", "网站", "社媒", "广告", "内容", "分析"];

  const nav = [
    { href: "#services", l: "服务" },
    { href: "#work",     l: "案例" },
    { href: "#team",     l: "团队" },
    { href: "#blog",     l: "博客" },
    { href: "#contact",  l: "联系" },
  ];

  return (
    <div className="font-chinese" style={{ background: "#0A0A0F", color: "#fff" }}>

      {/* ── NAVBAR ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(10,10,15,0.8)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg grid place-items-center text-xs font-black"
              style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)" }}>俄</div>
            <span className="font-black text-white text-base tracking-tight">俄中推广</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {nav.map(n => (
              <a key={n.href} href={n.href} className="text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                {n.l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden md:block text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:opacity-85"
              style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)", color: "#000" }}>
              免费咨询
            </a>
            <button className="md:hidden w-9 h-9 grid place-items-center rounded-lg"
              style={{ background: "rgba(255,255,255,0.07)" }}
              onClick={() => setMenu(!menu)}>
              <Icon name={menu ? "X" : "Menu"} size={18} style={{ color: "#fff" }} />
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      {menu && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6 gap-1"
          style={{ background: "rgba(10,10,15,0.97)" }}>
          {nav.map(n => (
            <a key={n.href} href={n.href} onClick={() => setMenu(false)}
              className="text-2xl font-black py-4 border-b text-white"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>{n.l}</a>
          ))}
          <a href="#contact" onClick={() => setMenu(false)}
            className="mt-6 py-4 rounded-2xl text-center font-black text-black"
            style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)" }}>
            免费咨询
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section style={{ minHeight: "100dvh", paddingTop: "64px", position: "relative", overflow: "hidden" }}>
        {/* noise grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

        {/* glow orbs */}
        <div className="absolute pointer-events-none"
          style={{ width: 700, height: 700, borderRadius: "50%", top: "-20%", left: "-10%", background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)" }} />
        <div className="absolute pointer-events-none"
          style={{ width: 500, height: 500, borderRadius: "50%", bottom: "-10%", right: "5%", background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col justify-center"
          style={{ minHeight: "calc(100dvh - 64px)", paddingTop: "5rem", paddingBottom: "5rem" }}>

          {/* eyebrow */}
          <div className="reveal flex items-center gap-3 mb-8">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg,#C9A84C,transparent)" }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#C9A84C" }}>
              俄中商业推广 · Since 2017
            </span>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end">
            <div>
              <h1 className="font-black leading-[0.95] mb-8"
                style={{ fontSize: "clamp(3.5rem,10vw,8rem)", letterSpacing: "-0.03em" }}>
                <span style={{ color: "rgba(255,255,255,0.92)" }}>征服</span><br />
                <span style={{
                  background: "linear-gradient(135deg,#E8D5A3 0%,#C9A84C 40%,#F5E6B8 70%,#C9A84C 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>俄罗斯</span><br />
                <span style={{ color: "rgba(255,255,255,0.92)" }}>市场</span>
              </h1>

              <p className="text-lg leading-relaxed mb-10 max-w-lg"
                style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
                专为中国企业量身定制——网站开发、Яндекс广告、<br className="hidden md:block" />
                社交媒体运营，一站式进入俄罗斯市场。
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact"
                  className="px-8 py-4 rounded-2xl font-black text-sm text-black transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)", boxShadow: "0 0 40px rgba(201,168,76,0.3)" }}>
                  免费获取方案 →
                </a>
                <a href="#work"
                  className="px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
                  查看案例
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="hidden md:block relative">
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-50"
                style={{ background: "linear-gradient(135deg,rgba(201,168,76,0.3),rgba(139,92,246,0.2))", transform: "scale(1.05)" }} />
              <img src={HERO_IMG} alt="Russia China"
                className="relative w-80 rounded-3xl object-cover"
                style={{ aspectRatio: "1/1", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }} />
            </div>
          </div>

          {/* stats bar */}
          <div className="reveal mt-20 pt-8 flex flex-wrap gap-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[["150+","成功项目"],["98%","客户满意度"],["7年","行业经验"],["3×","平均ROI"]].map(([n,l]) => (
              <div key={l}>
                <div className="text-2xl font-black" style={{ color: "#C9A84C" }}>{n}</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENTO SERVICES ── */}
      <section id="services" style={{ background: "#F9F8F5", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#C9A84C" }}>服务</p>
              <h2 className="font-black" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#0A0A0F", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                全方位推广服务
              </h2>
            </div>
            <p className="text-base max-w-xs leading-relaxed" style={{ color: "#6B7280" }}>
              从品牌建立到精准获客，我们提供中国企业进入俄罗斯市场所需的一切
            </p>
          </div>

          {/* bento grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* big card */}
            <div className="reveal md:col-span-2 rounded-3xl overflow-hidden relative group cursor-pointer"
              style={{ background: "#0A0A0F", minHeight: 280 }}>
              <img src={IMG_SERVICES} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-500" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-xl grid place-items-center"
                  style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <Icon name="Globe" size={18} style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#C9A84C" }}>网站开发</div>
                  <h3 className="text-2xl font-black text-white leading-tight">专业网站<br />为俄罗斯市场</h3>
                  <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>SEO优化 · 移动端适配 · 现代化设计</p>
                </div>
              </div>
            </div>

            {/* small cards */}
            {services.slice(1).map((s, i) => (
              <div key={i} className="reveal rounded-3xl p-7 cursor-pointer group transition-all duration-300"
                style={{
                  background: i % 2 === 0 ? "white" : "#0A0A0F",
                  border: i % 2 === 0 ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: i % 2 === 0 ? "0 4px 24px rgba(0,0,0,0.04)" : "none",
                }}>
                <div className="w-10 h-10 rounded-xl grid place-items-center mb-6"
                  style={{ background: i % 2 === 0 ? "rgba(201,168,76,0.1)" : "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <Icon name={s.icon as "Globe"} size={18} style={{ color: "#C9A84C" }} />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#C9A84C" }}>{s.tag}</div>
                <h3 className="font-black text-base mb-2" style={{ color: i % 2 === 0 ? "#0A0A0F" : "#fff" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: i % 2 === 0 ? "#9CA3AF" : "rgba(255,255,255,0.35)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" style={{ background: "#0A0A0F", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#C9A84C" }}>案例</p>
              <h2 className="font-black text-white" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                热门推广项目
              </h2>
            </div>
            {/* tabs */}
            <div className="flex flex-wrap gap-2">
              {cats.map((c, i) => (
                <button key={i} onClick={() => setTab(i)}
                  className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                  style={tab === i
                    ? { background: "linear-gradient(135deg,#E8D5A3,#C9A84C)", color: "#000" }
                    : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }
                  }>{c}</button>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
            {projects.map((p, i) => (
              <div key={i}
                className="flex items-center justify-between px-7 py-5 group cursor-pointer transition-all duration-200"
                style={{
                  borderBottom: i < projects.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  background: "transparent",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,168,76,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-2xl grid place-items-center text-xs font-black flex-shrink-0 text-black"
                    style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)" }}>{p.cat[0]}</div>
                  <div>
                    <div className="font-bold text-sm text-white">{p.title}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{p.sub}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>{p.delta}</span>
                  <span className="font-black text-sm" style={{ color: "#C9A84C" }}>{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ background: "#F9F8F5", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#C9A84C" }}>团队</p>
              <h2 className="font-black" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#0A0A0F", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                了解我们的团队
              </h2>
            </div>
            <img src={IMG_TEAM} alt="team" className="w-36 h-36 rounded-3xl object-cover"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }} />
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {team.map((t, i) => (
              <div key={i} className="reveal rounded-3xl p-7 transition-all duration-300 cursor-pointer group"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0A0A0F"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(0,0,0,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.04)"; }}>
                <div className="text-4xl mb-5">{t.emoji}</div>
                <div className="font-black text-sm mb-1 transition-colors" style={{ color: "#0A0A0F" }}
                  ref={el => {
                    if (el) {
                      el.closest(".group")?.addEventListener("mouseenter", () => el.style.color = "#fff");
                      el.closest(".group")?.addEventListener("mouseleave", () => el.style.color = "#0A0A0F");
                    }
                  }}>{t.name}</div>
                <div className="text-xs font-bold mb-1" style={{ color: "#C9A84C" }}>{t.role}</div>
                <div className="text-xs" style={{ color: "#9CA3AF" }}>{t.yrs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" style={{ background: "#0A0A0F", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#C9A84C" }}>博客</p>
              <h2 className="font-black text-white" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                行业洞察
              </h2>
            </div>
            <img src={IMG_BLOG} alt="blog" className="w-32 h-32 rounded-3xl object-cover opacity-80"
              style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.4)" }} />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {blog.map((b, i) => (
              <div key={i} className="reveal rounded-3xl p-8 cursor-pointer group transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>{b.tag}</span>
                <h3 className="font-black text-base text-white mt-5 mb-5 leading-snug">{b.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{b.date}</span>
                  <span className="text-xs font-bold" style={{ color: "#C9A84C" }}>阅读 →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ background: "#F9F8F5", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="reveal text-center mb-14">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#C9A84C" }}>客户评价</p>
            <h2 className="font-black" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#0A0A0F", letterSpacing: "-0.02em" }}>
              他们信任我们
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="reveal rounded-3xl p-8 transition-all duration-300"
                style={{ background: i === 1 ? "#0A0A0F" : "white", border: i === 1 ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_,j) => <span key={j} style={{ color: "#C9A84C" }}>★</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-7 italic" style={{ color: i === 1 ? "rgba(255,255,255,0.5)" : "#6B7280" }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl grid place-items-center text-xs font-black"
                    style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)", color: "#000" }}>{t.name[0]}</div>
                  <div>
                    <div className="font-black text-sm" style={{ color: i === 1 ? "#fff" : "#0A0A0F" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: i === 1 ? "rgba(255,255,255,0.3)" : "#9CA3AF" }}>{t.co}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WECHAT STRIP ── */}
      <section style={{ background: "#0A0A0F", padding: "60px 0" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <div className="reveal rounded-3xl overflow-hidden flex flex-col md:flex-row"
            style={{ background: "linear-gradient(135deg,#064E3B,#065F46)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex-1 p-10 md:p-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8"
                style={{ background: "rgba(255,255,255,0.08)", color: "#6EE7B7" }}>
                <span>💬</span> WeChat 微信 — 直接联系
              </div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                有任何问题？<br />请直接联系我！
              </h2>
              <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
                我是 <strong className="text-white">VITǍLY 维塔利</strong>，俄罗斯专家。<br />
                关于网站、广告、社媒的所有问题——全程中文沟通，亲自解答。
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl w-fit"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-3xl">🇷🇺</span>
                <div>
                  <div className="font-black text-white text-base">VITǍLY 维塔利</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Россия · 俄罗斯专家</div>
                </div>
              </div>
            </div>
            <div className="p-10 md:p-14 flex flex-col items-center gap-4 justify-center">
              <div className="bg-white p-4 rounded-3xl" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                <img src={IMG_WECHAT} alt="WeChat QR VITALY" className="w-52 h-52 object-contain" />
              </div>
              <p className="text-sm text-center font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                📱 扫描二维码添加微信
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#F9F8F5", padding: "100px 0" }}>
        <div className="max-w-2xl mx-auto px-5 md:px-10">
          <div className="reveal text-center mb-12">
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#C9A84C" }}>联系我们</p>
            <h2 className="font-black" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", color: "#0A0A0F", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              准备好了吗？
            </h2>
            <p className="mt-4 text-base" style={{ color: "#9CA3AF" }}>
              免费获取您专属的俄罗斯市场推广方案
            </p>
          </div>
          <div className="reveal rounded-3xl p-8 md:p-12"
            style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              {["您的姓名","微信 / WhatsApp / 电话"].map(ph => (
                <input key={ph} type="text" placeholder={ph}
                  className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all font-medium"
                  style={{ background: "#F9F8F5", border: "1.5px solid transparent" }}
                  onFocus={e => (e.target.style.borderColor = "#C9A84C")}
                  onBlur={e => (e.target.style.borderColor = "transparent")} />
              ))}
            </div>
            <textarea placeholder="描述您的业务和推广目标..." rows={3}
              className="w-full px-5 py-4 rounded-2xl text-sm outline-none mb-5 resize-none transition-all font-medium"
              style={{ background: "#F9F8F5", border: "1.5px solid transparent" }}
              onFocus={e => (e.target.style.borderColor = "#C9A84C")}
              onBlur={e => (e.target.style.borderColor = "transparent")} />
            <button
              className="w-full py-4 rounded-2xl font-black text-sm text-black transition-all hover:scale-[1.02] hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)", boxShadow: "0 8px 32px rgba(201,168,76,0.3)" }}>
              发送申请 — 免费咨询
            </button>
            <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
              {[["MessageCircle","微信: VITALY维塔利"],["Mail","info@russia-china.ru"],["Phone","+7 (495) 000-00-00"]].map(([ic,txt]) => (
                <div key={txt} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#9CA3AF" }}>
                  <Icon name={ic as "Mail"} size={15} style={{ color: "#C9A84C" }} />
                  {txt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0A0A0F", padding: "32px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg grid place-items-center text-xs font-black"
              style={{ background: "linear-gradient(135deg,#E8D5A3,#C9A84C)" }}>俄</div>
            <span className="font-black text-white text-sm">俄中推广机构</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>© 2026 俄中推广机构. 保留所有权利</p>
          <div className="flex gap-2">
            {["Globe","MessageCircle","Phone"].map(ic => (
              <div key={ic} className="w-9 h-9 rounded-xl grid place-items-center cursor-pointer transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Icon name={ic as "Globe"} size={14} style={{ color: "#C9A84C" }} />
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* floating wechat */}
      <WeChatFloat />

      <style>{`
        @keyframes scale-in { from{opacity:0;transform:scale(0.9) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        .animate-scale { animation: scale-in 0.2s cubic-bezier(.22,1,.36,1) forwards; }
        .reveal { opacity:0; transform:translateY(32px); transition:opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1); }
        .reveal.in { opacity:1; transform:translateY(0); }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
