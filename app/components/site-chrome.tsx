import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { formatHuf } from "@/data/catalog";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/paintings", label: "Paintings" },
  { to: "/about", label: "About" },
  { to: "/exhibitions", label: "Exhibitions" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const count = useCart((state) => state.items.length);
  const setCart = useCart((state) => state.setOpen);

  return (
    <header className="border-line/80 bg-bg/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Mark />
          <span className="leading-none">
            <span className="font-display text-fg block text-2xl tracking-wide">OMB</span>
            <span className="text-muted block text-xs tracking-[0.28em] uppercase">Art</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted hover:text-fg text-sm tracking-wide transition-colors"
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-sm tracking-wide text-fg" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCart(true)}
            className="text-fg min-h-11 px-3 text-sm tracking-wide"
          >
            Reserve{count > 0 ? ` (${count})` : ""}
          </button>
          <button
            type="button"
            className="text-fg grid size-11 place-items-center md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-line bg-bg border-t px-5 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-fg block py-3 text-lg"
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function Mark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <circle cx="18" cy="18" r="16" fill="none" stroke="#c9a227" strokeWidth="1.2" />
      <path
        d="M11 23 V13 H16.5 C20 13 22 15 22 18 C22 21 20 23 16.5 23 Z"
        fill="none"
        stroke="#f4f0e6"
        strokeWidth="1.2"
      />
      <path d="M22 13 H25" stroke="#c9a227" strokeWidth="1.2" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-line border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-fg text-3xl">OMB Art</p>
          <p className="text-muted mt-3 max-w-xs text-sm">
            Original abstract acrylic paintings from Budapest. A meeting of color, scent, and the
            room they enter.
          </p>
        </div>
        <div className="text-muted text-sm">
          <p className="text-gold tracking-[0.18em] uppercase">Studio</p>
          <p className="mt-3">Budapest</p>
          <a className="text-fg mt-1 block" href="mailto:info@omb-art.com">
            info@omb-art.com
          </a>
          <a className="mt-1 block" href="tel:+36203170018">
            +36 20 317 0018
          </a>
        </div>
        <div className="text-muted text-sm">
          <p className="text-gold tracking-[0.18em] uppercase">Visit</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/paintings" className="text-fg">
              The collection
            </Link>
            <Link to="/exhibitions" className="text-fg">
              Exhibitions
            </Link>
            <Link to="/contact" className="text-fg">
              Private viewing
            </Link>
          </div>
        </div>
      </div>
      <p className="border-line text-muted border-t px-5 py-4 text-center text-xs tracking-wide">
        © {new Date().getFullYear()} OMB Art. Each work is unique.
      </p>
    </footer>
  );
}

export function CartDrawer() {
  const items = useCart((state) => state.items);
  const open = useCart((state) => state.open);
  const setOpen = useCart((state) => state.setOpen);
  const remove = useCart((state) => state.remove);
  const total = items.reduce((sum, item) => sum + item.priceHuf, 0);
  const body = items
    .map((item) => `${item.title} — ${item.size} — ${formatHuf(item.priceHuf)}`)
    .join("%0A");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        className="bg-bg/70 absolute inset-0"
        aria-label="Close reserve list"
        onClick={() => setOpen(false)}
      />
      <aside className="border-line bg-surface relative flex h-full w-full max-w-md flex-col border-l">
        <div className="border-line flex items-center justify-between border-b px-5 py-4">
          <h2 className="font-display text-3xl">Reserve</h2>
          <button
            type="button"
            className="text-muted min-h-11 px-2 text-sm"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <div className="flex-1 overflow-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-muted text-sm">
              No works selected. Choose a painting and it will wait here until you write to the
              studio.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.slug}
                  className="border-line flex items-start justify-between gap-4 border-b pb-4"
                >
                  <div>
                    <p className="text-fg">{item.title}</p>
                    <p className="text-muted text-sm">{item.size}</p>
                    <p className="text-gold mt-1 text-sm">{formatHuf(item.priceHuf)}</p>
                  </div>
                  <button
                    type="button"
                    className="text-muted text-sm"
                    onClick={() => remove(item.slug)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-line border-t px-5 py-5">
          <p className="flex justify-between text-sm">
            <span className="text-muted">Together</span>
            <span>{formatHuf(total)}</span>
          </p>
          <p className="text-muted mt-2 text-xs">
            Availability is confirmed by the studio. This list does not charge a card.
          </p>
          <a
            href={`mailto:info@omb-art.com?subject=${encodeURIComponent("Reserve request — OMB Art")}&body=${body}`}
            className="bg-gold text-bg mt-4 flex min-h-12 items-center justify-center text-sm tracking-wide"
          >
            Write to the studio
          </a>
        </div>
      </aside>
    </div>
  );
}
