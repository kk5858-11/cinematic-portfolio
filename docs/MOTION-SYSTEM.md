# Motion System

统一管理 Framer Motion、GSAP ScrollTrigger、转场与预设。

## 入口

```ts
import {
  MOTION,
  BlurFade,
  StaggerChildren,
  SectionReveal,
  PageTransition,
  createSectionReveal,
  useSectionReveal,
  getTransition,
} from "@/animations";
```

## 目录

```
animations/
├── config.ts          # MOTION 聚合对象
├── presets/
│   ├── easing.ts      # Framer / GSAP / CSS 曲线
│   ├── timing.ts      # duration、stagger、transitions
│   ├── framer-variants.ts
│   └── scroll.ts      # ScrollTrigger 预设
├── framer/            # React 组件
├── gsap/              # 时间轴工厂 + hooks
├── transitions/       # 路由转场
└── core/              # MotionProvider、reduced-motion
```

## Presets

### Easing (`MOTION.easing`)

| 名称 | Framer | GSAP |
|------|--------|------|
| smooth | `[0.16, 1, 0.3, 1]` | power2.out |
| enter | `[0.22, 1, 0.36, 1]` | power3.out |
| cinematic | emphasized | expo.out |

### Timing (`MOTION.timing`)

- `getTransition('cinematic' | 'page' | 'section' | ...)`
- `getDuration('slow')` → 秒
- `staggerTransition.normal` → Framer container

### Scroll (`MOTION.scroll`)

| Key | 用途 |
|-----|------|
| sectionReveal | 区块入场 |
| sectionRevealSubtle | 轻量入场 |
| staggerReveal | 子元素 stagger |
| parallaxSoft | 视差 scrub |
| heroCinematic | Hero 滚动镜头 |

## 组件

| 组件 | 用途 |
|------|------|
| `PageTransition` | 路由 Fade + Blur（`app/template.tsx`） |
| `CurtainTransition` | 幕布转场 |
| `SectionReveal` | Framer whileInView 区块 |
| `StaggerChildren` / `StaggerItem` | 列表 stagger |
| `BlurFade` | 模糊淡入 |
| `StaggerLine` | 标题逐行 |
| `SharedLayout` | layoutId 共享元素 |

## GSAP

```ts
// 声明式 hook — 动画 [data-reveal] 子节点
const ref = useSectionReveal({ preset: "sectionReveal" });

// 命令式
const cleanup = createSectionReveal(sectionEl, targets, { preset: "sectionRevealSubtle" });
```

## Provider

`layout.tsx`：`ThemeProvider` → `LenisProvider` → `MotionProvider`

`useMotionContext().reducedMotion` 自动简化动画。

## Hero

`createHeroScrollTimeline` 使用 `scrollPresets.heroCinematic`，与 WebGL uniform 同步。
