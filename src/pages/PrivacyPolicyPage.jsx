import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-xs sm:text-sm text-[#645E57] leading-relaxed">
      
      <div className="border-b border-[#E8E2D8] pb-6 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
          Transparency &amp; Trust
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#24201D]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#8A837A]">
          Last Updated: October 2026 &bull; Kerrie Escobar Wicker Care
        </p>
      </div>

      <div className="space-y-6">
        <p>
          At <strong>Kerrie Escobar Wicker Care</strong> (hosted at <code>kerrieescobar-wickercare.mystrikingly.com</code>), your privacy is respected completely. We do not engage in behavioral ad tracking or data brokering.
        </p>

        <div className="space-y-1.5">
          <h2 className="font-serif text-base font-bold text-[#24201D]">1. Information We Collect</h2>
          <p>
            We collect information only when you choose to submit it:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Checklist Subscribers:</strong> When requesting our downloadable Wicker Care Checklist PDF, we collect your email address solely to deliver the file.</li>
            <li><strong>Care Inquiries:</strong> When sending a message via our contact form, we collect your name, email, and furniture details to reply with personalized advice.</li>
          </ul>
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-base font-bold text-[#24201D]">2. How We Use Information</h2>
          <p>
            Your information is used strictly to fulfill your request. We never sell, rent, or share your email address with third-party advertisers or furniture retail brands.
          </p>
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-base font-bold text-[#24201D]">3. Unsubscribing</h2>
          <p>
            You can remove your email address at any time by clicking the unsubscribe link in our email or by writing to <code>inquiries@kerrieescobar-wickercare.mystrikingly.com</code>.
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
