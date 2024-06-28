import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "www.sevenning.com",

  author: {
    name: "Ning",
    url: "www.sevenning.com",
  },
  iconPrefix: "iconfont icon-",
  iconAssets: [
   "//at.alicdn.com/t/c/font_4602275_lqbs8j0eyya.css"
  ],

  logo: "/image (1).jpg",

  repo: "7yuningwz/7yuningwz.github.io",

  docsDir: "src",

  blog: {
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "william.zhang7077@gmail.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://github.com/7yuning",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      Instagram: "https://www.instagram.com/direct/inbox/",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      Wechat: "https://www.wechat.com/",
      // Weibo: "https://example.com",
      Whatsapp: "https://www.whatsapp.com/",
      Youtube: "https://www.youtube.com/",
      // Zhihu: "https://example.com",
      // // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Everything you wants will comes to you",

      displayFooter: true,

      blog: {
        name: "SevenNing",
        description: "The best place where you can know me",
        intro: "/intro.html",
      },

      // metaLocales: {
      //   editLink: "Edit this page on GitHub",
      // },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    search:{
      maxSuggestions: 32,
      hotKeys: [],
      locales: {
        "/":{
          placeholder:"Search",
        },
        "/zh/":{
          placeholder:"搜索",
        }
      }
    },
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Waline",
      serverURL: "https://comment.sevenning.com",
    },

    // components:{
    //   components:["Badge","VPCard"],
    //},
  
    components:{
      componentOptions:{
        share:{
          services:["email","qq","qrcode"],
        }
      },
   components: [
      "VPBanner",
      "VPCard",
      //"ArtPlayer",
      //"Badge",
      "BiliBili",
      //"FontIcon",
      //"CodePen",
      "PDF",
      "SiteInfo",
      "StackBlitz",
      "Share",
      "VidStack",
      //"YouTube",
      //"Replit",
      //"ArtPlayer",
      ],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      tabs: true,
      chart: false,
      echarts: false,
      mermaid: false,
      sup: true,
      katex: false,
      mathjax: false,
      vuePlayground: false,
      tasklist: true,
      revealJs: false,
      footnote: true,
      hint: true,
      flowchart: false,
      gfm: true,
      align: true,
      attrs: false,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: false,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      vPre: true,

      
    },

    
  },
});
