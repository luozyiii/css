import * as fs from "fs-extra";
import themeColor from "../src/theme";
const sass = require("node-sass");
const palette = require("../src/palette");

// css 变量
const themeObj: any = {};

const generateTheme = (name: string, colors: any[]) => {
  return colors
    ?.map((color, index) => {
      themeObj[`--${name}-${index + 1}`] = color;
      return `--${name}-${index + 1}: ${color};`;
    })
    .join("");
};

// 调色版
const colorsData: string[] = [];
const presetPalettes = palette.presetPalettes;
Object.keys(presetPalettes).forEach((key) => {
  const item = presetPalettes[key];
  colorsData.push(generateTheme(key, item));
});

// 主题色
Object.keys(themeColor).forEach((key) => {
  const item = themeColor[key];
  colorsData.push(generateTheme(key, item));
});

const allColorData = colorsData.join("");

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

// 将样式写入 CSS 文件
fs.outputFileSync("src/default.css", cssResult.css.toString());

// 生成 css 变量映射表
const tsResult = `
const variable: any = ${JSON.stringify(themeObj, null, 2)}
export default variable;
`;

fs.outputFileSync("src/variable.ts", tsResult);
