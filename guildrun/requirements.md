<callout emoji="🔑" background-color="light-blue">
**项目关键信息**<br/>
**域名**: guildrunguide.wiki &nbsp;|&nbsp; **模板**: Moonlight Peaks V2 &nbsp;|&nbsp; **品牌**: Guildrun DB<br/>
**数据来源**: guildrun.wiki (L2 datamine) + Steam 官方 (L1) + 社区 (L3)<br/>
**日期**: 2026-07-21
</callout>

---

## 竞品侦察

<lark-table column-widths="130,180,180,240" header-row="true">
<lark-tr>
<lark-td>
**域名**
</lark-td>
<lark-td>
**类型**
</lark-td>
<lark-td>
**数据深度**
</lark-td>
<lark-td>
**我们的差异机会**
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
guildrun.wiki
</lark-td>
<lark-td>
纯数据站
</lark-td>
<lark-td>
极深 — 162 items, 301 relics, 25 heroes, 211 enemies, 247 stages
</lark-td>
<lark-td>
<text color="red">最强竞品</text> — 但无 Guide 内容, 无 Build 关联, 无 FAQ。英雄详页全部 404, 仅有列表无独立页
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
guildrun.org
</lark-td>
<lark-td>
攻略文章型
</lark-td>
<lark-td>
浅 — 无单个 hero/item/relic 独立页, 承认等待 official name list
</lark-td>
<lark-td>
内容写得好（有人味）但无数据支撑
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
guildrunwiki.wiki
</lark-td>
<lark-td>
AI 内容农场
</lark-td>
<lark-td>
零 — 列表页 404, 全 AI 编造
</lark-td>
<lark-td>
可忽略
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
gguildrun.wiki
</lark-td>
<lark-td>
已死
</lark-td>
<lark-td>
DNS 不存在
</lark-td>
<lark-td>
—
</lark-td>
</lark-tr>
</lark-table>

<callout emoji="🎯" background-color="light-green">
**我们的定位**: 真实数据 + 人味攻略 + 可筛选/可排序交互。<br/>
guildrun.wiki 守数据但缺 Guide, 我们守 Guide 但共享数据源 — 差异化互补。
</callout>

---

## PAGE_SPEC — 页面规格

### P0（MVP 必做 — 11 页）

<lark-table column-widths="60,140,110,420" header-row="true">
<lark-tr>
<lark-td>
**#**
</lark-td>
<lark-td>
**Slug**
</lark-td>
<lark-td>
**Title**
</lark-td>
<lark-td>
**内容**
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
1
</lark-td>
<lark-td>
`/`
</lark-td>
<lark-td>
Guildrun DB — Heroes, Builds & Database
</lark-td>
<lark-td>
搜索框 + 3 数据入口卡片(Heroes/Items/Relics) + Featured Builds + Rush 简介 + 更新记录 + Footer "Not affiliated with Leyline"
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
2
</lark-td>
<lark-td>
`/heroes`
</lark-td>
<lark-td>
All 25 Heroes — Stats, Classes & Ranks
</lark-td>
<lark-td>
可筛选 DataTable: Icon/Name/Class/Guild/HP/Atk/Mag/Def/Crit/AtkSpd/Tags — 按 Class(7)/Guild(6)/Tag/AtkType 筛选, 可排序
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
3
</lark-td>
<lark-td>
`/heroes/[slug]`
</lark-td>
<lark-td>
[Name] — Stats, Specs & Builds
</lark-td>
<lark-td>
<text color="blue">25 页</text> — 基础信息卡 + 13项 Base Stats 表 + Ability 格式化 + Specialization 树 + Rush/Stall/Backup 标记 + 推荐物品(3-5) + 推荐遗物(3-5) + 搭配英雄(2-3) + Data verified badge
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
4
</lark-td>
<lark-td>
`/items`
</lark-td>
<lark-td>
All 162 Items — Stats, Quests & Effects
</lark-td>
<lark-td>
可筛选 DataTable — 按 Rarity/Class/Stat Type 筛选
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
5
</lark-td>
<lark-td>
`/items/[slug]`
</lark-td>
<lark-td>
[Item Name] — Stats, Quest & Synergies
</lark-td>
<lark-td>
<text color="blue">162 页</text> — 详情卡: stats/rarity/effect/quest/quest reward + hero 关联
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
6
</lark-td>
<lark-td>
`/relics`
</lark-td>
<lark-td>
All 301 Relics — Effects, Quests & Synergies
</lark-td>
<lark-td>
可筛选 DataTable — 按 Rarity/Trigger Type/Class 筛选
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
7
</lark-td>
<lark-td>
`/relics/[slug]`
</lark-td>
<lark-td>
[Relic Name] — Effect, Quest & Synergies
</lark-td>
<lark-td>
<text color="blue">301 页</text> — 详情卡: effect/quest/rarity + 阵容关联
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
8
</lark-td>
<lark-td>
`/specializations`
</lark-td>
<lark-td>
All 180 Specializations — Paths & Heroes
</lark-td>
<lark-td>
专精路径分组表格 — 按英雄/class 分组
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
9
</lark-td>
<lark-td>
`/builds`
</lark-td>
<lark-td>
Community Builds & Team Compositions
</lark-td>
<lark-td>
按类型分组(Rush/Stall/Burn/Frost/Crit/Shield/Econ) — BuildCard: 核心英雄 + 核心遗物 + 核心物品 + 难度 + 策略
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
10
</lark-td>
<lark-td>
`/rush`
</lark-td>
<lark-td>
Rush Mechanic Explained — Triggers, Heroes & Synergies
</lark-td>
<lark-td>
<text color="orange">攻略长文</text> — 机制解释 + Rush 英雄列表 + Rush 物品 + Acceleration 遗物系列 + Rush Build 推荐
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
11
</lark-td>
<lark-td>
`/reserve-heroes`
</lark-td>
<lark-td>
Reserve Heroes — Backup Keyword & Strategy
</lark-td>
<lark-td>
<text color="orange">攻略长文</text> — Reserve/Backup 机制 + Backup 英雄列表 + 上场vs备用决策逻辑
</lark-td>
</lark-tr>
</lark-table>

### P1（上线后补 — 7 页）

| # | Slug | Title |
|---|------|-------|
| 12 | `/difficulty` | Difficulty Levels & Red Rift |
| 13 | `/endless-mode` | Endless Mode & Leaderboards |
| 14 | `/beginner-guide` | Beginner's Guide |
| 15 | `/patch-notes` | Patch Notes & Updates |
| 16 | `/release-date` | Release Date & Roadmap |
| 17 | `/classes` | 7 Classes & 6 Guilds |
| 18 | `/faq` | Frequently Asked Questions |

---

## SOURCE_LOG — 数据来源

<lark-table column-widths="50,200,60,340" header-row="true">
<lark-tr>
<lark-td>
**ID**
</lark-td>
<lark-td>
**URL**
</lark-td>
<lark-td>
**Level**
</lark-td>
<lark-td>
**提供数据**
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S01
</lark-td>
<lark-td>
store.steampowered.com/app/3669200/Guildrun/
</lark-td>
<lark-td>
L1 Official
</lark-td>
<lark-td>
游戏描述, 25 heroes, 300+ relics, 100+ items, 8 difficulties
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S02
</lark-td>
<lark-td>
Demo page
</lark-td>
<lark-td>
L1 Official
</lark-td>
<lark-td>
系统要求, 评测(542), 7 种语言
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S03
</lark-td>
<lark-td>
Steam FAQ
</lark-td>
<lark-td>
L1 Official
</lark-td>
<lark-td>
2027 正式版, 买断制, Demo 进度继承, Steam Deck, 无 AI 美术
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S04
</lark-td>
<lark-td>
playguildrun.com
</lark-td>
<lark-td>
L1 Official
</lark-td>
<lark-td>
官网介绍, Discord 链接, 周更说明
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S05-S10
</lark-td>
<lark-td>
guildrun.wiki/*
</lark-td>
<lark-td>
L2 Datamine
</lark-td>
<lark-td>
25 heroes base stats + 162 items 完整数据 + 301 relics 完整数据 + 211 enemies + 247 stages + 68 events + 137 abilities + 99 rank modifiers + classes/guilds + economy + difficulty
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S11
</lark-td>
<lark-td>
Steam Community
</lark-td>
<lark-td>
L3 Community
</lark-td>
<lark-td>
玩家问题: rush 触发, reserve hero 用法
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S12
</lark-td>
<lark-td>
discord.gg/guildrun
</lark-td>
<lark-td>
L3 Community
</lark-td>
<lark-td>
社区 Build, FAQ
</lark-td>
</lark-tr>
<lark-tr>
<lark-td>
S13
</lark-td>
<lark-td>
YT: Retromation/Wanderbots/Gohjoe
</lark-td>
<lark-td>
L4 Observation
</lark-td>
<lark-td>
实战验证, synergy 发现
</lark-td>
</lark-tr>
</lark-table>

---

## CONTENT_DATA — 数据汇总

<grid cols="3">
<column>

<callout emoji="⚔️" background-color="light-blue">
**Heroes: 25**<br/>
7 职业 / 5 公会<br/>
13 项 base stats 每英雄<br/>
ability searchText<br/>
potential classes/tags/stat keys
</callout>

</column>
<column>

<callout emoji="🗡️" background-color="light-green">
**Items: 162**<br/>
Common 22 / Rare 48<br/>
Epic 36 / Unique 44<br/>
Legendary 2 / Starting<br/>
含 stats/effect/quest/cost
</callout>

</column>
<column>

<callout emoji="💎" background-color="light-orange">
**Relics: 301**<br/>
Common 30 / Rare 50<br/>
Epic 50 / Legendary 25<br/>
Unique 126 / Starting 10<br/>
含 effect/quest/price/trigger
</callout>

</column>
</grid>

<callout emoji="⚠️" background-color="light-yellow">
**已知缺口**: guildrun.wiki 英雄详页全部 404 — hero 的 position/lore 字段缺失。<br/>
Ability 描述来自 searchText 原始数据, 需龙虾格式化为可读文章。<br/>
Builds 内容需从 Discord/Reddit/YT 额外收集。
</callout>


---

## Heroes Data — 25 英雄完整属性表

<lark-table column-widths="70,70,50,50,40,60,60,60,60,50,50" header-row="true">
<lark-tr>
<lark-td>**Name**</lark-td>
<lark-td>**Class**</lark-td>
<lark-td>**Guild**</lark-td>
<lark-td>**Type**</lark-td>
<lark-td>**Tags**</lark-td>
<lark-td>**HP**</lark-td>
<lark-td>**Atk**</lark-td>
<lark-td>**Mag**</lark-td>
<lark-td>**Def**</lark-td>
<lark-td>**Crit**</lark-td>
<lark-td>**AtkSpd**</lark-td>
</lark-tr>
<lark-tr><lark-td>Aria</lark-td><lark-td>Mage</lark-td><lark-td>Luxury</lark-td><lark-td>Ranged</lark-td><lark-td>Frost, Burn</lark-td><lark-td>600</lark-td><lark-td>23</lark-td><lark-td>25</lark-td><lark-td>26</lark-td><lark-td>15%</lark-td><lark-td>0.40</lark-td></lark-tr>
<lark-tr><lark-td>Dragomir</lark-td><lark-td>Assassin</lark-td><lark-td>Corporate</lark-td><lark-td>Melee</lark-td><lark-td>Shards, Crit, Omnivamp</lark-td><lark-td>800</lark-td><lark-td>35</lark-td><lark-td>0</lark-td><lark-td>40</lark-td><lark-td>50%</lark-td><lark-td>0.45</lark-td></lark-tr>
<lark-tr><lark-td>Fiona</lark-td><lark-td>Cleric</lark-td><lark-td>Emerald</lark-td><lark-td>Ranged</lark-td><lark-td>Shields, Healing, Debuff</lark-td><lark-td>700</lark-td><lark-td>18</lark-td><lark-td>22</lark-td><lark-td>30</lark-td><lark-td>10%</lark-td><lark-td>0.35</lark-td></lark-tr>
<lark-tr><lark-td>Funke</lark-td><lark-td>Brawler</lark-td><lark-td>Gamblers</lark-td><lark-td>Melee</lark-td><lark-td>Burn, Attack, Defense</lark-td><lark-td>1000</lark-td><lark-td>28</lark-td><lark-td>0</lark-td><lark-td>45</lark-td><lark-td>10%</lark-td><lark-td>0.50</lark-td></lark-tr>
<lark-tr><lark-td>Grace</lark-td><lark-td>Cleric</lark-td><lark-td>Artisan</lark-td><lark-td>Ranged</lark-td><lark-td>Shields, Healing</lark-td><lark-td>650</lark-td><lark-td>15</lark-td><lark-td>28</lark-td><lark-td>25</lark-td><lark-td>10%</lark-td><lark-td>0.30</lark-td></lark-tr>
<lark-tr><lark-td>Gustav</lark-td><lark-td>Duelist</lark-td><lark-td>Gamblers</lark-td><lark-td>Melee</lark-td><lark-td>Rush, Crit, AtkSpd</lark-td><lark-td>750</lark-td><lark-td>30</lark-td><lark-td>0</lark-td><lark-td>30</lark-td><lark-td>35%</lark-td><lark-td>0.60</lark-td></lark-tr>
<lark-tr><lark-td>Hoyoung</lark-td><lark-td>Mystic</lark-td><lark-td>Artisan</lark-td><lark-td>Ranged</lark-td><lark-td>Mana, Shields</lark-td><lark-td>650</lark-td><lark-td>15</lark-td><lark-td>30</lark-td><lark-td>20</lark-td><lark-td>10%</lark-td><lark-td>0.35</lark-td></lark-tr>
<lark-tr><lark-td>Irini</lark-td><lark-td>Duelist</lark-td><lark-td>Corporate</lark-td><lark-td>Melee</lark-td><lark-td>Rush, Attack, AtkSpd</lark-td><lark-td>700</lark-td><lark-td>32</lark-td><lark-td>0</lark-td><lark-td>28</lark-td><lark-td>30%</lark-td><lark-td>0.55</lark-td></lark-tr>
<lark-tr><lark-td>Kai</lark-td><lark-td>Brawler</lark-td><lark-td>Luxury</lark-td><lark-td>Melee</lark-td><lark-td>Rush, Crit</lark-td><lark-td>950</lark-td><lark-td>30</lark-td><lark-td>0</lark-td><lark-td>42</lark-td><lark-td>20%</lark-td><lark-td>0.48</lark-td></lark-tr>
<lark-tr><lark-td>Karsu</lark-td><lark-td>Vanguard</lark-td><lark-td>Luxury</lark-td><lark-td>Melee</lark-td><lark-td>Defense, Stall</lark-td><lark-td>1200</lark-td><lark-td>20</lark-td><lark-td>0</lark-td><lark-td>55</lark-td><lark-td>5%</lark-td><lark-td>0.40</lark-td></lark-tr>
<lark-tr><lark-td>Logan</lark-td><lark-td>Duelist</lark-td><lark-td>Artisan</lark-td><lark-td>Melee</lark-td><lark-td>Rush, Omnivamp</lark-td><lark-td>720</lark-td><lark-td>33</lark-td><lark-td>0</lark-td><lark-td>25</lark-td><lark-td>28%</lark-td><lark-td>0.58</lark-td></lark-tr>
<lark-tr><lark-td>Ming</lark-td><lark-td>Mage</lark-td><lark-td>Corporate</lark-td><lark-td>Ranged</lark-td><lark-td>Mana, Starting Mana</lark-td><lark-td>580</lark-td><lark-td>18</lark-td><lark-td>32</lark-td><lark-td>22</lark-td><lark-td>12%</lark-td><lark-td>0.35</lark-td></lark-tr>
<lark-tr><lark-td>Niklas</lark-td><lark-td>Vanguard</lark-td><lark-td>Emerald</lark-td><lark-td>Melee</lark-td><lark-td>Defense, Stall, Shields</lark-td><lark-td>1100</lark-td><lark-td>22</lark-td><lark-td>0</lark-td><lark-td>50</lark-td><lark-td>8%</lark-td><lark-td>0.42</lark-td></lark-tr>
<lark-tr><lark-td>Nyx</lark-td><lark-td>Assassin</lark-td><lark-td>Gamblers</lark-td><lark-td>Melee</lark-td><lark-td>Stealth, Crit, Rush</lark-td><lark-td>750</lark-td><lark-td>38</lark-td><lark-td>0</lark-td><lark-td>30</lark-td><lark-td>55%</lark-td><lark-td>0.50</lark-td></lark-tr>
<lark-tr><lark-td>Pimenta</lark-td><lark-td>Brawler</lark-td><lark-td>Gamblers</lark-td><lark-td>Melee</lark-td><lark-td>Burn, Attack</lark-td><lark-td>980</lark-td><lark-td>35</lark-td><lark-td>0</lark-td><lark-td>38</lark-td><lark-td>15%</lark-td><lark-td>0.45</lark-td></lark-tr>
<lark-tr><lark-td>Pollen</lark-td><lark-td>Mystic</lark-td><lark-td>Emerald</lark-td><lark-td>Ranged</lark-td><lark-td>Shields, Healing, Mana</lark-td><lark-td>600</lark-td><lark-td>12</lark-td><lark-td>28</lark-td><lark-td>22</lark-td><lark-td>8%</lark-td><lark-td>0.32</lark-td></lark-tr>
<lark-tr><lark-td>Ratna</lark-td><lark-td>Cleric</lark-td><lark-td>Corporate</lark-td><lark-td>Ranged</lark-td><lark-td>Shields, Debuff</lark-td><lark-td>680</lark-td><lark-td>16</lark-td><lark-td>24</lark-td><lark-td>28</lark-td><lark-td>10%</lark-td><lark-td>0.33</lark-td></lark-tr>
<lark-tr><lark-td>Reyna</lark-td><lark-td>Assassin</lark-td><lark-td>Corporate</lark-td><lark-td>Melee</lark-td><lark-td>Stealth, Crit</lark-td><lark-td>720</lark-td><lark-td>40</lark-td><lark-td>0</lark-td><lark-td>28</lark-td><lark-td>60%</lark-td><lark-td>0.52</lark-td></lark-tr>
<lark-tr><lark-td>Rip</lark-td><lark-td>Vanguard</lark-td><lark-td>Artisan</lark-td><lark-td>Melee</lark-td><lark-td>Defense, Stall</lark-td><lark-td>1150</lark-td><lark-td>25</lark-td><lark-td>0</lark-td><lark-td>52</lark-td><lark-td>5%</lark-td><lark-td>0.38</lark-td></lark-tr>
<lark-tr><lark-td>Rowan</lark-td><lark-td>Mystic</lark-td><lark-td>Luxury</lark-td><lark-td>Ranged</lark-td><lark-td>Mana, Frost</lark-td><lark-td>620</lark-td><lark-td>14</lark-td><lark-td>30</lark-td><lark-td>20</lark-td><lark-td>10%</lark-td><lark-td>0.33</lark-td></lark-tr>
<lark-tr><lark-td>Sal</lark-td><lark-td>Brawler</lark-td><lark-td>Emerald</lark-td><lark-td>Melee</lark-td><lark-td>Attack, Omnivamp</lark-td><lark-td>900</lark-td><lark-td>38</lark-td><lark-td>0</lark-td><lark-td>35</lark-td><lark-td>18%</lark-td><lark-td>0.47</lark-td></lark-tr>
<lark-tr><lark-td>Skorn</lark-td><lark-td>Vanguard</lark-td><lark-td>Gamblers</lark-td><lark-td>Melee</lark-td><lark-td>Defense, Burn</lark-td><lark-td>1050</lark-td><lark-td>28</lark-td><lark-td>0</lark-td><lark-td>48</lark-td><lark-td>8%</lark-td><lark-td>0.40</lark-td></lark-tr>
<lark-tr><lark-td>Tilly</lark-td><lark-td>Duelist</lark-td><lark-td>Emerald</lark-td><lark-td>Ranged</lark-td><lark-td>Rush, AtkSpd</lark-td><lark-td>680</lark-td><lark-td>28</lark-td><lark-td>0</lark-td><lark-td>24</lark-td><lark-td>32%</lark-td><lark-td>0.65</lark-td></lark-tr>
<lark-tr><lark-td>Yuuna</lark-td><lark-td>Mage</lark-td><lark-td>Artisan</lark-td><lark-td>Ranged</lark-td><lark-td>Frost, Mana</lark-td><lark-td>620</lark-td><lark-td>16</lark-td><lark-td>33</lark-td><lark-td>22</lark-td><lark-td>12%</lark-td><lark-td>0.33</lark-td></lark-tr>
<lark-tr><lark-td>Zuri</lark-td><lark-td>Assassin</lark-td><lark-td>Luxury</lark-td><lark-td>Melee</lark-td><lark-td>Stealth, Crit, Rush</lark-td><lark-td>700</lark-td><lark-td>42</lark-td><lark-td>0</lark-td><lark-td>26</lark-td><lark-td>65%</lark-td><lark-td>0.55</lark-td></lark-tr>
</lark-table>

### 职业分布

<grid cols="2">
<column>

| Class | 数量 | Heroes |
|-------|------|--------|
| Assassin | 4 | Dragomir, Nyx, Reyna, Zuri |
| Brawler | 4 | Funke, Kai, Pimenta, Sal |
| Cleric | 3 | Fiona, Grace, Ratna |
| Duelist | 4 | Gustav, Irini, Logan, Tilly |

</column>
<column>

| Class | 数量 | Heroes |
|-------|------|--------|
| Mage | 3 | Aria, Ming, Yuuna |
| Mystic | 3 | Hoyoung, Pollen, Rowan |
| Vanguard | 4 | Karsu, Niklas, Rip, Skorn |

</column>
</grid>

### 公会分布（纯 cosmetic, 无 gameplay bonus）

| Guild | 数量 | Heroes |
|-------|------|--------|
| Artisan | 5 | Grace, Hoyoung, Logan, Rip, Yuuna |
| Corporate | 5 | Dragomir, Irini, Ming, Ratna, Reyna |
| Emerald | 5 | Fiona, Niklas, Pollen, Sal, Tilly |
| Gamblers | 5 | Funke, Gustav, Nyx, Pimenta, Skorn |
| Luxury | 5 | Aria, Kai, Karsu, Rowan, Zuri |

---

## Items 数据 — 162 个

<grid cols="2">
<column>

| Rarity | Count | Price |
|--------|-------|-------|
| Common | 22 | 5 Shards |
| Rare | 48 | 15 Shards |
| Epic | 36 | 25 Shards |
| Unique | 44 | Not sold |
| Legendary | 2 | — |

</column>
<column>

**关键分类**:
- **Rush-related** (8+): Adrenal Eye, Eye of Haste, Crown of Haste...
- **Stall-related** (8+): Eye of Patience, Crown of Patience...
- **Class-specific** (15+): Assassin's/Duelist's 专属系列
- **Frost** (6), **Burn** (4), **Shield** (4), **Economy** (3)

</column>
</grid>

**完整 162 物品数据含精确 stats/effect/quest/cost — 见 `items-raw.md`**

---

## Relics 数据 — 301 个

| Rarity | Count | Price |
|--------|-------|-------|
| Common | 30 | 10 Shards |
| Rare | 50 | 20 Shards |
| Epic | 50 | 30 Shards |
| Legendary | 25 | 40 Shards |
| Unique | 126 | Not sold |
| Single-Battle | 10 | Not sold |
| Starting | 10 | Free |

**核心 Archetypes**: Acceleration(15) / Patience(8) / Assassin(12) / Burn(8) / Frost(8) / Critical(6) / Arcane(6) / Poison(6) / Economy(10) / Class Crests(6)

**完整 301 遗物数据含精确 effect/quest/price/trigger — 见 `relics-raw.md`**

---

## 技术需求

### 新增组件

| Component | 用途 |
|-----------|------|
| `DataTable` | 可排序/可筛选数据表 |
| `FilterBar` | 多条件筛选栏 |
| `HeroCard` / `ItemCard` / `RelicCard` | 详情卡片 |
| `BuildCard` | Build 推荐卡片 |
| `VerifiedBadge` | confirmed/observed/unverified 标记 |
| `SynergyLink` | 关联跳转(物品→英雄, 遗物→阵容) |
| `SearchInput` | 客户端搜索 |
| `TagChip` | 标签 pill (Frost=蓝, Burn=红, Rush=金, Stall=紫) |

### 路由结构

```
/                  → Home
/heroes            → DataTable + FilterBar
/heroes/[slug]     → Hero detail (×25)
/items             → DataTable + FilterBar
/items/[slug]      → Item detail (×162)
/relics            → DataTable + FilterBar
/relics/[slug]     → Relic detail (×301)
/specializations   → Spec paths (P0)
/builds            → Build list (P0)
/rush              → Rush 攻略 (P0)
/reserve-heroes    → Reserve 攻略 (P0)
/difficulty        → 难度系统 (P1)
/endless-mode      → 无尽模式 (P1)
/beginner-guide    → 新手指南 (P1)
/patch-notes       → 更新记录 (P1)
/release-date      → 正式版状态 (P1)
/classes           → 职业公会 (P1)
/faq               → FAQ (P1)
```

### 数据文件

| 文件 | 内容 |
|------|------|
| `src/data/heroes.ts` | 25 heroes: name/slug/class/guild/stats/tags/potential/searchText |
| `src/data/items.ts` | 162 items: name/slug/rarity/stats/effect/quest/price |
| `src/data/relics.ts` | 301 relics: name/slug/rarity/effect/quest/price/trigger |
| `src/data/classes.ts` | 7 classes + 6 guilds + mechanics |
| `src/data/mechanics.ts` | Rush/Stall/Backup/Burn/Frost/Poison/Shield definitions |

---

## 开工顺序

1. ✅ 老大审阅需求文档 → 域名/模板/数据策略确认
2. ✅ 龙虾拉数据（heroes-raw / items-raw / relics-raw / systems-raw）
3. ✅ 整理三件套（PAGE_SPEC + SOURCE_LOG + CONTENT_DATA）
4. 🔜 **老大审核此文档** ← 当前
5. ⏳ Codex 写框架: 页面路由 + 组件 + SEO
6. ⏳ 龙虾填充人味内容: rush/reserve/beginner guide
7. ⏳ 配图
8. ⏳ 老大收官: DNS/GSC/AdSense
