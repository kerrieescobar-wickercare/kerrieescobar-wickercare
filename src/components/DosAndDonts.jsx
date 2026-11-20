import React from 'react';
import { Check, X } from 'lucide-react';

export default function DosAndDonts() {
  const dos = [
    {
      title: 'Always vacuum off dry dust before using water',
      desc: 'Wiping wet cloths over dry dust creates abrasive mud that gets ground deep into the weave. A soft horsehair dusting brush lifts debris out safely.'
    },
    {
      title: 'Nourish dry fibers with Boiled Linseed Oil annually',
      desc: 'Dry indoor air evaporates the natural plant oils from rattan. A light 60/40 linseed oil and mineral spirits wipedown restores flexibility and stops creaking.'
    },
    {
      title: 'Leave seating weight-free for 48 hours after washing',
      desc: 'Natural cane expands and softens when damp. Sitting on wet chairs stretches the woven seat into a permanent saggy bowl.'
    },
    {
      title: 'Soak replacement reed in warm water for 25 minutes',
      desc: 'Never try to weave with dry rattan reed. Soaking makes the plant fibers pliable and flexible enough to bend around corners without snapping.'
    }
  ];

  const donts = [
    {
      title: 'Never use a pressure washer or garden hose on natural wicker',
      desc: 'High-pressure water forces moisture deep inside the raw vine core, dissolving glue joints and inviting aggressive mold blooms within 48 hours.'
    },
    {
      title: 'Never apply chlorine bleach or harsh chemical strippers',
      desc: 'Bleach burns organic plant cellulose and strips away natural silica coatings, leaving powdery brittle strands that crack upon contact.'
    },
    {
      title: 'Never pile oily linseed rags in an unventilated bin',
      desc: 'Boiled Linseed Oil releases heat as it dries. Rags piled together can spontaneously combust. Always submerge used rags in water before throwing away.'
    },
    {
      title: 'Never paint wicker with a heavy household paintbrush',
      desc: 'Thick paint bridges across weave holes, forming ugly blobs and drips that are nearly impossible to fix. Always use light aerosol spray coats.'
    }
  ];

  return (
    <section className="my-24">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
          Essential Wisdom
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
          The Golden Rules of Wicker Care
        </h2>
        <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed">
          Years of hands-on restoration distilled into simple, everyday habits to keep your heirloom pieces safe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* DOs Card */}
        <div className="bg-[#FAF7F2] rounded-xl border border-[#DFD7CB] p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-[#E8E2D8]">
            <div className="w-6 h-6 rounded-full bg-[#5B6E58] text-white flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <h3 className="font-serif text-xl font-bold text-[#24201D]">
              Things You Should Do (Best Practices)
            </h3>
          </div>

          <div className="space-y-4">
            {dos.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#5B6E58] font-bold mt-0.5">•</span>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-[#24201D]">{item.title}</h4>
                  <p className="text-xs text-[#645E57] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DONTs Card */}
        <div className="bg-[#FDF9F6] rounded-xl border border-[#E8D9C8] p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-[#E8D9C8]">
            <div className="w-6 h-6 rounded-full bg-[#B55A38] text-white flex items-center justify-center text-xs font-bold">
              ✕
            </div>
            <h3 className="font-serif text-xl font-bold text-[#24201D]">
              Things to Avoid (Common Mistakes)
            </h3>
          </div>

          <div className="space-y-4">
            {donts.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#B55A38] font-bold mt-0.5">•</span>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-semibold text-[#24201D]">{item.title}</h4>
                  <p className="text-xs text-[#645E57] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
