# WebGL / R3F System

统一管理 Three.js、React Three Fiber、Shader 与性能策略。

## 入口

```ts
import {
  WEBGL,
  LazyWebGL,
  HeroCanvas,
  useWebGLCapability,
  createShaderMaterial,
  getSceneDefinition,
} from "@/webgl";
```

## 架构

```
webgl/
├── config.ts           # WEBGL 聚合、quality presets
├── types.ts
├── core/
│   ├── scene-registry.ts   # 场景注册
│   ├── shader-registry.ts
│   └── dispose.ts          # GPU 资源释放
├── shaders/registry.ts     # GLSL 定义
├── materials/
│   └── create-shader-material.ts
├── canvas/
│   ├── scene-canvas.tsx    # 统一 R3F Canvas
│   ├── lazy-webgl.tsx      # dynamic + IntersectionObserver
│   └── render-controller.tsx
├── scenes/
│   ├── scene-root.tsx      # 生命周期 + render control
│   └── hero-scene.tsx
└── hooks/
    ├── use-webgl-capability.ts
    └── use-scene-visibility.ts
```

## Scene Management

| API | 作用 |
|-----|------|
| `sceneRegistry` | 注册 `SceneId` → 组件、相机、最低 tier |
| `getSceneDefinition(id)` | 读取场景元数据 |
| `SceneCanvas` | 按 tier 配置 Canvas |
| `LazyWebGL` | 懒加载 + 可见性门控 |
| `SceneRoot` | 背景色、dispose、RenderController |

### 新增场景

1. 在 `scenes/` 实现组件，包裹 `SceneRoot`
2. 在 `scene-registry.ts` 注册 `id`、`minTier`、`camera`
3. 使用 `<LazyWebGL sceneId="yourId" sceneProps={...} />`

## Shader Management

```ts
// shaders/registry.ts 注册
shaderRegistry.aurora = { vertex, fragment, defaultUniforms, materialOptions }

// 创建材质
const mat = createShaderMaterial("aurora");
```

Uniform 默认值独立克隆，避免实例间污染。

## Device Adaptation

`useWebGLCapability()`：

| Tier | 条件 | 粒子 | DPR |
|------|------|------|-----|
| static | 无 WebGL / reduced-motion / 手机 | — | — |
| low | 预留 | 100 | 1 |
| medium | 平板 | 220 | 1–1.25 |
| high | 桌面 | 420 | 1–1.5 |

## Render Control

- **frameloop**: `demand`（默认）/ `never`（不可见）
- **RenderController**: 每帧 `invalidate()` 驱动 demand 模式
- **useSceneVisibility**: Intersection + `document.visibilityState`
- **performance**: Canvas `min/max` + debounce

## Lazy Loading

`LazyWebGL` = `dynamic(SceneCanvas, { ssr: false })` + 进入视口才 mount。

## Performance

- `disposeShaderMaterial` / `disposeObject3D` on unmount
- 移动端 → CSS `HeroAuroraFallback`
- `tierMeetsMinimum` 防止低配跑高配场景

## Hero 用法

```tsx
const { shouldRender } = useWebGLCapability();

{shouldRender ? (
  <HeroCanvas intensityRef={...} scrollRef={...} pointerRef={...} />
) : (
  <HeroAuroraFallback scrollProgress={scroll} />
)}
```

`HeroCanvas` 内部委托 `LazyWebGL sceneId="hero"`。
