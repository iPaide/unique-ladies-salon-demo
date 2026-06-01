import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  Scissors,
  Paintbrush,
  Hand,
  Flower2,
  Heart,
  Gem,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  CheckCircle2,
  Phone,
  CalendarDays,
  BadgePercent,
  Crown,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/971000000000?text=Hello%20Unique%20Ladies%20Beauty%20Salon%2C%20I%20would%20like%20to%20ask%20about%20your%20services%2C%20prices%2C%20and%20appointment%20availability.";

const navLinks = ["Home", "Services", "Packages", "Gallery", "About", "FAQ", "Contact"];

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    copy: "Blow-dry, haircut, styling, and elegant hair looks for everyday beauty, workdays, dinners, parties, and special occasions.",
  },
  {
    icon: Sparkles,
    title: "Hair Treatments",
    copy: "Hair spa, nourishing treatments, smoothing care, and repair-focused services to help your hair feel soft, healthy, and refreshed.",
  },
  {
    icon: Paintbrush,
    title: "Makeup",
    copy: "Soft glam, party makeup, event makeup, and beauty looks tailored to your features, outfit, and occasion.",
  },
  {
    icon: Hand,
    title: "Nails",
    copy: "Manicure, pedicure, polish, and nail care services for a clean, elegant, and polished finish.",
  },
  {
    icon: Flower2,
    title: "Facials & Skin Care",
    copy: "Cleansing facials and skin-refresh treatments designed to leave your skin feeling smooth, clean, and naturally glowing.",
  },
  {
    icon: Heart,
    title: "Waxing & Threading",
    copy: "Eyebrow shaping, face threading, and waxing services for smooth, confident, well-groomed results.",
  },
  {
    icon: Crown,
    title: "Henna & Bridal Beauty",
    copy: "Henna, bridal preparation, and event beauty support for weddings, engagements, parties, and special celebrations.",
  },
  {
    icon: Gem,
    title: "Salon Packages",
    copy: "Convenient beauty bundles combining popular services for hair, skin, nails, grooming, and event preparation.",
  },
];

const packages = [
  {
    title: "Glow Refresh Package",
    copy: "A quick beauty refresh for ladies who want to feel clean, fresh, and polished.",
    items: ["Facial care", "Threading", "Blow-dry or hair finish"],
    cta: "Ask for Price",
  },
  {
    title: "Hair Revival Package",
    copy: "A relaxing hair care experience designed to refresh tired hair and leave it feeling softer and more manageable.",
    items: ["Hair spa", "Hair wash", "Nourishing treatment", "Blow-dry styling"],
    cta: "Ask for Price",
  },
  {
    title: "Event Ready Package",
    copy: "Perfect for parties, dinners, celebrations, and special occasions where you want to look beautifully prepared.",
    items: ["Makeup", "Hair styling", "Optional nails or grooming add-on"],
    cta: "Book Event Look",
  },
  {
    title: "Self-Care Day Package",
    copy: "A relaxing salon visit for ladies who want to enjoy a full beauty and grooming refresh.",
    items: ["Facial care", "Nails", "Hair treatment", "Threading or waxing add-on"],
    cta: "View Package",
  },
  {
    title: "Bridal Beauty Consultation",
    copy: "A custom beauty planning experience for brides and special event clients.",
    items: ["Bridal makeup", "Hair styling", "Henna", "Pre-event grooming", "Group bookings"],
    cta: "Start Bridal Inquiry",
  },
];

const gallery = [
  {
    title: "Hair Styling",
    copy: "Elegant everyday and occasion-ready hair looks.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Makeup Looks",
    copy: "Soft glam, party makeup, and event beauty inspiration.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nails",
    copy: "Clean, feminine, polished nail care.",
    image:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Skin Care",
    copy: "Facials and self-care treatments for a fresh glow.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Bridal Beauty",
    copy: "Beauty preparation for weddings and special celebrations.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Salon Experience",
    copy: "A warm and relaxing space for ladies' beauty care.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
  },
];

const whyChoose = [
  {
    icon: Heart,
    title: "Ladies-Focused Experience",
    copy: "A comfortable beauty environment designed for women's grooming, self-care, and special occasion needs.",
  },
  {
    icon: Sparkles,
    title: "Multiple Services in One Place",
    copy: "Hair, makeup, nails, facials, waxing, threading, henna, and packages organized into one salon experience.",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Booking",
    copy: "Ask about services, prices, offers, availability, and appointment times directly through WhatsApp.",
  },
  {
    icon: Star,
    title: "Friendly Beauty Care",
    copy: "A warm and approachable experience for everyday customers, brides, event guests, and self-care appointments.",
  },
  {
    icon: BadgePercent,
    title: "Packages for Every Need",
    copy: "Beauty bundles for quick refreshes, event preparation, bridal needs, and relaxing salon days.",
  },
  {
    icon: MapPin,
    title: "Abu Dhabi Convenience",
    copy: "A local ladies salon experience for customers looking for beauty services in Abu Dhabi.",
  },
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Appointments are recommended so the salon team can prepare for your preferred service and time.",
  },
  {
    q: "Can I book through WhatsApp?",
    a: "Yes. Customers can ask about services, prices, offers, and appointment availability through WhatsApp.",
  },
  {
    q: "Do you offer bridal or event makeup?",
    a: "Yes. Bridal and event beauty inquiries can be requested through WhatsApp for makeup, hair styling, henna, and package options.",
  },
  {
    q: "Can I ask for prices before booking?",
    a: "Yes. Prices can be requested through WhatsApp. Some services may depend on hair length, treatment type, selected style, or package choice.",
  },
  {
    q: "Do you offer hair treatments?",
    a: "Yes. Hair treatment options may include hair spa, nourishing care, smoothing, and repair-focused services.",
  },
  {
    q: "Do you offer salon packages?",
    a: "Yes. Beauty packages can combine services such as facials, threading, hair care, nails, makeup, and event preparation.",
  },
  {
    q: "Where is the salon located?",
    a: "The salon serves ladies in Abu Dhabi, UAE. Full map and direction details can be added once the final location is approved.",
  },
  {
    q: "What are your opening hours?",
    a: "Opening hours can be listed here once the salon confirms its weekly schedule and holiday timings.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ children }) {
  return (
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#E8A7B4]/35 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9D6673] shadow-sm backdrop-blur">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </div>
  );
}

function CTAButton({ children = "Book on WhatsApp", className = "", small = false }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/25 ${
        small ? "px-4 py-2 text-sm font-bold" : "px-6 py-3 text-sm font-bold sm:text-base"
      } ${className}`}
    >
      <MessageCircle className={small ? "h-4 w-4" : "h-5 w-5"} />
      {children}
    </a>
  );
}

function SecondaryButton({ href = "#services", children = "View Services" }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[#C8A96A]/60 bg-white/65 px-6 py-3 text-sm font-bold text-[#2A1E1B] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:text-base"
    >
      {children}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen scroll-smooth bg-[#FFF8F3] font-sans text-[#2A1E1B]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');
        .font-display { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8A7B4]/20 bg-[#FFF8F3]/90 backdrop-blur-xl">
        <div className="hidden border-b border-[#E8A7B4]/15 bg-[#2A1E1B] px-5 py-2 text-center text-xs font-semibold tracking-wide text-white/78 sm:block">
          Premium ladies salon experience in Abu Dhabi with easy WhatsApp booking
        </div>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBECEF] text-[#9D6673] shadow-sm ring-1 ring-[#E8A7B4]/35">
              <Gem className="h-5 w-5" />
            </div>
            <div>
              <p className="font-display text-lg font-bold leading-none text-[#2A1E1B] sm:text-xl">
                Unique Ladies
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9D6673]">
                Beauty Salon
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold text-[#7A625B] transition hover:text-[#2A1E1B]"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <CTAButton small />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2A1E1B] shadow-sm ring-1 ring-[#E8A7B4]/25 lg:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#E8A7B4]/20 bg-[#FFF8F3] px-5 py-4 lg:hidden">
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#7A625B] shadow-sm"
                >
                  {link}
                </a>
              ))}
              <CTAButton className="mt-2 w-full" />
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-28 sm:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-28 lg:pt-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative z-10"
            >
              <SectionLabel>Ladies Beauty Salon in Abu Dhabi</SectionLabel>
              <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-[#2A1E1B] sm:text-6xl lg:text-7xl">
                Beauty, Hair & Self-Care Services for Ladies in Abu Dhabi
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#7A625B]">
                A graceful beauty destination for hair styling, makeup, nails, facials, threading, waxing, bridal beauty, and quick appointment requests through WhatsApp.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton />
                <SecondaryButton />
              </div>
              <div className="mt-7 flex flex-wrap gap-2 text-sm font-semibold text-[#7A625B]">
                {["Hair Styling", "Makeup", "Nails", "Facials", "Waxing", "Bridal Beauty"].map((item) => (
                  <span key={item} className="rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-[#E8A7B4]/20">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { label: "Salon", value: "Ladies beauty care" },
                  { label: "Booking", value: "WhatsApp appointments" },
                  { label: "Location", value: "Abu Dhabi, UAE" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white/70 p-4 shadow-sm ring-1 ring-[#E8A7B4]/20 backdrop-blur">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9D6673]">{item.label}</p>
                    <p className="mt-1 text-sm font-extrabold text-[#2A1E1B]">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative z-10"
            >
              <div className="relative mx-auto max-w-xl">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-[#7A625B]/15 ring-1 ring-[#E8A7B4]/25">
                  <img
                    src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1400&q=80"
                    alt="Elegant beauty salon styling service"
                    className="h-[34rem] w-full rounded-[2rem] object-cover"
                  />
                  <div className="absolute bottom-7 left-7 right-7 rounded-[1.7rem] bg-white/88 p-5 shadow-xl backdrop-blur-md">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBECEF] text-[#9D6673]">
                        <CalendarDays className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-[#2A1E1B]">Easy WhatsApp Booking</p>
                        <p className="mt-1 text-sm leading-6 text-[#7A625B]">
                          Ask about services, prices, and appointments in just a few taps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-white/55 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Beauty Services for Every Occasion
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#7A625B]">
                From everyday grooming to special occasion beauty, each service is presented clearly so visitors can choose what they need and request an appointment with ease.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={fadeUp}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className="group rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#E8A7B4]/18 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7A625B]/10"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBECEF] text-[#9D6673] transition group-hover:bg-[#E8A7B4] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#2A1E1B]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#7A625B]">{service.copy}</p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-bold text-[#9D6673] hover:text-[#2A1E1B]">
                      Ask on WhatsApp
                    </a>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <CTAButton>Ask About Services on WhatsApp</CTAButton>
            </div>
          </div>
        </section>

        <section id="packages" className="relative overflow-hidden py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Popular Packages</SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Beauty Packages Made for Your Plans
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#7A625B]">
                Choose from quick refreshes, relaxing self-care combinations, and event-ready packages. Services and prices can be tailored to each customer before booking.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {packages.slice(0, 3).map((item) => (
                <div key={item.title} className="relative overflow-hidden rounded-[2.2rem] bg-white p-7 shadow-xl shadow-[#7A625B]/8 ring-1 ring-[#C8A96A]/25">
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-[#FBECEF]" />
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-full bg-[#FFF8F3] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9D6673] ring-1 ring-[#E8A7B4]/25">
                      Prices available on request
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#2A1E1B]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#7A625B]">{item.copy}</p>
                    <ul className="mt-6 space-y-3">
                      {item.items.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-[#7A625B]">
                          <CheckCircle2 className="h-4 w-4 flex-none text-[#C8A96A]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <CTAButton small className="mt-7 bg-[#2A1E1B] shadow-[#2A1E1B]/20 hover:shadow-[#2A1E1B]/25">
                      {item.cta}
                    </CTAButton>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {packages.slice(3).map((item) => (
                <div key={item.title} className="rounded-[2.2rem] bg-[#2A1E1B] p-7 text-white shadow-xl shadow-[#7A625B]/10">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#E8A7B4]">
                        Custom beauty plan
                      </p>
                      <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/72">{item.copy}</p>
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {item.items.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-white/78">
                            <CheckCircle2 className="h-4 w-4 flex-none text-[#C8A96A]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <CTAButton small className="shrink-0">{item.cta}</CTAButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-white/65 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-[#FBECEF]" />
              <img
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1400&q=80"
                alt="Ladies beauty salon self-care moment"
                className="relative h-[34rem] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-[#7A625B]/12"
              />
            </div>
            <div>
              <SectionLabel>About the Salon</SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                A Welcoming Beauty Space for Ladies in Abu Dhabi
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-[#7A625B]">
                <p>
                  Unique Ladies Beauty Salon is designed for women who want to feel confident, polished, and cared for. From everyday grooming to special occasion beauty, the salon brings together hair, skin, nails, makeup, and self-care services in one warm and comfortable space.
                </p>
                <p>
                  Whether you are visiting for a quick blow-dry, a relaxing facial, a fresh manicure, or a complete event look, the goal is simple: to give every customer a pleasant salon experience and beautiful results.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Ladies-Focused Care",
                  "Multiple Services in One Place",
                  "Easy Booking",
                  "Abu Dhabi Beauty Salon",
                ].map((item) => (
                  <div key={item} className="rounded-3xl bg-[#FFF8F3] p-5 ring-1 ring-[#E8A7B4]/20">
                    <CheckCircle2 className="mb-3 h-5 w-5 text-[#C8A96A]" />
                    <p className="font-bold text-[#2A1E1B]">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton>Book Your Visit</CTAButton>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Beauty Moments & Salon Inspiration
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#7A625B]">
                Explore a visual preview of the beauty services customers can enjoy, from hair styling and makeup to nails, skin care, bridal preparation, and relaxing salon moments.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item, index) => (
                <div
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[2rem] bg-[#2A1E1B] shadow-lg shadow-[#7A625B]/10 ${
                    index === 0 || index === 4 ? "sm:row-span-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 ${
                      index === 0 || index === 4 ? "h-[34rem]" : "h-64"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E1B]/88 via-[#2A1E1B]/20 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <CTAButton>Ask About a Look on WhatsApp</CTAButton>
            </div>
          </div>
        </section>

        <section className="bg-white/65 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Why Ladies Choose Unique Beauty Salon
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#7A625B]">
                Your beauty appointment should feel simple, comfortable, and enjoyable. Unique Ladies Beauty Salon helps customers find the right service, ask questions easily, and book with confidence.
              </p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#E8A7B4]/18">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBECEF] text-[#9D6673]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-extrabold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#7A625B]">{item.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-[2.7rem] bg-[#FBECEF] p-6 shadow-xl shadow-[#7A625B]/8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <SectionLabel>Reviews</SectionLabel>
                  <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                    What Customers Say
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-[#7A625B]">
                    A strong review section helps new visitors feel confident before they book. It gives the salon space to highlight the warmth, care, and polished results customers remember.
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    "Friendly service, a calm salon visit, and a beautiful final look.",
                    "A convenient place for hair, nails, skin care, and self-care appointments.",
                    "A lovely choice for event beauty, party makeup, and polished hair styling.",
                  ].map((quote, index) => (
                    <div key={quote} className="rounded-[2rem] bg-white p-6 shadow-sm">
                      <div className="mb-4 flex gap-1 text-[#C8A96A]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9D6673]">Customer Highlight</p>
                      <p className="mt-3 text-sm leading-6 text-[#7A625B]">"{quote}"</p>
                      <p className="mt-4 text-sm font-bold text-[#2A1E1B]">Salon Guest {index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2A1E1B] py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#E8A7B4]">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp Booking
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Book Faster with a WhatsApp Beauty Assistant
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Customers should not have to search through different pages just to ask about services, prices, location, or appointment availability. With a simple WhatsApp assistant, visitors can quickly choose what they need and send a booking request in seconds.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "View available beauty services",
                  "Ask for prices or packages",
                  "Request appointment availability",
                  "Check salon location",
                  "Ask about opening hours",
                  "Start bridal or event inquiries",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 p-3 text-sm font-semibold text-white/82">
                    <CheckCircle2 className="h-4 w-4 flex-none text-[#C8A96A]" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton>Start WhatsApp Booking</CTAButton>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md rounded-[2.5rem] bg-[#16100E] p-4 shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <div className="rounded-[2rem] bg-[#EFEAE2] p-4 text-[#2A1E1B]">
                <div className="mb-4 flex items-center gap-3 rounded-2xl bg-[#075E54] p-3 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/16">
                    <Gem className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Unique Ladies Beauty Salon</p>
                    <p className="text-xs text-white/70">Usually replies quickly</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="max-w-[86%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-6 shadow-sm">
                    Hello beautiful. Welcome to Unique Ladies Beauty Salon. How can we help you today?
                  </div>
                  <div className="grid gap-2">
                    {[
                      "View services",
                      "Ask for prices",
                      "Book an appointment",
                      "View current offers",
                      "Get salon location",
                      "Check opening hours",
                      "Bridal or event booking",
                      "Speak with our team",
                    ].map((option, index) => (
                      <div key={option} className="ml-auto flex w-[90%] items-center justify-between rounded-2xl bg-[#DCF8C6] px-4 py-3 text-sm font-semibold shadow-sm">
                        <span>{index + 1}. {option}</span>
                        <ChevronDown className="h-4 w-4 rotate-[-90deg] text-[#075E54]" />
                      </div>
                    ))}
                  </div>
                  <div className="max-w-[86%] rounded-2xl rounded-tl-sm bg-white p-4 text-sm leading-6 shadow-sm">
                    Thank you. Your booking request has been received. Our team will confirm your appointment shortly on WhatsApp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white/65 py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-12 divide-y divide-[#E8A7B4]/18 overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-[#7A625B]/8 ring-1 ring-[#E8A7B4]/18">
              {faqs.map((faq, index) => (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-base font-extrabold text-[#2A1E1B] transition hover:bg-[#FFF8F3]"
                  >
                    {faq.q}
                    <ChevronDown className={`h-5 w-5 flex-none text-[#9D6673] transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-sm leading-7 text-[#7A625B]">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-[2.7rem] bg-gradient-to-br from-[#FFF8F3] via-white to-[#FBECEF] shadow-2xl shadow-[#7A625B]/10 ring-1 ring-[#E8A7B4]/20">
              <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
                <div>
                  <SectionLabel>Contact & Booking</SectionLabel>
                  <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                    Ready to Book Your Beauty Appointment?
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#7A625B]">
                    Message Unique Ladies Beauty Salon on WhatsApp to ask about services, prices, offers, appointment availability, bridal bookings, or salon location.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <CTAButton>Chat on WhatsApp</CTAButton>
                    <SecondaryButton href="#services">View Services</SecondaryButton>
                  </div>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      icon: Phone,
                      title: "WhatsApp Booking",
                      copy: "Ask questions, request prices, and book appointments directly through WhatsApp.",
                      action: "Chat on WhatsApp",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      copy: "Abu Dhabi, UAE. Map directions can be added once the final address is approved.",
                      action: "Get Location",
                    },
                    {
                      icon: Clock,
                      title: "Opening Hours",
                      copy: "Weekly opening hours and holiday timings can be added before launch.",
                      action: "Ask on WhatsApp",
                    },
                  ].map((card) => {
                    const Icon = card.icon;
                    return (
                      <div key={card.title} className="rounded-[1.7rem] bg-white p-5 shadow-sm ring-1 ring-[#E8A7B4]/18">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-[#FBECEF] text-[#9D6673]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-extrabold">{card.title}</h3>
                            <p className="mt-1 text-sm leading-6 text-[#7A625B]">{card.copy}</p>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-bold text-[#9D6673] hover:text-[#2A1E1B]">
                              {card.action}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#2A1E1B] px-5 py-16 text-center text-white lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Your Beauty Appointment Starts with One Message
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Whether you need a quick refresh, a full self-care day, or a special event look, Unique Ladies Beauty Salon makes it easy to ask, plan, and book through WhatsApp.
            </p>
            <div className="mt-8">
              <CTAButton>Book on WhatsApp</CTAButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1E1512] px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#E8A7B4]">
                <Gem className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-xl font-bold leading-none">Unique Ladies Beauty Salon</p>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#E8A7B4]">Abu Dhabi</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/62">
              Beauty, hair, nails, makeup, facials, waxing, threading, henna, and self-care services for ladies in Abu Dhabi.
            </p>
            <p className="mt-4 rounded-2xl bg-white/7 p-4 text-xs leading-6 text-white/55">
              A modern online home for presenting salon services, beauty packages, customer highlights, and quick WhatsApp appointment requests.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="rounded-full bg-white/7 px-4 py-2 text-sm font-semibold text-white/72 transition hover:bg-white/12 hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-[#25D366]/30 transition hover:-translate-y-0.5 md:flex"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E8A7B4]/20 bg-[#FFF8F3]/94 p-3 backdrop-blur md:hidden">
        <CTAButton className="w-full">Chat on WhatsApp</CTAButton>
      </div>
    </div>
  );
}

export default App;
