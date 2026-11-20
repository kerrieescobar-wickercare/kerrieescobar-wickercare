import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="py-24 sm:py-36 max-w-lg mx-auto px-4 text-center space-y-5">
      
      <div className="w-16 h-16 bg-[#FAF2E9] rounded-full border border-[#E8D9C8] flex items-center justify-center mx-auto text-2xl font-serif font-bold text-[#B87538]">
        404
      </div>

      <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
        Page Not Found
      </span>

      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
        This page could not be found
      </h1>

      <p className="text-xs sm:text-sm text-[#645E57] max-w-sm mx-auto leading-relaxed">
        The care guide or tutorial you requested could not be found in Kerrie’s journal.
      </p>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] transition-colors flex items-center justify-center gap-2 shadow-2xs"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/guides"
          className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-[#E8E2D8] text-[#24201D] text-xs font-semibold hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
        >
          <span>Browse Care Guides</span>
        </Link>
      </div>
    </div>
  );
}
