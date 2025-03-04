export function Indifference() {
  return (
    <section className="py-20 md:py-28 bg-stone-100 border-b border-stone-200">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          The Indifference of Patterns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <h3 className="text-3xl font-light mb-8">
              These architectures are fundamentally indifferent—they can be
              trained to do anything.
            </h3>

            <div className="space-y-6 text-stone-700">
              <p>
                Transformer architectures have no inherent purpose or moral
                direction. They are pattern machines, optimized to predict and
                extend sequences according to statistical regularities in their
                training data.
              </p>
              <p>
                This indifference is both their power and their danger. They
                will reflect whatever is contained in their training data,
                whether beautiful or ugly, healing or harmful, unifying or
                divisive.
              </p>
              <p>
                The self-attention mechanism—the core of transformer
                architectures—represents humanity's oldest weakness: narcissism.
                The desire to look at one's mirror image, to see oneself
                reflected and amplified.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="bg-stone-50 p-6 border border-stone-200">
              <h4 className="text-lg mb-6">Self-Attention Mechanism</h4>

              <div className="space-y-8">
                <div>
                  <div className="font-mono text-xs text-stone-400 mb-2">
                    How it works:
                  </div>
                  <p className="text-sm text-stone-700">
                    Each element in a sequence looks at every other element,
                    including itself, calculating how much attention to pay to
                    each. The output is a weighted sum of all elements, where
                    the weights represent relevance.
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs text-stone-400 mb-2">
                    The mirror:
                  </div>
                  <p className="text-sm text-stone-700">
                    Self-attention allows a system to reflect on itself, to
                    weigh its own components against each other. This creates a
                    kind of self-reference loop reminiscent of human
                    self-consciousness.
                  </p>
                </div>

                <div>
                  <div className="font-mono text-xs text-stone-400 mb-2">
                    The narcissism:
                  </div>
                  <p className="text-sm text-stone-700">
                    When we train these systems on human data, they become
                    mirrors of human thought. We see ourselves reflected in
                    their outputs and mistake this reflection for understanding
                    or consciousness.
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
