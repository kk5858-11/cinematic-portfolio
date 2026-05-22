# 目录结构说明

> 基于 Phase 1 创意架构的生产级目录。路由页面（`page.tsx`）在第八阶段再实现，当前仅保留目录与占位文件。

## 根目录

| 路径 | 职责 |
|------|------|
| `docs/` | 设计文档、架构说明、动效规范 |
| `public/` | 静态资源（字体、OG 图、不可经 MDX 引用的文件） |
| `content/` | MDX 博客原文与 frontmatter |
| `src/` | 全部应用源码 |

## `src/app/` — Next.js App Router

| 路径 | 职责 |
|------|------|
| `layout.tsx` | 根布局：字体、Theme、Lenis、全局 Provider |
| `page.tsx` | 首页单页：组合各 `sections/*`（第八阶段实现） |
| `globals.css` | Tailwind 入口、CSS 变量、全局 reset |
| `sitemap.ts` | 动态 sitemap 生成 |
| `robots.ts` | robots 规则 |
| `opengraph-image.tsx` | 默认 OG 图（ImageResponse） |
| `blog/` | 博客列表路由（待 `page.tsx`） |
| `blog/[slug]/` | MDX 文章详情（待 `page.tsx`） |
| `projects/[slug]/` | 项目详情 + Shared Layout 转场（待 `page.tsx`） |
| `api/contact/` | Contact 表单 API Route（可选） |

## `src/components/` — UI 与区块（无动画/无 WebGL 实现）

| 路径 | 职责 |
|------|------|
| `ui/` | shadcn/ui 原子组件（Button、Input…） |
| `layout/` | Header、Footer、Nav、Container、Section 壳 |
| `sections/` | 页面区块：hero、about、projects…（纯结构与样式） |
| `blog/` | 博客列表项、文章排版、MDX 映射组件 |
| `providers/` | ThemeProvider、LenisProvider、TransitionProvider |
| `seo/` | JSON-LD、Meta 辅助组件 |
| `interactive/` | 磁吸按钮、Tilt 卡片等「挂载动画/交互」的复合组件 |

> **边界**：`components` 只负责展示与组合；动画逻辑在 `animations/`，3D 在 `webgl/`。

## `src/animations/` — 动画系统（独立）

| 路径 | 职责 |
|------|------|
| `framer/` | Framer Motion 变体、BlurFade、Stagger 包装 |
| `gsap/` | ScrollTrigger 时间轴、pin、scrub 工厂函数 |
| `transitions/` | 路由 Fade+Blur、Curtain、Shared Layout 壳 |
| `presets/` | duration、ease、stagger 与可复用 timeline 预设 |
| `index.ts` | 统一导出（供 sections 与 providers 引用） |

## `src/webgl/` — React Three Fiber（独立）

| 路径 | 职责 |
|------|------|
| `scenes/` | 完整场景：HeroScene、降级静态层 |
| `materials/` | ShaderMaterial 封装，引用 `shaders/` |
| `objects/` | 粒子、灯光、Aurora 平面等 Three 对象 |
| `postprocessing/` | 可选后期（bloom 等，高阈值克制使用） |
| `index.ts` | dynamic import 入口，避免 SSR |

## `src/shaders/` — GLSL（独立）

| 路径 | 职责 |
|------|------|
| `aurora.vert.glsl` | Aurora 顶点着色器 |
| `aurora.frag.glsl` | Aurora 片元着色器（noise、鼠标、时间） |
| `README.md` | uniform 命名、性能与降级约定 |

## `src/hooks/` — React Hooks（独立）

| 路径 | 职责 |
|------|------|
| `use-lenis.ts` | Lenis 实例与 scrollTo |
| `use-gsap-scroll.ts` | ScrollTrigger + Lenis 同步 |
| `use-media-query.ts` | 断点与 WebGL 档位 |
| `use-reduced-motion.ts` | `prefers-reduced-motion` |
| `use-mouse-position.ts` | 归一化鼠标，供 Shader / Spotlight |
| `use-scroll-velocity.ts` | 滚动速度（动态 blur 等） |
| `index.ts` | 统一导出 |

## `src/lib/` — 纯逻辑与框架适配（独立）

| 路径 | 职责 |
|------|------|
| `utils.ts` | `cn()`、通用工具 |
| `mdx/` | MDX 编译、frontmatter 解析、文章列表 |
| `seo/` | metadata 工厂、JSON-LD 构建 |
| `gsap/` | GSAP 插件注册、ScrollTrigger 默认配置 |
| `lenis/` | Lenis 默认配置、与 GSAP 的 scrollerProxy |

## `src/tokens/` — Design Tokens

| 文件 | 职责 |
|------|------|
| `colors.ts` | 黑白灰与 accent |
| `typography.ts` | 字阶、tracking、行高 |
| `spacing.ts` | 8px 网格与 section padding |
| `motion.ts` | duration、ease、stagger |
| `radius.ts` | 圆角 |
| `shadows.ts` | 极简阴影（少用） |
| `index.ts` | 聚合导出 |

## `src/types/` — 全局 TypeScript 类型

项目、文章、时间线、导航项、WebGL 档位等。

## `src/data/` — 静态数据

`projects.ts`、`experience.ts`、`stack.ts`、`site.ts` — 与 CMS 解耦前的数据源。

## `src/constants/` — 常量

站点 URL、导航锚点、断点名称、路由路径。

## `src/styles/` — 补充样式

动画 keyframes、Lenis 覆盖、打印样式等（主入口仍在 `app/globals.css`）。

## `content/blog/`

MDX 文件与 frontmatter；由 `lib/mdx` 读取。

## `public/`

| 路径 | 职责 |
|------|------|
| `fonts/` | 自托管 WOFF2 |
| `images/` | 不经 next/image remote 的静态图 |
| `og/` | 预渲染 OG 备用图 |
