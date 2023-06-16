// 主色
const dominant = {
  "primary-1_v2": "#5A32FF",
  "primary-2_v2": "#FFCB11",
};

// 渐变色
const gradient = {
  "brand-gradient-1_v2":
    "linear-gradient(127.15deg, #6D84ED 2.59%, #5A32FF 96.3%)",
  "brand-gradient-2_v2":
    "linear-gradient(320.8deg, #FFAB24 4.35%, #FFCB11 96.07%)",
};

// 辅助色
const auxiliary = {
  dangerous_v2: "#FA3B29",
  warning_v2: "#FA6F1E",
  success_v2: "#1AC14F",
  secure_v2: "#5A32FF",
};

// 文本色
const text = {
  textPrimary_v2: "#181A31",
  textTertiary_v2: "#747683",
  textQuaternary_v2: "#AEAFB7",
  textReverse_v2: "#FFFFFF",
};

// 中性色
const neutral = {
  "general-1_v2": "#F8F8F9",
  "general-2_v2": "#F2F3F5",
  "general-3_v2": "#FFFFFF",
  shade_v2: "#717381",
};

// 线框色
const line = {
  "line-1_v2": "#d7d7db",
  brand_glorious_v2: "#FF3B52",
  black_v2: "#161823",
};

const themeV2: any = {
  ...dominant,
  ...gradient,
  ...auxiliary,
  ...text,
  ...neutral,
  ...line,
};

export { dominant, gradient, auxiliary, text, neutral, line };
export default themeV2;
