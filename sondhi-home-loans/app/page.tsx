import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { site, usd } from "@/lib/site";

const Tag = ({ children }: { children: string }) => (
  <span className="ml-1.5 inline-block rounded-full bg-[#fff6dc] px-2 py-px align-middle font-sans text-xs font-normal text-[#4a3a10]">
    {children}
  </span>
);

const EqualHousing = ({ className = "" }: { className?: string }) => (
  <span className={`inline-flex items-center gap-2 ${className}`}>
    <svg width="26" height="24" viewBox="0 0 26 24" aria-hidden="true" className="text-navy">
      <path d="M13 1 1 9v2h2v12h20V11h2V9z" fill="currentColor" />
      <rect x="8" y="12" width="10" height="2.4" fill="#fff" />
      <rect x="8" y="16.5" width="10" height="2.4" fill="#fff" />
    </svg>
    Equal Housing Opportunity
  </span>
);

const tel = `tel:${site.phone.replace(/\D/g, "")}`;

export default function Home() {
  const first = site.name.split(" ")[0];
  return (
    <>
      <div className="border-b border-[#ecd9a0] bg-[#fff6dc] py-2 text-sm text-[#4a3a10]">
        <div className="wrap">
          Prototype. License numbers, figures, reviews, loan examples and contact details are placeholders until {first} supplies the real ones.
        </div>
      </div>

      <header className="border-b border-line">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-7 gap-y-3 py-4">
          <div className="font-serif text-xl font-semibold text-navy">
            {site.name}
            <small className="block font-sans text-[0.8rem] font-normal text-muted">{site.title}, {site.company.name}</small>
          </div>
          <nav aria-label="Main" className="flex flex-wrap gap-x-5.5 gap-y-1.5 text-[0.95rem]">
            {[["About", "#about"], ["Loan programs", "#programs"], ["Recent loans", "#funded"], ["Reviews", "#reviews"]].map(([t, h]) => (
              <a key={h} href={h} className="hover:underline">{t}</a>
            ))}
          </nav>
          <a href={tel} className="font-semibold text-navy">{site.phone}</a>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-navy text-white">
          <Image src="/images/hero-spanish-home.jpg" alt="" fill sizes="100vw" loading="eager" fetchPriority="high"
            className="-z-10 object-cover" />
          {/* Navy wash over the photo keeps white text readable. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/85 md:bg-navy/0 md:bg-linear-to-r md:from-navy md:via-navy/85 md:to-navy/40" />
          <div className="wrap grid items-center gap-12 py-10 md:grid-cols-[1.15fr_0.85fr] md:py-16">
            <div>
              <h1 className="text-[clamp(2rem,4.6vw,3.25rem)]">A California home loan, explained clearly and closed on time.</h1>
              <p className="mt-5 max-w-[62ch] text-lg text-[#d3dcec]">
                {site.name} is {site.title} for the {site.region} at {site.company.name}. He works with buyers, homeowners and
                investors across California, and you deal with him directly from the first call to the day you get your keys.
              </p>
              <ul className="mt-7 grid gap-2.5">
                {[
                  "Free consultation, with no obligation and no credit pull to start",
                  "Written loan estimate you can compare line by line",
                  "One point of contact who answers the phone",
                ].map((t) => (
                  <li key={t} className="relative pl-7 before:absolute before:top-[0.45em] before:left-0 before:h-2 before:w-3.5 before:-rotate-45 before:border-b-2 before:border-l-2 before:border-gold">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm />
          </div>
        </section>

        <div className="border-b border-line bg-wash text-[0.9rem]">
          <div className="wrap flex flex-wrap items-center gap-x-9 gap-y-2.5 py-4">
            <span><b className="text-navy">NMLS</b> #{site.nmls}</span>
            <span><b className="text-navy">CA DRE</b> #{site.dre}</span>
            <span><b className="text-navy">{site.company.name}</b> NMLS #{site.company.nmls}</span>
            <EqualHousing />
          </div>
        </div>

        <section id="about" className="wrap grid items-start gap-12 py-11 md:grid-cols-[260px_1fr] md:py-16">
          <div className="grid aspect-[4/5] max-w-[220px] place-items-center border border-line bg-wash text-center text-sm text-muted md:max-w-full">
            <div><b className="block font-serif text-6xl text-navy">{site.initials}</b>Professional portrait</div>
          </div>
          <div>
            <h2 className="h2">Fifteen years of helping Californians finance a home</h2>
            <p className="mt-3 max-w-[62ch] text-muted">
              {first} started in mortgage lending in 2010 and today leads a team as {site.title} at {site.company.name}, a
              California direct lender since {site.company.since}. His clients are first-time buyers, families moving up,
              veterans, self-employed borrowers and small investors.
            </p>
            <p className="mt-3.5 max-w-[62ch]">
              His approach is simple. He tells you what you qualify for, what it will cost, and what could go wrong, before you
              sign anything. Most of his business comes from past clients and the real estate agents who have closed with him.
            </p>
            <dl className="mt-9 grid border-t-2 border-navy sm:grid-cols-3">
              {site.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse pt-5 pr-5">
                  <dt className="text-[0.95rem] text-muted">{s.label}</dt>
                  <dd className="font-serif text-4xl font-semibold leading-tight text-navy tabular-nums">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="programs" className="bg-wash">
          <div className="wrap py-11 md:py-16">
            <h2 className="h2">Loan programs</h2>
            <p className="mt-3 text-muted">Not every loan fits every borrower. These are the ones {first} arranges most often.</p>
            <div className="mt-7 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {site.programs.map((p) => (
                <div key={p.name} className="border-t border-line py-5">
                  <h3 className="text-[1.2rem]">{p.name}</h3>
                  <p className="mt-1.5 text-[0.95rem] text-muted">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="funded" className="wrap py-11 md:py-16">
          <h2 className="h2">Recently funded loans <Tag>Sample data</Tag></h2>
          <p className="mt-3 text-muted">A look at the kind of work {first} closes. Client names are kept private.</p>
          <ul className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {site.loans.map((l) => (
              <li key={l.city + l.type} className="border-t-2 border-navy">
                <div className="relative aspect-[3/2]">
                  <Image src={l.img} alt={`Example home in ${l.city}`} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover" />
                </div>
                <div className="grid gap-1.5 pt-4">
                  <div className="flex items-baseline justify-between gap-3 text-sm text-muted">
                    <span>{l.city}</span><span className="tabular-nums">Closed in {l.days} days</span>
                  </div>
                  <h3 className="text-[1.2rem]">{l.type}, {usd(l.amount)}</h3>
                  <p className="text-[0.95rem] text-muted">{l.note}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs text-muted">Photos are illustrative stock images, not the financed properties.</p>
        </section>

        <section className="bg-wash">
          <div className="wrap py-11 md:py-16">
            <h2 className="h2">How it works</h2>
            <ol className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {site.steps.map((s, i) => (
                <li key={s.name} className="border-t-2 border-brass pt-3.5">
                  <span className="block text-sm font-semibold text-brass">Step {i + 1}</span>
                  <h3 className="text-[1.2rem]">{s.name}</h3>
                  <p className="mt-1.5 text-[0.95rem] text-muted">{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="reviews" className="wrap py-11 md:py-16">
          <h2 className="h2">What clients say <Tag>Sample reviews</Tag></h2>
          <div className="mt-7 grid gap-9 md:grid-cols-3">
            {site.reviews.map((r) => (
              <figure key={r.who}>
                <blockquote className="font-serif text-[1.1rem] font-semibold leading-normal">“{r.quote}”</blockquote>
                <figcaption className="mt-3 text-sm text-muted">{r.who}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-navy text-white">
          <Image src="/images/keys-handover.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/90" />
          <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-5 py-11 md:py-14">
            <div>
              <h2 className="h2">Ready to talk about your loan?</h2>
              <p className="mt-2 text-[#d3dcec]">
                Call <a href={tel} className="font-semibold text-white">{site.phone}</a> or send your details and {first} will call
                you back within one business day.
              </p>
            </div>
            <a href="#lead" className="rounded-[3px] bg-white px-5.5 py-3.5 font-semibold text-navy hover:bg-wash">
              Request a free consultation
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line text-[0.82rem] text-muted">
        <div className="wrap grid gap-2.5 py-8 [&_p]:max-w-[90ch]">
          <p>
            <b>{site.name}</b>, {site.title}, Mortgage Loan Originator. NMLS #{site.nmls}. California DRE License #{site.dre}.
          </p>
          <p>
            {site.company.legal}. NMLS #{site.company.nmls}. {site.company.licenses} Verify licensing at{" "}
            <a href="https://www.nmlsconsumeraccess.org" target="_blank" rel="noopener" className="underline">nmlsconsumeraccess.org</a>.
          </p>
          <p>
            This is not a commitment to lend. Programs, rates, terms and conditions are subject to change without notice. All loans
            are subject to credit and property approval. Not all applicants will qualify.
          </p>
          <EqualHousing />
        </div>
      </footer>
    </>
  );
}
