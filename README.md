# Cinematic Personal Portfolio

电影化、沉浸式、未来感个人数字作品站。基于 Phase 1 创意架构搭建的生产级 Next.js 项目骨架。

## 技术栈（规划）

Next.js App Router · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · GSAP · ScrollTrigger · Lenis · React Three Fiber · Drei · Three.js · MDX · next-themes · Lucide

## 开发阶段

| 阶段 | 状态 | 内容 |
|------|------|------|
| 1 | ✅ | 创意系统与架构 |
| 2 | ✅ | 目录结构（当前） |
| 3 | ✅ | Design System |
| 4 | ✅ | Hero Section |
| 5 | ✅ | Motion System |
| 6 | ✅ | WebGL / R3F System |
| 7 | ✅ | 页面转场 |
| 8 | ✅ | 各 Section + Blog |
| 9 | ✅ | 动画节奏统一 |
| 10 | ✅ | 性能优化 |

## 目录概览

```
src/
├── app/              # 路由、布局、SEO 路由
├── components/       # UI / 布局 / 区块（不含动画与 WebGL 实现）
├── animations/       # Framer、GSAP、转场（独立）
├── webgl/            # R3F 场景（独立）
├── shaders/          # GLSL（独立）
├── hooks/            # 客户端 hooks（独立）
├── lib/              # MDX、SEO、工具（独立）
├── tokens/           # Design tokens
├── types/            # 类型定义
├── data/             # 静态数据
├── constants/        # 常量
└── styles/           # 补充样式
```

详细说明见 [docs/DIRECTORY-STRUCTURE.md](./docs/DIRECTORY-STRUCTURE.md)。

## 公开地址

**https://cinematic-portfolio-pi.vercel.app**

改完内容后重新发布（链接不变）：

```bash
npx vercel --prod
```

### 自动更新（推荐）

连接 GitHub 后，每次 `git push` 会自动部署。仓库：[github.com/kk5858-11/cinematic-portfolio](https://github.com/kk5858-11/cinematic-portfolio)

## 本地运行

```bash
npm install
npm run dev
```

本地预览：http://localhost:3000

## 约定

- **动画** 只写在 `src/animations/`，通过 hooks 与 presets 注入组件。
- **WebGL** 只写在 `src/webgl/`，必须 `dynamic(..., { ssr: false })`。
- **Shader** 只放在 `src/shaders/`，由 `webgl/materials` 引用。
- 新对话请先读 [docs/HANDOFF.md](./docs/HANDOFF.md)。
