import React from 'react';
import { Link } from 'react-router-dom';
import { GUIDES_DATA } from '../data/guidesData';

export default function Footer() {
  return (
    <footer className="bg-[#201C1A] text-[#B3A99D] border-t-4 border-[#B87538] mt-24 relative z-10">
      
      {/* Editorial Commitments Banner (Seamless, No Floating Cards, No Generic Icons) */}
      <div className="border-b border-white/10 bg-[#1A1615]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase text-[#D4CBBD] text-center md:text-left">
            <span className="font-semibold text-[#D99B62]">
              Atelier Standards
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/80 font-medium">
              <span>Non-Destructive Care</span>
              <span className="text-white/20">•</span>
              <span>Calamus Plant Biology</span>
              <span className="text-white/20">•</span>
              <span>100% Independent Wisdom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Author & Workshop */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#B87538] shrink-0 shadow-xs">
                <img
                  src="/author-avt.jpg"
                  alt="Kerrie Escobar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Kerrie Escobar
                </span>
                <span className="text-xs text-[#D99B62] font-medium block">
                  Wicker &amp; Rattan Care Specialist
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A3998D] leading-relaxed max-w-sm font-sans">
              An independent restoration journal and field repository dedicated to preserving vintage wicker, tropical Calamus rattan, and heirloom woven cane through gentle, non-destructive bench techniques.
            </p>

            <div className="text-xs text-[#8A8175] space-y-1 pt-1 font-sans">
              <p>Pacific Northwest Workshop Atelier • Consultations Online Worldwide</p>
              <p>Contact: inquiries@kerrieescobar-wickercare.vercel.app</p>
            </div>
          </div>

          {/* Column 2: 7 Master Care Guides */}
          <div className="lg:col-span-4 space-y-3 font-sans">
            <h4 className="font-serif font-bold text-base text-white border-b border-white/10 pb-2.5">
              Master Care Guides
            </h4>
            <ul className="space-y-2 text-xs">
              {GUIDES_DATA.map((guide) => (
                <li key={guide.id}>
                  <Link
                    to={`/guides/${guide.slug}`}
                    className="text-[#B3A99D] hover:text-[#D99B62] transition-colors line-clamp-1"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation, Diagnostic & Legal */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="font-serif font-bold text-base text-white border-b border-white/10 pb-2.5">
              Explore &amp; Standards
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/how-to-use" className="text-[#B3A99D] hover:text-[#D99B62] transition-colors">
                  Wicker Troubleshooter
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#B3A99D] hover:text-[#D99B62] transition-colors">
                  About Kerrie Escobar
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-[#B3A99D] hover:text-[#D99B62] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#B3A99D] hover:text-[#D99B62] transition-colors">
                  Ask a Care Question
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link to="/disclaimer" className="text-[#8A8175] hover:text-[#B3A99D] transition-colors">
                  Safety &amp; Oil Disclaimers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-[#8A8175] hover:text-[#B3A99D] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-[#8A8175] hover:text-[#B3A99D] transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-[#8A8175] gap-4 text-center md:text-left font-sans">
          <p>
            &copy; {new Date().getFullYear()} Kerrie Escobar Wicker Care. All guides and tutorials reserved.
          </p>
          <p>
            Independent educational resource for natural fiber care • Hosted on Vercel
          </p>
        </div>

      </div>

    </footer>
  );
}
