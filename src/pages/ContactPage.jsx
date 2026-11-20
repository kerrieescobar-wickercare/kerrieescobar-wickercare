import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    furnitureType: 'Natural Rattan Cane',
    damageType: 'Mold or Mildew Spots',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in bg-[#FAF2E9] rounded-xl border border-[#E8D9C8] p-8 sm:p-14">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
              Studio Bench Consultations
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#24201D]">
              Ask a Wicker Care Question
            </h1>
            <p className="text-sm text-[#645E57] leading-relaxed">
              Have an heirloom piece with stubborn damage, or need advice on finding the right replacement reed size? Send your questions directly to Kerrie Escobar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Studio Notes (Sticky on Desktop) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-xl border border-[#E8E2D8] p-8 space-y-6 shadow-2xs hover:border-[#B87538]/40 transition-colors">
              <h3 className="font-serif text-2xl font-bold text-[#24201D]">
                How Bench Reviews Work
              </h3>

              <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed">
                Kerrie prioritizes physical restorations in her workshop during the morning, and dedicates Tuesday and Thursday afternoons to reviewing reader questions and DIY photos.
              </p>

              <div className="space-y-4 pt-2 text-xs text-[#645E57]">
                <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] space-y-1">
                  <strong className="block text-[#24201D]">Typical Response Time</strong>
                  <span>Usually within 48 to 72 hours on studio review days.</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] space-y-1">
                  <strong className="block text-[#24201D]">Workshop Studio</strong>
                  <span>Pacific Northwest • Consultations online worldwide.</span>
                </div>

                <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] space-y-1">
                  <strong className="block text-[#24201D]">Independent Advice</strong>
                  <span>100% free community advice with zero sales pitches or corporate ties.</span>
                </div>
              </div>

              {/* Quick Note */}
              <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#645E57]">
                <strong className="text-[#24201D] block mb-1">Before you send:</strong>
                Have you checked the{' '}
                <Link to="/how-to-use" className="text-[#B87538] underline font-semibold hover:text-[#965B27]">
                  Wicker Troubleshooter
                </Link>{' '}
                or our{' '}
                <Link to="/faqs" className="text-[#B87538] underline font-semibold hover:text-[#965B27]">
                  FAQs page
                </Link>
                ? Most common rain soaking and mold issues have quick answers there.
              </div>
            </div>
          </div>

          {/* Right Column: Friendly Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#E8E2D8] p-8 sm:p-10 shadow-2xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-scale-in">
                <div className="w-12 h-12 bg-[#FAF2E9] text-[#B87538] rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#24201D]">
                  Message Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#645E57] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your question regarding your <strong>{formData.furnitureType}</strong> has been queued for Kerrie’s next studio review session.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', furnitureType: 'Natural Rattan Cane', damageType: 'Mold or Mildew Spots', message: '' }); }}
                    className="px-6 py-2.5 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] hover:shadow-md transition-all cursor-pointer"
                  >
                    Send Another Question
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#24201D] mb-1">
                    Send a Message to Kerrie
                  </h3>
                  <p className="text-xs text-[#8A837A]">
                    Fill in the details below so Kerrie can give you tailored advice.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#24201D] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Eleanor Vance"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#24201D] focus:outline-none focus:border-[#B87538] focus:ring-1 focus:ring-[#B87538]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#24201D] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="eleanor@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#24201D] focus:outline-none focus:border-[#B87538] focus:ring-1 focus:ring-[#B87538]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#24201D] mb-1.5">
                      Furniture Material
                    </label>
                    <select
                      value={formData.furnitureType}
                      onChange={(e) => setFormData({ ...formData, furnitureType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#24201D] focus:outline-none focus:border-[#B87538] focus:ring-1 focus:ring-[#B87538]/20 transition-all"
                    >
                      <option>Natural Rattan Cane (Bark)</option>
                      <option>Peeled Wicker Reed</option>
                      <option>Woven Cane Chair Seat</option>
                      <option>Willow or Hazel Wicker</option>
                      <option>Paper Fiber Rush</option>
                      <option>Synthetic Outdoor Resin</option>
                      <option>Not Sure / Unknown</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#24201D] mb-1.5">
                      What is the Main Issue?
                    </label>
                    <select
                      value={formData.damageType}
                      onChange={(e) => setFormData({ ...formData, damageType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#24201D] focus:outline-none focus:border-[#B87538] focus:ring-1 focus:ring-[#B87538]/20 transition-all"
                    >
                      <option>Mold or Mildew Spots</option>
                      <option>Dry, Creaking or Splintering Cane</option>
                      <option>Sagging or Sunken Seat</option>
                      <option>Loose or Frayed Leg Wrapping</option>
                      <option>Chipped or Peeling Paint</option>
                      <option>Unexpected Rain Soak</option>
                      <option>General Care Advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24201D] mb-1.5">
                    Describe Your Furniture Piece *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us where the piece is kept, how old it might be, and what you notice"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8] text-xs text-[#24201D] focus:outline-none focus:border-[#B87538] focus:ring-1 focus:ring-[#B87538]/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#B87538] text-white text-xs font-semibold hover:bg-[#965B27] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group"
                >
                  <span>Send Message to Kerrie</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
