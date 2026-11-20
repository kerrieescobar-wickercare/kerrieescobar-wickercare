import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GuideCard({ guide }) {
  return (
    <article className="bg-white rounded-lg border border-[#E8E2D8] overflow-hidden hover:border-[#B87538]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      
      {/* Featured Photo Thumbnail */}
      <Link to={`/guides/${guide.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#F4EFE6]">
        <img
          src={guide.image}
          alt={guide.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#B87538] shadow-2xs group-hover:bg-[#FAF2E9] transition-colors">
          {guide.categoryName}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#8A837A]">
            <span>{guide.readTime}</span>
            <span>•</span>
            <span>{guide.difficulty}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#24201D] group-hover:text-[#B87538] transition-colors leading-snug">
            <Link to={`/guides/${guide.slug}`}>
              {guide.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed line-clamp-3 font-sans">
            {guide.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-3 border-t border-[#F4EFE6] flex items-center justify-between">
          <span className="text-xs text-[#8A837A] font-medium">By {guide.author}</span>
          <Link
            to={`/guides/${guide.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B87538] group-hover:text-[#965B27] transition-colors"
          >
            <span>Read Guide</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>

    </article>
  );
}
