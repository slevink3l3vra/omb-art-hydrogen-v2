import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-2 md:px-8 md:py-16">
      <div>
        <p className="text-xs tracking-[0.28em] text-gold uppercase">Studio</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Contact</h1>
        <p className="mt-4 max-w-md text-muted">
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
        <div className="border border-line bg-surface p-8">
          <h2 className="font-display text-4xl">The note is ready.</h2>
          <p className="mt-3 text-sm text-muted">
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
          <label className="block text-sm text-muted">
            Name
            <input
              name="name"
              required
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-fg outline-none focus:border-gold"
            />
          </label>
          <label className="block text-sm text-muted">
            Email
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-fg outline-none focus:border-gold"
            />
          </label>
          <label className="block text-sm text-muted">
            Phone
            <input
              name="phone"
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-fg outline-none focus:border-gold"
            />
          </label>
          <label className="block text-sm text-muted">
            Comment
            <textarea
              name="comment"
              rows={5}
              required
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-fg outline-none focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="min-h-12 bg-gold px-8 text-sm tracking-wide text-bg"
          >
            Send
          </button>
        </form>
      )}
    </main>
  );
}
