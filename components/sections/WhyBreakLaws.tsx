export function WhyBreakLaws() {
  return (
    <section className="py-20 md:py-28 bg-stone-900 text-white border-b border-stone-800">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          Systemic Disobedience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="h-full flex flex-col">
              <h3 className="text-3xl font-light mb-8 leading-tight">
                People break laws because the system requires it by design
              </h3>

              <div className="space-y-6 text-stone-300 mb-auto">
                <p>
                  Law-breaking isn't an aberration in current systems—it's a
                  feature. Current governance models are built on the assumption
                  that some percentage of the population will always be
                  non-compliant.
                </p>
                <p>
                  This perpetual non-compliance creates the justification for
                  surveillance, enforcement, and punishment institutions. It
                  maintains the power dynamics that benefit those who define and
                  enforce the rules.
                </p>
              </div>

              <div className="mt-8 p-6 bg-stone-800 border border-stone-700">
                <p className="text-amber-400 font-medium mb-2">
                  The Cycle of Control
                </p>
                <p className="text-sm text-stone-400">
                  Create laws that conflict with human needs → Punish those who
                  inevitably break these laws → Use this punishment to justify
                  more control → Repeat
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-stone-800 p-8 border border-stone-700">
              <h4 className="text-xl mb-8">Why Non-Compliance is Inevitable</h4>

              <div className="space-y-8">
                <div className="relative pl-8 border-l border-amber-700">
                  <h5 className="text-amber-400 mb-2">Economic Necessity</h5>
                  <p className="text-sm text-stone-300">
                    When systems fail to provide basic needs, people find ways
                    outside the law to survive. Someone without shelter will
                    trespass. Someone without food will steal. These aren't
                    moral failings but systemic ones.
                  </p>
                </div>

                <div className="relative pl-8 border-l border-amber-700">
                  <h5 className="text-amber-400 mb-2">Misaligned Incentives</h5>
                  <p className="text-sm text-stone-300">
                    Legal frameworks often reward behaviors that harm
                    communities while criminalizing those that help them. When
                    profit drives policy, laws protect extraction rather than
                    regeneration.
                  </p>
                </div>

                <div className="relative pl-8 border-l border-amber-700">
                  <h5 className="text-amber-400 mb-2">Cognitive Dissonance</h5>
                  <p className="text-sm text-stone-300">
                    People must compartmentalize to function in systems that
                    violate their values. This creates psychological strain that
                    manifests as both conscious and unconscious resistance to
                    rules.
                  </p>
                </div>

                <div className="relative pl-8 border-l border-amber-700">
                  <h5 className="text-amber-400 mb-2">
                    Natural Human Variation
                  </h5>
                  <p className="text-sm text-stone-300">
                    Human neurology, capacities, and needs are diverse. Systems
                    designed for a narrow band of neurotypical conformity
                    automatically pathologize and criminalize natural human
                    variance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
