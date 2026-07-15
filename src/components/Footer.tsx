import Link from "next/link";
import { guides } from "@/data/guides";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark" aria-hidden="true">✦</span><span><strong>Witchbrook</strong><small>Field Guide</small></span></div>
          <p>An independent, source-led companion for aspiring witches. Built for accurate pre-launch answers, not invented walkthroughs.</p>
        </div>
        <div><h2>Start here</h2><Link href="/release-date/">Release date</Link><Link href="/platforms/">Platforms</Link><Link href="/multiplayer/">Online co-op</Link><Link href="/faq/">FAQ</Link></div>
        <div><h2>College life</h2>{guides.filter((g) => ["classes", "assignments", "witchy-business", "romance"].includes(g.slug)).map((g) => <Link key={g.slug} href={`/${g.slug}/`}>{g.h1.replace("Witchbrook ", "")}</Link>)}</div>
        <div><h2>Official links</h2><a href={siteConfig.official} target="_blank" rel="nofollow noopener noreferrer">Official site ↗</a><a href={siteConfig.steam} target="_blank" rel="nofollow noopener noreferrer">Steam page ↗</a><a href={siteConfig.newsletter} target="_blank" rel="nofollow noopener noreferrer">Witchbrook Oracle ↗</a></div>
      </div>
      <div className="shell footer-bottom"><p>Updated {siteConfig.updated}. Screenshots © Chucklefish, used for editorial identification.</p><p>Fan-made and not affiliated with Chucklefish or Robotality.</p></div>
    </footer>
  );
}
