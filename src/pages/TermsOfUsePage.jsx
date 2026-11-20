import React from 'react';
import { Link } from 'react-router-dom';

export default function TermsOfUsePage() {
  return (
    <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-xs sm:text-sm text-[#645E57] leading-relaxed">
      
      <div className="border-b border-[#E8E2D8] pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
          Terms &amp; Conditions
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
          Terms of Use
        </h1>
        <p className="text-xs text-[#8A837A]">
          Effective Date: October 2026 &bull; Kerrie Escobar Wicker Care
        </p>
      </div>

      <div className="space-y-6">
        <p>
          Welcome to the personal restoration journal of author Kerrie Escobar. By viewing, reading, or following the tutorials on this website, you agree to these standard conditions.
        </p>

        <div className="space-y-1.5">
          <h2 className="font-serif text-base font-bold text-[#24201D]">1. Personal DIY Use</h2>
          <p>
            All original articles, photography, diagnostic guides, and tutorials authored by Kerrie Escobar are protected under copyright. You are welcome to print and save guides for personal home restoration use. Commercial duplication or re-publishing without credit is prohibited.
          </p>
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-base font-bold text-[#24201D]">2. Educational Guidance Only</h2>
          <p>
            The contents of this site do not constitute certified contractual engineering warranties. While every effort is made to verify the practical effectiveness of our recommended drying oils, vinegar solutions, and tension shrinkage procedures, results depend on user craftsmanship and the unpredictable condition of vintage fibers.
          </p>
        </div>
      </div>

      <div className="pt-6 border-t border-[#E8E2D8] text-xs">
        <Link to="/" className="text-[#B87538] hover:underline font-semibold">
          &larr; Back to Homepage
        </Link>
      </div>

    </div>
  );
}
