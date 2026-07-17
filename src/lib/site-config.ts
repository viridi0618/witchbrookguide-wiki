export const siteConfig = {
  name: "Witchbrook Guide",
  shortName: "Witchbrook",
  description:
    "An independent, source-led Witchbrook guide for release date, platforms, co-op, classes, romance, Mossport, and gameplay systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://witchbrookguide.wiki",
  ogImage: "/images/hero.png",
  updated: "July 15, 2026",
  steam: "https://store.steampowered.com/app/1846700/Witchbrook/",
  official: "https://www.witchbrook.com/",
  newsletter: "https://www.witchbrook.com/#register",
  trailer: "https://www.youtube.com/watch?v=TIKSGazNOqg",
} as const;

export const absoluteUrl = (path = "") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
