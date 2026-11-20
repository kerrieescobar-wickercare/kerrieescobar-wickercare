import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { FAQS_DATA } from '../data/faqsData';
import Reveal from '../components/Reveal';

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState('0-0');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const filteredFaqs = FAQS_DATA.map((cat, catIdx) => {
    const filteredQuestions = cat.questions.filter(
      (item) =>
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, catIdx, questions: filteredQuestions };
  }).filter((cat) => cat.questions.length > 0);

  return (
    <div className="py-12 sm:py-20 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
              Knowledgebase &amp; FAQs
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#24201D]">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-[#645E57] leading-relaxed">
              Clear, practical advice from Kerrie Escobar on moisture limits, safe cleaning recipes, linseed oil conditioning, and emergency furniture salvage.
            </p>
          </div>
        </div>
      </section>

      {/* Search Input Bar */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative">
          <Search className="w-4 h-4 text-[#8A837A] absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. wet rattan, linseed oil, mold, saggy cane)"
            className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-[#E8E2D8] text-xs text-[#24201D] placeholder-[#8A837A] focus:outline-none focus:border-[#B87538] focus:ring-1 focus:ring-[#B87538]/20 transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-3 text-xs text-[#8A837A] hover:text-[#24201D] cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((category) => (
            <Reveal key={category.category} className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#24201D] border-b border-[#E8E2D8] pb-2">
                {category.category}
              </h2>

              <div className="bg-white rounded-xl border border-[#E8E2D8] divide-y divide-[#F4EFE6] shadow-2xs overflow-hidden">
                {category.questions.map((faq, qIdx) => {
                  const key = `${category.catIdx}-${qIdx}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={qIdx} className="p-5 sm:p-6 transition-colors hover:bg-[#FAF7F2]/50">
                      <button
                        onClick={() => toggleAccordion(category.catIdx, qIdx)}
                        className="w-full text-left flex items-center justify-between gap-4 text-[#24201D] hover:text-[#B87538] transition-colors cursor-pointer"
                      >
                        <span className="font-serif font-bold text-base sm:text-lg leading-snug">
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-[#B87538] transition-transform duration-300 shrink-0 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`} />
                      </button>

                      <div className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-[#F4EFE6]' : 'grid-rows-[0fr] opacity-0 mt-0 pt-0'
                      }`}>
                        <div className="overflow-hidden">
                          <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed font-sans">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          ))
        ) : (
          <div className="bg-white rounded-xl border border-[#E8E2D8] p-12 text-center space-y-3">
            <h3 className="font-serif text-lg font-bold text-[#24201D]">No answers matched your search</h3>
            <p className="text-xs text-[#645E57]">
              Try searching for another topic like "clean", "water", or "repair".
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] transition-colors"
            >
              Reset Search
            </button>
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <Reveal as="section" className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 text-center space-y-3">
          <h3 className="font-serif text-2xl font-bold text-[#24201D]">
            Have a Specific Question About Your Piece?
          </h3>
          <p className="text-xs sm:text-sm text-[#645E57] max-w-md mx-auto leading-relaxed">
            Send a message with details about your furniture directly to Kerrie Escobar’s bench review queue.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-2xs"
            >
              <span>Ask Kerrie a Question</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Reveal>

    </div>
  );
}
