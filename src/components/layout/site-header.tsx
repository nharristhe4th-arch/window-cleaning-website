"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/section";
import { company, nav } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200/60 bg-white/70 backdrop-blur-xl supports-backdrop-filter:bg-white/60">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2 text-slate-800">
          <span className="flex size-9 items-center justify-center rounded-lg border border-sky-200/60 bg-white/70 text-sky-500 shadow-sm shadow-sky-200/40 backdrop-blur-md">
            <Sparkles className="size-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-sky-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:text-sky-600"
          >
            <Phone className="size-4" />
            {company.phone}
          </a>
          <Button asChild size="lg" className="h-10 rounded-full px-5">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-700 hover:bg-sky-50 hover:text-sky-600 lg:hidden"
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full border-sky-200/60 bg-white/95 backdrop-blur-xl sm:max-w-xs">
            <SheetHeader>
              <SheetTitle className="text-slate-800">{company.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-600 transition-colors duration-300 hover:bg-sky-50 hover:text-sky-600"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 border-t border-sky-200/60 p-4">
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-700"
              >
                <Phone className="size-4" />
                {company.phone}
              </a>
              <SheetClose asChild>
                <Button asChild className="h-11 w-full rounded-full">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
