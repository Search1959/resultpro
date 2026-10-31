import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StrategyComparison } from './components/StrategyComparison';
import { WhyPerformance } from './components/WhyPerformance';
import { ProcessTimeline } from './components/ProcessTimeline';
import { GoldenRule } from './components/GoldenRule';
import { ServicesOverview } from './components/ServicesOverview';
import { OriginalBlueprintModal } from './components/OriginalBlueprintModal';
import { ProofClientModal } from './components/ProofClientModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isProofModalOpen, setIsProofModalOpen] = useState(false);
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Bar with Top Bar Contract */}
      <Navbar
        onOpenProofModal={() => setIsProofModalOpen(true)}
        onOpenBlueprintModal={() => setIsBlueprintModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero
          onOpenProofModal={() => setIsProofModalOpen(true)}
          onOpenBlueprintModal={() => setIsBlueprintModalOpen(true)}
        />

        <StrategyComparison
          onOpenProofModal={() => setIsProofModalOpen(true)}
        />

        <WhyPerformance />

        <ProcessTimeline
          onOpenProofModal={() => setIsProofModalOpen(true)}
        />

        <GoldenRule />

        <ServicesOverview
          onOpenProofModal={() => setIsProofModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenProofModal={() => setIsProofModalOpen(true)}
        onOpenBlueprintModal={() => setIsBlueprintModalOpen(true)}
      />

      {/* Modals */}
      <OriginalBlueprintModal
        isOpen={isBlueprintModalOpen}
        onClose={() => setIsBlueprintModalOpen(false)}
      />

      <ProofClientModal
        isOpen={isProofModalOpen}
        onClose={() => setIsProofModalOpen(false)}
      />
    </div>
  );
}
