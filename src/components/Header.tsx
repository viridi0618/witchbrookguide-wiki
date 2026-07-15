import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Witchbrook Guide home">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span><strong>Witchbrook</strong><small>Field Guide</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <a className="header-cta" href="https://store.steampowered.com/app/1846700/Witchbrook/" target="_blank" rel="nofollow noopener noreferrer">Wishlist</a>
      </div>
    </header>
  );
}
