import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

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

/* ── translations ── */
const T = {
  zh: {
    nav: ["服务", "案例", "团队", "博客", "评价", "联系"],
    navCta: "免费咨询",
    heroBadge: "专业俄罗斯市场推广机构",
    heroH1a: "在俄罗斯", heroH1b: "推广您的", heroH1c: "中国业务",
    heroDesc: "网站开发、Яндекс广告、社交媒体运营 — 一站式解决方案，专为中国企业量身定制",
    heroCta1: "免费获取方案 →", heroCta2: "查看案例",
    statsDesc: ["帮助中国企业进入俄罗斯市场", "成功完成的推广项目", "客户满意度", "专家响应时间"],
    portLabel: "成功案例", portTitle: "热门推广项目", portCta: "查看全部",
    cats: ["全部", "网站", "社媒", "广告", "内容", "分析"],
    solLabel: "推广方案", solTitle: "不知从何开始？", solDesc: "根据您的目标选择最适合的方案",
    solItems: ["大型企业", "高回报项目", "初创企业", "社媒运营", "热门推荐"],
    solDescs: ["完整的市场进入方案，网站、广告、PR全套，专属顾问全程陪跑","ROI最高的推广组合，精准定位高价值客户群体","低成本高效入市方案，适合刚进入俄罗斯市场的中国企业","专业VK和Telegram账号运营，快速积累俄罗斯本地粉丝","当前最受欢迎、性价比最高的推广服务套餐"],
    svcLabel: "我们的服务", svcTitle: "全方位推广服务", svcDesc: "从网站建设到广告投放，一站式搞定",
    svcItems: ["网站开发","Яндекс广告","社交媒体运营","市场推广","内容营销","数据分析"],
    svcDescs: ["为俄罗斯市场打造专业网站，SEO优化、移动端适配。","俄罗斯最大搜索引擎精准广告，快速获客。","管理VK、Telegram等主流俄罗斯社交平台。","全方位俄罗斯市场推广策略，帮助品牌落地。","中俄双语内容营销，提升品牌信任度。","全面分析推广效果，持续优化ROI。"],
    teamLabel: "专业团队", teamTitle: "了解我们的团队", teamDesc: "深耕俄中商业领域，精通两国文化与市场",
    blogLabel: "知识博客", blogTitle: "行业洞察", blogDesc: "中俄商业推广实用指南", blogMore: "阅读更多",
    revLabel: "客户评价", revTitle: "他们信任我们",
    revTexts: ["合作后网站流量增加5倍，他们深刻理解俄罗斯市场，专业水平令人印象深刻。","Яндекс广告效果超出预期，两个月内收回了投资成本。强烈推荐！","VK粉丝三个月内从零增长到一万，团队非常专业高效。"],
    ctaLabel: "联系我们", ctaTitle: "准备好了吗？", ctaDesc: "免费获取您专属的俄罗斯市场推广方案，专家24小时内联系您",
    f1: "您的姓名", f2: "微信 / WhatsApp / 电话", f3: "描述您的业务和推广目标...", fBtn: "发送申请 — 免费咨询",
    contacts: ["微信: VITALY维塔利", "info@russia-china.ru", "+7 (495) 000-00-00"],
    footer: "© 2024 Sino Marketing. 保留所有权利",
  },
  ru: {
    nav: ["Услуги", "Кейсы", "Команда", "Блог", "Отзывы", "Контакт"],
    navCta: "Бесплатно",
    heroBadge: "Профессиональное агентство продвижения в России",
    heroH1a: "Продвигайте", heroH1b: "ваш бизнес", heroH1c: "в России",
    heroDesc: "Создание сайтов, реклама в Яндексе, ведение соцсетей — всё под ключ для китайских компаний",
    heroCta1: "Получить план →", heroCta2: "Смотреть кейсы",
    statsDesc: ["Помогаем китайским бизнесам выйти на рынок России", "Успешно завершённых проектов", "Удовлетворённость клиентов", "Время ответа эксперта"],
    portLabel: "Успешные кейсы", portTitle: "Популярные проекты", portCta: "Все кейсы",
    cats: ["Все", "Сайты", "Соцсети", "Реклама", "Контент", "Аналитика"],
    solLabel: "Решения", solTitle: "Не знаете с чего начать?", solDesc: "Выберите подходящее решение под ваши цели",
    solItems: ["Крупный бизнес", "Высокий ROI", "Стартап", "Соцсети", "Горячее предложение"],
    solDescs: ["Полный пакет выхода на рынок: сайт, реклама, PR и персональный консультант","Комбинация с наибольшей отдачей, точное попадание в целевую аудиторию","Эффективный выход при минимальных затратах для новичков на российском рынке","Профессиональное ведение VK и Telegram, быстрый набор местной аудитории","Самые популярные и выгодные пакеты прямо сейчас"],
    svcLabel: "Наши услуги", svcTitle: "Полный спектр услуг", svcDesc: "От создания сайта до запуска рекламы — всё под ключ",
    svcItems: ["Создание сайтов","Яндекс реклама","Ведение соцсетей","Маркетинг","Контент","Аналитика"],
    svcDescs: ["Профессиональные сайты для российского рынка, SEO и мобильная адаптация.","Точная реклама в крупнейшей поисковой системе России, быстрое привлечение клиентов.","Ведение VK, Telegram и других популярных российских платформ.","Комплексная стратегия продвижения на российском рынке.","Двуязычный контент-маркетинг для повышения доверия к бренду.","Полный анализ эффективности и оптимизация ROI."],
    teamLabel: "Команда", teamTitle: "Наша команда", teamDesc: "Эксперты в российско-китайском бизнесе, знаем культуру обеих стран",
    blogLabel: "Блог", blogTitle: "Отраслевые insights", blogDesc: "Практические советы по продвижению в России", blogMore: "Читать далее",
    revLabel: "Отзывы", revTitle: "Нам доверяют",
    revTexts: ["После сотрудничества трафик сайта вырос в 5 раз. Команда отлично понимает российский рынок.","Яндекс реклама превзошла ожидания — окупили вложения за два месяца. Рекомендую!","Подписчики VK выросли с нуля до десяти тысяч за три месяца. Очень профессионально."],
    ctaLabel: "Контакты", ctaTitle: "Готовы начать?", ctaDesc: "Получите бесплатный план продвижения. Эксперт свяжется с вами в течение 24 часов",
    f1: "Ваше имя", f2: "WeChat / WhatsApp / Телефон", f3: "Опишите ваш бизнес и цели...", fBtn: "Отправить заявку — бесплатно",
    contacts: ["WeChat: VITALY维塔利", "info@russia-china.ru", "+7 (495) 000-00-00"],
    footer: "© 2024 Sino Marketing. Все права защищены",
  },
};

const stats = [
  { num: "7年", img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/f8a4f64e-2337-4fb6-b4e7-0f9e110af17e.jpg", color: "#6366F1" },
  { num: "150+", img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/5743a2e7-6e1f-47a9-9aa6-345bb17d6f51.jpg", color: "#8B5CF6" },
  { num: "98%", img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/e57d8e1c-96fa-48b2-8021-fc0ddbb297e4.jpg", color: "#EC4899" },
  { num: "24h", img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/16d0b26b-9c3e-4f62-a2fb-76171357441c.jpg", color: "#F59E0B" },
];

const services = [
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/6b6bf41f-cee4-4756-b942-104fa0ed8c9b.jpg", title: "网站开发", desc: "为俄罗斯市场打造专业网站，SEO优化、移动端适配。", color: "#6366F1" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/36ea098d-80e5-4d6a-af96-e6af936524bb.jpg", title: "Яндекс广告", desc: "俄罗斯最大搜索引擎精准广告，快速获客。", color: "#EC4899" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/de31d94c-ce41-4ac4-b536-21502674faf6.jpg", title: "社交媒体运营", desc: "管理VK、Telegram等主流俄罗斯社交平台。", color: "#0EA5E9" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/534cc755-5413-480e-b293-fed1ea155e61.jpg", title: "市场推广", desc: "全方位俄罗斯市场推广策略，帮助品牌落地。", color: "#10B981" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/25805284-f68d-4d62-ac00-1d640964640d.jpg", title: "内容营销", desc: "中俄双语内容营销，提升品牌信任度。", color: "#F59E0B" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/adf47a2b-9914-4d0b-8e31-96febb5fe065.jpg", title: "数据分析", desc: "全面分析推广效果，持续优化ROI。", color: "#8B5CF6" },
];


const projects = [
  { cat: "电商", title: "华俄贸易中心 | 俄罗斯全渠道推广", sub: "chinatrade.ru | 评分: 5  项目数: 12  月收入: 429 815 руб.", price: "1 462 964 ₽", color: "#6366F1" },
  { cat: "餐饮", title: "北京烤鸭坊 | 莫斯科品牌推广", sub: "vk.com/pekingduck | 评分: 5  粉丝: 12 000  月增长: 3 000", price: "259 259 ₽", color: "#EC4899" },
  { cat: "建材", title: "长城建材集团 | Яндекс广告投放", sub: "yandex.ru/adv | 评分: 5  询盘: 280/月  转化: 18%", price: "890 000 ₽", color: "#8B5CF6" },
  { cat: "美容", title: "上海美妆品牌 | 全渠道数字营销", sub: "beautysh.ru | 评分: 5  月访客: 45 000  转化: 4.2%", price: "540 000 ₽", color: "#F59E0B" },
  { cat: "科技", title: "深圳电子制造商 | B2B推广", sub: "szelec.ru | 评分: 5  B2B询盘: 150/月  成交: 28%", price: "1 200 000 ₽", color: "#10B981" },
];

const solutions = [
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/49215ff9-b393-42f4-af78-19f5e2e29be4.jpg", title: "大型企业", desc: "完整的市场进入方案，网站、广告、PR全套，专属顾问全程陪跑", color: "#6366F1" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/410385e4-51c9-41c0-a602-5996e6dade33.jpg", title: "高回报项目", desc: "ROI最高的推广组合，精准定位高价值客户群体", color: "#EC4899" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/f4b4d2ba-5b56-49fc-a1ea-a5ee6994da0f.jpg", title: "初创企业", desc: "低成本高效入市方案，适合刚进入俄罗斯市场的中国企业", color: "#8B5CF6" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/4a2559f8-d506-4235-9bb6-6e8613c4957c.jpg", title: "社媒运营", desc: "专业VK和Telegram账号运营，快速积累俄罗斯本地粉丝", color: "#0EA5E9" },
  { img: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/03059348-c236-495e-b2cc-1adf14e012ca.jpg", title: "热门推荐", desc: "当前最受欢迎、性价比最高的推广服务套餐", color: "#F59E0B" },
];

const testimonials = [
  { name: "王建国", company: "华俄进出口有限公司", text: "合作后网站流量增加5倍，他们深刻理解俄罗斯市场，专业水平令人印象深刻。", rating: 5 },
  { name: "李晓梅", company: "北京健康科技", text: "Яндекс广告效果超出预期，两个月内收回了投资成本。强烈推荐！", rating: 5 },
  { name: "张伟", company: "深圳电子制造商", text: "VK粉丝三个月内从零增长到一万，团队非常专业高效。", rating: 5 },
];

const team = [
  { name: "亚历山大", role: "首席执行官", exp: "15年俄中商业", emoji: "👨‍💼" },
  { name: "陈美华", role: "中国市场总监", exp: "双语营销专家", emoji: "👩‍💼" },
  { name: "伊万", role: "数字营销专家", exp: "Яндекс认证", emoji: "👨‍💻" },
  { name: "刘芳", role: "开发负责人", exp: "100+项目经验", emoji: "👩‍💻" },
];

const blogPosts = [
  { tag: "市场洞察", title: "2024年中国企业进入俄罗斯市场的5大关键策略", date: "2024年3月" },
  { tag: "广告技巧", title: "Яндекс广告入门：为什么它比Google更适合俄罗斯", date: "2024年2月" },
  { tag: "社媒运营", title: "VK与Telegram：如何选择适合业务的俄罗斯社交平台", date: "2024年1月" },
];

/* palette */
const INK = "#111318";
const SUB = "#6B7280";
const LINE = "#E5E7EB";
const ACCENT = "#FF5A1F";
const PANEL = "#F6F7F8";
const ICONS = ["Globe", "Megaphone", "Users", "TrendingUp", "FileText", "BarChart3"];

export default function Index() {
  useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"zh" | "ru">("zh");
  const t = T[lang];

  const navLinks = t.nav.map((label, i) => ({
    href: ["#services","#portfolio","#team","#blog","#reviews","#contact"][i],
    label,
  }));

  return (
    <div className="min-h-screen font-chinese" style={{ background: PANEL, color: INK }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50" style={{ background: "rgba(246,247,248,0.8)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img
              src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/360c52f3-d923-4d28-abd8-b5f706cdd927.jpg"
              alt="Sino Marketing"
              style={{ width: 30, height: 30, objectFit: "contain", mixBlendMode: "multiply" }}
            />
            <span className="font-bold text-[15px]" style={{ color: INK }}>Sino Marketing</span>
          </div>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm transition-colors hover:opacity-70"
                style={{ color: SUB }}>
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "zh" ? "ru" : "zh")}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all"
              style={{ background: "#fff", color: INK, border: `1px solid ${LINE}` }}>
              <span>{lang === "zh" ? "🇷🇺" : "🇨🇳"}</span>
              <span>{lang === "zh" ? "RU" : "中文"}</span>
            </button>
            <a href="#contact"
              className="hidden md:block px-4 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: INK }}>
              {t.navCta}
            </a>
            <button className="md:hidden w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}
              onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={18} style={{ color: INK }} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 pt-20 px-6 flex flex-col gap-1" style={{ background: PANEL }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}
              className="text-lg font-semibold py-4"
              style={{ color: INK, borderBottom: `1px solid ${LINE}` }}
              onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="mt-4 py-3.5 rounded-full text-center font-semibold text-white"
            style={{ background: INK }} onClick={() => setMenuOpen(false)}>
            {t.navCta}
          </a>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 section-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7 text-xs font-semibold"
              style={{ background: "#fff", border: `1px solid ${LINE}`, color: SUB }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              {t.heroBadge}
            </div>
            <h1 className="font-black leading-[1.05] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.4rem,6vw,4.2rem)", color: INK }}>
              {t.heroH1a} {t.heroH1b}{" "}
              <span style={{ color: ACCENT }}>{t.heroH1c}</span>
            </h1>
            <p className="text-base md:text-lg mb-9 leading-relaxed max-w-lg" style={{ color: SUB }}>
              {t.heroDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact"
                className="px-6 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all hover:opacity-90"
                style={{ background: INK }}>
                {t.heroCta1}
              </a>
              <a href="#portfolio"
                className="px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:bg-white"
                style={{ background: "#fff", border: `1px solid ${LINE}`, color: INK }}>
                {t.heroCta2}
              </a>
            </div>
          </div>
          <div className="flex-1 w-full section-reveal">
            <div className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${LINE}`, background: "#fff", boxShadow: "0 20px 50px rgba(17,19,24,0.06)" }}>
              <img src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/17eced6a-1ff7-4f5e-b174-66c123a02581.jpg"
                alt="hero" className="w-full" style={{ objectFit: "cover", mixBlendMode: "multiply" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <div key={i} className="section-reveal p-6 rounded-2xl text-center"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="text-3xl md:text-4xl font-black mb-1.5" style={{ color: INK }}>{s.num}</div>
              <p className="text-xs leading-snug" style={{ color: SUB }}>{t.statsDesc[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="section-reveal mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t.svcLabel}</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t.svcTitle}</h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: SUB }}>{t.svcDesc}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((_s, i) => (
            <div key={i} className="section-reveal p-6 rounded-2xl transition-all"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>
                <Icon name={ICONS[i] as "Globe"} size={20} style={{ color: ACCENT }} />
              </div>
              <h3 className="font-bold text-base mb-1.5" style={{ color: INK }}>{t.svcItems[i]}</h3>
              <p className="text-sm leading-relaxed" style={{ color: SUB }}>{t.svcDescs[i]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="section-reveal flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t.portLabel}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t.portTitle}</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold flex items-center gap-1.5" style={{ color: INK }}>
            {t.portCta} <Icon name="ArrowRight" size={15} />
          </a>
        </div>
        <div className="section-reveal flex flex-wrap gap-2 mb-6">
          {t.cats.map((c, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={activeTab === i
                ? { background: INK, color: "#fff" }
                : { background: "#fff", color: SUB, border: `1px solid ${LINE}` }
              }>{c}</button>
          ))}
        </div>
        <div className="section-reveal rounded-2xl overflow-hidden" style={{ background: "#fff", border: `1px solid ${LINE}` }}>
          {projects.map((p, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-4 cursor-pointer transition-colors hover:bg-gray-50"
              style={{ borderBottom: i < projects.length - 1 ? `1px solid ${LINE}` : "none" }}>
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: PANEL, color: ACCENT, border: `1px solid ${LINE}` }}>
                  {p.cat[0]}
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-sm mb-0.5 truncate" style={{ color: INK }}>{p.title}</div>
                  <div className="text-xs truncate" style={{ color: SUB }}>{p.sub}</div>
                </div>
              </div>
              <div className="text-sm font-bold ml-4 flex-shrink-0" style={{ color: INK }}>{p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="section-reveal mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t.solLabel}</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t.solTitle}</h2>
          <p className="mt-3 text-base" style={{ color: SUB }}>{t.solDesc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {solutions.map((_s, i) => (
            <div key={i} className="section-reveal p-6 rounded-2xl cursor-pointer flex items-start justify-between gap-4 transition-all"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div>
                <h3 className="font-bold text-base mb-1.5" style={{ color: INK }}>{t.solItems[i]}</h3>
                <p className="text-sm leading-relaxed" style={{ color: SUB }}>{t.solDescs[i]}</p>
              </div>
              <Icon name="ArrowUpRight" size={18} style={{ color: ACCENT, flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="section-reveal mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t.teamLabel}</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t.teamTitle}</h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: SUB }}>{t.teamDesc}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <div key={i} className="section-reveal p-6 rounded-2xl text-center"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
                style={{ background: PANEL, border: `1px solid ${LINE}` }}>{member.emoji}</div>
              <div className="font-bold text-sm mb-1" style={{ color: INK }}>{member.name}</div>
              <div className="text-xs mb-1.5" style={{ color: ACCENT }}>{member.role}</div>
              <div className="text-xs" style={{ color: SUB }}>{member.exp}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="section-reveal mb-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t.blogLabel}</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t.blogTitle}</h2>
          <p className="mt-3 text-base" style={{ color: SUB }}>{t.blogDesc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {blogPosts.map((b, i) => (
            <div key={i} className="section-reveal p-6 rounded-2xl cursor-pointer transition-all"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: PANEL, color: SUB, border: `1px solid ${LINE}` }}>{b.tag}</span>
              <h3 className="font-bold text-base mt-4 mb-5 leading-snug" style={{ color: INK }}>{b.title}</h3>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${LINE}` }}>
                <span className="text-xs" style={{ color: SUB }}>{b.date}</span>
                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: ACCENT }}>
                  {t.blogMore} <Icon name="ArrowRight" size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="section-reveal mb-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: ACCENT }}>{t.revLabel}</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: INK }}>{t.revTitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((rev, i) => (
            <div key={i} className="section-reveal p-6 rounded-2xl flex flex-col justify-between"
              style={{ background: "#fff", border: `1px solid ${LINE}` }}>
              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(rev.rating)].map((_, j) => (
                    <span key={j} style={{ color: ACCENT, fontSize: 15 }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: INK }}>"{t.revTexts[i]}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${LINE}` }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: PANEL, color: ACCENT, border: `1px solid ${LINE}` }}>
                  {rev.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm" style={{ color: INK }}>{rev.name}</div>
                  <div className="text-xs" style={{ color: SUB }}>{rev.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="section-reveal rounded-3xl p-8 md:p-14 text-center" style={{ background: INK }}>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>{t.ctaLabel}</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-white">{t.ctaTitle}</h2>
          <p className="text-base mb-9 max-w-lg mx-auto" style={{ color: "#9CA3AF" }}>{t.ctaDesc}</p>
          <div className="max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              {[t.f1, t.f2].map((ph) => (
                <input key={ph} type="text" placeholder={ph}
                  className="w-full px-5 py-3.5 rounded-xl text-sm outline-none text-white placeholder:text-gray-500"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
              ))}
            </div>
            <textarea placeholder={t.f3} rows={3}
              className="w-full px-5 py-3.5 rounded-xl text-sm outline-none mb-4 resize-none text-white placeholder:text-gray-500"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }} />
            <button className="w-full md:w-auto px-10 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all hover:opacity-90"
              style={{ background: ACCENT }}>
              {t.fBtn}
            </button>
            <div className="flex flex-wrap justify-center gap-6 mt-9 pt-9" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {[
                { icon: "MessageCircle", text: t.contacts[0] },
                { icon: "Mail", text: t.contacts[1] },
                { icon: "Phone", text: t.contacts[2] },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2 text-sm" style={{ color: "#9CA3AF" }}>
                  <Icon name={c.icon as "Mail"} size={16} style={{ color: ACCENT }} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4 md:px-8" style={{ borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/360c52f3-d923-4d28-abd8-b5f706cdd927.jpg"
              alt="Sino Marketing"
              style={{ width: 28, height: 28, objectFit: "contain", mixBlendMode: "multiply" }}
            />
            <span className="font-bold text-sm" style={{ color: INK }}>Sino Marketing</span>
          </div>
          <p className="text-sm" style={{ color: SUB }}>{t.footer}</p>
          <div className="flex gap-2">
            {["Globe", "MessageCircle", "Phone"].map((ic) => (
              <div key={ic} className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-50"
                style={{ background: "#fff", border: `1px solid ${LINE}` }}>
                <Icon name={ic as "Globe"} size={15} style={{ color: INK }} />
              </div>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes wc-in {
          from { opacity:0; transform: translateY(16px) scale(0.96); }
          to   { opacity:1; transform: translateY(0)   scale(1); }
        }
        @keyframes wc-out {
          from { opacity:1; transform: translateY(0)   scale(1); }
          to   { opacity:0; transform: translateY(16px) scale(0.96); }
        }
        .wc-popup-in  { animation: wc-in  0.25s cubic-bezier(.22,1,.36,1) forwards; }
        .wc-popup-out { animation: wc-out 0.2s ease forwards; }

        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.5; transform:scale(1.4); }
        }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
      `}</style>

      {/* ── WECHAT FLOAT ── */}
      <WeChatWidget />
    </div>
  );
}

function WeChatWidget() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  function close() {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 200);
  }

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>

      {/* popup */}
      {open && (
        <div className={closing ? "wc-popup-out" : "wc-popup-in"}
          style={{
            background: "white",
            borderRadius: 24,
            boxShadow: "0 24px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05)",
            overflow: "hidden",
            width: 300,
          }}>
          {/* header */}
          <div style={{ background: "linear-gradient(135deg,#07C160,#059669)", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.2)", display: "grid", placeItems: "center", fontSize: 18 }}>💬</div>
              <div>
                <div style={{ fontWeight: 900, color: "#fff", fontSize: 14 }}>WeChat 微信</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>VITǍLY 维塔利 · 俄罗斯专家</div>
              </div>
            </div>
            <button onClick={close}
              style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", color: "#fff", display: "grid", placeItems: "center" }}>
              ✕
            </button>
          </div>

          {/* body */}
          <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            <p style={{ fontSize: 13, color: "#6B7280", textAlign: "center", lineHeight: 1.6, margin: 0 }}>
              网站开发、广告投放、社交媒体——<br />
              所有问题欢迎扫码直接联系我 👇
            </p>
            <div style={{ background: "#F9FAFB", borderRadius: 16, padding: 12, border: "1px solid #F3F4F6" }}>
              <img src="https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/bucket/5fa91614-330c-4deb-9927-17ed121f6ba1.jpg"
                alt="WeChat QR" style={{ width: 200, height: 200, objectFit: "contain", display: "block", borderRadius: 8 }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#F0FDF4", borderRadius: 12, padding: "10px 16px", width: "100%" }}>
              <span style={{ fontSize: 20 }}>🇷🇺</span>
              <div>
                <div style={{ fontWeight: 900, fontSize: 13, color: "#064E3B" }}>VITǍLY 维塔利</div>
                <div style={{ fontSize: 11, color: "#6B7280" }}>扫码添加微信好友</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* trigger button */}
      <button onClick={() => open ? close() : setOpen(true)}
        style={{
          width: 56, height: 56, borderRadius: 18,
          background: "linear-gradient(135deg,#07C160,#059669)",
          boxShadow: "0 8px 32px rgba(7,193,96,0.45)",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24, transition: "transform 0.2s ease",
          position: "relative",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}>
        {open ? "✕" : "💬"}
        {/* red dot */}
        {!open && (
          <div className="pulse-dot" style={{
            position: "absolute", top: 8, right: 8,
            width: 10, height: 10, borderRadius: "50%",
            background: "#EF4444", border: "2px solid white",
          }} />
        )}
      </button>
    </div>
  );
}