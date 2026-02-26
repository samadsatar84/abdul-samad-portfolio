import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  profile,
  about,
  skills,
  services,
  projects,
  contact,
  footer,
} from "./data/portfolioData";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ className = "", children }) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

function GlowBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />

      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(124,92,255,0.35), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(99,255,214,0.22), transparent 60%)" }}
      />
    </div>
  );
}

function Nav() {
  const links = [
    { label: "Home", to: "#home" },
    { label: "About", to: "#about" },
    { label: "Skills", to: "#skills" },
    { label: "Services", to: "#services" },
    { label: "Projects", to: "#projects" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-ink/65 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-wide">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-panel shadow-soft">
            <span className="text-brand-400">◆</span>
          </span>
          <span className="text-white/90">ABDUL.SAMAD</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm text-white/70 hover:text-white transition"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm text-white/90 border border-border hover:bg-white/15 transition"
        >
          Let’s Talk
        </a>
      </Container>
    </header>
  );
}

function SectionHead({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-semibold tracking-[0.25em] text-white/50">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-white/65">{subtitle}</p> : null}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-border bg-panel p-5 shadow-soft">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/55">{label}</div>
    </div>
  );
}

function Button({ href, variant = "primary", children }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-500/60";
  const styles =
    variant === "primary"
      ? "bg-brand-500 text-white hover:bg-brand-600 shadow-lift"
      : "bg-white/10 text-white/90 border border-border hover:bg-white/15";

  return (
    <a href={href} className={cn(base, styles)}>
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-10 md:pt-14">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-white/60">{profile.role}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Hi, I’m <span className="text-brand-400">{profile.name}</span>
            </h1>
            <p className="mt-4 text-lg text-white/70">{profile.headline}</p>
            <p className="mt-4 max-w-xl text-white/65">{profile.summary}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#contact" variant="primary">{profile.ctaPrimary}</Button>
              <Button href="#projects" variant="ghost">{profile.ctaSecondary}</Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {profile.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-[2rem] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(124,92,255,0.30), transparent 55%), radial-gradient(circle at 70% 70%, rgba(99,255,214,0.18), transparent 55%)",
              }}
            />
            <div className="rounded-[2rem] border border-border bg-panel p-4 shadow-soft
                ring-1 ring-brand-500/20">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-border">
           <img
             src={profile.image}
             alt={profile.name}
             className="h-[420px] w-full object-cover object-top md:h-[520px]"
             style={{
              filter: "brightness(1.08) contrast(1.06) saturate(1.05)",
             }}
            />

    {/* lighter overlay (only slight, so image stays visible) */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
  </div>
</div>

            <div className="mt-4 flex flex-wrap gap-2">
              {profile.techPills.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="pt-16 md:pt-20">
      <Container>
        <SectionHead {...about} />
        <div className="grid gap-6 md:grid-cols-3">
          {about.paragraphs.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-panel p-6 shadow-soft hover:shadow-lift transition"
            >
              <p className="text-white/70 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="pt-16 md:pt-20">
      <Container>
        <SectionHead {...skills} />
        <div className="grid gap-5 md:grid-cols-2">
          {skills.items.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white/90">{s.label}</p>
                <p className="text-sm text-white/60">{s.value}%</p>
              </div>
              <div className="mt-4 h-3 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-brand-500"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="pt-16 md:pt-20">
      <Container>
        <SectionHead {...services} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((srv) => (
            <div
              key={srv.title}
              className="group rounded-2xl border border-border bg-panel p-6 shadow-soft hover:shadow-lift transition"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/5 text-brand-400">
                  ✦
                </span>
                <h3 className="font-semibold text-white/90">{srv.title}</h3>
              </div>
              <p className="mt-4 text-white/65 leading-relaxed">{srv.desc}</p>
              <div className="mt-5 h-px w-full bg-white/10" />
              <p className="mt-4 text-sm text-white/55 group-hover:text-white/70 transition">
                Premium UI • Clean Code • Fast Delivery
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="pt-16 md:pt-20">
      <Container>
        <SectionHead {...projects} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((p) => (
            <div
              key={p.title}
              className="overflow-hidden rounded-2xl border border-border bg-panel shadow-soft hover:shadow-lift transition"
            >
              <div className="relative h-44 w-full overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-white/90">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.desc}</p>

                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-white transition"
                >
                  View Live Project <span className="text-white/40">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "", // "success" | "error" | ""
    msg: "",
    loading: false,
  });

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    setStatus({ type: "", msg: "", loading: true });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS keys missing in .env");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          subject: form.subject || "New message from portfolio",
          message: form.message,
          to_name: profile.name,
        },
        { publicKey }
      );

      setStatus({
        type: "success",
        msg: "Message sent successfully! I’ll get back to you soon.",
        loading: false,
      });

      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Message not sent. Please try again or email me directly.",
        loading: false,
      });
    }
  }

  return (
    <section id="contact" className="pt-16 md:pt-20 pb-16">
      <Container>
        <SectionHead {...contact} />

        {/* status alert */}
        {status.msg ? (
          <div
            className={`mb-6 rounded-2xl border p-4 text-sm ${
              status.type === "success"
                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                : "border-red-400/30 bg-red-500/10 text-red-200"
            }`}
          >
            {status.msg}
          </div>
        ) : null}

        <div className="grid gap-6 md:grid-cols-2">
          {/* Info cards */}
          {contact.items.map((it) => (
            <div
              key={it.label}
              className="rounded-2xl border border-border bg-panel p-6 shadow-soft"
            >
              <p className="text-xs font-semibold tracking-[0.22em] text-white/45">
                {it.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-white/85">
                {it.value}
              </p>
            </div>
          ))}

          {/* Real Contact Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-panel p-6 shadow-soft md:col-span-2"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold tracking-[0.22em] text-white/45">
                  Full Name
                </label>
                <input
                  name="from_name"
                  value={form.from_name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-white/90 outline-none placeholder:text-white/35 focus:border-brand-500/60"
                />
              </div>

              <div>
                <label className="text-xs font-semibold tracking-[0.22em] text-white/45">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={form.from_email}
                  onChange={onChange}
                  required
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-white/90 outline-none placeholder:text-white/35 focus:border-brand-500/60"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold tracking-[0.22em] text-white/45">
                Subject (optional)
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Project inquiry"
                className="mt-2 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-white/90 outline-none placeholder:text-white/35 focus:border-brand-500/60"
              />
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold tracking-[0.22em] text-white/45">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                placeholder="Write your message..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-white/90 outline-none placeholder:text-white/35 focus:border-brand-500/60"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center justify-center rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lift hover:bg-brand-600 disabled:opacity-60"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>

              <a
                href={`mailto:${contact.items.find(i=>i.label==="Email Address")?.value || ""}`}
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/15"
              >
                Email Me Directly
              </a>
            </div>
          </form>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/45">
          {footer.note}
        </div>
      </Container>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-white">
      <GlowBackdrop />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}