import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="text-gold text-xs tracking-[0.28em] uppercase">Studio</p>
        <h1 className="font-display mt-3 text-5xl md:text-6xl">Contact</h1>
        <p className="text-muted mt-4 max-w-md">
          For a private viewing, a commission, or a work you have already chosen. Write in English
          or Hungarian.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="text-muted">Email</dt>
            <dd>
              <a className="text-fg" href="mailto:info@omb-art.com">
                info@omb-art.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Phone</dt>
            <dd>
              <a className="text-fg" href="tel:+36203170018">
                +36 20 317 0018
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">City</dt>
            <dd className="text-fg">Budapest</dd>
          </div>
        </dl>
      </div>

      {sent ? (
        <div className="border-line bg-surface border p-8">
          <h2 className="font-display text-4xl">The note is ready.</h2>
          <p className="text-muted mt-3 text-sm">
            Your mail app should have opened with the message. If it did not, write directly to
            info@omb-art.com.
          </p>
        </div>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const name = String(data.get("name") ?? "");
            const email = String(data.get("email") ?? "");
            const phone = String(data.get("phone") ?? "");
            const comment = String(data.get("comment") ?? "");
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${comment}`,
            );
            window.location.href = `mailto:info@omb-art.com?subject=${encodeURIComponent("Note for OMB Art")}&body=${body}`;
            setSent(true);
          }}
        >
          <label className="text-muted block text-sm">
            Name
            <input
              name="name"
              required
              className="border-line bg-bg text-fg focus:border-gold mt-2 w-full border px-3 py-3 outline-none"
            />
          </label>
          <label className="text-muted block text-sm">
            Email
            <input
              name="email"
              type="email"
              required
              className="border-line bg-bg text-fg focus:border-gold mt-2 w-full border px-3 py-3 outline-none"
            />
          </label>
          <label className="text-muted block text-sm">
            Phone
            <input
              name="phone"
              className="border-line bg-bg text-fg focus:border-gold mt-2 w-full border px-3 py-3 outline-none"
            />
          </label>
          <label className="text-muted block text-sm">
            Comment
            <textarea
              name="comment"
              rows={5}
              required
              className="border-line bg-bg text-fg focus:border-gold mt-2 w-full border px-3 py-3 outline-none"
            />
          </label>
          <button type="submit" className="bg-gold text-bg min-h-12 px-8 text-sm tracking-wide">
            Send
          </button>
        </form>
      )}
    </main>
  );
}
