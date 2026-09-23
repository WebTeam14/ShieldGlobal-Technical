import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Cpu,
  Flame,
  HardHat,
  Layers,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import heroTurbine from "@/assets/hero-turbine.jpg";
import qualityImg from "@/assets/quality-detail.jpg";
import serviceBuilding from "@/assets/service-building-construction.jpg";
import serviceFacility from "@/assets/service-facility-management.jpg";
import serviceOilGas from "@/assets/service-oil-gas.jpg";
import serviceEnergy from "@/assets/service-energy-utilities.jpg";
import serviceMep from "@/assets/service-mep.jpg";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shield Global Technical Services LLC — Engineering & Project Excellence" },
      {
        name: "description",
        content:
          "Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond.",
      },
      { property: "og:title", content: "Shield Global Technical Services LLC" },
      {
        property: "og:description",
        content:
          "Engineering. Technical Services. Project Excellence. Integrated solutions across the UAE & beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

// The 5 Main Pillars with visual imagery, numbers, and descriptions
const mainPillars = [
  {
    number: "01",
    title: "Building Construction",
    tagline: "Civil & Structural Excellence",
    desc: "Civil construction, renovation, structural works, finishing and project support.",
    image: serviceBuilding,
    icon: Building2,
    slug: "building-construction",
    features: ["Civil & Structural Works", "Commercial & Industrial Buildings", "Renovation & Fit-out", "Turnkey Finishing"],
  },
  {
    number: "02",
    title: "Facility Management",
    tagline: "Total Asset Lifecycle Care",
    desc: "Hard FM, technical maintenance, MEP maintenance, building services and facility support.",
    image: serviceFacility,
    icon: Wrench,
    slug: "facility-management",
    features: ["Hard FM Solutions", "Planned Preventive Maintenance (PPM)", "Building Automation & HVAC", "24/7 Operations Support"],
  },
  {
    number: "03",
    title: "Oil & Gas",
    tagline: "Onshore & Offshore Operations",
    desc: "Onshore & offshore technical services, maintenance, shutdown, turnaround and project support.",
    image: serviceOilGas,
    icon: Flame,
    slug: "oil-gas",
    features: ["Pipeline & Plant Maintenance", "Offshore & Onshore Support", "Shutdown Management", "API & ASME Code Compliance"],
  },
  {
    number: "04",
    title: "Energy & Utilities",
    tagline: "Power & Grid Infrastructure",
    desc: "Technical services and maintenance support for power, water, energy and utility infrastructure.",
    image: serviceEnergy,
    icon: Zap,
    slug: "energy-utilities",
    features: ["Substation & Grid Installations", "Water & Wastewater Systems", "Renewable & Solar Support", "HV / MV Cabling & Testing"],
  },
  {
    number: "05",
    title: "MEP Services",
    tagline: "Integrated Systems & Controls",
    desc: "Mechanical, electrical, HVAC, plumbing, BMS and associated building systems.",
    image: serviceMep,
    icon: Cpu,
    slug: "mep-services",
    features: ["HVAC & Chilled Water Piping", "Fire Fighting & Alarm Systems", "Electrical Distribution & LV", "BMS & Smart Building Setup"],
  },
];

// Secondary Specialized Technical Capabilities
const secondaryServices = [
  {
    title: "Welding & Fabrication",
    badge: "Specialized Shop & Field",
    desc: "Heavy structural steel fabrication, ASME/AWS coded pipe spooling, skid-mounted units, and certified NDT-compliant welding.",
    icon: Layers,
    link: "/services#welding-fabrication",
  },
  {
    title: "EPC/EPCM Technical Support",
    badge: "Engineering & Supervision",
    desc: "Multi-disciplinary engineering manpower, QA/QC certified inspection, third-party audits, and comprehensive project controls.",
    icon: HardHat,
    link: "/services#technical-support",
  },
  {
    title: "Project Mobilization",
    badge: "Rapid Response Deployment",
    desc: "Fast-track site setup, specialized equipment logistics, certified manpower mobilization, and structured tooling deployment across the region.",
    icon: Truck,
    link: "/contact",
  },
  {
    title: "Shutdown & Turnaround Support",
    badge: "24/7 Outage Management",
    desc: "Critical-path turnaround execution, heat exchanger & valve overhaul, emergency mechanical repairs, and rapid re-commissioning.",
    icon: RotateCcw,
    link: "/services#oil-gas",
  },
];

const heroWords = [
  "Excellence.",
  "Precision.",
  "Reliability.",
  "Innovation.",
  "Performance.",
];

function SlidingHeroWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden h-[1.14em] align-bottom pb-0.5">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroWords[index]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block text-[#38bdf8] font-black drop-shadow-[0_2px_14px_rgba(15,75,161,0.65)]"
        >
          {heroWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function HomePage() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.25], [0, 80]);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90svh] flex flex-col justify-between overflow-hidden bg-[#080808] text-white">
        {/* Background Image with Parallax & Industrial Overlay */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 h-[115%] w-full">
          <img
            src={heroTurbine}
            width={1920}
            height={1080}
            alt="Shield Global Technical Services LLC industrial operations"
            className="h-full w-full object-cover object-[60%_center] opacity-35 sm:opacity-45"
          />
        </motion.div>
        
        {/* Tech Grid Gradient Overlays & Deep Blue Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/50 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/50" />
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-[#0f4ba1]/20 blur-[120px] pointer-events-none" />

        {/* Hero Content */}
        <div className="technical-container relative z-10 flex flex-1 flex-col justify-center pb-8 pt-28 sm:pt-32 lg:pb-12 lg:pt-36">
          {/* Company Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 border border-[#0f4ba1]/50 bg-[#0f4ba1]/20 px-3.5 py-1.5 backdrop-blur-md self-start rounded-xs"
          >
            <Shield className="h-4 w-4 text-[#0f4ba1]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white">
              SHIELD GLOBAL TECHNICAL SERVICES LLC
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 max-w-5xl font-display text-4xl leading-[1.06] sm:text-6xl md:text-7xl lg:text-[5.4rem] font-extrabold tracking-tight text-white"
          >
            Engineering. <br className="hidden sm:inline" />
            Technical Services. <br />
            <span className="text-white">Project </span>
            <SlidingHeroWord />
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base md:text-lg font-normal"
          >
            Delivering integrated technical, construction, maintenance and project support solutions across Building Construction, Facility Management, Oil & Gas, Energy & Utilities and MEP sectors in the UAE and beyond.
          </motion.p>

          {/* Buttons: Our Services | Request a Quotation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center gap-3.5 pt-1"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-700 bg-black/50 text-white hover:bg-white hover:text-black backdrop-blur-sm text-xs uppercase tracking-widest font-bold px-6 py-5 rounded-xs"
            >
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <QuoteModal>
              <Button
                variant="default"
                size="lg"
                className="bg-[#0f4ba1] hover:bg-[#1358be] text-white text-xs uppercase tracking-widest font-bold px-7 py-5 shadow-xl shadow-[rgba(15,75,161,0.35)] rounded-xs"
              >
                Request a Quotation
              </Button>
            </QuoteModal>
          </motion.div>
        </div>

        {/* Bottom Trust & Compliance Bar */}
        <div className="relative z-10 border-t border-zinc-800/90 bg-[#080808]/90 backdrop-blur-md py-3.5">
          <div className="technical-container grid grid-cols-2 gap-3 sm:grid-cols-4 text-zinc-300 text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#0f4ba1] shrink-0" />
              <span>Safety & QA/QC Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#0f4ba1] shrink-0" />
              <span>Civil & MEP Contracting</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-[#0f4ba1] shrink-0" />
              <span>Oil & Gas / Energy Specs</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#0f4ba1] shrink-0" />
              <span>UAE & Regional Execution</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 5 CORE PILLARS SECTION */}
      <section className="border-t border-border bg-background py-10 sm:py-12 md:py-14 text-foreground">
        <div className="technical-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <div className="section-label text-[#0f4ba1] font-bold tracking-[0.16em]">
                Multi-Disciplinary Capabilities
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                The 5 Core Pillars
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Engineered turnkey solutions tailored for major industrial, commercial, civil, and energy infrastructure projects across the GCC.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <article
                  key={pillar.number}
                  className="group relative flex flex-col justify-between border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-[#0f4ba1] hover:shadow-xl rounded-xs"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] overflow-hidden bg-black rounded-xs">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                      />
                      <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[11px] font-mono font-bold text-white border border-white/20">
                        {pillar.number}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center bg-[#0f4ba1]/10 text-[#0f4ba1] border border-[#0f4ba1]/25 rounded-xs">
                          <IconComp className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-[11px] uppercase tracking-wider font-bold text-[#0f4ba1]">
                          {pillar.tagline}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-[#0f4ba1] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-border/80">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-foreground mb-2">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-1">
                        {pillar.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#0f4ba1] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-border flex items-center justify-between">
                    <Link
                      to="/services"
                      hash={pillar.slug}
                      className="text-xs uppercase tracking-wider font-bold text-foreground group-hover:text-[#0f4ba1] flex items-center gap-1.5 transition-colors"
                    >
                      Explore Service <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                    <QuoteModal defaultService={pillar.title}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-[11px] uppercase tracking-wider font-bold border-border hover:border-[#0f4ba1] hover:bg-[#0f4ba1] hover:text-white"
                      >
                        Quote
                      </Button>
                    </QuoteModal>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SECONDARY SERVICES & SPECIALIZED ENGINEERING */}
      <section className="border-t border-border bg-slate-50/70 py-10 sm:py-12 md:py-14 text-foreground">
        <div className="technical-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-border">
            <div>
              <div className="section-label text-[#0f4ba1] font-bold tracking-[0.16em]">
                Specialized Technical Services
              </div>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Fabrication, Manpower & Turnarounds
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Complementary technical disciplines providing comprehensive support from workshop pre-fabrication to on-site project commissioning.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryServices.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between border border-border bg-white p-5 shadow-xs transition-all duration-300 hover:border-[#0f4ba1] hover:shadow-lg rounded-xs"
                >
                  <div className="space-y-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#0f4ba1]/10 text-[#0f4ba1] border border-[#0f4ba1]/20 rounded-xs">
                      <IconComp className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="text-[10.5px] uppercase tracking-wider font-bold text-[#0f4ba1]">
                        {srv.badge}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                        {srv.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-slate-100">
                    <Link
                      to={srv.link}
                      className="text-xs uppercase tracking-wider font-bold text-foreground hover:text-[#0f4ba1] flex items-center gap-1.5 transition-colors"
                    >
                      Learn More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HSEQ & STANDARDS ASSURANCE (Dark High-Tech Section) */}
      <section className="border-t border-zinc-800 bg-[#0a0a0a] py-10 sm:py-12 md:py-14 text-white">
        <div className="technical-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-5 lg:col-span-7">
              <div className="section-label text-[#3b82f6] font-bold tracking-[0.18em]">HSEQ & Quality Standards</div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] text-white tracking-tight">
                Rigorous Safety Culture. <br />
                <span className="text-[#3b82f6] font-black">Zero-Compromise Quality.</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-300 max-w-xl">
                Every project executed by Shield Global Technical Services LLC adheres strictly to international engineering standards and regional regulatory requirements. We provide complete transparency through Inspection Test Plans (ITP), Material Test Certificates (MTC), and certified QA/QC oversight.
              </p>

              <div className="grid gap-3.5 pt-2 sm:grid-cols-3">
                <div className="border border-zinc-800 bg-zinc-900/90 p-3.5 backdrop-blur-sm rounded-xs hover:border-[#0f4ba1] transition-colors">
                  <div className="font-display text-xl sm:text-2xl text-[#3b82f6] font-extrabold">QA / QC</div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1">Quality Management</div>
                </div>
                <div className="border border-zinc-800 bg-zinc-900/90 p-3.5 backdrop-blur-sm rounded-xs hover:border-[#0f4ba1] transition-colors">
                  <div className="font-display text-xl sm:text-2xl text-[#3b82f6] font-extrabold">HSE Plan</div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1">Health & Safety</div>
                </div>
                <div className="border border-zinc-800 bg-zinc-900/90 p-3.5 backdrop-blur-sm rounded-xs hover:border-[#0f4ba1] transition-colors">
                  <div className="font-display text-xl sm:text-2xl text-[#3b82f6] font-extrabold">Eco Guard</div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider mt-1">Environmental</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3.5">
                <Button asChild variant="editorial" size="lg" className="bg-[#0f4ba1] hover:bg-[#1358be] text-white font-bold rounded-xs">
                  <Link to="/hse-quality">
                    Explore HSE & Quality Manual <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-zinc-700 bg-transparent text-white hover:bg-white hover:text-black font-bold rounded-xs">
                  <Link to="/about">About Our Leadership</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden border border-zinc-800 bg-zinc-900 rounded-xs">
                <img
                  src={qualityImg}
                  alt="Quality assurance inspection and dimensional verification"
                  className="aspect-square w-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-zinc-800 pt-3 text-xs font-mono">
                  <span className="text-zinc-300 font-semibold">Shield Global QA/QC</span>
                  <span className="text-[#3b82f6] flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="h-4 w-4" /> 100% Traceability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / REQUEST A QUOTATION */}
      <section className="py-10 sm:py-12 md:py-14 bg-background">
        <div className="technical-container">
          <Reveal>
            <div className="relative overflow-hidden border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-xl rounded-xs">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="space-y-3 lg:col-span-8">
                  <div className="section-label text-[#0f4ba1] font-bold tracking-[0.18em]">Start Your Technical Tender</div>
                  <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                    Ready to mobilize your next industrial or construction project?
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    Contact Shield Global Technical Services LLC for competitive bids, project proposals, and technical consultations across the UAE and Gulf region.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:col-span-4 lg:items-end justify-center">
                  <QuoteModal>
                    <Button
                      variant="default"
                      size="lg"
                      className="w-full sm:w-auto bg-[#0f4ba1] hover:bg-[#1358be] text-white py-5 px-7 text-xs uppercase tracking-widest font-bold shadow-lg shadow-[rgba(15,75,161,0.3)] rounded-xs"
                    >
                      Request a Quotation <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </QuoteModal>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto py-5 px-7 text-xs uppercase tracking-widest font-bold rounded-xs"
                  >
                    <Link to="/contact">Contact Technical Desk</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}