// css 变量生成脚本
const fs = require("fs");
const sass = require("node-sass");

const themeObj = {};

const generateTheme = (name, colors) => {
  return colors
    ?.map((color, index) => {
      themeObj[`--${name}-${index + 1}`] = color;
      return `--${name}-${index + 1}: ${color};`;
    })
    .join("");
};

const brandData = generateTheme("brand", [
  "#502CE2",
  "#4023B5",
  "#301A88",
  "#D5D6DA",
  "#EAEAFC",
]);

const warningData = generateTheme("warning", [
  "#FA6F1E",
  "#D55E1A",
  "#AF4E15",
  "#FDD8A5",
  "#FEECD2",
  "#FFF9F0",
]);

const cautionData = generateTheme("caution", [
  "#FFD200",
  "#D5B300",
  "#AA9200",
  "#FFF799",
  "#FFFDCC",
  "#FFFEEB",
]);

const successData = generateTheme("success", [
  "#1AC14F",
  "#16A443",
  "#128737",
  "#A3E6B9",
  "#D1F3DC",
  "#E8F9ED",
]);

const tipData = generateTheme("tip", [
  "#0077FC",
  "#0063D8",
  "#004FB5",
  "#98CDFE",
  "#CCE7FE",
  "#EAF5FF",
]);

const textData = generateTheme("text", [
  "#181A31",
  "rgba(24, 26, 49, 0.8)",
  "rgba(24, 26, 49, 0.6)",
  "rgba(24, 26, 49, 0.35)",
  "#FD5900",
  "#0077FC",
]);

const fillData = generateTheme("fill", [
  "#F8F8F9",
  "#F2F3F5",
  "#DFDFE0",
  "#FFFFFF",
  "rgba(24, 26, 49, 0.6)",
]);

const lineData = generateTheme("line", [
  "rgba(24, 26, 49, 0.1)",
  "rgba(24, 26, 49, 0.18)",
  "#EBEDF0",
]);

const allColorData = [
  brandData,
  warningData,
  cautionData,
  successData,
  tipData,
  textData,
  fillData,
  lineData,
].join("");

// 生成样式
const cssData = `
:root {
  // 色彩
  ${allColorData}
}
`;
const cssResult = sass.renderSync({
  data: cssData,
});

const cssResult2 = sass.renderSync({
  data: cssData,
  outputStyle: "compressed", // 将输出压缩为一行
});

// 将样式写入 CSS 文件
fs.writeFileSync("src/default.css", cssResult.css.toString());

// 生成 css 变量映射表
const tsResult = `
const variable: any = ${JSON.stringify(themeObj, null, 2)}
export default variable;
`;

fs.writeFileSync("src/variable.ts", tsResult);
