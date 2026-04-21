"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Shirt,
  Sparkles,
  Sun,
  Snowflake,
  Leaf,
  Cloud,
  Crown,
  Compass,
  Gem,
  Trees,
  Zap,
  Layers,
  ArrowRight,
  Ruler,
  Blend,
  CheckCircle2,
  Camera,
} from "lucide-react";

const people = {
  bowie: {
    name: "David Bowie",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/David%20Bowie%20(1987).jpg",
  },
  clooney: {
    name: "George Clooney",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/George%20Clooney.jpg",
  },
  momoa: {
    name: "Jason Momoa",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jason%20momoa.jpg",
  },
  holland: {
    name: "Tom Holland",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tom%20Holland%20by%20Gage%20Skidmore.jpg",
  },
  harry: {
    name: "Harry Styles",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Harry%20Styles,%202012.jpg",
  },
  pharrell: {
    name: "Pharrell Williams",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pharrell%20Williams.jpg",
  },
  cillian: {
    name: "Cillian Murphy",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cillianmurphy.jpg",
  },
};

const seasons = [
  {
    key: "Spring",
    cn: "春季型",
    icon: Sun,
    tone: "暖 · 明快 · 清透",
    vibe: "清爽、发亮、干净、年轻感",
    colors: ["奶油白", "浅驼", "暖海军蓝", "珊瑚橘", "蓝绿色"],
    formula: "暖中性色做大面积，明亮色小面积点缀",
    outfit: "米白T 恤 + 暖卡其裤 + 清透蓝绿球鞋",
    gradient: "from-amber-100 via-orange-50 to-rose-100",
    palette: ["#FCE7B2", "#F4B183", "#E9724C", "#4FB0C6", "#F9FAFB"],
    example: people.holland,
  },
  {
    key: "Summer",
    cn: "夏季型",
    icon: Cloud,
    tone: "冷 · 柔和 · 低饱和",
    vibe: "清冷、克制、灰雾感、细腻",
    colors: ["灰蓝", "雾霾蓝", "蓝灰", "灰褐", "酒红"],
    formula: "低对比、同色阶、靠材质出层次",
    outfit: "蓝灰衬衫 + 炭灰西裤 + 酒红围巾",
    gradient: "from-sky-100 via-slate-50 to-violet-100",
    palette: ["#B7C4D6", "#93A4BF", "#6B7280", "#8C5A6E", "#E5E7EB"],
    example: people.cillian,
  },
  {
    key: "Autumn",
    cn: "秋季型",
    icon: Leaf,
    tone: "暖 · 深 · 柔和",
    vibe: "成熟、复古、浓郁、有质感",
    colors: ["橄榄绿", "咖啡", "焦糖", "驼色", "铁锈红"],
    formula: "一个深暖色 + 一个浅暖中性色 + 一个皮革色",
    outfit: "深橄榄夹克 + 燕麦色针织 + 咖啡色靴子",
    gradient: "from-orange-100 via-amber-50 to-lime-100",
    palette: ["#6B6B2F", "#8B5E3C", "#C68642", "#B14A30", "#E6D3B3"],
    example: people.momoa,
  },
  {
    key: "Winter",
    cn: "冬季型",
    icon: Snowflake,
    tone: "冷 · 净 · 高对比",
    vibe: "利落、锋利、冷感、强气场",
    colors: ["纯黑", "冷白", "炭灰", "宝石蓝", "祖母绿"],
    formula: "高对比 + 利落线条 + 干净冷色",
    outfit: "黑外套 + 冷白内搭 + 炭灰长裤",
    gradient: "from-slate-200 via-zinc-50 to-blue-100",
    palette: ["#111827", "#F8FAFC", "#4B5563", "#2563EB", "#0F766E"],
    example: people.bowie,
  },
];

const styles = [
  {
    name: "戏剧型",
    icon: Crown,
    keywords: ["锐利", "强存在感", "高气场"],
    fit: "长线条、大轮廓、硬挺材质、肩线清晰",
    items: "长大衣、挺括西装、皮靴、极简硬质配饰",
    avoid: "软塌、琐碎、没有主轴",
    color: "from-zinc-900 to-slate-700",
    example: people.bowie,
  },
  {
    name: "古典型",
    icon: Compass,
    keywords: ["秩序", "比例", "精致"],
    fit: "合体、平衡、干净、细节克制",
    items: "西装、衬衫、针织、乐福鞋、腕表",
    avoid: "过度街头化、过度夸张层次",
    color: "from-slate-700 to-gray-500",
    example: people.clooney,
  },
  {
    name: "浪漫型",
    icon: Gem,
    keywords: ["华丽", "柔感", "氛围感"],
    fit: "垂坠、微光泽、纹理感、配饰感",
    items: "丝绒、垂感衬衫、印花、项链、戒指",
    avoid: "太硬、太糙、太功能化",
    color: "from-rose-700 to-pink-500",
    example: people.harry,
  },
  {
    name: "自然型",
    icon: Trees,
    keywords: ["松弛", "天然", "户外感"],
    fit: "宽松适度、面料有呼吸感、纹理明显",
    items: "牛仔、灯芯绒、麂皮、工装裤、法兰绒",
    avoid: "过度端正、过度收束",
    color: "from-emerald-700 to-lime-600",
    example: people.momoa,
  },
  {
    name: "阳光型",
    icon: Zap,
    keywords: ["少年感", "轻盈", "利落"],
    fit: "短、轻、活、清爽、机动感强",
    items: "白T、短夹克、运动鞋、牛仔、学院针织",
    avoid: "厚重老气、拖沓冗余",
    color: "from-yellow-500 to-orange-500",
    example: people.holland,
  },
  {
    name: "摩登型",
    icon: Layers,
    keywords: ["前卫", "潮流", "识别度"],
    fit: "廓形变化、层次、结构、不对称",
    items: "机能单品、球鞋、街头层次、新中式结构",
    avoid: "乱堆元素、没有视觉主角",
    color: "from-fuchsia-700 to-violet-600",
    example: people.pharrell,
  },
];

const lineVolume = [
  {
    title: "量感大 + 直线强",
    label: "偏戏剧型",
    desc: "更能撑住长大衣、宽肩、硬挺、利落线条和大轮廓。",
    people: [people.bowie, people.cillian],
  },
  {
    title: "量感大 + 线条钝",
    label: "偏自然型",
    desc: "适合宽松、纹理、户外感和有呼吸感的材质。",
    people: [people.momoa, people.pharrell],
  },
  {
    title: "量感中等 + 平衡",
    label: "偏古典型",
    desc: "适合比例稳定、合体、克制、干净的穿法。",
    people: [people.clooney, people.cillian],
  },
  {
    title: "量感偏小 + 直线轻快",
    label: "偏阳光型",
    desc: "适合短、轻、活、清爽的少年感路线。",
    people: [people.holland, people.harry],
  },
  {
    title: "量感偏小 + 曲线柔和",
    label: "偏浪漫型",
    desc: "适合垂感、柔和、细节感和更精致的氛围。",
    people: [people.harry, people.pharrell],
  },
];

const pairings = [
  ["春 + 阳光", "清爽少年、运动学院感"],
  ["春 + 摩登", "轻潮、干净街头"],
  ["夏 + 古典", "清冷绅士、低饱和通勤"],
  ["秋 + 自然", "复古户外、工装、麂皮与军绿"],
  ["秋 + 浪漫", "复古华丽、文艺成熟"],
  ["冬 + 戏剧", "高对比、冷感、强气场"],
];

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="text-center mb-12">
      <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3 block">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {desc && (
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">{desc}</p>
      )}
    </div>
  );
}

function ImageCard({ person, className = "h-56" }: { person: { name: string; url: string }; className?: string }) {
  const [error, setError] = React.useState(false);
  return (
    <div className={`relative overflow-hidden rounded-xl ${className} bg-gray-100 flex-shrink-0`}>
      {!error ? (
        <img
          src={person.url}
          alt={person.name}
          className="w-full h-full object-cover object-top"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
          <Camera className="w-8 h-8 text-gray-400" />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3">
        <span className="text-white text-xs font-medium">{person.name}</span>
      </div>
    </div>
  );
}

function ColorSwatches({ labels, colors }: { labels?: string[]; colors: string[] }) {
  return (
    <div className="flex gap-2 flex-wrap items-center">
      {colors.map((color, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className="w-7 h-7 rounded-full shadow border-2 border-white/60"
            style={{ backgroundColor: color }}
            title={labels?.[i]}
          />
          {labels && (
            <span className="text-xs text-gray-500 whitespace-nowrap">{labels[i]}</span>
          )}
        </div>
      ))}
    </div>
  );
}

function HeroPhotoGrid() {
  const heroPeople = [
    people.bowie,
    people.clooney,
    people.harry,
    people.momoa,
    people.holland,
    people.pharrell,
  ];
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
      {heroPeople.map((person) => (
        <ImageCard key={person.name} person={person} className="h-48 md:h-64" />
      ))}
    </div>
  );
}

export default function MensAestheticsSummaryWebV3RealPeople() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4 block">
              男士美学完全手册
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
              找到属于你的<br />
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                色彩与风格语言
              </span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              从季节色彩到体型风格，用真实参照案例，帮你建立属于自己的穿搭系统。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroPhotoGrid />
          </motion.div>
        </div>
      </section>

      {/* ── SEASONAL COLOR TYPES ── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle
          eyebrow="第一步 · 认识你的色彩季型"
          title="四季色彩体系"
          desc="根据你的肤色、发色和眼色，找到最适合的色彩方向。每种季型都有独特的色彩语言和搭配公式。"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {seasons.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl bg-gradient-to-br ${s.gradient} p-6 shadow-sm border border-white/60`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center flex-shrink-0 shadow">
                    <Icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{s.cn}</h3>
                      <span className="text-xs text-gray-500 font-medium">{s.key}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{s.tone}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{s.vibe}</p>
                  </div>
                </div>

                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">核心色彩</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.colors.map((c) => (
                        <span key={c} className="px-2 py-0.5 bg-white/60 rounded-full text-xs text-gray-700 font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">色盘</p>
                    <ColorSwatches colors={s.palette} />
                  </div>
                </div>

                <div className="bg-white/50 rounded-xl p-3 mb-4">
                  <p className="text-xs text-gray-500 font-semibold mb-1">搭配公式</p>
                  <p className="text-sm text-gray-700">{s.formula}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Shirt className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">{s.outfit}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/40">
                  <p className="text-xs text-gray-400 mb-2 font-medium">参照：{s.example.name}</p>
                  <ImageCard person={s.example} className="h-40 w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── STYLE TYPES ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            eyebrow="第二步 · 认识你的风格型"
            title="六大风格体系"
            desc="风格型由你的骨骼线条、气质和体型量感决定。了解自己属于哪种风格类型，才能选对服装廓形与细节方向。"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {styles.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className={`bg-gradient-to-r ${s.color} p-5 text-white`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6" />
                      <h3 className="text-xl font-bold">{s.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.keywords.map((k) => (
                        <span key={k} className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">廓形与剪裁</p>
                      <p className="text-sm text-gray-700">{s.fit}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">推荐单品</p>
                      <p className="text-sm text-gray-700">{s.items}</p>
                    </div>
                    <div className="flex items-start gap-2 bg-red-50 rounded-lg p-2">
                      <span className="text-red-400 text-xs font-bold mt-0.5">✕</span>
                      <p className="text-xs text-red-500">{s.avoid}</p>
                    </div>
                    <ImageCard person={s.example} className="h-36 w-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LINE & VOLUME ── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <SectionTitle
          eyebrow="第三步 · 量感与线条诊断"
          title="骨骼量感 × 线条类型"
          desc="量感（骨骼粗细与体型大小）和线条（直线感或曲线感）的组合，直接决定你最适合的服装廓形。"
        />
        <div className="space-y-4">
          {lineVolume.map((lv, i) => (
            <motion.div
              key={lv.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col md:flex-row gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Ruler className="w-4 h-4 text-gray-400" />
                  <h3 className="font-bold text-gray-900">{lv.title}</h3>
                  <span className="ml-auto px-3 py-0.5 bg-gray-900 text-white text-xs rounded-full font-medium">
                    {lv.label}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{lv.desc}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {lv.people.map((p) => (
                  <ImageCard key={p.name} person={p} className="h-28 w-20" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── COLOR × STYLE PAIRINGS ── */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle
            eyebrow="第四步 · 季型 × 风格搭配"
            title="最佳组合参考"
            desc="把你的色彩季型和风格型结合起来，找到最有共鸣感的穿搭方向。"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pairings.map(([combo, desc], i) => (
              <motion.div
                key={combo}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Blend className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-amber-300 text-sm">{combo}</span>
                </div>
                <p className="text-gray-400 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-gray-500 text-center py-10 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-gray-300 font-medium">男士美学系统</span>
        </div>
        <p>季节色彩 · 风格体型 · 量感线条 · 组合参考</p>
      </footer>
    </div>
  );
}
