import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";
import { servicesList } from "@/data/services";
import {
  Building2,
  Wrench,
  Flame,
  Zap,
  Cpu,
  Layers,
  Users,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import svcBuilding from "@/assets/svc-building-construction.jpg";
import svcFacility from "@/assets/svc-facility-management.jpg";
import svcOilGas from "@/assets/svc-oil-gas.jpg";
import svcEnergy from "@/assets/svc-energy-utilities.jpg";
import svcMep from "@/assets/svc-mep-services.jpg";
import svcWelding from "@/assets/svc-welding-fabrication.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shield Global Technical Services LLC" },
      {
        name: "description",
        content:
          "Comprehensive technical services: Building Construction, Facility Management, Oil & Gas, Energy & Utilities, MEP, Welding & Fabrication, Technical Support.",
      },
      { property: "og:title", content: "Services — Shield Global Technical Services LLC" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ServicesPage,
});

const serviceIcons: Record<string, typeof Building2> = {
  Building2,
  Wrench,
  Flame,
  Zap,
  Cpu,
  Layers,
  Users,
};

const serviceImages: Record<string, string> = {
  "building-construction": svcBuilding,
  "facility-management": svcFacility,
  "oil-gas": svcOilGas,
  "energy-utilities": svcEnergy,
  "mep-services": svcMep,
  "welding-fabrication": svcWelding,
  "technical-support": svcBuilding,
};

function ServicesPage() {
  return (
    <>
      <PageIntro
        index="03"
        title="Comprehensive Technical & Industrial Services"
        description="Shield Global Technical Services LLC delivers multi-disciplinary contracting, engineering fabrication, maintenance, and facility solutions across critical industry sectors."
      />

      {/* Services List Section (Compact seamless flow) */}
      <section className="py-10 sm:py-12 md:py-14 bg-background">
        <div className="technical-container space-y-10 sm:space-y-12">
          {servicesList.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Building2;
            const img = serviceImages[service.id] || heroTurbine;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 border-t border-border pt-8 sm:pt-10"
              >
                <Reveal>
                  <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                    <div
                      className={`space-y-4 ${
                        isEven
                          ? "lg:col-span-6 lg:order-2 lg:pl-4"
                          : "lg:col-span-6 lg:order-1 lg:pr-4"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-xs uppercase tracking-[0.16em] text-primary font-bold">
                          Service Division 0{index + 1}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight text-foreground">
                        {service.title}
                      </h2>

                      <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {service.fullDesc}
                      </p>

                      <div className="space-y-2 pt-1">
                        <div className="text-xs font-bold uppercase tracking-[0.12em] text-foreground">
                          Key Capabilities:
                        </div>
                        <ul className="grid gap-1.5 sm:grid-cols-2">
                          {service.features.map((feature, fIdx) => (
                            <li
                              key={fIdx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90"
                            >
                              <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <QuoteModal defaultService={service.title}>
                          <Button variant="default" size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs">
                            Request Quotation for {service.title} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                          </Button>
                        </QuoteModal>
                        <Link
                          to="/contact"
                          className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-primary underline underline-offset-4"
                        >
                          Technical Inquiry
                        </Link>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden border border-border bg-card shadow-sm ${
                        isEven
                          ? "lg:col-span-6 lg:order-1"
                          : "lg:col-span-6 lg:order-2"
                      }`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-black">
                        <img
                          src={img}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-[11px] uppercase tracking-widest font-mono text-zinc-300">
                            Shield Global Ref-0{index + 1}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-primary font-bold">
                            <ShieldCheck className="h-4 w-4 text-primary" /> Quality Assured
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-800 bg-[#0a0a0a] py-10 sm:py-12 md:py-14 text-white">
        <div className="technical-container text-center max-w-3xl">
          <div className="section-label text-primary font-bold">Turnkey Engineering & Contracting</div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl text-white">
            Need a customized solution for your project?
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-zinc-300 md:text-base leading-relaxed">
            Our multi-disciplinary engineering teams provide detailed proposals, site inspections, and quotation breakdowns for projects across the region.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <QuoteModal>
              <Button variant="default" size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-xs">
                Request a Quotation
              </Button>
            </QuoteModal>
            <Button asChild variant="outline" size="default" className="border-zinc-700 bg-transparent text-white hover:bg-white hover:text-black font-semibold uppercase tracking-wider text-xs">
              <Link to="/contact">Speak with an Engineer</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
