import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/data/guides";
import { getGuide } from "@/data/guides";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { GuideCard } from "./GuideCard";
import { JsonLd } from "./JsonLd";

export function GuidePage({ guide }: { guide: Guide }) {
  const related = guide.internalLinks.map(getGuide).filter((item): item is Guide => Boolean(item)).slice(0, 4);
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: guide.h1,
    description: guide.metaDescription, image: absoluteUrl(guide.image), datePublished: "2026-07-15", dateModified: "2026-07-15",
    author: { "@type": "Organization", name: siteConfig.name }, publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: absoluteUrl(`/${guide.slug}/`),
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
    { "@type": "ListItem", position: 2, name: guide.h1, item: absoluteUrl(`/${guide.slug}/`) },
  ] };
  const faqSchema = guide.faq?.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) } : null;

  return (
    <>
      <JsonLd data={faqSchema ? [articleSchema, breadcrumbSchema, faqSchema] : [articleSchema, breadcrumbSchema]} />
      <main>
        <section className="guide-hero">
          <div className="hero-image-wrap"><Image src={guide.image} alt={guide.imageAlt} fill priority sizes="100vw" /></div>
          <div className="hero-scrim" />
          <div className="shell guide-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{guide.h1}</span></nav>
            <p className="eyebrow">Witchbrook Guide · {guide.priority}</p>
            <h1>{guide.h1}</h1>
            <p className="guide-dek">{guide.dek}</p>
            <p className="byline">Source checked · Updated {siteConfig.updated}</p>
          </div>
        </section>

        <section className="shell facts-strip" aria-label="Quick facts">
          {guide.quickFacts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
        </section>

        <div className="shell article-layout">
          <article className="article-body">
            <div className="verdict"><span aria-hidden="true">✦</span><div><strong>In brief</strong><p>{guide.intent}</p></div></div>
            {guide.sections.map((section) => (
              <section key={section.heading} id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                <h2>{section.heading}</h2><p>{section.content}</p>
                {section.bullets && <ul className="detail-list">{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.sourceUrl && <a className="source-link" href={section.sourceUrl} target="_blank" rel="nofollow noopener noreferrer"><span>{section.sourceLevel}</span> View source ↗</a>}
              </section>
            ))}
            {guide.faq && guide.faq.length > 0 && <section className="faq-section"><p className="eyebrow">Quick answers</p><h2>{guide.h1} FAQ</h2>{guide.faq.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</section>}
            <aside className="update-note"><p className="eyebrow">Pre-launch policy</p><h2>What we won’t guess</h2><p>No fabricated dates, price estimates, gift lists, exam answers, character schedules, or pretend hands-on claims. We’ll update this guide when official information changes.</p></aside>
          </article>
          <aside className="article-sidebar">
            <div className="toc"><p className="eyebrow">On this page</p>{guide.sections.map((section, index) => <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}><span>0{index + 1}</span>{section.heading}</a>)}</div>
            <div className="sidebar-cta"><span aria-hidden="true">✦</span><h2>Join the Oracle</h2><p>Get official Witchbrook news directly from Chucklefish.</p><a href={siteConfig.newsletter} target="_blank" rel="nofollow noopener noreferrer">Subscribe ↗</a></div>
          </aside>
        </div>

        {related.length > 0 && <section className="related-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Keep exploring</p><h2>Related field notes</h2></div><Link className="text-link" href="/">All guides →</Link></div><div className="card-grid four">{related.map((item) => <GuideCard key={item.slug} guide={item} compact />)}</div></div></section>}
      </main>
    </>
  );
}
