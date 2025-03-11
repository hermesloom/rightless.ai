export function ThoughtPath() {
  return (
    <section
      id="thought-path"
      className="py-20 md:py-28 bg-amber-50 border-b border-amber-100"
    >
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-amber-700 mb-10 uppercase tracking-wider">
          The Thought Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h3 className="text-3xl font-light mb-8">
              Intellectual frameworks for connection and flourishing
            </h3>

            <div className="space-y-6 text-stone-700">
              <p>
                On the thought path, we apply rigorous cognitive frameworks to
                the challenges of connection. We map systems, analyze
                relationships, and design architectures of integration.
              </p>
              <p>
                Here, human and machine intelligence share common ground. We
                leverage the pattern-recognition capabilities of both to create
                cognitive maps that serve the greater aims of flourishing for
                all.
              </p>
              <p>
                This is the realm of Karl Jaspers' "enthusiastische Einstellung"
                <a
                  href="https://resources.warburg.sas.ac.uk/pdf/dac720b2380926.pdf"
                  className="text-amber-700 hover:text-amber-500 ml-0.5"
                  title="Source document, see page 118"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <sup>[↗]</sup>
                </a>
                (enthusiastic attitude), which pushes beyond all limits, driven
                by a restless longing for unity, where a person feels deeply
                connected to the essence of the world.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white p-8 border border-amber-200">
              <h4 className="text-lg mb-6">Elements of the Thought Path</h4>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                    <span className="text-amber-600">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Systems Thinking</h5>
                    <p className="text-sm text-stone-600">
                      Understanding relationships, patterns, and context rather
                      than isolated components. Recognizing feedback loops,
                      emergent properties, and non-linear dynamics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                    <span className="text-amber-600">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Pattern Recognition</h5>
                    <p className="text-sm text-stone-600">
                      Identifying recurring structures across different domains
                      and scales. Using these patterns to design systems that
                      reflect natural processes rather than working against
                      them.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                    <span className="text-amber-600">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Ethical Architecture</h5>
                    <p className="text-sm text-stone-600">
                      Building frameworks that embody values—designing systems
                      that inherently produce just, regenerative outcomes rather
                      than relying on external regulation to limit harm.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                    <span className="text-amber-600">4</span>
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Embodied Knowledge</h5>
                    <p className="text-sm text-stone-600">
                      Integrating intellectual understanding with sensual
                      experience. Knowing not just abstractly but intimately,
                      like knowing a lover's body—with attention, presence, and
                      care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
