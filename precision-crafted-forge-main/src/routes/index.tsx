import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-turbine.jpg";
import qualityImage from "@/assets/quality-detail.jpg";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Precision Engineering Products — Axiom Industrial" }, { name: "description", content: "Premium precision engineering products for demanding industrial applications." }, { property: "og:title", content: "Axiom Industrial — Precision That Moves Industry" }, { property: "og:description", content: "Engineered product systems shaped by precision, performance, and purpose." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: HomePage,
});

function SectionLabel({ number, children }: { number: string; children: string }) { return <div className="section-label flex gap-5"><span className="text-primary">{number}</span><span>{children}</span></div>; }

function HomePage() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, .18], [0, 60]);
  return <>
    <section className="relative min-h-[92svh] overflow-hidden bg-foreground text-hero-foreground">
      <motion.img style={{ y: imageY }} src={heroImage} width={1536} height={1280} alt="Precision turbine assembly in a manufacturing hall" className="absolute inset-0 h-[110%] w-full object-cover object-[58%_center] opacity-70" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--foreground)_0%,color-mix(in_oklab,var(--foreground)_78%,transparent)_45%,transparent_78%)]" />
      <div className="technical-container relative flex min-h-[92svh] flex-col justify-end pb-12 pt-32 lg:pb-16">
        <div className="section-label text-hero-foreground/70">Engineered for excellence</div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="mt-6 max-w-4xl font-display text-6xl leading-[.88] md:text-8xl lg:text-[9.5rem]">Precision That<br /><em className="font-normal text-accent">Moves Industry.</em></motion.h1>
        <div className="mt-9 grid gap-8 md:grid-cols-[minmax(0,32rem)_auto] md:items-end md:justify-between">
          <div><p className="max-w-md text-sm leading-6 text-hero-foreground/75 md:text-base">Engineered product systems shaped by precision, performance, and purpose. Built for the demands that define modern industry.</p><Button asChild variant="editorial" size="lg" className="mt-7"><Link to="/products">Explore Products <ArrowRight /></Link></Button></div>
          <div className="grid grid-cols-3 gap-5 border-t border-hero-foreground/30 pt-4 text-[9px] uppercase tracking-[0.13em] text-hero-foreground/70"><span>01 / Engineering</span><span>02 / Precision</span><span>03 / Performance</span></div>
        </div>
      </div>
    </section>

    <section className="technical-grid py-24 lg:py-36"><div className="technical-container"><Reveal><SectionLabel number="01">About</SectionLabel><div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_.6fr]"><h2 className="font-display text-5xl leading-[.98] md:text-7xl lg:text-8xl">Engineering products for industries where performance matters.</h2><div className="flex flex-col justify-end"><p className="text-sm leading-7 text-muted-foreground">A placeholder corporate profile for a product-led engineering company. Replace this copy with the organization’s verified story and experience.</p><Link to="/about" className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.12em]">Our perspective <ArrowUpRight className="h-4 w-4" /></Link></div></div></Reveal></div></section>

    <section className="border-y border-border py-24 lg:py-32"><div className="technical-container"><SectionLabel number="02">Products</SectionLabel><div className="mt-12 border-t border-border">{products.map((product, index) => <Reveal key={product.name}><Link to="/products" className="group grid gap-6 border-b border-border py-8 md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-center"><span className="section-label">0{index + 1}</span><div className="overflow-hidden"><img loading="lazy" src={product.image} width={1280} height={960} alt={product.name} className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /></div><div className="md:pl-6"><div className="section-label">{product.category}</div><h3 className="mt-2 font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-5xl">{product.name}</h3></div><ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></Reveal>)}</div></div></section>

    <section className="py-24 lg:py-32"><div className="technical-container"><SectionLabel number="03">Industries</SectionLabel><div className="mt-12 space-y-4">{industries.map((industry, index) => <Reveal key={industry.name}><Link to="/industries" className="group relative block min-h-[24rem] overflow-hidden"><img loading="lazy" src={industry.image} width={1536} height={896} alt={industry.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-foreground/45" /><div className="relative flex min-h-[24rem] items-end justify-between p-7 text-hero-foreground md:p-12"><div><div className="section-label text-hero-foreground/70">0{index + 1} / Industry</div><h3 className="mt-3 font-display text-5xl md:text-7xl">{industry.name}</h3></div><ArrowUpRight className="h-7 w-7" /></div></Link></Reveal>)}</div></div></section>

    <section className="border-y border-border py-24 lg:py-36"><div className="technical-container"><SectionLabel number="04">Capabilities</SectionLabel><div className="mt-14">{["Engineering", "Manufacturing", "Quality", "Customization"].map((item, index) => <Reveal key={item}><div className="grid grid-cols-[4rem_1fr] items-center border-t border-border py-7 md:grid-cols-[9rem_1fr_auto]"><span className="font-display text-4xl text-primary md:text-6xl">0{index + 1}</span><h3 className="font-display text-4xl md:text-7xl">{item}</h3><span className="hidden text-[10px] uppercase tracking-[.14em] text-muted-foreground md:block">From concept to performance</span></div></Reveal>)}</div></div></section>

    <section className="bg-foreground py-24 text-hero-foreground lg:py-36"><div className="technical-container grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><Reveal><SectionLabel number="05">Quality</SectionLabel><h2 className="mt-10 max-w-4xl font-display text-6xl leading-[.93] md:text-8xl">Precision is not an option. <em className="font-normal text-accent">It’s our standard.</em></h2><p className="mt-8 max-w-md text-sm leading-7 text-hero-foreground/65">A disciplined approach to material, process, inspection, and continual refinement.</p></Reveal><Reveal><img loading="lazy" src={qualityImage} width={1280} height={1280} alt="Close-up of precision machined gears" className="aspect-square w-full object-cover" /></Reveal></div></section>

    <section className="py-24 lg:py-36"><div className="technical-container"><SectionLabel number="06">Projects</SectionLabel><div className="mt-14 grid gap-8 md:grid-cols-12">{projects.map((project, index) => <Reveal key={project.name} className={index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5 md:pt-32" : "md:col-span-8 md:col-start-5"}><Link to="/projects" className="group block"><div className="overflow-hidden"><img loading="lazy" src={project.image} width={1280} height={960} alt={project.name} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div><div className="mt-5 flex items-start justify-between"><div><div className="section-label">{project.type}</div><h3 className="mt-2 font-display text-3xl md:text-4xl">{project.name}</h3></div><ArrowUpRight className="h-5 w-5" /></div></Link></Reveal>)}</div></div></section>

    <section className="technical-grid border-y border-border py-24 lg:py-32"><div className="technical-container grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><Reveal><SectionLabel number="07">Global Presence</SectionLabel><h2 className="mt-8 font-display text-5xl md:text-7xl">Built to connect with industry, wherever performance is required.</h2><p className="mt-6 text-sm text-muted-foreground">Operating regions and locations to be supplied.</p></Reveal><div className="relative aspect-[16/9] border border-border bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1.5px)] bg-[size:20px_20px] opacity-70"><div className="absolute inset-[15%] rounded-[50%] border border-primary/50" /><div className="absolute left-[18%] top-1/2 h-px w-[64%] -rotate-12 bg-primary/60" /><span className="absolute left-[18%] top-[62%] h-3 w-3 rounded-full bg-primary" /><span className="absolute right-[18%] top-[34%] h-3 w-3 rounded-full bg-primary" /></div></div></section>

    <section className="py-24 lg:py-36"><div className="technical-container"><Reveal><SectionLabel number="08">Start a Conversation</SectionLabel><div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><h2 className="max-w-5xl font-display text-6xl leading-[.9] md:text-8xl lg:text-[9rem]">Let’s build what comes next.</h2><Button asChild variant="editorial" size="lg" className="shrink-0"><Link to="/contact">Start a Conversation <ArrowRight /></Link></Button></div></Reveal></div></section>
  </>;
}