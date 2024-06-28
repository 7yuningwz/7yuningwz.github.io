import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "博客",
    icon: "",
    children: [
     {
       text: "记忆", 
       icon: "",
       link: "#"
     },
    ],
   },
    {
     text: "社区",
     icon: "",
     children: [
       {
         text: "好友",
         icon: "",
         children: [
           {
             text: "评论区",
             icon: "",
             link: "#"
           },
          ]
       },
      ],
    },
    {
     text: "产品",
     icon: "",
     link:"#"
    },
    {
     text: "帮助",
     icon: "",
     children: [
       {
         text: "工具",
         icon: "",
         link: "#"
       },
      ],
    },
  
]);
