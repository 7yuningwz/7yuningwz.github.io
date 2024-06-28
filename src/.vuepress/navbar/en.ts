import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
   text: "Blogs",
   icon: "blogger",
   children: [
    {
      text: "Memories",
      icon: "jiyi",
      link: "#"
    },
   ],
  },
   {
    text: "Communities",
    icon: "shequ",
    children: [
      {
        text: "Friends",
        icon: "friends",
        children: [
          {
            text: "Comments",
            icon: "comments",
            link: "#"
          },
         ]
      },
     ],
   },
   {
    text: "Products",
    icon: "product_s",
    link:"#"
   },
   {
    text: "Help",
    icon: "help",
    children: [
      {
        text: "Tools",
        icon: "tools-hardware",
        link: "#"
      },
     ],
   },
  
]);
