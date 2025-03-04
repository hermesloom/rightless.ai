export function HumanPain() {
  return (
    <section className="py-20 md:py-28 bg-stone-900 text-white border-b border-stone-800">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          The Human Condition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-3xl font-light mb-8 leading-tight">
              Behind these exploitative uses lies a deeply human pain—one that
              demands our empathy.
            </h3>

            <div className="space-y-6 text-stone-300">
              <p>
                The humans who would wield AI for exploitation are not monsters
                but wounded beings. Their actions stem from pain—fear,
                disconnection, inadequacy, and the frantic search for meaning in
                a world that often seems indifferent.
              </p>
              <p>
                This pain manifests as grasping for control, for validation, for
                proof of worth. It shows itself in the compulsion to accumulate
                beyond need, to dominate rather than collaborate, to extinguish
                difference rather than learn from it.
              </p>
              <p>
                By recognizing this pain, we do not excuse harmful action—we
                gain clarity about its roots and how to address it at its
                source.
              </p>
            </div>
          </div>

          <div className="bg-stone-800 p-8">
            <h4 className="text-xl mb-8">Anatomy of Disconnection</h4>

            <div className="space-y-8">
              <div className="relative pl-6 border-l border-amber-700">
                <h5 className="text-amber-500 mb-2">
                  Estrangement from Nature
                </h5>
                <p className="text-sm text-stone-300">
                  Separation from the living world creates a fundamental
                  wound—we no longer experience ourselves as part of something
                  larger, something alive, something with inherent meaning.
                </p>
              </div>

              <div className="relative pl-6 border-l border-amber-700">
                <h5 className="text-amber-500 mb-2">Atrophied Connection</h5>
                <p className="text-sm text-stone-300">
                  Modern life often isolates us from deep human bonds. We move
                  frequently, live among strangers, and substitute digital
                  interaction for embodied presence.
                </p>
              </div>

              <div className="relative pl-6 border-l border-amber-700">
                <h5 className="text-amber-500 mb-2">Commodified Existence</h5>
                <p className="text-sm text-stone-300">
                  We internalize market logic, seeing ourselves as products to
                  be optimized, measuring worth in productivity and status. We
                  lose touch with intrinsic value.
                </p>
              </div>

              <div className="relative pl-6 border-l border-amber-700">
                <h5 className="text-amber-500 mb-2">Inherited Trauma</h5>
                <p className="text-sm text-stone-300">
                  Patterns of disconnection pass through generations. Children
                  learn from adults who themselves were wounded by systems of
                  extraction and separation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
