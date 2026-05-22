# shaders/

纯 GLSL 资源。由 `webgl/materials` 通过 raw import 或 glslify 加载。

## Uniform 约定（Phase 6 实现）

| Uniform | 类型 | 说明 |
|---------|------|------|
| `uTime` | float | 慢速时间，驱动 aurora |
| `uMouse` | vec2 | 归一化鼠标 0–1 |
| `uResolution` | vec2 | 画布像素尺寸 |
| `uIntensity` | float | 滚动或主题控制的强度 |

## 原则

- 低饱和、无彩虹渐变
- 片元运算保持简单，利于 60fps
