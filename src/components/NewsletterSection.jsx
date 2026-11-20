import React, { useState } from 'react';
import { Download } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-12 my-24">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Information */}
        <div className="lg:col-span-7 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
            Free Printable Resource
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
            The Heirloom Wicker Care Checklist
          </h2>
          <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed">
            Keep this handy 1-page reference chart pinned near your cleaning cabinet: safe oil dilution recipes, seasonal conditioning calendars, and quick remedies for unexpected spills.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#8A837A] font-medium">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B6E58]" /> High-resolution PDF
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B6E58]" /> 100% free &amp; private
            </span>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-lg border border-[#E8E2D8] shadow-xs">
          {submitted ? (
            <div className="text-center py-4 space-y-2">
              <div className="w-10 h-10 bg-[#FAF2E9] text-[#B87538] rounded-full flex items-center justify-center mx-auto text-lg font-bold">
                ✓
              </div>
              <h4 className="font-serif text-lg font-bold text-[#24201D]">Checklist on the way!</h4>
              <p className="text-xs text-[#645E57]">
                We have sent the printable care chart to your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <h4 className="font-serif text-base font-bold text-[#24201D]">
                Get the Free PDF Guide
              </h4>
              <div>
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#24201D] placeholder-[#8A837A] focus:outline-none focus:border-[#B87538]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Send Me the Free Checklist</span>
              </button>

              <span className="text-[11px] text-[#8A837A] block text-center">
                Curated by Kerrie Escobar. Unsubscribe anytime.
              </span>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
