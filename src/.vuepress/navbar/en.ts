import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
   text: "Blogs",
   icon: "",
   children: [
    {
      text: "Memories",
      icon: "",
      link: "#"
    },
   ],
  },
   {
    text: "Communities",
    icon: "",
    children: [
      {
        text: "Friends",
        icon: "",
        children: [
          {
            text: "Comments",
            icon: "",
            link: "#"
          },
         ]
      },
     ],
   },
   {
    text: "Products",
    icon: "",
    link:"#"
   },
   {
    text: "Help",
    icon: "",
    children: [
      {
        text: "Tools",
        icon: "",
        link: "#"
      },
     ],
   },
  
]);
