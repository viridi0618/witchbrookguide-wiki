import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidePage } from "@/components/GuidePage";
import { getGuide, guides } from "@/data/guides";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const dynamicParams = false;
export function generateStaticParams() { return guides.map((guide) => ({ slug: guide.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const guide = getGuide(slug); if (!guide) return {};
  const url = absoluteUrl(`/${guide.slug}/`);
  return { title: guide.title, description: guide.metaDescription, alternates: { canonical: url },
    openGraph: { type: "article", siteName: siteConfig.name, title: guide.title, description: guide.metaDescription, url, images: [{ url: guide.image, width: 1280, height: 720, alt: guide.imageAlt }] },
    twitter: { card: "summary_large_image", title: guide.title, description: guide.metaDescription, images: [guide.image] } };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const guide = getGuide(slug); if (!guide) notFound(); return <GuidePage guide={guide} />; }
