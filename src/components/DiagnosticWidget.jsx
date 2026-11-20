import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_SYMPTOMS } from '../data/diagnosticData';

export default function DiagnosticWidget() {
  const [selectedId, setSelectedId] = useState(DIAGNOSTIC_SYMPTOMS[0].id);

  const activeSymptom = DIAGNOSTIC_SYMPTOMS.find((s) => s.id === selectedId) || DIAGNOSTIC_SYMPTOMS[0];

  return (
    <div className="bg-white rounded-xl border border-[#E8E2D8] shadow-xs overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#FAF2E9] p-6 sm:p-8 border-b border-[#E8E2D8]">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#B87538] block">
            Interactive Care Guide
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#24201D]">
            Wicker Care Problem Solver
          </h3>
          <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed">
            Not sure what your furniture needs? Select the condition below to get an instant first-aid remedy and the right restoration guide.
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8 bg-[#FAF7F2]">
        
        {/* Symptom Selection Grid */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#8A837A] mb-3">
            Step 1: What are you noticing with your piece?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {DIAGNOSTIC_SYMPTOMS.map((symptom, idx) => {
              const isSelected = symptom.id === selectedId;
              const numStr = String(idx + 1).padStart(2, '0');
              return (
                <button
                  key={symptom.id}
                  onClick={() => setSelectedId(symptom.id)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3.5 active:scale-98 ${
                    isSelected
                      ? 'bg-white border-[#B87538] shadow-sm ring-2 ring-[#B87538]/20 text-[#24201D]'
                      : 'bg-[#F4EFE6] border-[#E8E2D8] text-[#645E57] hover:bg-white hover:border-[#D4CBBD] hover:shadow-2xs'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center font-serif text-xs font-bold transition-colors ${
                    isSelected ? 'bg-[#B87538] text-white' : 'bg-[#EAE3D6] text-[#8A837A]'
                  }`}>
                    {numStr}
                  </div>
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider mb-1 transition-colors ${
                      isSelected ? 'bg-[#FAF2E9] text-[#B87538]' : 'bg-[#E5DFD4] text-[#645E57]'
                    }`}>
                      {symptom.badge}
                    </span>
                    <span className="block font-serif font-bold text-base leading-snug">
                      {symptom.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Diagnosis & First-Aid Card with Smooth Morphing State */}
        <div key={activeSymptom.id} className="animate-fade-in bg-white rounded-xl border border-[#E8E2D8] p-6 sm:p-8 shadow-xs">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#F4EFE6]">
            <div>
              <span className="text-xs text-[#8A837A] block">Identified Condition:</span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#24201D]">
                {activeSymptom.label}
              </h4>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF2E9] text-[#B87538] border border-[#E8D9C8]">
              {activeSymptom.category}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Description & Cause */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#24201D] mb-1">
                  What is happening:
                </h5>
                <p className="text-sm text-[#645E57] leading-relaxed">
                  {activeSymptom.description}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E8E2D8]">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#B87538] mb-1">
                  Why this happens:
                </h5>
                <p className="text-xs text-[#645E57] leading-relaxed">
                  {activeSymptom.likelyCause}
                </p>
              </div>
            </div>

            {/* Quick First-Aid Remedy */}
            <div className="lg:col-span-5 bg-[#FAF2E9] p-5 sm:p-6 rounded-xl border border-[#E8D9C8] space-y-4">
              <div>
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#965B27] mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5B6E58] shrink-0" />
                  Immediate First-Aid Step:
                </h5>
                <p className="text-xs sm:text-sm text-[#645E57] leading-relaxed">
                  {activeSymptom.immediateRemedy}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to={`/guides/${activeSymptom.recommendedGuideSlug}`}
                  className="w-full py-3 px-4 rounded-lg bg-[#B87538] text-white hover:bg-[#965B27] transition-all flex items-center justify-between text-xs font-semibold shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                >
                  <div className="text-left">
                    <span className="block text-[10px] text-white/80 uppercase font-sans">Full Tutorial</span>
                    <span className="block font-semibold">{activeSymptom.guideTitle}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 shrink-0 ml-2" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
