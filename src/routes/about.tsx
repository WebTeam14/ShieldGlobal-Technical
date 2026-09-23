import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Shield, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-turbine.jpg";
import qualityImage from "@/assets/quality-detail.jpg";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Shield Global Technical Services LLC provides engineering contracting, MEP, civil construction, facility management, and technical support services.",
      },
      { property: "og:title", content: "About — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageIntro
        index="02"
        title="Engineering Excellence, Integrity & High-Performance Execution"
        description="Shield Global Technical Services LLC is a premier technical solutions and multi-disciplinary contracting firm delivering specialized engineering, construction, facility maintenance, and industrial support."
      />

      <section className="technical-container grid gap-8 py-10 sm:py-12 md:py-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden border border-border bg-black rounded-xs">
            <img
              src={heroImage}
              width={1536}
              height={1280}
              alt="Shield Global Technical operations"
              className="aspect-[4/3] w-full object-cover opacity-90"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-md p-3.5 border border-zinc-800 text-white rounded-xs">
              <div className="text-xs font-mono uppercase text-[#60a5fa] font-bold">
                Shield Global Technical Services LLC
              </div>
              <div className="text-[11px] text-zinc-300">
                Committed to Safety, Quality & Engineering Precision
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f4ba1]/10 text-[#0f4ba1] border border-[#0f4ba1]/20 text-[11px] font-bold uppercase tracking-[0.16em] rounded-xs">
            Corporate Overview
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-foreground tracking-tight">
            Delivering robust technical solutions built to last.
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            From heavy structural construction and MEP installations to oil & gas infrastructure maintenance and certified technical staffing, Shield Global provides end-to-end expertise tailored to demanding industrial requirements.
          </p>
          <div className="space-y-2 pt-1">
            {[
              "Multi-disciplinary engineering capabilities under one roof",
              "Comprehensive QA/QC and zero-incident HSE management systems",
              "Experienced project managers, certified inspectors, and specialized workforce",
              "Uncompromising adherence to safety standards and client project timelines",
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f4ba1]" />
                <span className="text-foreground font-medium">{pt}</span>
              </div>
            ))}
          </div>
          <div className="pt-3 flex flex-wrap gap-3">
            <QuoteModal>
              <Button variant="default" size="default" className="bg-[#0f4ba1] hover:bg-[#1358be] text-white font-bold uppercase tracking-wider text-xs shadow-md rounded-xs">
                Request a Quotation
              </Button>
            </QuoteModal>
            <Button asChild variant="outline" size="default" className="text-xs uppercase tracking-wider font-bold rounded-xs">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Core Values */}
      <section className="border-t border-border bg-slate-50/70 py-10 sm:py-12 md:py-14">
        <div className="technical-container">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f4ba1]/10 text-[#0f4ba1] border border-[#0f4ba1]/20 text-[11px] font-bold uppercase tracking-[0.16em] rounded-xs">
            Core Pillars
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">Our Operating Principles</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Engineering Precision",
                desc: "We bring meticulous planning, certified methodologies, and advanced tooling to every civil, mechanical, and MEP challenge.",
                icon: Target,
              },
              {
                title: "Safety & Integrity First",
                desc: "Zero-harm commitment across all work sites, comprehensive hazard identification, and strict adherence to international safety codes.",
                icon: Shield,
              },
              {
                title: "Client Partnership",
                desc: "Transparent communication, proactive schedule tracking, and adaptable engineering teams that ensure on-time delivery.",
                icon: Users,
              },
            ].map((item, index) => (
              <Reveal key={item.title}>
                <div className="border border-border bg-white p-6 space-y-3 h-full transition-all hover:border-[#0f4ba1] hover:shadow-lg rounded-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#0f4ba1]/10 text-[#0f4ba1] rounded-xs">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0f4ba1]">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}