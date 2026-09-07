"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { company, nav } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sg-header">
    <div className="sg-wrap sg-header-inner">
      <Link href="/" className="sg-brand" aria-label="Squeegee Guys home">
        <Image src="/images/branding/squeegee-guys-logo-700.png" alt="" width={52} height={52} />
        <span>Squeegee Guys</span>
      </Link>
      <nav className="sg-desktop-nav" aria-label="Main navigation">
        {nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        <Link className="sg-text-link sg-nav-quote" href={company.quoteUrl}>Get a free quote</Link>
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild><button className="sg-menu-toggle" aria-label="Open menu"><Menu aria-hidden="true" size={24} /></button></SheetTrigger>
        <SheetContent className="sg-menu-panel" side="right">
          <SheetHeader><SheetTitle>Squeegee Guys</SheetTitle></SheetHeader>
          <nav className="sg-mobile-nav" aria-label="Mobile navigation">
            {nav.map(item => <SheetClose asChild key={item.href}><Link href={item.href}>{item.label}</Link></SheetClose>)}
            <SheetClose asChild><Link className="sg-text-link" href={company.quoteUrl}>Get a free quote</Link></SheetClose>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </header>;
}
