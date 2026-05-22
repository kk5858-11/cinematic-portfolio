# 项目交接（压缩版 · 新对话必读）

> 路径 `/Users/mac/cursor/1` · 电影化个人作品集 · Apple/Linear 黑白极简 · 非赛博风

---

## 一句话

单页沉浸式品牌站（Hero WebGL 极光 + GSAP 滚动 + 路由转场）+ `/blog` + `/projects/[slug]`，模块化 Next.js 16 App Router。

---

## 技术栈

Next.js **16.2** · TS · Tailwind v4 · Framer · GSAP+ScrollTrigger · Lenis · R3F/Three · MDX(`next-mdx-remote`) · next-themes · Lucide

**开发命令**：`npm run dev` → `next dev --webpack`（避免父目录 lockfile 导致 Turbopack CSS 路径错误）

---

## 阶段（1–11 均完成）

| # | 内容 |
|---|------|
| 1–2 | 创意系统 + 目录 |
| 3 | Design tokens `src/tokens/` + `src/styles/` |
| 4 | Hero `hero-section.tsx` + WebGL aurora |
| 5 | `src/animations/` |
| 6 | `src/webgl/` |
| 7 | 转场 `TransitionProvider` · 幕布进 Blog |
| 8 | 首页各 Section + 子路由 |
| 9 | `rhythm.ts` |
| 10 | dynamic 分包 · next/image · ScrollTriggerRefresh |
| 11 | MDX 博客 · Contact mailto 表单 · SEO/OG/JSON-LD · UI 组件 · 配置恢复 |

详情：`docs/PHASE-9.md` · `docs/PHASE-11.md` · 各 `docs/*-SYSTEM.md`

---

## 路由

`/` · `/blog` · `/blog/[slug]` · `/projects/[slug]` · `/sitemap.xml` · `/robots.txt` · `/opengraph-image`

---

## Provider 链

`ThemeProvider` → `LenisProvider` → `MotionProvider` → `TransitionProvider` → `LayoutGroupProvider` → children；`template.tsx` → `RouteTransition`

---

## 架构边界（硬规则）

| 目录 | 职责 |
|------|------|
| `components/` | 展示，无 GSAP timeline / R3F |
| `animations/` | 动效与转场 |
| `webgl/` | Three.js，`dynamic` + `ssr:false` |
| `lib/mdx/posts.server.ts` | 博客 MDX（`server-only` + `fs`） |

---

## WebGL 要点（2026-05 已修）

- `useWebGLCapability()`：不支持 WebGL 或 **系统「减少动态效果」** → `static` → CSS `HeroAuroraFallback`
- **手机**：`low` 档（有 3D，粒子少），不再整段禁用
- **Hero**：`LazyWebGL` + `eager` → 首屏立即挂载，不等 IntersectionObserver
- 桌面 Hero：`frameloop: "always"`（极光持续动）
- 入口：`HeroCanvas` → `LazyWebGL sceneId="hero"`

---

## 关键文件

| 用途 | 路径 |
|------|------|
| 首页 | `src/app/page.tsx` · `home-sections.tsx` |
| Hero | `hero-section.tsx` · `webgl/scenes/hero-scene.tsx` |
| 站点数据 | `src/data/site.ts`（**占位，需替换**） |
| 博客 MDX | `content/blog/*.mdx` |
| 动效 | `src/animations/rhythm.ts` |
| 配置 | `next.config.ts`（`turbopack.root` = 项目根） |

---

## 已知环境问题

- 父目录 `/Users/mac/cursor/package-lock.json` 会干扰 Turbopack；dev 已用 `--webpack`
- 若 `package.json` 丢失需从仓库/备份恢复后 `npm install`
- 端口：3000 被占用时自动 3001

---

## 用户待填

`src/data/site.ts`（name/email/bio 等）· `projects.ts` · `.env.local` 的 `NEXT_PUBLIC_SITE_URL`

---

## 新对话粘贴

```
请读 /Users/mac/cursor/1/docs/HANDOFF.md，继续维护电影化作品集。
Phase 1–11 已完成。我的需求：[填写]
```

---

## 可选后续

真实个人资料 · Contact API(Resend) · Lighthouse · 浅色主题 WebGL · SharedLayout 真机验证

---

*更新：Phase 11 + WebGL eager/手机 low 档 + dev webpack + 配置恢复*
