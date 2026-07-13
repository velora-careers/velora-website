"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, type NavLink } from "@/data/site";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { ArrowRight, ArrowUpRight, ChevronDown } from "@/components/icons";
import { cn } from "@/lib/cn";

type MenuKey = "services" | "expertise" | "roles";

const linkBase =
  "inline-flex items-center gap-[7px] rounded-full px-[14px] py-[9px] text-[13.5px] font-semibold text-[#3c4a63] no-underline transition-colors hover:bg-navy/[0.06] hover:text-navy";

function ActiveDot() {
  return <span className="h-[5px] w-[5px] rounded-full bg-gold-dark" />;
}

function DropdownPanel({
  items,
  wide = false,
  footer,
}: {
  items: NavLink[];
  wide?: boolean;
  footer?: React.ReactNode;
}) {
  return (
    <div className="absolute left-0 top-full z-[90] pt-[10px]">
      <div
        className={cn(
          "rounded-[14px] border border-line-card bg-white p-2 shadow-[0_14px_44px_rgba(10,31,68,0.16)]",
          wide ? "w-[560px]" : "min-w-[250px]",
        )}
      >
        <div className={cn(wide && "grid grid-cols-2 gap-x-2")}>
          {items.map((it) => (
            <Link
              key={it.slug}
              href={it.href}
              className="flex items-center justify-between gap-[18px] whitespace-nowrap rounded-[9px] px-[14px] py-[10px] text-[13.5px] font-semibold text-[#1a2333] no-underline transition-colors hover:bg-[#f2f4f9] hover:text-navy"
            >
              {it.label}
              <span className="flex-none text-[#b9c0cf]">
                <ArrowUpRight />
              </span>
            </Link>
          ))}
        </div>
        {footer}
      </div>
    </div>
  );
}

function DesktopDropdown({
  label,
  menuKey,
  items,
  active,
  open,
  onOpen,
  onClose,
  wide,
  footer,
}: {
  label: string;
  menuKey: MenuKey;
  items: NavLink[];
  active: boolean;
  open: boolean;
  onOpen: (k: MenuKey) => void;
  onClose: () => void;
  wide?: boolean;
  footer?: React.ReactNode;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onOpen(menuKey)}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => (open ? onClose() : onOpen(menuKey))}
        className={cn(linkBase, "cursor-pointer border-none bg-transparent font-sans")}
      >
        {label}
        {active ? <ActiveDot /> : null}
        <ChevronDown />
      </button>
      {open ? <DropdownPanel items={items} wide={wide} footer={footer} /> : null}
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (k: MenuKey) => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(k);
  };
  const closeSoon = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(null), 150);
  };
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  // Close any open menus when the route changes (sync overlay UI to the router).
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setOpen(null);
    setMobileOpen(false);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [pathname]);

  const is = (prefix: string) =>
    prefix === "/" ? pathname === "/" : pathname.startsWith(prefix);

  const rolesFooter = (
    <Link
      href="/roles"
      className="mx-1.5 mt-2 flex items-center gap-2 border-t border-line-hair px-2 pb-1 pt-[11px] text-[12.5px] font-bold tracking-[0.02em] text-gold-dark no-underline hover:text-gold-darker"
    >
      View all 13 tracks <ArrowRight className="flex-none" />
    </Link>
  );

  return (
    <div className="sticky top-0 z-[80] border-b border-line-nav bg-cream/90 backdrop-blur-[14px]">
      <Container className="flex h-[76px] items-center gap-4">
        <Logo markSize={38} />

        {/* Desktop nav */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
          <Link href="/" className={linkBase}>
            Home
            {is("/") ? <ActiveDot /> : null}
          </Link>
          <Link href="/about" className={linkBase}>
            About
            {is("/about") ? <ActiveDot /> : null}
          </Link>
          <DesktopDropdown
            label="Services"
            menuKey="services"
            items={nav.services}
            active={is("/services")}
            open={open === "services"}
            onOpen={openMenu}
            onClose={closeSoon}
          />
          <DesktopDropdown
            label="Expertise"
            menuKey="expertise"
            items={nav.expertise}
            active={is("/expertise")}
            open={open === "expertise"}
            onOpen={openMenu}
            onClose={closeSoon}
          />
          <DesktopDropdown
            label="Roles"
            menuKey="roles"
            items={nav.roles}
            active={is("/roles")}
            open={open === "roles"}
            onOpen={openMenu}
            onClose={closeSoon}
            wide
            footer={rolesFooter}
          />
          <Link href="/contact" className={linkBase}>
            Contact
            {is("/contact") ? <ActiveDot /> : null}
          </Link>
        </div>

        <div className="ml-auto flex flex-none items-center gap-2 lg:ml-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-[22px] py-3 text-[13.5px] font-semibold text-white no-underline transition-colors hover:bg-navy-hover"
          >
            Get matched <ArrowRight className="flex-none" />
          </Link>
          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-line-nav bg-cream lg:hidden">
          <Container className="flex flex-col gap-6 py-6">
            <div className="flex flex-col gap-1">
              <Link href="/" className={linkBase}>Home</Link>
              <Link href="/about" className={linkBase}>About</Link>
              <Link href="/contact" className={linkBase}>Contact</Link>
            </div>
            <MobileGroup title="Services" items={nav.services} />
            <MobileGroup title="Expertise" items={nav.expertise} />
            <MobileGroup title="Roles" items={nav.roles} footerHref="/roles" footerLabel="View all 13 tracks" />
          </Container>
        </div>
      ) : null}
    </div>
  );
}

function MobileGroup({
  title,
  items,
  footerHref,
  footerLabel,
}: {
  title: string;
  items: NavLink[];
  footerHref?: string;
  footerLabel?: string;
}) {
  return (
    <div>
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-gold-dark">
        {title}
      </div>
      <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
        {items.map((it) => (
          <Link
            key={it.slug}
            href={it.href}
            className="rounded-[9px] px-[14px] py-[10px] text-[14px] font-semibold text-[#1a2333] no-underline hover:bg-[#f2f4f9]"
          >
            {it.label}
          </Link>
        ))}
      </div>
      {footerHref ? (
        <Link
          href={footerHref}
          className="mt-2 inline-flex items-center gap-2 px-[14px] text-[12.5px] font-bold text-gold-dark no-underline"
        >
          {footerLabel} <ArrowRight className="flex-none" />
        </Link>
      ) : null}
    </div>
  );
}
