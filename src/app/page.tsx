import Image from "next/image";
import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { siteFaq } from "@/data/faq";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export default function Home() {
  const priorityGuides = guides.filter((guide) => guide.priority === "P0");
  const collegeGuides = guides.filter((guide) => guide.priority === "P1");
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: absoluteUrl(), description: siteConfig.description };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: siteFaq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <>
    <JsonLd data={[websiteSchema, faqSchema]} />
    <main>
      <section className="home-hero">
        <Image src="/images/hero.png" alt="Official Life at Witchbrook artwork showing the magical college" fill priority sizes="100vw" />
        <div className="hero-scrim" />
        <div className="shell home-hero-content">
          <p className="eyebrow">Independent pre-launch field guide</p>
          <h1>Everything we know<br />before <em>enrolment.</em></h1>
          <p>Witchbrook is a richly detailed life sim and social RPG about studying magic, building a business, and finding your place in the seaside city of Mossport.</p>
          <div className="hero-actions"><Link className="button primary" href="/release-date/">Read the release guide <span>→</span></Link><a className="button ghost" href={siteConfig.steam} target="_blank" rel="nofollow noopener noreferrer">Wishlist on Steam ↗</a></div>
        </div>
        <div className="scroll-note">Scroll to explore <span aria-hidden="true">↓</span></div>
      </section>

      <section className="snapshot-section"><div className="shell snapshot-grid"><div className="snapshot-intro"><p className="eyebrow">The acceptance letter</p><h2>Your new life in Mossport</h2><p>Inherit your aunt’s cottage, join a coven at Witchbrook College, master practical magic, and help a city of residents with lives and routines of their own.</p><Link className="text-link" href="/classes/">Explore college life →</Link></div><div className="snapshot-facts"><div><span>01</span><p>Release window</p><strong>2026</strong></div><div><span>02</span><p>Online co-op</p><strong>1–4 players</strong></div><div><span>03</span><p>Confirmed systems</p><strong>PC · Switch · Xbox</strong></div><div><span>04</span><p>Exact price</p><strong>To be announced</strong></div></div></div></section>

      <section className="guides-section shell"><div className="section-heading"><div><p className="eyebrow">Start here</p><h2>The essential guides</h2></div><p>Clear answers for the questions players are asking now—checked against official sources and careful about what remains unknown.</p></div><div className="card-grid featured">{priorityGuides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}</div></section>

      <section className="feature-band"><div className="shell feature-band-grid"><div className="feature-image"><Image src="/images/college.png" alt="Professor Carlyle greeting a new Witchbrook student outside their cottage" fill sizes="(max-width: 800px) 100vw, 50vw" /></div><div className="feature-copy"><p className="eyebrow">A life sim with a syllabus</p><h2>Study magic.<br />Use it in the city.</h2><p>Classes are only the beginning. Weekly assignments send you into Mossport, knowledge unlocks new exam paths, and every passed grade opens more spells, activities, and places.</p><ul><li><span>✦</span> Learn alchemy, divination, spellcasting, and more</li><li><span>✦</span> Earn merits through practical assignments</li><li><span>✦</span> Run orders by moped, then by broom</li></ul><Link className="button primary" href="/classes/">Open the college guide →</Link></div></div></section>

      <section className="guides-section shell"><div className="section-heading"><div><p className="eyebrow">Inside the systems</p><h2>College, work & relationships</h2></div><Link className="text-link" href="/faq/">Browse all answers →</Link></div><div className="card-grid four">{collegeGuides.map((guide) => <GuideCard key={guide.slug} guide={guide} compact />)}</div></section>

      <section className="video-section"><div className="shell video-grid"><div><p className="eyebrow">First look trailer</p><h2>See Mossport in motion</h2><p>Classrooms, coastal streets, broom rides, dates, and four-player moments—watch the official first-look footage from Chucklefish.</p><a className="text-link" href={siteConfig.trailer} target="_blank" rel="nofollow noopener noreferrer">Watch on YouTube ↗</a></div><div className="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/TIKSGazNOqg" title="Witchbrook first look trailer" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div></div></section>

      <section className="faq-preview shell"><div><p className="eyebrow">Questions, answered</p><h2>Before you pack<br />your spellbooks</h2><p>We separate what’s announced from what’s merely possible.</p><Link className="button ghost" href="/faq/">Read the full FAQ →</Link></div><div className="faq-list">{siteFaq.slice(0, 4).map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></section>

      <section className="oracle-cta"><div className="shell"><span className="oracle-star" aria-hidden="true">✦</span><p className="eyebrow">Official updates</p><h2>Subscribe to the<br /><em>Witchbrook Oracle</em></h2><p>Receive development news and offers directly from Chucklefish. We’ll keep the guides sourced; they’ll keep you close to Mossport.</p><a className="button light" href={siteConfig.newsletter} target="_blank" rel="nofollow noopener noreferrer">Join the Oracle ↗</a></div></section>
    </main>
  </>;
}
