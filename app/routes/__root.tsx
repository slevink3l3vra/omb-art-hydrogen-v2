import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";

import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { CartDrawer, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AuthProvider } from "@/lib/auth/provider";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "OMB Art — Abstract paintings" },
      {
        name: "description",
        content:
          "Original abstract acrylic paintings by OMB Art, Budapest. Color, scent, and the quiet of a private collection.",
      },
      { name: "theme-color", content: "#0c0b0a" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Outfit:wght@300;400;500&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <div className="bg-bg text-fg min-h-screen">
            <SiteHeader />
            <Outlet />
            <SiteFooter />
            <CartDrawer />
          </div>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
