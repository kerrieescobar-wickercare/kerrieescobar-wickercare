import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { GUIDES_DATA } from '../data/guidesData';
import { FAQS_DATA } from '../data/faqsData';
import DiagnosticWidget from '../components/DiagnosticWidget';
import GuideCard from '../components/GuideCard';
import DosAndDonts from '../components/DosAndDonts';
import NewsletterSection from '../components/NewsletterSection';
import Reveal from '../components/Reveal';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const previewFaqs = [
    FAQS_DATA[0].questions[0], // Can rattan get wet
    FAQS_DATA[1].questions[0], // Boiled linseed oil
    FAQS_DATA[3].questions[0], // Fix saggy cane seat
    FAQS_DATA[0].questions[1], // Mold on wicker basket
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* Warm Editorial Hero Section with Entrance Choreography */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E8E2D8] bg-[#FAF5EE]/60 backdrop-blur-2xs overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Intro */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="animate-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E9] border border-[#E8D9C8] text-xs font-semibold text-[#B87538]">
                <span>Artisan Care &bull; Studio Notes by Kerrie Escobar</span>
              </div>

              <h1 className="animate-fade-in-up font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#24201D] leading-[1.15]" style={{ animationDelay: '100ms' }}>
                The timeless art of caring for <span className="italic font-normal text-[#B87538]">natural wicker</span> &amp; heirloom cane
              </h1>

              <p className="animate-fade-in-up text-base sm:text-lg text-[#645E57] leading-relaxed max-w-2xl font-sans" style={{ animationDelay: '200ms' }}>
                A practical, gentle restoration journal dedicated to preserving the natural beauty, tensile strength, and organic warmth of woven furniture. Learn how to clean, condition, and repair your favorite pieces with non-toxic workshop techniques.
              </p>

              {/* Action Buttons */}
              <div className="animate-fade-in-up pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4" style={{ animationDelay: '300ms' }}>
                <Link
                  to="/guides"
                  className="px-7 py-3.5 rounded-lg bg-[#B87538] text-white font-semibold text-sm hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Explore Care Guides</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/how-to-use"
                  className="px-7 py-3.5 rounded-lg bg-white border border-[#E8E2D8] text-[#24201D] font-semibold text-sm hover:bg-[#FAF7F2] hover:border-[#D4CBBD] transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Diagnose a Problem</span>
                </Link>
              </div>

              {/* Trust Attributes */}
              <div className="animate-fade-in-up pt-4 flex flex-wrap items-center gap-6 text-xs text-[#8A837A]" style={{ animationDelay: '400ms' }}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6E58]" /> 15+ years antique restoration
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6E58]" /> 100% natural, non-toxic recipes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#5B6E58]" /> Comprehensive step-by-step guides
                </span>
              </div>
            </div>

            {/* Right Hero Image (Authentic Woven Rattan Armchair) */}
            <div className="lg:col-span-5 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-md bg-[#FAF2E9] group">
                <img
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80"
                  alt="Authentic handcrafted natural rattan armchair in a warm sunlit room"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl border border-[#E8E2D8] shadow-xs flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#D9CEBF] shrink-0 shadow-2xs">
                    <img src="/author-avt.jpg" alt="Kerrie Escobar" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="font-serif italic text-xs text-[#24201D] leading-snug">
                      "Woven plant fibers are resilient. With the right moisture and gentle drying oils, an antique cane chair will outlive any modern piece."
                    </p>
                    <span className="block text-[11px] font-semibold text-[#B87538] mt-1">
                      - Kerrie Escobar, Workshop Conservator
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Interactive Troubleshooter Section */}
        <Reveal as="section" id="troubleshooter" className="scroll-mt-24">
          <DiagnosticWidget />
        </Reveal>

        {/* The 7 Core Content Guides Grid (Staggered Entrance) */}
        <section>
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E8E2D8] mb-10">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
                Essential Care Guides
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
                Master Wicker Care &amp; Restoration Guides
              </h2>
              <p className="text-xs sm:text-sm text-[#645E57] max-w-xl">
                Comprehensive, practical tutorials covering cleaning, oil preservation, whitewashing, spray refinishing, and cane seat repairs.
              </p>
            </div>

            <Link
              to="/guides"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B87538] hover:text-[#965B27] transition-colors group"
            >
              <span>View All Guides</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GUIDES_DATA.map((guide, idx) => (
              <Reveal key={guide.id} delay={(idx % 3) * 120} duration={600}>
                <GuideCard guide={guide} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4-Phase System Section (Staggered Cards) */}
        <Reveal as="section" className="bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538]">
              Workshop Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
              The 4-Step Wicker Care Sequence
            </h2>
            <p className="text-xs sm:text-sm text-[#645E57]">
              Always follow this physical order to avoid grinding dirt deeper into the weave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-1 hover:border-[#B87538]/50 transition-all duration-300">
              <span className="font-serif text-2xl font-bold text-[#B87538] block">01</span>
              <h4 className="font-serif font-bold text-lg text-[#24201D]">Dry Vacuuming</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Suction loose dust with a soft brush nozzle before introducing any moisture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-1 hover:border-[#5B6E58]/50 transition-all duration-300">
              <span className="font-serif text-2xl font-bold text-[#5B6E58] block">02</span>
              <h4 className="font-serif font-bold text-lg text-[#24201D]">Gentle Cleaning</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Clean only with mild Castile foam or dilute vinegar, blotting dry immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-1 hover:border-[#B87538]/50 transition-all duration-300">
              <span className="font-serif text-2xl font-bold text-[#B87538] block">03</span>
              <h4 className="font-serif font-bold text-lg text-[#24201D]">Linseed Nourishing</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Replenish lost plant resins once a year with warmed Boiled Linseed Oil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-1 hover:border-[#24201D]/50 transition-all duration-300">
              <span className="font-serif text-2xl font-bold text-[#24201D] block">04</span>
              <h4 className="font-serif font-bold text-lg text-[#24201D]">Air Drying</h4>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Allow 48 hours of weight-free drying in warm air so the fibers tighten firmly.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Golden Rules: Do's & Don'ts */}
        <Reveal>
          <DosAndDonts />
        </Reveal>

        {/* FAQ Accordion Section with Smooth Expand/Collapse */}
        <Reveal as="section" className="bg-white rounded-xl border border-[#E8E2D8] p-8 sm:p-12 shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#F4EFE6] mb-8">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
                Quick Answers
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#24201D]">
                Common Wicker Care Questions
              </h2>
            </div>

            <Link
              to="/faqs"
              className="text-xs font-semibold text-[#B87538] hover:text-[#965B27] flex items-center gap-1 group"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="divide-y divide-[#F4EFE6]">
            {previewFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left py-2 flex items-center justify-between gap-4 text-[#24201D] hover:text-[#B87538] transition-colors cursor-pointer"
                  >
                    <span className="font-serif font-bold text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#B87538] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} />
                  </button>

                  <div className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed max-w-3xl pt-1 pb-2">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Free Printable Checklist Download */}
        <Reveal>
          <NewsletterSection />
        </Reveal>

      </main>

    </div>
  );
}
