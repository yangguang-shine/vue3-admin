import { defineConfig, UserConfigExport, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import ElementPlus from "unplugin-element-plus/vite";
import eslintPlugin from "vite-plugin-eslint";
import { join, resolve } from "path";
import { outDir, assetsDir, firstMenu, secondMenu, thirdMenu } from "./config.dir";
import { createHtmlPlugin } from "vite-plugin-html";
import checker from "vite-plugin-checker";
import fs from "fs-extra";
import open from "open";
import chalk from "chalk";
export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const config: UserConfigExport = {
    base: "./",
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "~@": resolve(__dirname, "./src"),
      },
      extensions: [".js", ".ts", ".tsx", ".json"],
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus(),
      eslintPlugin({
        include: ["src/**/*.ts", "src/*.ts", "src/**/*.vue", "src/*.vue", "src/**/*.js", "src/*.js"],
        cache: true,
      }),
      createHtmlPlugin({
        minify: true,
        entry: "src/main.ts",
        template: "index.html",
      }),
      outputAssetsHandle({
        prodUrl: env.PROD_URL,
      }),
    ],
  };
  if (command === "serve") {
    config.plugins && config.plugins.push(checker({ vueTsc: true, overlay: false }));
    return {
      ...config,
      server: {
        host: "127.0.0.1",
        port: 8899,
        // open: "index.html",
        proxy: {
          "/api": {
            target: "http://172.29.1.147:98",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
    };
  } else {
    return {
      ...config,
      build: {
        outDir,
        assetsDir,
        // emptyOutDir: true,
        rollupOptions: {
          output: {
            chunkFileNames: `${assetsDir}/js/[name]-[hash].js`,
            entryFileNames: `${assetsDir}/js/[name]-[hash].js`,
            assetFileNames: `${assetsDir}/[ext]/[name]-[hash].[ext]`,
          },
        },
      },
    };
  }
});
function outputAssetsHandle(option: { prodUrl: string }) {
  return {
    name: "remove-dist-assert",
    async buildEnd() {
      await fs.remove(join(__dirname, outDir, assetsDir));
    },
    async closeBundle() {
      const htmlPath = join(__dirname, outDir, "index.html");
      const res = await fs.pathExists(htmlPath);
      if (res) {
        const htmlRenamePath = join(__dirname, outDir, `${thirdMenu}.html`);
        await fs.move(htmlPath, htmlRenamePath, { overwrite: true });
        openUrl(option.prodUrl);
      }
    },
  };
}
function openUrl(prodUrl) {
  let openUrl = join(prodUrl, `${thirdMenu}.html`);
  if (firstMenu) {
    openUrl = join(prodUrl, firstMenu, secondMenu, `${thirdMenu}.html`);
  } else if (secondMenu) {
    openUrl = join(prodUrl, secondMenu, `${thirdMenu}.html`);
  }
  open(openUrl);
  console.log(chalk.green(openUrl));
  console.log(chalk.green(`打包访问地址可在 .evn.production 更改域名host`));
}
