import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://tobebetterjavaer.com",

  author: {
    name: "沉默王二",
    url: "https://tobebetterjavaer.com",
  },

  iconPrefix: "iconfont icon-",

  logo: "http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/logo-02.png",

  repo: "https://github.com/itwanger/toBeBetterJavaer",

  docsDir: "docs",

  darkmode: "switch",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2021038026号-1</a>',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    intro: "/intro.html",
    medias: {
      Zhihu: "https://www.zhihu.com/people/cmower",
      Github: "https://github.com/itwanger",
      Gitee: "https://gitee.com/itwanger",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});