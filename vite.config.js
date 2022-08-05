import path from "path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vwt from "weapp-tailwindcss-webpack-plugin/vite";
import postcssWeappTailwindcssRename from "weapp-tailwindcss-webpack-plugin/postcss";
// 注意： 打包成 h5 和 app 都不需要开启插件配置
const isH5 = process.env.UNI_PLATFORM === "h5";
const isApp = process.env.UNI_PLATFORM === "app";

// vite 插件配置
const vitePlugins = [uni()];

const resolve = (p) => {
  return path.resolve(__dirname, p);
};

const postcssPlugins = [
  require("autoprefixer")(),
  require("tailwindcss")({
    config: resolve("./tailwind.config.js"),
  }),
];
if (!isH5 && !isApp) {
  vitePlugins.push(vwt());
  postcssPlugins.push(postcssWeappTailwindcssRename({}));
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: vitePlugins,
  // 假如 postcss.config.js 不起作用，请使用内联 postcss Latset
  css: {
    postcss: {
      plugins: postcssPlugins,
    },
  },
});
