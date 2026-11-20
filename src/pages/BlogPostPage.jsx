import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  GET_GUIDE_BY_SLUG, 
  GET_RELATED_GUIDES 
} from '../data/guidesData';
import { Printer, CheckSquare, AlertTriangle, ArrowRight } from 'lucide-react';
import GuideCard from '../components/GuideCard';
import Reveal from '../components/Reveal';

export default function BlogPostPage() {
  const { slug } = useParams();
  const guide = GET_GUIDE_BY_SLUG(slug);

  if (!guide) {
    return <Navigate to="/guides" replace />;
  }

  const relatedGuides = GET_RELATED_GUIDES(guide.id, 2);

  const handlePrint = () => {
    window.print();
  };

  return (
    <article className="py-10 sm:py-16">
      
      {/* Top Breadcrumb & Print */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between text-xs text-[#8A837A] animate-fade-in">
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#B87538] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/guides" className="hover:text-[#B87538] transition-colors">Care Guides</Link>
          <span>/</span>
          <span className="text-[#24201D] font-medium truncate max-w-xs">{guide.categoryName}</span>
        </div>

        <button
          onClick={handlePrint}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E8E2D8] bg-white hover:bg-[#FAF7F2] hover:border-[#D4CBBD] active:scale-95 text-[#24201D] text-xs font-medium transition-all shadow-2xs cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5 text-[#B87538]" />
          <span>Print Guide</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 mb-10 space-y-5 animate-fade-in-up">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-[#FAF2E9] text-[#B87538]">
            {guide.categoryName}
          </span>
          <span className="text-xs text-[#8A837A]">•</span>
          <span className="text-xs text-[#8A837A]">{guide.difficulty}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24201D] leading-[1.2]">
          {guide.title}
        </h1>

        <p className="text-base sm:text-lg text-[#645E57] leading-relaxed font-sans border-l-3 border-[#B87538] pl-4 italic">
          {guide.summary}
        </p>

        {/* Metadata Strip */}
        <div className="bg-[#FAF7F2] p-4 rounded-lg border border-[#E8E2D8] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#645E57]">
          <div>
            <span className="text-[11px] text-[#8A837A] block">Author</span>
            <Link
              to="/about"
              rel="author"
              className="font-semibold text-[#24201D] hover:text-[#B87538] hover:underline block mt-0.5 transition-colors"
            >
              {guide.author}
            </Link>
          </div>
          <div>
            <span className="text-[11px] text-[#8A837A] block">Time Investment</span>
            <span className="font-semibold text-[#24201D] block mt-0.5">{guide.timeRequired}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#8A837A] block">Reading Time</span>
            <span className="font-semibold text-[#24201D] block mt-0.5">{guide.readTime}</span>
          </div>
          <div>
            <span className="text-[11px] text-[#8A837A] block">Last Updated</span>
            <span className="font-semibold text-[#24201D] block mt-0.5">{guide.publishedDate}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden aspect-[16/9] border border-[#E8E2D8] shadow-xs bg-[#FAF2E9] group">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Tools and Supplies Box */}
        {guide.toolsRequired && (
          <Reveal as="section" className="bg-white rounded-xl border border-[#E8E2D8] p-6 sm:p-8 shadow-2xs space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#24201D] pb-3 border-b border-[#F4EFE6]">
              Tools &amp; Supplies You Will Need
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#24201D]">
              {guide.toolsRequired.map((tool, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-[#FAF7F2] p-3 rounded-lg border border-[#E8E2D8] hover:border-[#B87538]/40 transition-colors">
                  <CheckSquare className="w-4 h-4 text-[#5B6E58] shrink-0 mt-0.5" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Conservator Safety Notes */}
        {guide.fieldNotes && (
          <Reveal as="section" className="bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-6 sm:p-7 space-y-3">
            <h4 className="font-serif font-bold text-base text-[#965B27] flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-[#B87538]" />
              Important Restorer’s Notes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#645E57]">
              {guide.fieldNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#B87538] font-bold">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Step-by-Step Sections */}
        <section className="space-y-10 text-[#24201D] font-sans leading-relaxed">
          {guide.sections.map((section, idx) => (
            <Reveal key={idx} className="space-y-3 pb-8 border-b border-[#E8E2D8] last:border-0">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#24201D]">
                {section.title}
              </h2>
              <div className="text-sm sm:text-base text-[#645E57] leading-relaxed space-y-4">
                <p>{section.content}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Author Bio Box */}
        <Reveal className="bg-[#FAF7F2] rounded-xl border border-[#E8E2D8] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D9CEBF] shrink-0 shadow-xs">
            <img
              src="/author-avt.jpg"
              alt="Kerrie Escobar"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
              About the Author
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#24201D]">
              <Link to="/about" rel="author" className="hover:text-[#B87538] transition-colors">
                Kerrie Escobar
              </Link>
            </h4>
            <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed">
              Kerrie is an independent furniture restorer specializing in historic cane, rush, and woven rattan pieces. All tutorials are tested in her private workshop to help homeowners preserve heirloom furnishings.
            </p>
            <div className="pt-1">
              <Link to="/about" className="text-xs font-semibold text-[#B87538] hover:underline inline-flex items-center gap-1 group">
                <span>Read Kerrie’s Story &amp; Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <Reveal as="section" className="pt-10 border-t border-[#E8E2D8] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-[#24201D]">
                Related Care Guides
              </h3>
              <Link to="/guides" className="text-xs font-semibold text-[#B87538] hover:underline flex items-center gap-1 group">
                <span>All Guides</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGuides.map((relGuide) => (
                <GuideCard key={relGuide.id} guide={relGuide} />
              ))}
            </div>
          </Reveal>
        )}

      </div>

    </article>
  );
}
