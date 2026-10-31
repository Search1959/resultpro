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
  const [modalMode, setModalMode] = useState<'apply' | 'message'>('apply');
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);

  const handleOpenModal = (mode: 'apply' | 'message' = 'apply') => {
    setModalMode(mode);
    setIsProofModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Bar with Top Bar Contract */}
      <Navbar
        onOpenProofModal={handleOpenModal}
        onOpenBlueprintModal={() => setIsBlueprintModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        <Hero
          onOpenProofModal={handleOpenModal}
          onOpenBlueprintModal={() => setIsBlueprintModalOpen(true)}
        />

        <StrategyComparison
          onOpenProofModal={() => handleOpenModal('apply')}
        />

        <WhyPerformance />

        <ProcessTimeline
          onOpenProofModal={() => handleOpenModal('apply')}
        />

        <GoldenRule />

        <ServicesOverview
          onOpenProofModal={() => handleOpenModal('message')}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenProofModal={handleOpenModal}
        onOpenBlueprintModal={() => setIsBlueprintModalOpen(true)}
      />

      {/* Modals */}
      <OriginalBlueprintModal
        isOpen={isBlueprintModalOpen}
        onClose={() => setIsBlueprintModalOpen(false)}
      />

      <ProofClientModal
        isOpen={isProofModalOpen}
        initialMode={modalMode}
        onClose={() => setIsProofModalOpen(false)}
      />
    </div>
  );
}
