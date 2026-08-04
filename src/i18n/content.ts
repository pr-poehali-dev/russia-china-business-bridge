import { Lang } from "./LanguageContext";
import {
  services as servicesRu,
  included as includedRu,
  promotion as promotionRu,
  promotionPage as promotionPageRu,
  whyUs as whyUsRu,
  steps as stepsRu,
  plans as plansRu,
  advantages as advantagesRu,
  navLinks as navLinksRu,
  Service,
} from "@/components/landing/theme";

/* ── Китайские данные (параллельно русским из theme.ts) ── */

const navLinksZh = [
  { href: "#services", label: "服务" },
  { href: "/promotion", label: "推广" },
  { href: "#process", label: "流程" },
  { href: "#pricing", label: "价格" },
  { href: "/blog", label: "博客" },
  { href: "#contact", label: "联系我们" },
];

const servicesZh: Service[] = [
  {
    slug: "landing",
    icon: "MousePointerClick",
    title: "落地页（Landing Page）",
    desc: "用于推广商品、服务、活动和促销的单页销售网站。快速启动广告并获取客户咨询的理想方案。",
    intro: "引导访客完成单一目标动作——留言、来电或下单的单页销售网站。",
    whatIs: "落地页是一个专注于单一产品、服务或促销的单页网站。所有内容围绕统一的转化路径展开：标题、卖点、案例、评价和留言表单。这样的网站不会因多余栏目分散注意力，能最大程度促使访客留下联系方式。因此落地页在广告投放中转化率最高，非常适合快速启动。",
    forWhom: [
      "从零开始投放商品或服务广告",
      "推广促销、活动或线上讲座",
      "在大额投入前测试新领域或新产品",
      "通过搜索和定向广告收集咨询与来电",
      "需要一张网络名片的个人专家",
    ],
    features: [
      "定制化销售型设计",
      "针对转化精心打磨的结构与文案",
      "移动端适配",
      "留言表单及接入 WhatsApp / Telegram",
      "SEO 优化与高加载速度",
      "5 天内即可上线投放",
    ],
    price: "10 000 卢布/年",
    term: "5 天起",
    preview: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/14baf5be-d117-4e25-b720-53f0714eaeba.jpg",
  },
  {
    slug: "corporate",
    icon: "Building2",
    title: "企业官网",
    desc: "在互联网上专业地展示您的公司。介绍您的服务、优势、项目和联系方式。",
    intro: "专业展示公司及其服务与优势的多页网站。",
    whatIs: "企业官网是一个多页网站，用于建立客户对您公司的信任。网站详细呈现服务、优势、已完成项目、团队与联系方式。它是企业在互联网上的完整门面：帮助客户了解您的产品，也让您在竞争中脱颖而出并获得主动咨询。",
    forWhom: [
      "重视网络声誉的公司和组织",
      "决策周期较长的 B2B 企业",
      "拥有多个方向和服务的公司",
      "希望收集咨询并展示案例的企业",
    ],
    features: [
      "契合品牌的独特设计",
      "10 个及以上信息页面",
      "服务目录、项目、关于公司、联系方式",
      "可自主管理的后台面板",
      "SEO 优化与地图集成",
      "反馈表单与社交网络",
    ],
    price: "59 000 卢布起",
    term: "7 天起",
    preview: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/ca2a94d3-24e3-48e8-b077-a15f5dc5fb7d.jpg",
  },
  {
    slug: "shop",
    icon: "ShoppingCart",
    title: "网上商城",
    desc: "打造现代化网上商城，配备商品目录、购物车、在线支付、配送系统和便捷的管理后台。",
    intro: "配备目录、购物车、在线支付和便捷管理后台的完整商城。",
    whatIs: "网上商城是用于在线销售商品的网站。买家在目录中找到商品，加入购物车，付款并办理配送，无需电话或沟通。您通过便捷后台管理商品、价格和订单。这是把网站变成 24 小时稳定销售渠道最直接的方式。",
    forWhom: [
      "零售商与商品生产商",
      "希望无需人工全天候销售的企业",
      "拥有大量商品和仓储的公司",
      "从线下和电商平台转向自营商城的商家",
    ],
    features: [
      "带筛选和分类的商品目录",
      "购物车与下单流程",
      "在线支付与配送系统",
      "商品与订单管理后台",
      "自适应设计与加载速度",
      "SEO 推广与销售分析",
    ],
    price: "面议",
    term: "14 天起",
    preview: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/a6fb9845-3b69-4873-bf11-a521f4cac277.jpg",
  },
  {
    slug: "catalog",
    icon: "LayoutGrid",
    title: "目录型网站",
    desc: "适合拥有大量商品或服务、又无需在线支付的公司的优秀方案。",
    intro: "带便捷搜索的商品或服务目录——无购物车和在线支付。",
    whatIs: "目录型网站是一个展示全部商品或服务的橱窗，配有描述、图片和价格，但没有在线支付。客户浏览后留下咨询或直接与您联系。当销售通过业务员完成、而网站用于展示商品并简化选择时，这是极佳的方案。",
    forWhom: [
      "拥有大量商品但无需在线支付的公司",
      "批发供应商与生产商",
      "价格取决于订单参数的服务",
      "通过咨询和来电销售的企业",
    ],
    features: [
      "结构化的分类目录",
      "便捷的搜索与筛选",
      "带图片和描述的商品卡片",
      "每件商品的咨询表单",
      "用于填充内容的后台",
      "针对搜索词的 SEO 优化",
    ],
    price: "45 000 卢布起",
    term: "7 天起",
    preview: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/701b3f48-d471-4d42-bf9a-99f1c7d22b74.jpg",
  },
  {
    slug: "custom",
    icon: "Sparkles",
    title: "定制开发",
    desc: "根据客户的技术任务书打造任意复杂度的独特项目。",
    intro: "针对具体业务需求和技术任务书的任意复杂度独特项目。",
    whatIs: "定制开发是指按您的需求打造具有非标准逻辑的网站或网络服务。当现成方案不足时，我们从零设计架构、界面和功能：个人中心、计算器、与 CRM 及外部服务的集成、门户和复杂目录。这样的项目完全贴合您的业务流程。",
    forWhom: [
      "有非标准任务和流程的企业",
      "含个人中心和计算器的项目",
      "需要与 CRM 及各类服务集成的公司",
      "逻辑复杂的初创和网络服务",
    ],
    features: [
      "架构与界面设计",
      "个人中心与复杂业务逻辑",
      "与 CRM、支付及外部 API 集成",
      "无模板的定制设计",
      "可扩展且可靠的方案",
      "上线后的维护与迭代",
    ],
    price: "面议",
    term: "另行商定",
    preview: "https://cdn.poehali.dev/projects/1d240bc7-0274-4ca1-b0e1-9e83c9a33c7f/files/f579e663-94e7-4651-a550-b5fc88692547.jpg",
  },
];

const includedZh = [
  "定制现代化设计",
  "移动端适配",
  "高加载速度",
  "SEO 优化",
  "域名与主机接入",
  "SSL 证书（HTTPS）",
  "反馈表单",
  "接入 WhatsApp、Telegram 及社交网络",
  "谷歌或 Yandex 地图",
  "网站管理后台",
  "上线后的技术支持",
];

const promotionZh = [
  "在谷歌和 Yandex 的 SEO 推广",
  "谷歌 Ads 竞价广告",
  "社交网络推广",
  "广告投放设置",
  "竞争对手分析",
  "提升网站转化率",
  "网站分析与报告",
];

const promotionPageZh = {
  intro: "帮助企业从互联网获取客户：我们在各渠道设置并运营广告，您只需接收咨询并关注效果。",
  whatIs: "推广是一套通过搜索、广告和社交网络为您的网站吸引客户的体系。我们承担全部繁琐工作：为您的行业挑选渠道、启动投放、每天监控花费并调整设置以实现最大回报。您通过清晰的报告掌控结果，我们则致力于让每一卢布投入带来更多客户。",
  channels: [
    { icon: "Search", title: "竞价广告", desc: "在 Yandex 和谷歌投放广告——触达此刻正在搜索您商品或服务的客户。" },
    { icon: "TrendingUp", title: "搜索引擎优化（SEO）", desc: "让网站在 Yandex 和谷歌的目标关键词中排名靠前——无需为每次点击付费的稳定流量。" },
    { icon: "Users", title: "社交网络定向", desc: "在 VKontakte 等平台投放广告，按兴趣和地域精准触达您的受众。" },
    { icon: "ShoppingBag", title: "电商平台", desc: "在 Wildberries 和 Ozon 上进行商品卡片推广和站内广告，提升销量。" },
    { icon: "MapPin", title: "Avito 与分类信息", desc: "在客户积极寻找报价的平台上设置并优化广告。" },
    { icon: "BarChart3", title: "分析与报告", desc: "所有渠道统一分析：在一个地方查看花费、咨询和获客成本。" },
  ],
  audience: [
    {
      icon: "Briefcase",
      title: "面向企业主",
      items: [
        "专注经营业务——广告交给我们",
        "专属经理随时在线",
        "清晰的报告与完全的花费掌控",
      ],
    },
    {
      icon: "LineChart",
      title: "面向营销人员",
      items: [
        "所有广告账户集于一个界面",
        "所有渠道的统一分析",
        "自动化繁琐工作，节省时间",
      ],
    },
  ],
  benefits: [
    { icon: "Wallet", title: "比代理机构更划算", desc: "去除多余中间环节——同样的效果，广告成本明显更低。" },
    { icon: "Gift", title: "最高 19% 返现", desc: "部分广告花费返还至奖励账户——可再投入推广。" },
    { icon: "Zap", title: "快速启动", desc: "针对您行业预设好的现成投放方案——短时间内即可上线。" },
    { icon: "Target", title: "按效果付费", desc: "透明的付费模式：按点击、展示或实际完成的工作付费。" },
  ],
  cases: [
    { niche: "服装网店", traffic: "流量 +112%", top: "+38 个关键词进入前十", term: "30 天内" },
    { niche: "宠物诊所", traffic: "流量 +130%", top: "+76 个关键词进入前十", term: "30 天内" },
    { niche: "Wildberries 商品", traffic: "销量 ×6", top: "曝光前十", term: "2 个月内" },
    { niche: "舞蹈工作室", traffic: "曝光 +82%", top: "23 个关键词进入前十", term: "30 天内" },
    { niche: "室内门商店", traffic: "点击 ×11", top: "点击单价 −70%", term: "竞价广告" },
    { niche: "轮胎服务", traffic: "流量 +86%", top: "+25 个关键词进入前十", term: "30 天内" },
  ],
  preview: promotionPageRu.preview,
};

const whyUsZh = [
  "5 年以上网站开发经验",
  "严格按期交付项目",
  "为每位客户提供个性化服务",
  "现代化自适应设计",
  "无隐藏费用的诚信价格",
  "上线后的全面支持",
];

const stepsZh = [
  { num: "1", title: "免费咨询", desc: "了解您的项目、需求和期望。", img: stepsRu[0].img },
  { num: "2", title: "项目筹备", desc: "搭建网站结构并确认设计。", img: stepsRu[1].img },
  { num: "3", title: "开发", desc: "进行页面搭建、编程并填充网站内容。", img: stepsRu[2].img },
  { num: "4", title: "测试", desc: "在各类设备上检查网站运行并修复问题。", img: stepsRu[3].img },
  { num: "5", title: "上线", desc: "接入域名、部署到主机并向客户交付成品。", img: stepsRu[4].img },
];

const plansZh = [
  { name: "落地页", price: "10 000 卢布", feats: ["单页网站", "定制设计", "移动端适配", "留言表单", "SEO 优化", "5 天上线"] },
  { name: "企业官网", price: "30 000 卢布", feats: ["最多 10 个页面", "独特设计", "管理后台", "集成与地图", "SEO + 加载速度", "上线后技术支持"] },
  { name: "网上商城", price: "50 000 卢布", feats: ["商品目录", "购物车与在线支付", "配送系统", "管理面板", "SEO 推广", "全程陪跑"] },
];

const advantagesZh = [
  { icon: "Timer", title: "5 天起完成网站开发" },
  { icon: "Layers", title: "任意复杂度的项目" },
  { icon: "Cpu", title: "现代化技术" },
  { icon: "Search", title: "建站即做 SEO" },
  { icon: "ShieldCheck", title: "质量保证" },
  { icon: "Headphones", title: "支持与陪跑" },
  { icon: "Palette", title: "无模板的定制设计" },
];

/* ── Хук: возвращает данные под текущий язык ── */
export function useContent(lang: Lang) {
  const zh = lang === "zh";
  return {
    navLinks: zh ? navLinksZh : navLinksRu,
    services: zh ? servicesZh : servicesRu,
    included: zh ? includedZh : includedRu,
    promotion: zh ? promotionZh : promotionRu,
    promotionPage: zh ? promotionPageZh : promotionPageRu,
    whyUs: zh ? whyUsZh : whyUsRu,
    steps: zh ? stepsZh : stepsRu,
    plans: zh ? plansZh : plansRu,
    advantages: zh ? advantagesZh : advantagesRu,
  };
}

/** Найти услугу по slug под язык */
export function getService(lang: Lang, slug: string): Service | undefined {
  const list = lang === "zh" ? servicesZh : servicesRu;
  return list.find((s) => s.slug === slug);
}