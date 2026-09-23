import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  Cpu,
  Flame,
  Layers,
  Menu,
  Phone,
  Mail,
  Shield,
  ShieldCheck,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState, type ReactNode, useRef } from "react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/quote-modal";
import { servicesList } from "@/data/services";
import logoImg from "@/assets/logo.png";

const serviceIconsMap: Record<string, typeof Building2> = {
  Building2,
  Wrench,
  Flame,
  Zap,
  Cpu,
  Layers,
  Users,
};

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Quotation Dialog accessible throughout app */}
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Main Header - Corporate Topbar + Clean White Background Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white text-slate-950 border-b border-slate-200/90 shadow-sm transition-all duration-300">
        {/* Sleek Corporate Topbar */}
        <div className="hidden border-b border-zinc-800 bg-[#0a0a0a] text-zinc-300 py-1.5 text-[11px] font-medium lg:block">
          <div className="technical-container flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Mail className="h-3.5 w-3.5 text-[#0f4ba1]" />
                <span>info@shieldglobaltech.ae</span>
              </span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Phone className="h-3.5 w-3.5 text-[#0f4ba1]" />
                <span>+971 4 000 0000</span>
              </span>
            </div>
            <div className="flex items-center gap-5 text-[10.5px] uppercase tracking-wider text-zinc-400">
              <span className="flex items-center gap-1 text-zinc-200">
                <ShieldCheck className="h-3.5 w-3.5 text-[#0f4ba1]" />
                <span>Quality Assured • Safety First • Engineering Excellence</span>
              </span>
              <span className="text-zinc-600">|</span>
              <span>UAE & GCC Multi-Disciplinary Contracting</span>
            </div>
          </div>
        </div>

        <div className="technical-container">
          <div className="flex h-20 sm:h-24 items-center justify-between gap-6">
            {/* Left Side Logo: Shield Global Technical Services LLC */}
            <Link
              to="/"
              className="group flex items-center gap-3 shrink-0 py-1"
              aria-label="Shield Global Technical Services LLC home"
              title="Shield Global Technical Services LLC"
            >
              <img
                src={logoImg}
                alt="Shield Global Technical Services LLC"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Right Side: Navigation Menus & CTA Button */}
            <div className="ml-auto hidden items-center gap-2 xl:gap-3 lg:flex">
              <nav
                className="flex items-center gap-1 xl:gap-1.5"
                aria-label="Main navigation"
              >
                {/* Home */}
                <Link
                  to="/"
                  className="px-3 py-1.5 text-[14px] font-bold uppercase tracking-[0.1em] text-slate-700 border border-transparent hover:border-slate-200 hover:bg-slate-50 hover:text-[#0f4ba1] rounded-sm transition-all duration-150"
                >
                  Home
                </Link>

                {/* About Us */}
                <Link
                  to="/about"
                  className="px-3 py-1.5 text-[14px] font-bold uppercase tracking-[0.1em] text-slate-700 border border-transparent hover:border-slate-200 hover:bg-slate-50 hover:text-[#0f4ba1] rounded-sm transition-all duration-150"
                >
                  About Us
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-1 px-3 py-1.5 text-[14px] font-bold uppercase tracking-[0.1em] border rounded-sm transition-all duration-150 ${
                      servicesDropdownOpen
                        ? "text-[#0f4ba1] border-[#0f4ba1]/30 bg-[#0f4ba1]/5"
                        : "text-slate-700 border-transparent hover:border-slate-200 hover:bg-slate-50 hover:text-[#0f4ba1]"
                    }`}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    Services
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-[#0f4ba1]" : "text-slate-500"
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu - Clean White Card */}
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 top-full mt-1.5 w-[640px] rounded-xs border border-slate-200 bg-white p-5 text-slate-900 shadow-2xl backdrop-blur-xl z-50"
                      >
                        <div className="border-b border-slate-100 pb-3 mb-3 flex items-center justify-between px-1">
                          <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-slate-500">
                            Service Divisions
                          </div>
                          <Link
                            to="/services"
                            className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#0f4ba1] hover:underline flex items-center gap-1"
                          >
                            All Services <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {servicesList.map((srv) => {
                            const IconComp = serviceIconsMap[srv.icon] || Building2;
                            return (
                              <Link
                                key={srv.id}
                                to="/services"
                                hash={srv.id}
                                className="group/item flex items-start gap-3 rounded-xs p-2.5 transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100"
                              >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xs border border-slate-200 bg-slate-50 text-[#0f4ba1] group-hover/item:border-[#0f4ba1] group-hover/item:bg-[#0f4ba1] group-hover/item:text-white transition-all">
                                  <IconComp className="h-4 w-4" />
                                </span>
                                <div className="space-y-0.5">
                                  <div className="text-[12px] font-bold uppercase tracking-wider text-slate-900 group-hover/item:text-[#0f4ba1] transition-colors">
                                    {srv.title}
                                  </div>
                                  <p className="line-clamp-1 text-[11px] text-slate-500 leading-normal">
                                    {srv.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        <div className="mt-4 border-t border-slate-100 pt-3 px-2 flex items-center justify-between bg-slate-50/80 rounded-xs p-2.5 text-xs">
                          <span className="text-[11px] text-slate-600 font-medium">
                            Need specific technical specs or project BOQ?
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              setQuoteModalOpen(true);
                            }}
                            className="text-[11px] font-bold uppercase tracking-wider text-[#0f4ba1] hover:underline flex items-center gap-1"
                          >
                            Request Quotation →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Us */}
                <Link
                  to="/contact"
                  className="px-3 py-1.5 text-[14px] font-bold uppercase tracking-[0.1em] text-slate-700 border border-transparent hover:border-slate-200 hover:bg-slate-50 hover:text-[#0f4ba1] rounded-sm transition-all duration-150"
                >
                  Contact Us
                </Link>
              </nav>

              {/* Sticky CTA Button */}
              <div className="pl-3 shrink-0">
                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  variant="default"
                  size="sm"
                  className="inline-flex items-center gap-2 bg-[#0f4ba1] hover:bg-[#1358be] text-white px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] shadow-md transition-all active:scale-95 rounded-sm"
                >
                  Request a Quotation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-900 hover:bg-slate-100"
                onClick={() => setOpen((val) => !val)}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer - Clean White Sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] overflow-y-auto border-t border-slate-200 bg-white px-6 py-6 text-slate-900 lg:hidden shadow-2xl"
            >
              <div className="pb-4 mb-3 border-b border-slate-100 flex items-center justify-between">
                <Link to="/" onClick={() => setOpen(false)} className="inline-block" title="Shield Global Technical Services LLC">
                  <img
                    src={logoImg}
                    alt="Shield Global Technical Services LLC"
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                </Link>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f4ba1] bg-[#0f4ba1]/10 px-2.5 py-1 rounded-xs">
                  Quality Assured
                </span>
              </div>
              <div className="space-y-1">
                {/* Home */}
                <Link
                  to="/"
                  className="flex items-center justify-between border-b border-slate-100 py-3 text-base font-semibold uppercase tracking-wider text-slate-800"
                >
                  <span>Home</span>
                  <span className="text-[10px] text-slate-400 font-mono">01</span>
                </Link>

                {/* About Us */}
                <Link
                  to="/about"
                  className="flex items-center justify-between border-b border-slate-100 py-3 text-base font-semibold uppercase tracking-wider text-slate-800"
                >
                  <span>About Us</span>
                  <span className="text-[10px] text-slate-400 font-mono">02</span>
                </Link>

                {/* Services Expandable Accordion */}
                <div className="border-b border-slate-100 py-2">
                  <div className="flex items-center justify-between py-1">
                    <Link
                      to="/services"
                      className="text-base font-semibold uppercase tracking-wider text-slate-800"
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="p-2 text-slate-500 hover:text-slate-900"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 pb-3 pt-2 pl-3 border-l-2 border-primary/40 my-2"
                      >
                        {servicesList.map((srv) => (
                          <Link
                            key={srv.id}
                            to="/services"
                            hash={srv.id}
                            className="block py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-primary"
                          >
                            {srv.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Contact Us */}
                <Link
                  to="/contact"
                  className="flex items-center justify-between border-b border-slate-100 py-3 text-base font-semibold uppercase tracking-wider text-slate-800"
                >
                  <span>Contact Us</span>
                  <span className="text-[10px] text-slate-400 font-mono">04</span>
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                <Button
                  onClick={() => {
                    setOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full justify-center bg-primary py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-md"
                  size="lg"
                >
                  Request a Quotation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <div className="flex justify-between items-center text-[11px] text-slate-500 pt-2">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Safety & Quality Standard
                  </span>
                  <span>info@shieldglobaltech.ae</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area with appropriate top spacing for fixed navbar */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer - Luxury Deep Black with Blue Accents & Compact Spacing */}
      <footer className="border-t border-zinc-800 bg-[#0a0a0a] text-zinc-200">
        <div className="technical-container py-10 lg:py-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Company Profile & Official Logo */}
            <div className="space-y-4">
              <Link to="/" className="inline-block" title="Shield Global Technical Services LLC">
                <img
                  src={logoImg}
                  alt="Shield Global Technical Services LLC"
                  className="h-14 sm:h-16 md:h-18 w-auto object-contain bg-white/95 p-1.5 rounded-sm shadow-sm"
                />
              </Link>
              <p className="text-xs leading-relaxed text-zinc-400">
                Delivering excellence across building construction, facility management, oil & gas, energy utilities, MEP contracting, welding fabrication, and technical engineering support.
              </p>
              <div className="pt-1">
                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  variant="default"
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs uppercase tracking-wider font-bold"
                >
                  Request a Quotation
                </Button>
              </div>
            </div>

            {/* Column 2: Service Divisions */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                Service Divisions
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400">
                {servicesList.map((srv) => (
                  <li key={srv.id}>
                    <Link
                      to="/services"
                      hash={srv.id}
                      className="hover:text-primary transition-colors block py-0.5"
                    >
                      {srv.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Navigation */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                Navigation
              </div>
              <ul className="space-y-1.5 text-xs text-zinc-400">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link to="/hse-quality" className="hover:text-primary transition-colors">HSE & Quality</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Accreditations */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-white">
                Regional Operations
              </div>
              <div className="space-y-2 text-xs text-zinc-400">
                <p>Industrial Area & Offshore Technical Operations</p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-primary" /> info@shieldglobaltech.ae
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-primary" /> +971 4 000 0000 / Quotations
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <div className="text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                  Quality & Safety
                </div>
                <div className="mt-1 text-[11px] font-semibold text-white flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Zero-Incident HSE & Strict QA/QC Compliance
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
            <div>
              © {new Date().getFullYear()} Shield Global Technical Services LLC. All rights reserved.
            </div>
            <div className="flex gap-6 uppercase tracking-wider text-[10px]">
              <Link to="/hse-quality" className="hover:text-white">HSE Policy</Link>
              <Link to="/about" className="hover:text-white">Quality Assurance</Link>
              <Link to="/contact" className="hover:text-white">Tenders & Inquiries</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}