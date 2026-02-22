export const SITE = {
  website: "https://DDDDDomingo.github.io/", // replace this with your deployed domain
  author: "mingo.blog",
  profile: "https://DDDDDomingo.github.io/",
  desc: "Hello, everyone! Welcome to my personal blog. In this blog, I will be writing about my projects (what I do/how I did), my personal experiences, and some random stuffs.",
  title: "mingo.blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
