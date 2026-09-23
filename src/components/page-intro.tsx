import { useState, useEffect } from "react";
import { Reveal } from "@/components/reveal";

export function TypewriterHeading({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(true);
    let currentIndex = 0;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsTyping(false);
      return;
    }

    // Gentle initial delay before typing begins
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, 150);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className="relative inline" aria-label={text}>
      <span aria-hidden="true">{displayedText}</span>
      <span
        className={`inline-block ml-1.5 w-[3px] sm:w-[4px] md:w-[5px] h-[0.82em] align-baseline bg-[#0f4ba1] transition-opacity duration-200 ${
          isTyping ? "opacity-100 animate-pulse" : "opacity-0"
        }`}
        aria-hidden="true"
      />
      <span className="sr-only">{text}</span>
    </span>
  );
}

export function PageIntro({ index, title, description }: { index: string; title: string; description: string }) {
  return (
    <section className="technical-grid border-b border-border pt-28 sm:pt-32 lg:pt-36 bg-background">
      <div className="technical-container pb-8 sm:pb-10 lg:pb-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f4ba1]/10 text-[#0f4ba1] border border-[#0f4ba1]/25 text-[11px] font-bold uppercase tracking-[0.18em] rounded-xs">
            {index} / Shield Global Technical Services LLC
          </div>
          <h1 className="mt-4 max-w-5xl font-display text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.08] text-foreground tracking-tight min-h-[1.15em]">
            <TypewriterHeading text={title} />
          </h1>
          <p className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground md:ml-[25%] font-normal">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}