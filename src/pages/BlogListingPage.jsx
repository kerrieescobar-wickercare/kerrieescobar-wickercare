import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { GUIDES_DATA, CATEGORIES } from '../data/guidesData';
import GuideCard from '../components/GuideCard';
import Reveal from '../components/Reveal';

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.ALL);
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: CATEGORIES.ALL, label: 'All Guides' },
    { id: CATEGORIES.CLEANING, label: 'Cleaning & Care' },
    { id: CATEGORIES.PRESERVATION, label: 'Oils & Preservation' },
    { id: CATEGORIES.PAINTING, label: 'Finishes & Whitewash' },
    { id: CATEGORIES.RESTORATION, label: 'Restoration & Repair' },
  ];

  const filteredGuides = useMemo(() => {
    return GUIDES_DATA.filter((guide) => {
      const matchesCat = selectedCategory === CATEGORIES.ALL || guide.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = 
        !q ||
        guide.title.toLowerCase().includes(q) ||
        guide.excerpt.toLowerCase().includes(q) ||
        (guide.topics && guide.topics.some(kw => kw.toLowerCase().includes(q)));

      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-20 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
              Care &amp; Restoration Directory
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#24201D]">
              Wicker &amp; Rattan Care Guides
            </h1>
            <p className="text-sm text-[#645E57] leading-relaxed">
              Step-by-step restoration and maintenance guides authored by Kerrie Escobar. Designed to help you keep natural wicker, rattan, and heirloom cane furniture clean, supple, and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#E8E2D8] p-6 space-y-6 shadow-2xs">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#8A837A] absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides (e.g. mold, linseed oil, paint, repair)"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#24201D] placeholder-[#8A837A] focus:outline-none focus:border-[#B87538] focus:ring-1 focus:ring-[#B87538]/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-xs text-[#8A837A] hover:text-[#24201D] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Counter */}
            <div className="text-xs text-[#8A837A]">
              Showing <strong className="text-[#24201D]">{filteredGuides.length}</strong> of {GUIDES_DATA.length} guides
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto border-t border-[#F4EFE6] pt-4 scrollbar-none">
            {filterTabs.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-95 ${
                    isSelected
                      ? 'bg-[#B87538] text-white shadow-xs'
                      : 'bg-[#FAF7F2] text-[#645E57] hover:bg-[#F4EFE6] hover:text-[#24201D]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Grid of Guides with Staggered Entrance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide, idx) => (
              <div
                key={guide.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(idx % 6) * 80}ms` }}
              >
                <GuideCard guide={guide} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#E8E2D8] p-16 text-center space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#24201D]">No guides found</h3>
            <p className="text-xs text-[#645E57]">
              No articles matched your search query "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory(CATEGORIES.ALL); }}
              className="px-4 py-2 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Troubleshooter Banner */}
      <Reveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538]">
              Need Help Diagnosing Damage?
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#24201D]">
              Try the Interactive Wicker Troubleshooter
            </h3>
            <p className="text-xs sm:text-sm text-[#645E57]">
              Pick from common conditions like water drench, saggy cane, or mold to get immediate first-aid tips.
            </p>
          </div>

          <Link
            to="/how-to-use"
            className="px-6 py-3 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 shrink-0 shadow-xs"
          >
            <span>Open Troubleshooter</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Reveal>

    </div>
  );
}
