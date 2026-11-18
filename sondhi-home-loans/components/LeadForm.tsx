"use client";

import { useState } from "react";

const field = "w-full rounded-[3px] border border-[#9aa5b8] bg-white px-3 py-2.5 font-normal text-ink";

export function LeadForm() {
  const [status, setStatus] = useState("");

  // ponytail: no backend yet, the form only confirms locally. Wire to email/CRM once Avinash picks one.
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const ok = String(f.get("name")).trim() && String(f.get("phone")).trim();
    setStatus(ok
      ? "Request received. This is a prototype, so nothing was actually sent."
      : "Enter your name and phone number so Avinash can call you back.");
  }

  return (
    <form id="lead" onSubmit={submit} noValidate
      className="grid min-w-0 gap-3.5 rounded bg-white p-6 text-ink shadow-2xl shadow-black/30 sm:p-7">
      <h2 className="text-[1.4rem]">Request a free consultation</h2>
      <label htmlFor="name" className="grid gap-1 text-sm font-semibold">
        Full name<input id="name" name="name" autoComplete="name" required className={field} />
      </label>
      <label htmlFor="phone" className="grid gap-1 text-sm font-semibold">
        Phone<input id="phone" name="phone" type="tel" autoComplete="tel" required className={field} />
      </label>
      <label htmlFor="email" className="grid gap-1 text-sm font-semibold">
        Email<input id="email" name="email" type="email" autoComplete="email" className={field} />
      </label>
      <label htmlFor="goal" className="grid gap-1 text-sm font-semibold">
        What do you need?
        <select id="goal" name="goal" className={field}>
          <option>Buy a home</option><option>Refinance</option><option>Investment property</option><option>Not sure yet</option>
        </select>
      </label>
      <button type="submit" className="cursor-pointer rounded-[3px] bg-navy px-4.5 py-3.5 font-semibold text-white hover:bg-navy-dark">
        Request a free consultation
      </button>
      {status && <p role="status" className="rounded-[3px] bg-[#e8f3ea] p-3 text-sm text-[#1d4d2a]">{status}</p>}
      <p className="text-xs text-muted">Your details are used only to return your call. They are never sold.</p>
    </form>
  );
}
