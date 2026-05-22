# webgl/

React Three Fiber 专用。所有场景 `ssr: false` 动态加载。

- `scenes/` — HeroScene 等完整画布
- `materials/` — ShaderMaterial，引用 `@/shaders/*`
- `objects/` — 粒子、灯光、mesh
- `postprocessing/` — 可选后期，默认关闭或高阈值

移动端 / `prefers-reduced-motion` 在 scene 入口降级为 CSS。
