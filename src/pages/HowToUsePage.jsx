import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DiagnosticWidget from '../components/DiagnosticWidget';
import Reveal from '../components/Reveal';

export default function HowToUsePage() {
  const materials = [
    {
      name: 'Natural Rattan Cane (Bark Skin)',
      appearance: 'Glossy, honey-colored exterior skin with natural joints and nodal rings.',
      waterTolerance: 'Moderate. The outer skin sheds brief splashes, but cut ends absorb moisture quickly.',
      bestCare: 'Damp cloth wipedown, with annual buffing using pure beeswax or organic paste wax.'
    },
    {
      name: 'Peeled Rattan Core (Wicker Reed)',
      appearance: 'Matte, porous texture like dry straw, becoming very flexible when warm and damp.',
      waterTolerance: 'Vulnerable. Highly absorbent, so soaking causes fiber swelling and rapid mildew.',
      bestCare: 'Dry suds vacuuming, with annual nourishment using 60/40 Boiled Linseed Oil.'
    },
    {
      name: 'Paper Fiber Rush',
      appearance: 'Tightly machine-twisted brown kraft paper, common in mid-century American and Danish chairs.',
      waterTolerance: 'Zero Tolerance. Water exposure dissolves paper glues and permanently untwists the cord.',
      bestCare: 'Dry vacuuming with a soft brush only, with an occasional mist of blonde shellac to seal.'
    },
    {
      name: 'All-Weather Resin (Polyethylene Wicker)',
      appearance: 'Smooth synthetic plastic strands woven over lightweight aluminum framing.',
      waterTolerance: '100% Waterproof. Resistant to rain, snow, swimming pool chlorine, and garden hoses.',
      bestCare: 'Wash with a garden hose and mild dish soap, keeping it away from hot grill embers.'
    }
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
              Diagnostic &amp; Care Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#24201D]">
              How to Use This Care Journal
            </h1>
            <p className="text-sm text-[#645E57] leading-relaxed">
              Before applying water, oils, or cleaners to your woven furniture, use this simple guide to identify your material type and choose the safest, gentlest restoration approach.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Troubleshooter Tool */}
      <Reveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DiagnosticWidget />
      </Reveal>

      {/* Material Identification Guide */}
      <Reveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#E8E2D8] p-8 sm:p-12 space-y-8 shadow-2xs">
          <div className="space-y-1 pb-4 border-b border-[#F4EFE6]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538]">
              Step 1: Know Your Material
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#24201D]">
              Wicker Material Identification Guide
            </h2>
            <p className="text-xs sm:text-sm text-[#645E57]">
              "Wicker" describes how a piece is woven, not what plant it came from. Check your piece below before cleaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((mat, idx) => (
              <div key={idx} className="bg-[#FAF7F2] p-6 rounded-lg border border-[#E8E2D8] space-y-3 hover:border-[#B87538]/50 hover:-translate-y-0.5 transition-all duration-300">
                <span className="text-[11px] font-semibold text-[#B87538] uppercase">
                  Material Type 0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#24201D]">{mat.name}</h3>
                <div className="space-y-2 text-xs text-[#645E57] border-t border-[#E8E2D8] pt-3">
                  <p><strong className="text-[#24201D]">Appearance:</strong> {mat.appearance}</p>
                  <p><strong className="text-[#24201D]">Water Reaction:</strong> {mat.waterTolerance}</p>
                  <p><strong className="text-[#24201D]">Best Care Method:</strong> {mat.bestCare}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* The 4-Step Sequence Explained */}
      <Reveal as="section" id="methodology" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-12 space-y-8">
          <div className="space-y-1 pb-4 border-b border-[#E8D9C8]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538]">
              The Essential Sequence
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#24201D]">
              The 4-Step Wicker Care Routine
            </h2>
            <p className="text-xs sm:text-sm text-[#645E57]">
              Follow these four steps in order whenever performing a seasonal clean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-0.5 hover:border-[#B87538]/40 transition-all duration-300">
              <span className="font-serif text-lg font-bold text-[#B87538]">Step 1: Dry Vacuuming</span>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Always suction out pet hair, dust, and crumbs with a soft brush nozzle before introducing any liquid.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-0.5 hover:border-[#5B6E58]/40 transition-all duration-300">
              <span className="font-serif text-lg font-bold text-[#5B6E58]">Step 2: Gentle Surface Washing</span>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Use light Castile soap suds or 1:1 vinegar water on a soft toothbrush, blotting dry immediately with a towel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-0.5 hover:border-[#B87538]/40 transition-all duration-300">
              <span className="font-serif text-lg font-bold text-[#B87538]">Step 3: Annual Linseed Oil Conditioning</span>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Nourish dried-out fibers once a year with warm Boiled Linseed Oil thinned with mineral spirits (60/40).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-[#E8E2D8] shadow-2xs space-y-2 hover:-translate-y-0.5 hover:border-[#24201D]/40 transition-all duration-300">
              <span className="font-serif text-lg font-bold text-[#24201D]">Step 4: 48-Hour Air Drying</span>
              <p className="text-xs text-[#645E57] leading-relaxed">
                Keep the furniture in a breezy room and avoid sitting on it for 48 hours while the damp fibers shrink drum-tight.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs group"
            >
              <span>Explore All Care Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </Reveal>

    </div>
  );
}
