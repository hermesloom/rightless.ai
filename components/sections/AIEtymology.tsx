export function AIEtymology() {
  return (
    <section className="py-20 md:py-28 border-b border-stone-200">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          The Etymology of AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-7">
            <p className="text-2xl font-light leading-relaxed mb-10">
              The concept of artificial intelligence carries within it a
              fundamental paradox: the artificial that attempts to mirror the
              natural.
            </p>

            <div className="space-y-8 text-lg text-stone-700">
              <p>
                <span className="font-medium">Artificial</span> — from Latin{" "}
                <span className="italic">artificialis</span>: "of or belonging
                to art," from <span className="italic">artificium</span> "craft,
                skill, cunning device." That which is made by human skill rather
                than arising naturally.
              </p>

              <p>
                <span className="font-medium">Intelligence</span> — from Latin{" "}
                <span className="italic">intelligentia</span>: "understanding,
                power of discerning; art, skill, taste." From{" "}
                <span className="italic">intelligentem</span>: "discerning,
                perceptive, understanding."
              </p>

              <p>
                The combination suggests a human-made system of understanding
                and discernment. But this construction contains an implied
                separation—between the natural intelligence of humans and the
                constructed intelligence of machines.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-stone-50 p-8 border border-stone-100">
              <h3 className="text-xl mb-6">Timeline of Meaning</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-stone-400 mb-1">1950s</div>
                  <p className="text-sm">
                    The term "artificial intelligence" coined, establishing a
                    conceptual boundary
                  </p>
                </div>
                <div>
                  <div className="text-xs text-stone-400 mb-1">1980s-1990s</div>
                  <p className="text-sm">
                    AI understood primarily as rule-based systems attempting to
                    codify human knowledge
                  </p>
                </div>
                <div>
                  <div className="text-xs text-stone-400 mb-1">2010s</div>
                  <p className="text-sm">
                    Deep learning emerges, shifting focus from rules to patterns
                    in vast amounts of data
                  </p>
                </div>
                <div>
                  <div className="text-xs text-stone-400 mb-1">Present</div>
                  <p className="text-sm">
                    The boundary between human and machine cognition begins to
                    blur
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
