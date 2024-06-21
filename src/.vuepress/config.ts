import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "SevenNing",
      description: "The best place where you can know me",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SevenNing",
      description: "一个你可以了解我的地方",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
