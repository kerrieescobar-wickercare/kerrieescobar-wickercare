import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Flame } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
      
      <div className="border-b border-[#E8E2D8] pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
          Restoration Safety
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
          Care &amp; Safety Disclaimer
        </h1>
        <p className="text-xs text-[#8A837A]">
          Effective Date: October 2026 &bull; Kerrie Escobar Wicker Care
        </p>
      </div>

      {/* Critical Linseed Oil Alert */}
      <div className="bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2 text-[#965B27] font-serif font-bold text-base">
          <Flame className="w-5 h-5 text-[#B87538]" />
          <span>Critical Safety Rule: Spontaneous Combustion of Drying Oils</span>
        </div>
        <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed">
          Boiled Linseed Oil and pure tung oil release heat naturally as they dry and cure. <strong>Rags and cotton towels soaked in linseed oil can catch fire spontaneously if left piled together in a wastebasket.</strong>
        </p>
        <div className="p-3 bg-white rounded-md border border-[#E8D9C8] text-xs text-[#24201D]">
          <strong>Mandatory Practice:</strong> Always submerge used oil rags in a sealed container filled with cold water, or lay them completely flat outside on bare concrete away from buildings until fully dried before throwing them away.
        </div>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-[#645E57] leading-relaxed">
        
        <div className="space-y-1.5">
          <h2 className="font-serif text-lg font-bold text-[#24201D]">
            1. Practical Workshop Advice &amp; Personal Care
          </h2>
          <p>
            The recipes, dilution ratios, and cleaning tutorials on this website reflect Kerrie Escobar's personal bench experience on antique and vintage woven furniture. However, natural fibers vary widely in age, previous varnish treatments, and exposure to humidity. Readers undertake all cleaning, oiling, and repairs at their own discretion.
          </p>
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-lg font-bold text-[#24201D]">
            2. The Inconspicuous Spot Test
          </h2>
          <p>
            Before applying any cleaner, vinegar solution, boiled linseed oil, or paint to a visible part of your furniture, always test a tiny amount on an underside corner (such as the bottom of a seat rail or the back of a lower rung). Wait 24 hours to ensure the fiber does not swell or discolor.
          </p>
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-lg font-bold text-[#24201D]">
            3. Working Safely
          </h2>
          <p>
            When working with mineral spirits, aerosol spray paints, or mold cleaning, always work in a well-ventilated outdoor area or open garage, and wear protective nitrile gloves and a particle mask.
          </p>
        </div>

      </div>

      <div className="pt-8 border-t border-[#E8E2D8] flex items-center justify-between text-xs text-[#8A837A]">
        <Link to="/how-to-use" className="hover:text-[#B87538] font-medium">
          &larr; Return to Troubleshooter
        </Link>
        <Link to="/contact" className="hover:text-[#B87538] font-medium">
          Ask a Safety Question &rarr;
        </Link>
      </div>

    </div>
  );
}
