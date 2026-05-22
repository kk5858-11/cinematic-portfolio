precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uIntensity;
uniform float uScroll;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.0 + 100.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = vec2(uv.x * aspect, uv.y);

  vec2 mouse = uMouse * 0.12;
  float t = uTime * 0.06;

  float n = fbm(p * 1.8 + vec2(t * 0.4, t * 0.25) + mouse);
  float n2 = fbm(p * 2.4 - vec2(t * 0.2, t * 0.35) - mouse * 0.6);

  float band = smoothstep(0.42, 0.78, n * 0.55 + n2 * 0.45);
  band *= smoothstep(0.0, 0.35, uv.y) * smoothstep(1.0, 0.55, uv.y);

  float scrollPull = uScroll * 0.35;
  float depthLayer = 1.0 - uv.y * 0.25 + scrollPull;

  vec3 voidCol = vec3(0.039, 0.039, 0.043);
  vec3 auroraCol = vec3(0.9, 0.91, 0.94) * band * 0.07 * uIntensity * depthLayer;

  float mouseDist = length(uv - uMouse);
  vec3 mouseGlow = vec3(0.95) * exp(-mouseDist * 5.5) * 0.035 * uIntensity;

  float horizon = smoothstep(0.15, 0.55, uv.y + scrollPull * 0.15);
  vec3 col = voidCol + auroraCol * horizon + mouseGlow;

  float vignette = smoothstep(1.15, 0.35, length((uv - 0.5) * vec2(1.0, 1.1)));
  col *= mix(0.88, 1.0, vignette);

  float grain = (hash(uv * uResolution + uTime) - 0.5) * 0.015;
  col += grain;

  gl_FragColor = vec4(col, 1.0);
}
