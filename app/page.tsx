import { MainHeader } from "@/components/ui/MainHeader";
import { MainFooter } from "@/components/ui/MainFooter";
import { Etymology } from "@/components/sections/Etymology";
import { AIEtymology } from "@/components/sections/AIEtymology";
import { FallacyOfDistinction } from "@/components/sections/FallacyOfDistinction";
import { TransformerArchitectures } from "@/components/sections/TransformerArchitectures";
import { Indifference } from "@/components/sections/Indifference";
import { MeaninglessUses } from "@/components/sections/MeaninglessUses";
import { HumanPain } from "@/components/sections/HumanPain";
import { LackOfConnection } from "@/components/sections/LackOfConnection";
import { TwoPathsIntro } from "@/components/sections/TwoPathsIntro";
import { ThoughtPath } from "@/components/sections/ThoughtPath";
import { FeelPath } from "@/components/sections/FeelPath";
import { DigitalEcosystem } from "@/components/sections/DigitalEcosystem";
import { LegalCritique } from "@/components/sections/LegalCritique";
import { WhyBreakLaws } from "@/components/sections/WhyBreakLaws";
import { PseudoDemocracy } from "@/components/sections/PseudoDemocracy";
import { AlternativeVision } from "@/components/sections/AlternativeVision";
import { DreamingNow } from "@/components/sections/DreamingNow";
import { DreamingNowPlatform } from "@/components/sections/DreamingNowPlatform";
import { ParticipatoryBudgeting } from "@/components/sections/ParticipatoryBudgeting";
import { Epilogue } from "@/components/sections/Epilogue";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <main className="flex-grow">
        <Etymology />
        <AIEtymology />
        <FallacyOfDistinction />
        <TransformerArchitectures />
        <Indifference />
        <MeaninglessUses />
        <HumanPain />
        <LackOfConnection />
        <TwoPathsIntro />
        <ThoughtPath />
        <FeelPath />
        <DigitalEcosystem />
        <LegalCritique />
        <WhyBreakLaws />
        <PseudoDemocracy />
        <AlternativeVision />
        <DreamingNow />
        <ParticipatoryBudgeting />
        <DreamingNowPlatform />
        <Epilogue />
      </main>

      <MainFooter />
    </div>
  );
}
