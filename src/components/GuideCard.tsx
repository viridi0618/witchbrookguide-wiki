import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide, compact = false }: { guide: Guide; compact?: boolean }) {
  return (
    <article className={`guide-card${compact ? " compact" : ""}`}>
      <Link className="card-image" href={`/${guide.slug}/`} aria-label={`Read ${guide.h1}`}>
        <Image src={guide.image} alt={guide.imageAlt} fill sizes={compact ? "(max-width: 700px) 100vw, 30vw" : "(max-width: 700px) 100vw, 50vw"} />
        <span className="priority">{guide.priority}</span>
      </Link>
      <div className="card-body">
        <p className="card-kicker">{guide.intent}</p>
        <h3><Link href={`/${guide.slug}/`}>{guide.h1}</Link></h3>
        {!compact && <p>{guide.dek}</p>}
        <Link className="text-link" href={`/${guide.slug}/`}>Open guide <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
