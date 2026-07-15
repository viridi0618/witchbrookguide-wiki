import type { FAQ } from "./faq";

export interface Section {
  heading: string;
  content: string;
  sourceLevel: "L1" | "L2" | "L3";
  sourceUrl?: string;
  bullets?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intent: string;
  priority: "P0" | "P1" | "P2";
  dek: string;
  image: string;
  imageAlt: string;
  quickFacts: { label: string; value: string }[];
  sections: Section[];
  faq?: FAQ[];
  internalLinks: string[];
}

const official = "https://www.witchbrook.com/";
const lifeBlog = "https://www.witchbrook.com/dev-blog-life-at-witchbrook/";
const steam = "https://store.steampowered.com/app/1846700/Witchbrook/";
const xbox = "https://www.xbox.com/en-US/games/store/witchbrook/9P54Q8W3TF4W";

export const guides: Guide[] = [
  {
    slug: "release-date",
    title: "Witchbrook Release Date: When Is It Coming Out? [2026]",
    metaDescription: "Witchbrook is planned for 2026 on PC, Nintendo Switch, Switch 2, and Xbox. No exact date is announced. Follow every confirmed release update.",
    h1: "Witchbrook Release Date",
    intent: "Current release window, delay history, and what must happen before launch.",
    priority: "P0",
    dek: "The current official window is 2026, with no exact day or month announced. Here is the timeline without the rumor fog.",
    image: "/images/hero.png",
    imageAlt: "Life at Witchbrook official dev blog artwork showing Witchbrook College",
    quickFacts: [{ label: "Window", value: "2026" }, { label: "Exact date", value: "Not announced" }, { label: "Previous target", value: "Winter 2025" }],
    sections: [
      { heading: "The short answer", content: "Witchbrook is planned for release in 2026. Chucklefish has not announced a specific date, price, or preorder schedule. The official FAQ confirms PC, Nintendo Switch, Nintendo Switch 2, and Xbox for the launch window.", sourceLevel: "L1", sourceUrl: official },
      { heading: "Why the date is still open", content: "Chucklefish says platform submissions, hard-to-find bugs, porting, localisation, external-team factors, and final polish can all affect the schedule. The studio will not name a date until it is ‘super sure’. That is a commitment to certainty, not a hidden launch clue.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "From Winter 2025 to 2026", content: "The former Winter 2025 target was moved to 2026 in October 2025. Current official pages supersede older store snippets and announcement coverage, so 2026 is the only reliable window to use now.", sourceLevel: "L2", sourceUrl: "https://www.rpgsite.net/news/18709-witchbrook-release-date-delayed-2026-chucklefish" },
      { heading: "What development looks like now", content: "Regular playtests are informing balance, pacing, late-game activities, animation, music, and extra systems. The team says a first in-game year can take roughly 40–50 hours depending on playstyle; that is a playtest scope, not a campaign-length promise. Localisation is also underway for more languages than currently announced.", sourceLevel: "L1", sourceUrl: lifeBlog },
    ],
    faq: [{ question: "Does Witchbrook have an exact release date?", answer: "No. Only a 2026 release window is official." }, { question: "Was Witchbrook delayed?", answer: "Yes. Its former Winter 2025 target was moved to 2026." }],
    internalLinks: ["platforms", "steam", "switch-2"],
  },
  {
    slug: "platforms",
    title: "Witchbrook Platforms: PC, Switch, Xbox & PS5 Status",
    metaDescription: "See every confirmed Witchbrook platform: Steam PC, Switch, Switch 2, Xbox One and Series X|S, plus the latest PS5 and PS4 status.",
    h1: "Witchbrook Platforms",
    intent: "Confirmed systems and honest status for unannounced platforms.",
    priority: "P0", dek: "Five console families are in the conversation—but only PC, Nintendo, and Xbox versions are official so far.", image: "/images/college.png", imageAlt: "Witchbrook character meeting Professor Carlyle outside a woodland cottage",
    quickFacts: [{ label: "PC", value: "Steam confirmed" }, { label: "Nintendo", value: "Switch + Switch 2" }, { label: "Xbox", value: "One + Series X|S" }, { label: "PlayStation", value: "Not announced" }],
    sections: [
      { heading: "Confirmed platforms", content: "Witchbrook is officially listed for Windows PC through Steam, Nintendo Switch, Nintendo Switch 2, Xbox One, and Xbox Series X|S. Switch 2 is described as a day-one release alongside the other confirmed versions.", sourceLevel: "L1", sourceUrl: official, bullets: ["Steam — Windows 10 or newer, 64-bit", "Nintendo Switch", "Nintendo Switch 2 — day-one launch", "Xbox One", "Xbox Series X|S"] },
      { heading: "What is not announced", content: "PS5, PS4, Mac, iOS, and Android versions have not been announced. The official wording is ‘Other platforms TBD’, which leaves future possibilities open but does not confirm any of them.", sourceLevel: "L1", sourceUrl: official },
      { heading: "Feature differences we can verify", content: "Steam lists achievements, cloud saves, single-player, and online co-op. The Xbox store currently lists Smart Delivery, cross-platform co-op and multiplayer, Xbox cloud saves and achievements, plus display and performance capabilities. Store capabilities can change before release and may vary by device and final build.", sourceLevel: "L1", sourceUrl: xbox },
    ],
    faq: [{ question: "Is Witchbrook coming to PS5?", answer: "A PS5 version has not been announced. Chucklefish says other platforms are TBD." }, { question: "Will Witchbrook launch on Switch 2?", answer: "Yes. Switch 2 is confirmed as a day-one platform." }],
    internalLinks: ["switch", "switch-2", "xbox", "ps5", "steam"],
  },
  {
    slug: "switch", title: "Witchbrook on Nintendo Switch: Release & What We Know", metaDescription: "Witchbrook is confirmed for Nintendo Switch in 2026. See the official release status, expected features, co-op details, and Switch 2 comparison.", h1: "Witchbrook on Nintendo Switch", intent: "Everything confirmed for the original Nintendo Switch version.", priority: "P0", dek: "The original Switch remains a confirmed 2026 platform alongside Switch 2, PC, and Xbox.", image: "/images/broom.png", imageAlt: "Witchbrook witch delivering goods across Mossport on a broom",
    quickFacts: [{ label: "Status", value: "Confirmed" }, { label: "Window", value: "2026" }, { label: "Co-op", value: "Online, up to 4" }],
    sections: [
      { heading: "Switch release status", content: "Witchbrook is confirmed for Nintendo Switch in 2026. Chucklefish has not announced an exact date, price, file size, resolution target, or performance mode.", sourceLevel: "L1", sourceUrl: official },
      { heading: "What the Switch version includes", content: "The core game is a richly detailed life sim and social RPG set in Mossport, with college study, a witchy business, relationships, gardening, festivals, and online co-op. Platform-specific control or display differences have not been detailed.", sourceLevel: "L1", sourceUrl: official },
      { heading: "Switch or Switch 2?", content: "Both Nintendo systems are confirmed. Switch 2 was highlighted separately with day-one status and new footage, but no official side-by-side technical comparison is available yet. Choose based on the hardware you own and wait for final performance details before making assumptions.", sourceLevel: "L1", sourceUrl: "https://chucklefish.org/blog/witchbrook-is-coming-to-nintendo-switch-2/" },
    ], faq: [{ question: "Is Witchbrook cancelled for the original Switch?", answer: "No. Nintendo Switch remains listed as a confirmed 2026 platform." }], internalLinks: ["switch-2", "platforms", "multiplayer"],
  },
  {
    slug: "switch-2", title: "Witchbrook on Switch 2: Confirmed Day-One Launch in 2026", metaDescription: "Witchbrook is confirmed for Nintendo Switch 2 as a day-one launch alongside PC, Switch, and Xbox. See the announcement and what remains unknown.", h1: "Witchbrook Switch 2", intent: "Day-one status and confirmed Switch 2 information.", priority: "P0", dek: "Nintendo Switch 2 is not a later port: Chucklefish says it will launch day one with the other confirmed platforms.", image: "/images/assignments.png", imageAlt: "Witchbrook students completing a magical college assignment",
    quickFacts: [{ label: "Status", value: "Confirmed" }, { label: "Timing", value: "Day one" }, { label: "Window", value: "2026" }],
    sections: [
      { heading: "A day-one Switch 2 game", content: "Chucklefish confirmed Witchbrook for Nintendo Switch 2 during a Nintendo Direct presentation. The version is planned to arrive day one alongside Nintendo Switch, PC, and Xbox rather than following as a later port.", sourceLevel: "L1", sourceUrl: "https://chucklefish.org/blog/witchbrook-is-coming-to-nintendo-switch-2/" },
      { heading: "What has not been specified", content: "There is no official resolution, frame-rate target, file size, touchscreen feature list, or upgrade path from the original Switch version. Any technical comparison before Chucklefish publishes one would be speculation.", sourceLevel: "L1", sourceUrl: official },
      { heading: "What you will do in Mossport", content: "The footage and official descriptions show the same core loop: attend Witchbrook College, build knowledge, complete assignments and exams, run a magic business, travel by moped or broom, and spend free time with the city’s residents.", sourceLevel: "L1", sourceUrl: lifeBlog },
    ], faq: [{ question: "Is Witchbrook a Switch 2 exclusive?", answer: "No. It is also confirmed for original Switch, PC, and Xbox." }], internalLinks: ["switch", "platforms", "release-date"],
  },
  {
    slug: "xbox", title: "Witchbrook on Xbox: Series X|S, Xbox One & Co-op Guide", metaDescription: "Witchbrook is confirmed for Xbox One and Xbox Series X|S. See listed 4K, Smart Delivery, cross-platform co-op, achievements, and Game Pass status.", h1: "Witchbrook on Xbox", intent: "Xbox versions, store capabilities, co-op, and Game Pass clarification.", priority: "P0", dek: "Xbox One and Series X|S are confirmed, with one of the most detailed platform capability listings available before launch.", image: "/images/business.png", imageAlt: "Witchbrook order board used to manage a witchy business",
    quickFacts: [{ label: "Consoles", value: "One + Series X|S" }, { label: "Smart Delivery", value: "Store-listed" }, { label: "Game Pass", value: "Not confirmed" }],
    sections: [
      { heading: "Confirmed Xbox versions", content: "Witchbrook is listed for Xbox One and Xbox Series X|S. The store also labels it Optimized for Series X|S and supports Smart Delivery, which is designed to provide the appropriate version for your console.", sourceLevel: "L1", sourceUrl: xbox },
      { heading: "Store-listed capabilities", content: "The Xbox page currently lists 4K Ultra HD, 120 fps, 60 fps+, variable refresh rate, achievements, cloud saves, cross-platform multiplayer, cross-platform co-op, and cross-generation multiplayer. These are storefront capabilities, not a guarantee that every console and display will use every mode.", sourceLevel: "L1", sourceUrl: xbox },
      { heading: "Is Witchbrook on Game Pass?", content: "Game Pass inclusion has not been announced. The store warning that paid online console multiplayer requires a Game Pass subscription does not mean the game itself is included in the catalogue.", sourceLevel: "L1", sourceUrl: xbox },
    ], faq: [{ question: "Is Witchbrook coming to Xbox One?", answer: "Yes. Xbox One and Xbox Series X|S are both confirmed." }, { question: "Is Witchbrook included with Game Pass?", answer: "No Game Pass catalogue release has been announced." }], internalLinks: ["multiplayer", "platforms", "release-date"],
  },
  {
    slug: "ps5", title: "Is Witchbrook Coming to PS5 or PS4? Status Explained", metaDescription: "Witchbrook is not currently announced for PS5 or PS4. See the official ‘other platforms TBD’ wording and every confirmed way to play in 2026.", h1: "Witchbrook PS5", intent: "Clear PlayStation status without turning possibility into confirmation.", priority: "P0", dek: "No PlayStation version is announced. ‘Other platforms TBD’ keeps the door open, but it is not a PS5 confirmation.", image: "/images/college.png", imageAlt: "Professor Carlyle greeting the Witchbrook player near their inherited cottage",
    quickFacts: [{ label: "PS5", value: "Not announced" }, { label: "PS4", value: "Not announced" }, { label: "Official wording", value: "Other platforms TBD" }],
    sections: [
      { heading: "The current PlayStation answer", content: "Chucklefish has not announced Witchbrook for PS5 or PS4. The official FAQ names Steam, Nintendo Switch, Nintendo Switch 2, and Xbox, then says ‘Other platforms TBD’.", sourceLevel: "L1", sourceUrl: official },
      { heading: "What ‘TBD’ does and does not mean", content: "It means future platforms have not been settled publicly. It does not confirm a timed exclusive, a later PS5 port, or a cancellation. Treat retailer placeholders, social posts, and platform wish lists as speculation unless Chucklefish updates its official channels.", sourceLevel: "L1", sourceUrl: official },
      { heading: "Confirmed alternatives", content: "The announced 2026 choices are Windows PC through Steam, both Nintendo Switch generations, Xbox One, and Xbox Series X|S. We will update this page if an official PlayStation announcement appears.", sourceLevel: "L1", sourceUrl: official },
    ], faq: [{ question: "Has Witchbrook been cancelled on PS5?", answer: "No PS5 version was announced, so it cannot accurately be described as cancelled." }], internalLinks: ["platforms", "steam", "xbox"],
  },
  {
    slug: "multiplayer", title: "Witchbrook Multiplayer & Co-op: Players and Split-Screen", metaDescription: "Witchbrook supports one to four players in online co-op. Learn about player count, no split-screen, Xbox cross-platform play, and co-op activities.", h1: "Witchbrook Multiplayer", intent: "Player count, online-only status, and confirmed co-op activities.", priority: "P0", dek: "Bring up to three friends online to study spellcraft, race brooms, or simply spend time together in Mossport.", image: "/images/hero.png", imageAlt: "A group of witches gathered inside Witchbrook College",
    quickFacts: [{ label: "Players", value: "1–4" }, { label: "Type", value: "Online co-op" }, { label: "Split-screen", value: "No plans" }],
    sections: [
      { heading: "How many players?", content: "Witchbrook supports single-player and online co-op for up to four players. Steam lists online co-op, while official store copy describes shared activities across Mossport.", sourceLevel: "L1", sourceUrl: steam },
      { heading: "What can friends do together?", content: "Confirmed examples include racing brooms through the park, honing spellcrafting, and hanging out around Mossport. Chucklefish has not yet explained save ownership, shared progression, host rules, or how college schedules adapt in a group.", sourceLevel: "L1", sourceUrl: steam },
      { heading: "No local split-screen", content: "A developer response on Steam says there are no plans for split-screen and that more details on co-op will come later. For now, plan around separate devices and online connections.", sourceLevel: "L3", sourceUrl: "https://steamcommunity.com/app/1846700/discussions/0/651441305622190948" },
      { heading: "Cross-platform status", content: "The Xbox store lists cross-platform multiplayer and cross-platform co-op. A full platform-by-platform cross-play matrix has not been published, so do not assume every PC, Nintendo, and Xbox combination until Chucklefish confirms it.", sourceLevel: "L1", sourceUrl: xbox },
    ], faq: [{ question: "Does Witchbrook have couch co-op?", answer: "No. The developer says there are no plans for split-screen." }, { question: "Can four people play Witchbrook?", answer: "Yes, online co-op supports up to four players." }], internalLinks: ["platforms", "switch", "xbox", "steam"],
  },
  {
    slug: "steam", title: "Witchbrook on Steam: Wishlist & System Requirements", metaDescription: "The Witchbrook Steam page is live. See minimum PC requirements, online co-op, achievements, cloud saves, languages, and the official wishlist link.", h1: "Witchbrook on Steam", intent: "Steam features, wishlist link, and current PC requirements.", priority: "P0", dek: "The Steam page is live now, with a modest early requirements list and support for online co-op, achievements, and cloud saves.", image: "/images/classes.png", imageAlt: "Students attending a practical tea class at Witchbrook College",
    quickFacts: [{ label: "OS", value: "Windows 10+ 64-bit" }, { label: "Memory", value: "8 GB RAM" }, { label: "Storage", value: "2 GB" }, { label: "Co-op", value: "Online" }],
    sections: [
      { heading: "Steam status and features", content: "Witchbrook can be wishlisted on Steam. The page lists single-player, online co-op, Steam achievements, and Steam Cloud. A price and exact release date are not displayed as confirmed launch facts.", sourceLevel: "L1", sourceUrl: steam },
      { heading: "Minimum requirements", content: "The current minimum is a 64-bit Windows 10 or newer system, quad-core processor, 8 GB RAM, a DirectX 11-compatible graphics card with 4 GB VRAM, DirectX 11, and 2 GB of storage. Requirements may change before launch.", sourceLevel: "L1", sourceUrl: steam, bullets: ["OS: Windows 10+, 64-bit", "CPU: Quad-core", "Memory: 8 GB RAM", "Graphics: DX11 compatible, 4 GB VRAM", "Storage: 2 GB"] },
      { heading: "Recommended specification", content: "Steam currently states only that a 64-bit processor and operating system are required in the recommended section. No recommended CPU, GPU, or memory target is listed yet.", sourceLevel: "L1", sourceUrl: steam },
    ], faq: [{ question: "Can I wishlist Witchbrook?", answer: "Yes. The official Steam store page is live and accepts wishlists." }, { question: "Does Witchbrook support Steam Deck?", answer: "Steam Deck compatibility has not been officially rated or announced." }], internalLinks: ["platforms", "release-date", "multiplayer"],
  },
  {
    slug: "classes", title: "Witchbrook Classes & Subjects: What We Know So Far", metaDescription: "Explore Witchbrook classes and magical study areas, including alchemy, divination, herbology, spell-casting, broom flight, and the Arcane Arts.", h1: "Witchbrook Classes & Subjects", intent: "Confirmed magical studies and how classes support progression.", priority: "P1", dek: "Classes are practical tools: they expand what you can craft, solve, sell, and explore across Mossport.", image: "/images/classes.png", imageAlt: "Professor Wixx leading a practical class inside Witchbrook College",
    quickFacts: [{ label: "Study areas", value: "At least 6 revealed" }, { label: "Progression", value: "Exam-gated" }, { label: "Advanced", value: "Arcane Arts" }],
    sections: [
      { heading: "How classes work", content: "College classes teach skills used in assignments, crafting, business orders, and exploration. They are also social spaces for getting to know professors and covenmates. Not every revealed discipline is guaranteed to be a formal class name in the final curriculum.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "Revealed magical studies", content: "Official descriptions reference a growing path from teas, incense, and salves into potion brewing, astrological divination, plant knowledge, spellcasting, broom flight, and advanced rituals.", sourceLevel: "L1", sourceUrl: lifeBlog, bullets: ["Alchemy — teas, salves, and potions", "Divination — tarot by day and constellations by night", "Herbology — magical cultivation and medicine knowledge", "Spell-casting — practical magic and guidance spells", "Broom-flying — indoor basics to licensed outdoor flight", "Arcane Arts — advanced rituals and dangerous subjects"] },
      { heading: "Unlocks and advancement", content: "Classes feed the knowledge collection and prepare you for exams. Passing a grade’s exam set unlocks new classes, spells, activities, and certain dangerous Mossport areas. Arcane Arts is described as an advanced path gated by earlier semester exams.", sourceLevel: "L1", sourceUrl: lifeBlog },
    ], faq: [{ question: "How many classes are in Witchbrook?", answer: "At least six study areas have been described, but the final formal class list is not published." }], internalLinks: ["assignments", "witchy-business", "romance"],
  },
  {
    slug: "assignments", title: "Witchbrook Assignments: Merits, Tasks & Exams Explained", metaDescription: "Learn how Witchbrook assignments work: take weekly college tasks, research solutions, help Mossport residents, earn merits, and qualify for exams.", h1: "Witchbrook Assignments", intent: "The complete confirmed assignment-to-exam loop.", priority: "P1", dek: "Weekly assignments turn classroom knowledge into practical help for Mossport—and earn the merits needed to sit exams.", image: "/images/assignments.png", imageAlt: "Witchbrook students working together on a college assignment",
    quickFacts: [{ label: "Cadence", value: "Weekly posts" }, { label: "Reward", value: "College merits" }, { label: "Purpose", value: "Exam entry" }],
    sections: [
      { heading: "The assignment loop", content: "The college posts tasks during the week. You take what you learned in class into Mossport, speak with residents, identify the problem, consult school-library materials, and put a solution into action.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "Merits and rewards", content: "Completing an assignment earns college merits. These can be spent at the college shop and, more importantly, grant entry to exams. People you help may also send thank-you gifts. Credits are earned separately for helping, side quests, and unlocking knowledge.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "From research to exams", content: "Your knowledge collection records discoveries and practical mastery. Exams test relevant categories—for example, magical medicine may draw on tea, salve, and Herbology knowledge. Passing every required exam advances your grade.", sourceLevel: "L1", sourceUrl: lifeBlog },
    ], faq: [{ question: "What are college merits for?", answer: "Merits buy college-shop items and are required to enter exams." }], internalLinks: ["classes", "witchy-business"],
  },
  {
    slug: "witchy-business", title: "Witchbrook Witchy Business: Start Your Magic Shop Guide", metaDescription: "See how Witchbrook's magic business works: fulfill Mossport orders, unlock client perks, deliver by moped or broom, and sell at Sunday markets.", h1: "Witchbrook Witchy Business", intent: "The confirmed business loop and its links to college progression.", priority: "P1", dek: "Your cottage familiar Fable has a plan: turn college magic into a business that pays for student life.", image: "/images/business.png", imageAlt: "Witchbrook business order board with requests from Mossport residents",
    quickFacts: [{ label: "Orders", value: "Mossport clients" }, { label: "Delivery", value: "Moped or broom" }, { label: "Market", value: "Sunday" }],
    sections: [
      { heading: "Start with local orders", content: "Fable, the cottage familiar, helps you begin a witch business. Mossport residents request magical goods and services, and new college skills expand what you can provide.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "Deliveries and relationships", content: "A moped handles early deliveries. Once you earn a broom license, you can fly orders around the city. Completing requests raises client relationships and unlocks perks and upgrades for the business.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "The Sunday market", content: "On Sundays, you can stock a market stall with goods and negotiate deals with townsfolk. Exact prices, best products, and profit formulas have not been published, so pre-launch calculators would be guesswork.", sourceLevel: "L1", sourceUrl: lifeBlog },
    ], faq: [{ question: "Can you run a shop in Witchbrook?", answer: "You can run a witchy business through orders, deliveries, client upgrades, and a Sunday market stall." }], internalLinks: ["classes", "assignments", "romance"],
  },
  {
    slug: "romance", title: "Witchbrook Romance: Characters, Dating & Relationships", metaDescription: "Witchbrook romance is confirmed. Meet revealed candidates Hana Sato, Pip, Eli, and Cormac, and learn what is known about dates and relationships.", h1: "Witchbrook Romance", intent: "Revealed romance candidates and known relationship mechanics only.", priority: "P1", dek: "Romance is part of life in Mossport, but this is a reveal tracker—not a pretend walkthrough for an unreleased game.", image: "/images/fable.png", imageAlt: "Witchbrook story scene introducing Fable the cottage familiar",
    quickFacts: [{ label: "Romance", value: "Confirmed" }, { label: "Revealed", value: "Hana, Pip, Eli, Cormac" }, { label: "Full roster", value: "TBD" }],
    sections: [
      { heading: "How relationships fit the game", content: "Witchbrook lets you build friendships, find love, go on dates, and choose gifts for romantic outings. Covenmate stories unlock as relationship levels rise and play like bespoke mini visual novels.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "Revealed romance candidates", content: "At least four candidates have been revealed by official and reported character announcements. This is not presented as the final roster.", sourceLevel: "L3", sourceNote: "fan-catalogued community source, cross-reference with official L1 sources", sourceUrl: "https://meowdb.com/db/witchbrook", bullets: ["Hana Sato — upbeat energy linked to the Calico fashion shop", "Pip — witch-mechanic working from a harbour garage", "Cormac — gifted artist associated with The Briny Brush", "Eli — Oracle editor with a School Shop connection"] },
      { heading: "What remains unknown", content: "Exact gift preferences, heart-event requirements, route steps, marriage systems, and the total number of candidates are not confirmed. We will update this page when Chucklefish reveals more.", sourceLevel: "L1", sourceUrl: steam },
    ], faq: [{ question: "How many romance options are in Witchbrook?", answer: "The final number is unknown. Hana, Pip, Eli, and Cormac have been revealed so far." }], internalLinks: ["classes", "witchy-business", "faq"],
  },
  {
    slug: "witchbrook-vs-stardew-valley", title: "Witchbrook vs Stardew Valley: Similarities & Differences", metaDescription: "Compare Witchbrook and Stardew Valley across setting, progression, farming, co-op, romance, business, magic, and traversal to see which suits you.", h1: "Witchbrook vs Stardew Valley", intent: "A neutral, fact-based comparison for cozy life-sim players.", priority: "P2", dek: "Both share cozy life-sim DNA, but one centers a farm and the other builds progression around magic college and a city business.", image: "/images/broom.png", imageAlt: "A witch flying above Mossport as part of Witchbrook traversal",
    quickFacts: [{ label: "Witchbrook", value: "Magic college" }, { label: "Stardew", value: "Farm restoration" }, { label: "Shared", value: "Cozy life sim" }],
    sections: [
      { heading: "Why they feel related", content: "Both use pixel art, seasonal routines, festivals, relationships, crafting, fishing, and a town whose residents follow schedules. Chucklefish published Stardew Valley early in its life, but Witchbrook is developed by Chucklefish with Robotality rather than by ConcernedApe.", sourceLevel: "L1", sourceUrl: official },
      { heading: "The biggest differences", content: "Witchbrook trades the farm-first structure for Witchbrook College, knowledge categories, weekly assignments, exams, spell unlocks, and a client-based magic business. Gardening exists, but it is one activity among college and city systems.", sourceLevel: "L1", sourceUrl: lifeBlog, bullets: ["Magic school vs farm restoration", "Exam progression vs community-center and farm progression", "Client orders and Sunday markets vs crop-selling economy", "Broom and moped travel vs walking, minecarts, and horse", "Visual-novel coven stories vs heart-event structure"] },
      { heading: "Which should you play?", content: "Choose Stardew Valley if you want a proven farm-planning loop available now. Watch Witchbrook if a social RPG built around classes, city errands, spellcraft, and a witch business is the stronger fantasy. They can complement each other rather than compete.", sourceLevel: "L1", sourceUrl: steam },
    ], faq: [{ question: "Is Witchbrook made by the Stardew Valley developer?", answer: "No. Witchbrook is developed by Chucklefish with Robotality; Stardew Valley was created by ConcernedApe." }], internalLinks: ["games-like-witchbrook", "classes", "witchy-business"],
  },
  {
    slug: "games-like-witchbrook", title: "10 Games Like Witchbrook: Cozy Magic & Witch Life Sims", metaDescription: "Play 10 games like Witchbrook while you wait: cozy magic-school adventures, witch life sims, alchemy games, farming RPGs, and supernatural worlds.", h1: "Games Like Witchbrook", intent: "Ten adjacent games organized by the fantasy they share.", priority: "P2", dek: "No game combines every Witchbrook idea, but these ten capture its magic-school, witch-life, alchemy, social, or cozy-sim sides.", image: "/images/college.png", imageAlt: "The green woodland cottage area outside Witchbrook College",
    quickFacts: [{ label: "Picks", value: "10" }, { label: "Closest mood", value: "Cozy magic" }, { label: "Witchbrook", value: "Planned 2026" }],
    sections: [
      { heading: "Cozy life sims with magic", content: "These are the closest matches for daily routines, relationships, crafting, and supernatural flavor.", sourceLevel: "L2", bullets: ["Stardew Valley — the modern farming-life-sim reference point", "Moonlight Peaks — cozy supernatural life with a vampiric twist", "Wylde Flowers — a fully voiced witch-life story", "Sun Haven — magic farming RPG with multiplayer", "Fields of Mistria — retro town life and magic mysteries"] },
      { heading: "Witches, potions, and enchanted towns", content: "Choose these when apprenticeship, alchemy, or magical community matters more than matching Witchbrook’s full life-sim structure.", sourceLevel: "L2", bullets: ["Little Witch in the Woods — pixel-art witch-in-training adventure", "Potion Permit — diagnose townsfolk and brew alchemical remedies", "Kitaria Fables — farming, magic, and action RPG systems"] },
      { heading: "Magic school from another angle", content: "These choices focus directly on magical education but approach it through management or large-scale action RPG design.", sourceLevel: "L2", bullets: ["Spellcaster University — build and manage a school of magic", "Hogwarts Legacy — an open-world action RPG with a very different scale and tone"] },
    ], faq: [{ question: "What is the closest game to Witchbrook?", answer: "Little Witch in the Woods is close to the witch-in-training pixel-art fantasy, while Stardew Valley and Wylde Flowers are stronger life-sim comparisons." }], internalLinks: ["witchbrook-vs-stardew-valley", "classes", "romance"],
  },
  {
    slug: "faq", title: "Witchbrook FAQ: Release, Platforms, Co-op & Romance", metaDescription: "Answers to common Witchbrook questions about the 2026 release, platforms, online co-op, split-screen, romance, classes, business, price, and more.", h1: "Witchbrook FAQ", intent: "A concise answer hub for every major pre-launch question.", priority: "P2", dek: "Fast, sourced answers to the questions that matter before enrolment opens.", image: "/images/hero.png", imageAlt: "Witchbrook College hall filled with aspiring witches",
    quickFacts: [{ label: "Release", value: "2026" }, { label: "Players", value: "1–4 online" }, { label: "Price", value: "TBD" }],
    sections: [
      { heading: "Release and availability", content: "Witchbrook is planned for 2026, with no exact date or price announced. Confirmed platforms are Windows PC, Nintendo Switch, Nintendo Switch 2, Xbox One, and Xbox Series X|S.", sourceLevel: "L1", sourceUrl: official },
      { heading: "Gameplay and progression", content: "You inherit your aunt’s woodland cottage, study at Witchbrook College, complete assignments and exams, collect knowledge, learn spells, run a witch business, and spend free time exploring relationships, fashion, interiors, clubs, cooking, gardening, and festivals.", sourceLevel: "L1", sourceUrl: lifeBlog },
      { heading: "Multiplayer and relationships", content: "Online co-op supports up to four players; split-screen is not planned. Romance and dating are confirmed, but complete candidate lists and route walkthrough details are not available before launch.", sourceLevel: "L1", sourceUrl: steam },
    ], faq: [
      { question: "When does Witchbrook release?", answer: "It is planned for 2026, with no exact date announced." },
      { question: "What platforms will Witchbrook be on?", answer: "Steam PC, Nintendo Switch, Nintendo Switch 2, Xbox One, and Xbox Series X|S." },
      { question: "Is Witchbrook coming to PS5?", answer: "PS5 and PS4 versions have not been announced; other platforms remain TBD." },
      { question: "Is Witchbrook multiplayer?", answer: "Yes. It supports one to four players in online co-op, with no planned split-screen." },
      { question: "Can you romance characters?", answer: "Yes. Romance, dating, and relationship stories are confirmed." },
      { question: "How much will Witchbrook cost?", answer: "No official price has been announced." },
      { question: "Is Witchbrook on Game Pass?", answer: "Game Pass catalogue inclusion has not been confirmed." },
      { question: "Who develops Witchbrook?", answer: "Chucklefish develops and publishes it, with co-development support from Robotality." },
    ], internalLinks: ["release-date", "platforms", "multiplayer", "classes", "assignments", "witchy-business", "romance", "steam"],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
