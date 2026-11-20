import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

/**
 * Animated Journey Timeline Component
 * The vertical line glides down slowly as you scroll;
 * Circular nodes pop in as the line hits each milestone,
 * followed by the gentle appearance of the text.
 */
function JourneyTimeline({ steps }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0.12);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the timeline container
      const startOffset = windowHeight * 0.75;
      const endOffset = windowHeight * 0.25;
      const totalDistance = rect.height + (startOffset - endOffset);
      const currentDistance = startOffset - rect.top;
      
      const progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Thresholds for the 4 milestones
  const thresholds = [0.10, 0.35, 0.62, 0.88];

  return (
    <div ref={containerRef} className="relative pl-8 sm:pl-10 space-y-10">
      
      {/* Background Track (Muted Line) */}
      <div className="absolute left-[7px] sm:left-[9px] top-3 bottom-6 w-[2px] bg-[#E8D9C8] rounded-full" />

      {/* Active Animated Growing Amber Line */}
      <div 
        className="absolute left-[7px] sm:left-[9px] top-3 w-[2.5px] bg-[#B87538] rounded-full transition-all duration-700 ease-out origin-top shadow-[0_0_8px_rgba(184,117,56,0.35)]"
        style={{
          height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`
        }}
      />

      {steps.map((step, idx) => {
        const isReached = scrollProgress >= thresholds[idx];
        
        return (
          <div key={step.year} className="relative">
            
            {/* Circular Node: Pops in when line reaches position */}
            <div 
              className={`absolute -left-[30px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-700 ease-out flex items-center justify-center ${
                isReached 
                  ? 'border-[#B87538] bg-[#FAF2E9] scale-125 shadow-xs ring-4 ring-[#B87538]/20 opacity-100' 
                  : 'border-[#D9CEBF] bg-[#FAF7F2] scale-90 opacity-40'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${
                isReached ? 'bg-[#B87538]' : 'bg-transparent'
              }`} />
            </div>

            {/* Text Content: Gently slides in right after the node activates */}
            <div 
              className={`space-y-1.5 transition-all duration-700 ease-out ${
                isReached 
                  ? 'opacity-100 translate-y-0 filter-none' 
                  : 'opacity-0 translate-y-4 filter blur-[1px]'
              }`}
              style={{ transitionDelay: isReached ? '180ms' : '0ms' }}
            >
              <div className="flex items-center gap-3">
                <span className="font-serif font-bold text-sm text-[#B87538]">
                  {step.year}
                </span>
                <span className="text-[11px] text-[#8A837A] uppercase tracking-wider">
                  • {step.location}
                </span>
              </div>

              <h4 className="font-serif font-bold text-lg sm:text-xl text-[#24201D]">
                {step.phase}
              </h4>

              <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed font-sans max-w-xl">
                {step.text}
              </p>
            </div>

          </div>
        );
      })}

    </div>
  );
}

export default function AboutPage() {
  const journeySteps = [
    {
      year: '2011',
      phase: 'The Apprenticeship',
      location: 'New England',
      text: 'Trained under third-generation master seat weavers in rural Massachusetts. Spent eighteen months mastering the mathematical tension and geometry of traditional English 7-step caning and Danish cord lacing.'
    },
    {
      year: '2016',
      phase: 'The Pacific Northwest Studio',
      location: 'Oregon Atelier',
      text: 'Established an independent conservation bench in Oregon, specializing in restoring damp-damaged Victorian wicker, tropical Calamus rattan armchairs, and mid-century woven cord furniture.'
    },
    {
      year: '2021',
      phase: 'Perfecting the Natural Oil Recipe',
      location: 'Workshop Research',
      text: 'Frustrated by commercial polyurethane sprays that seal the surface and cause fibers to dry out underneath, Kerrie refined the classic 60/40 boiled linseed oil recipe to keep vintage rattan supple for decades.'
    },
    {
      year: '2026',
      phase: 'The Wicker Care Journal',
      location: 'Open Public Archive',
      text: 'Consolidating fifteen years of private bench notes into this open educational repository, offering homeowners free restoration tutorials, interactive troubleshooting, and printable bench guides.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-32 py-10 sm:py-16">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION: PERSONAL AUTHOR INTRODUCTION                 */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Author Greeting & Intro */}
          <Reveal direction="left" duration={650} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E9] border border-[#E8D9C8] text-xs font-semibold text-[#B87538]">
              <span className="w-2 h-2 rounded-full bg-[#B87538]" />
              <span>Independent Conservator • Pacific Northwest Atelier</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#24201D] leading-[1.12]">
              Hi there! I'm <span className="text-[#B87538]">Kerrie Escobar</span>.
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[#24201D] italic leading-snug">
              Furniture Conservator &amp; Woven Fiber Specialist with 15 Years of Workshop Experience.
            </p>

            <p className="text-sm sm:text-base text-[#645E57] leading-relaxed font-sans max-w-2xl">
              I have spent the last decade and a half at my workbench examining how natural plant vines, especially tropical rattan, steamed willow, and woven paper cord, hold up over decades of daily use. 
            </p>

            <p className="text-sm sm:text-base text-[#645E57] leading-relaxed font-sans max-w-2xl">
              I created this independent care journal to share gentle, non-destructive restoration techniques with homeowners, thrifters, and collectors. My mission is simple: to help you protect and revive your cherished woven furniture without synthetic chemicals or toxic aerosol sprays.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/guides"
                className="px-7 py-3.5 rounded-lg bg-[#B87538] text-white font-semibold text-xs hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Explore the Care Guides</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/how-to-use"
                className="px-7 py-3.5 rounded-lg bg-white border border-[#E8E2D8] text-[#24201D] font-semibold text-xs hover:bg-[#FAF7F2] hover:border-[#D4CBBD] transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Diagnose a Piece</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#645E57] font-medium">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2E9] border border-[#E8D9C8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6E58]" /> 15+ Years Active Bench
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2E9] border border-[#E8D9C8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6E58]" /> 100% Non-Toxic Recipes
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF2E9] border border-[#E8D9C8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6E58]" /> Zero Corporate Sponsorship
              </span>
            </div>
          </Reveal>

          {/* Right: Authentic Author Portrait */}
          <Reveal direction="right" duration={650} delay={150} className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-[#FAF2E9]">
                <img
                  src="/author-avt.jpg"
                  alt="Kerrie Escobar, Furniture Conservator in her workshop atelier"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                
                {/* Author Info Bar */}
                <div className="bg-white/95 backdrop-blur-xs p-5 border-t border-[#E8E2D8] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-lg text-[#24201D]">
                      Kerrie Escobar
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B87538] bg-[#FAF2E9] px-2.5 py-0.5 rounded-full">
                      Conservator
                    </span>
                  </div>
                  <p className="text-xs text-[#645E57]">
                    Pacific Northwest Studio • Specialist in Calamus Rattan &amp; English 7-Step Caning
                  </p>
                </div>
              </div>

              {/* Decorative Warm Layer */}
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-[#FAF2E9] border border-[#E8D9C8] rounded-2xl -z-10" />
            </div>
          </Reveal>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. FEATURED PUBLICATION SPOTLIGHT                             */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#FAF2E9] py-16 sm:py-24 border-y border-[#E8D9C8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Handbook Cover Mockup */}
            <Reveal direction="left" duration={650} className="md:col-span-5 flex justify-center">
              <div className="w-64 sm:w-72 aspect-[3/4] bg-[#24201D] text-[#FAF7F2] rounded-r-xl rounded-l-xs p-8 shadow-2xl border-l-8 border-[#3A332E] flex flex-col justify-between relative transform hover:rotate-1 transition-transform duration-500">
                <div className="space-y-4">
                  <span className="text-[10px] tracking-[0.25em] text-[#D99B62] uppercase block font-semibold">
                    KERRIE ESCOBAR • WORKSHOP HANDBOOK
                  </span>
                  <div className="w-8 h-px bg-[#B87538]" />
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-white">
                    The Architecture of Taut Fiber
                  </h3>
                  <p className="font-serif italic text-xs text-[#D99B62]">
                    A Practical Field Guide to Woven Cane Care &amp; Natural Oil Restoration
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A69E94]">
                  <span>Pacific Northwest</span>
                  <span>15 Years Bench</span>
                </div>
              </div>
            </Reveal>

            {/* Right: Publication Overview & Details */}
            <Reveal direction="right" duration={650} delay={150} className="md:col-span-7 space-y-5">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-[#B87538] border border-[#E8D9C8]">
                Signature Field Publication
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
                The Architecture of Taut Fiber &amp; Woven Cane
              </h2>

              <p className="font-serif italic text-base text-[#645E57]">
                A practical restoration handbook distilled from 15 years at the physical workshop bench.
              </p>

              <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed font-sans">
                Most modern furniture guides treat wicker and rattan like ordinary lumber. In this handbook, Kerrie explains how flexible palm vines differ from solid wood, showing why thick hardware-store varnishes eventually crack and how gentle plant oils keep woven pieces soft and resilient for years to come.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-3 border-t border-[#E8D9C8] text-xs text-[#24201D]">
                <div>
                  <strong className="block font-serif font-bold text-lg text-[#B87538]">Field Guides</strong>
                  <span className="text-[11px] text-[#645E57]">Step-by-step bench tutorials</span>
                </div>
                <div>
                  <strong className="block font-serif font-bold text-lg text-[#5B6E58]">100% Gentle</strong>
                  <span className="text-[11px] text-[#645E57]">Non-toxic household ingredients</span>
                </div>
                <div>
                  <strong className="block font-serif font-bold text-lg text-[#24201D]">Free</strong>
                  <span className="text-[11px] text-[#645E57]">Open educational archive</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/guides"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] transition-all shadow-xs"
                >
                  <span>Read the Full Guide Archive</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. THE EDITORIAL STORY: 15-YEAR RESTORATION JOURNEY           */}
      {/* (Featuring slow scroll-driven JourneyTimeline animation)       */}
      {/* ------------------------------------------------------------- */}
      <section className="bg-[#FAF7F2] py-20 border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Authentic Woven Chair Photography & Quote */}
            <Reveal direction="left" duration={650} className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-md bg-[#FAF2E9]">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80"
                  alt="Natural handcrafted rattan armchair in a sunlit room"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#E8E2D8] shadow-2xs space-y-2">
                <p className="font-serif italic text-xs sm:text-sm text-[#24201D] leading-relaxed">
                  "Woven cane seats hold the history of morning coffee conversations, quiet readings, and generations of laughter. When they sag, they simply ask for moisture and care."
                </p>
                <span className="text-[11px] font-semibold text-[#B87538] block">
                  - Kerrie Escobar, Workshop Notebook
                </span>
              </div>
            </Reveal>

            {/* Right Column: Slow Scroll-Driven Animated Journey Timeline */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
                  The Conservator's Memoir
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
                  From New England Apprentice to Independent Conservator
                </h2>
                <p className="text-sm text-[#645E57] leading-relaxed">
                  Restoring natural cane takes patience, careful hands, and an understanding of how natural fibers respond to moisture and tension.
                </p>
              </div>

              {/* Animated Journey Timeline */}
              <JourneyTimeline steps={journeySteps} />
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. THE THREE WORKSHOP COMMITMENTS (Minimalist Horizontal Bar) */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF2E9] rounded-2xl border border-[#E8D9C8] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
              The Restorer's Ethics
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24201D]">
              Four Atelier Standards in Every Tutorial
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <span className="font-serif text-xl font-bold text-[#B87538] block">01 / Reversibility</span>
              <h4 className="font-serif font-bold text-base text-[#24201D]">Never Damage the Wood</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                We avoid toxic epoxies and polyurethane glues. Every cane repair can be undone decades from now without breaking the antique timber frame.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif text-xl font-bold text-[#5B6E58] block">02 / Natural Materials</span>
              <h4 className="font-serif font-bold text-base text-[#24201D]">Hydrate, Don't Suffocate</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Rattan is a flexible bundle of plant fibers that needs to breathe. We nourish it with penetrating natural oils rather than sealing it beneath heavy plastic clear-coats.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif text-xl font-bold text-[#24201D] block">03 / Zero Sponsorship</span>
              <h4 className="font-serif font-bold text-base text-[#24201D]">100% Unbiased Advice</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                No sponsored spray paint reviews, affiliate kickbacks, or commercial endorsements. All recipes use affordable staples like boiled linseed oil and pure Castile soap.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-serif text-xl font-bold text-[#965B27] block">04 / Bench Tested</span>
              <h4 className="font-serif font-bold text-base text-[#24201D]">48-Hour Specimen Trials</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Every cleaning ratio, oil blend, and repair sequence undergoes a 48-hour physical trial on vintage cane samples before being documented in this journal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. GET IN TOUCH: PERSONAL CONSULTATION                        */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E8E2D8] overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left Photo */}
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[320px] bg-[#FAF2E9] relative">
            <img
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=80"
              alt="Artisan natural rattan lounge chair in warm daylight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D99B62] block">
                PACIFIC NORTHWEST STUDIO
              </span>
              <span className="font-serif font-bold text-lg">
                Personal Bench Consultations
              </span>
            </div>
          </div>

          {/* Right Text & Contact Options */}
          <div className="lg:col-span-7 p-8 sm:p-14 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
                Have a Question About Your Piece?
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
                Get in touch with Kerrie.
              </h3>
              <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed font-sans">
                Every week, Kerrie reviews reader photos and answers DIY restoration questions from furniture owners worldwide. If you're unsure whether your cane seat can be saved or what linseed oil ratio to mix, send a message to the workshop bench.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Send a Message to Kerrie</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/how-to-use"
                className="px-6 py-3.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-[#24201D] text-xs font-semibold hover:bg-[#FAF2E9] transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Troubleshooter</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-2 text-[11px] text-[#8A8175] border-t border-[#F4EFE6]">
              Studio replies typically sent within 48 to 72 hours. 100% free community advice.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
