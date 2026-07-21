# Guildrun DB — Codex 开工前最终修订指令

> **Revision**: v2.0 | **Date**: 2026-07-21 | **Replaces**: GUILDRUN_REQUIREMENTS.md v1.0
> **Domain**: guildrunguide.wiki | **Template**: Moonlight Peaks V2 | **Brand**: Guildrun DB
> **Authoritative**: This document supersedes all prior versions.

---

<callout emoji="🚫" background-color="light-red">
## 开工阻断条件

在以下条件全部完成前，Codex 不得将任何数据写入生产代码：

1. **25 英雄数据**必须通过 `heroes-v2-detailed.md` 验证，确认真实 class name / guild name / base stats
2. **职业名**不得使用 Brawler/Cleric 等非官方别名
3. **公会名**必须使用游戏内真实名称（如 L'Héritage, Aegis Global），数量必须由数据文件自动计算
4. **所有计数**（heroes/items/relics/classes/guilds）必须由数据文件自动计算，不得在组件中硬编码
5. **validate-data 脚本通过**后才可部署
</callout>

---

# 1. 竞争定位（修正后）

## 竞品现状

| 站 | 实际状态 |
|----|----------|
| guildrun.wiki | 完整数据站 — 25 英雄详页、162 items、301 relics、机制解释（Rush/Stall/Backup/Difficulty/Economy/Events/Glossary）、系统页面、敌人/阶段数据 |
| guildrun.org | 系统级攻略文章，无独立 hero/item/relic 页 |
| guildrunwiki.wiki | AI 内容农场，可忽略 |

## 我们的核心差异

1. **更好的筛选、排序、搜索和移动端体验**
2. **Hero ↔ Item ↔ Relic ↔ Specialization ↔ Build 双向关联**
3. **每项数据标注游戏版本和来源**（EvidenceBadge）
4. **Build 注明测试版本、难度、核心英雄和来源**
5. **数据变化追踪**（补丁前后对比）
6. **将底层数据翻译为玩家决策指南**
7. **不使用虚构 Tier List，不使用无来源的「Best」**
8. **Versioned data — 不是一次性的静态快照**

## 首页品牌

```
Guildrun DB
Heroes, Items, Relics, Builds & Mechanics
```

- **Title**: `Guildrun DB — Heroes, Items, Relics & Builds`
- **Meta D**: `Independent Guildrun database and guide with hero stats, items, relics, specializations, mechanics, builds, and versioned Demo data.`

---

# 2. 数据来源等级

| Level | Name | 用途 | 约束 |
|-------|------|------|------|
| **L1** | Official | 游戏类型、正式版状态、Demo 日期、平台、语言、FAQ、补丁公告 | Steam 商店页/官方 FAQ/官网 |
| **L2** | Shipped Game Data | Hero stats, abilities, specializations, items, relics, effects, prices, quests, rank modifiers, mechanics constants | **必须来自我方独立 Demo 数据提取，可复现** |
| **L2R** | External Reference | 交叉核对数量/字段、发现遗漏项 | **不得直接复制说明文字、不得热链图片、不得标为独立验证** |
| **L3** | In-Game Observation | 实测截图、Demo 内明确显示、可复现行为、视频时间戳 | 需标注来源 |
| **L4** | Community | Discord/Steam/Reddit/YT 讨论 | **只能标为 community-reported** |

---

# 3. 证据标签

```ts
type EvidenceLevel =
  | "official"
  | "shipped-data"
  | "in-game-observed"
  | "community-reported"
  | "unverified";
```

组件名：`EvidenceBadge`（不是 VerifiedBadge）

显示：Official / Demo Data / Observed In Game / Community Report / Needs Verification

每个详情页必须显示：Demo build / data version、Last updated、Evidence level、Source references

---

# 4. MVP 范围

## P0-A（首发可索引，约 40 页）

```
/                     Home
/demo                 Demo 详情
/heroes               Hero 列表
/heroes/[slug]        × 25（详页）
/items                Item 列表
/relics               Relic 列表
/specializations      Spec paths
/classes              职业与公会
/rush                 Rush 机制
/reserve-heroes       Backup 机制
/patch-notes          更新记录
/sources              数据来源
/methodology          方法论
/about                关于
/contact              联系我们
/privacy              隐私
/terms                条款
```

## P0-B（代码实现但暂不索引）

```
/items/[slug]    × 162（仅 complete 页进入 sitemap）
/relics/[slug]   × 301（仅 complete 页进入 sitemap）
```

详情页必须支持：

```ts
contentStatus: "complete" | "partial" | "hidden";
indexable: boolean;
```

**Item 索引条件**：名称 + rarity + effect + 来源 + Demo build + ≥2 关联实体 + 无 unresolved

**Relic 索引条件**：名称 + rarity + effect + trigger + 来源 + Demo build + ≥2 关联实体 + 无 unresolved

partial 页面：`<meta name="robots" content="noindex,follow">` + 排除 sitemap

## P1

```
/builds           （需 ≥3 个真实 Build 才发布）
/difficulty
/endless-mode
/beginner-guide
/release-date
/faq
/items/[slug]      全量开放
/relics/[slug]     全量开放
```

---

# 5. Build 标准

每个 Build 必须包含：名称、Tested demo build、Tested difficulty、Active heroes、Reserve heroes、Specializations、Core items、Core relics、核心玩法、弱点、来源或测试记录、verified/experimental/community 状态。

**不得发布空白 Build 页或通用 AI Build。**

---

# 6. 数据架构

```
src/data/raw/           ← 原始数据（JSON）
  heroes.json
  items.json
  relics.json
  specializations.json
  systems.json

src/data/generated/     ← 生成数据（JSON）
  heroes.json
  items.json
  relics.json
  search-index.json
  entity-relations.json

src/data/editorial/     ← 编辑内容（TS）
  hero-notes.ts
  builds.ts
  mechanics.ts
  source-log.ts
```

- 原始数据和编辑内容必须分离
- 禁止把全部数据手写进三个巨型 .ts 文件
- 禁止 `dangerouslySetInnerHTML` 渲染导入数据

---

# 7. 实体 Schema

```ts
interface EntityMeta {
  id: string;
  slug: string;
  name: string;
  gameVersion: string;
  extractedAt: string;
  verifiedAt?: string;
  evidenceLevel: EvidenceLevel;
  contentStatus: "complete" | "partial" | "hidden";
  indexable: boolean;
  sourceRefs: string[];
}

interface Hero extends EntityMeta {
  baseClass: string;
  guild?: string;
  attackType: "melee" | "ranged";
  baseStats: Record<string, number | null>;
  abilityName: string;
  abilityActive: string;
  abilityTokens: EffectToken[];
  specializations: { name: string; addsClass?: string; passive: string }[];
  tags: string[];
  relatedItems: string[];
  relatedRelics: string[];
  relatedBuilds: string[];
}

interface EntityRelation {
  fromType: "hero" | "item" | "relic" | "build" | "mechanic";
  fromId: string;
  toType: "hero" | "item" | "relic" | "build" | "mechanic";
  toId: string;
  relation: "uses" | "recommended-for" | "triggers" | "supports" | "counters" | "synergizes-with";
  evidenceLevel: EvidenceLevel;
  sourceRefs: string[];
}
```

Item 与 Relic 必须同时保存：raw effect、structured effect tokens、human-readable editorial explanation

---

# 8. DataTable 与交互

- 首屏 SSR，筛选客户端增强
- 不得将 301 Relic 数据注入所有页面的公共 JS bundle
- Column sort / Multi-filter / Reset / Results count / Mobile card mode / Keyboard accessible / Empty-state / Copy link
- 筛选状态通过 Query String 传递（`?class=` `?rarity=` `?tag=` `?trigger=`）
- 筛选后的 URL 均 canonical 到基础列表页
- 全站搜索：索引按需加载、搜索结果页 noindex、显示类型标签

---

# 9. 验证脚本

```
scripts/validate-data.mjs
scripts/check-routes.mjs
scripts/check-metadata.mjs
```

validate-data 检查项：
- ID/slug 唯一、name 非空
- 所有关联实体存在
- sourceRefs 有效
- class/guild 由数据自动生成，禁止硬编码
- 无非法 rarity
- 无空 effect 但标 complete
- 无 unresolved 数据进 indexable
- 数量变化输出 diff
- 无法识别的职业名拒绝发布

---

# 10. SEO 规则

每页：self canonical、唯一 title/description、Breadcrumb、OG、lastModified、Evidence/version info

结构化数据：Home→WebSite+VideoGame、Listing→CollectionPage、Guide→Article+BreadcrumbList、Detail→WebPage+BreadcrumbList

禁止使用：Best/S-Tier/Ultimate/Complete/Official（除非真实支持）

动态 sitemap 只包含 `contentStatus==="complete" && indexable===true`

未知 slug → 真正的 404

---

# 11. 首页模块顺序

1. Hero search / global search
2. Heroes / Items / Relics 三入口
3. Current Demo data summary
4. Rush / Reserve / Stall 等核心机制
5. Recently updated data
6. Build 模块（仅在有 ≥3 合格内容时显示）
7. Official Steam Demo CTA
8. 来源方法和独立站声明

页脚必须显示：

> Guildrun DB is an independent fan-made database and guide. Not affiliated with or endorsed by Leyline. No game downloads are hosted on this site. Play the official Guildrun Demo through Steam.

---

# 12. 图片与版权

- 不热链 competitor 图片
- 优先 Steam 官方媒体、press assets、我方 Demo 截图
- 游戏文件 icon 本地存储 + 记录来源
- 所有图片填尺寸和 alt
- 不使用 Guildrun 官方 Logo 暗示官方网站

---

# 13. 安全红线

本站不得包含：浏览器通知请求、假病毒提醒、假下载按钮、自动跳转、弹窗广告、第三方 APK、破解下载、可执行文件、伪装 Steam 按钮

外部 Steam 链接统一标注 `Official Steam page` / `Official Demo download`

---

# 14. PAGE_SPEC 摘要

## P0-A（首发可索引）

| # | Slug | Title |
|---|------|-------|
| 1 | `/` | Guildrun DB — Heroes, Items, Relics & Builds |
| 2 | `/demo` | Guildrun Demo — Download, Content & Status |
| 3 | `/heroes` | All 25 Heroes — Stats, Classes & Ranks |
| 4 | `/heroes/[slug]` × 25 | [Name] — Stats, Specializations & Synergies |
| 5 | `/items` | All Items — Stats, Quests & Effects |
| 6 | `/relics` | All Relics — Effects, Quests & Synergies |
| 7 | `/specializations` | All Specializations — Paths & Heroes |
| 8 | `/classes` | Classes & Guilds |
| 9 | `/rush` | Rush Mechanic — Triggers, Heroes & Synergies |
| 10 | `/reserve-heroes` | Reserve Heroes — Backup Keyword & Strategy |
| 11 | `/patch-notes` | Patch Notes & Data Updates |
| 12 | `/sources` | Data Sources & Evidence Levels |
| 13 | `/methodology` | How We Collect & Verify Data |
| 14 | `/about` | About Guildrun DB |
| 15 | `/contact` | Contact & Takedown |
| 16 | `/privacy` | Privacy Policy |
| 17 | `/terms` | Terms of Use |

## P0-B（代码实现，暂不索引）

| # | Slug |
|---|------|
| 18 | `/items/[slug]` × 162 |
| 19 | `/relics/[slug]` × 301 |

## P1

| # | Slug |
|---|------|
| 20 | `/builds` |
| 21 | `/difficulty` |
| 22 | `/endless-mode` |
| 23 | `/beginner-guide` |
| 24 | `/release-date` |
| 25 | `/faq` |

---

# 15. SOURCE_LOG 摘要

| ID | URL | Level |
|----|-----|-------|
| S01 | store.steampowered.com/app/3669200 | L1 |
| S02 | store.steampowered.com/app/4425970 | L1 |
| S03 | steamcommunity.com/app/3669200/discussions/0/570417860284843351/ | L1 |
| S04 | playguildrun.com | L1 |
| S05 | steamcommunity.com/app/3669200 | L4 |
| S06 | discord.gg/guildrun | L4 |
| S07 | YouTube (Retromation/Wanderbots/Gohjoe) | L4 |
| S08 | gematsu.com/2026/07/roguelike-autobattler-guildrun-announced-for-pc | L2R |
| S09 | guildrun.wiki | L2R（仅交叉核对） |

---

# 16. 验收标准

**数据**：25 英雄全部通过当前 Demo 重新核对、职业/公会/属性无冲突、所有计数由数据自动生成、无无来源 Build、无社区观点标为官方事实

**页面**：P0-A 全部 HTTP 200、未知实体 404、无内部死链、无重复 title/description、无 competitor 资源热链、partial 页面 noindex、sitemap/robots/canonical 使用 `https://guildrunguide.wiki`

**性能**：首页和详页不加载全部数据库、表格移动端可用、首屏图片不 lazy-load、JS 禁用时仍可看到主要数据

**内容**：Rush/Reserve 含真实机制+实体关联+决策指南、每个已索引详页提供明确用户价值、不批量生成无价值的薄页面

---

# 17. 最终开工顺序

1. ✅ 老大审阅需求文档 → 已修订
2. 🔄 **重新验证 heroes 数据**（heroes-v2 抓取中）
3. ⏳ 建数据 schema 和 validate-data 脚本
4. ⏳ 搭首页、列表页、详情模板
5. ⏳ 先开放 25 个 hero 详情
6. ⏳ 完成 demo / rush / reserve / sources / methodology
7. ⏳ 验证 item/relic 后分批开放索引
8. ⏳ 收集 ≥3 真实 Build 后再上线 builds
9. ⏳ DNS/GSC/AdSense 收官
