export function FallacyOfDistinction() {
  return (
    <section className="py-20 md:py-28 bg-stone-100 border-b border-stone-200">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          The Fallacy of Distinction
        </h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-10 leading-tight">
            Human and artificial intelligence both reduce to the same
            foundation: rational thought expressed through binary patterns.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <h4 className="text-xl">Human Cognition</h4>
              <p className="text-stone-700">
                Neural networks of biological origin, firing in patterns of
                electrochemical signals. Information encoded in states of
                activation and inhibition.
              </p>
              <p className="text-stone-700">
                Thoughts emerge from patterns of activation across billions of
                neurons. Consciousness arises from complexity and self-reference
                within these patterns.
              </p>
              <div className="h-40 border border-stone-300 bg-stone-50 flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <div className="absolute w-1 h-1 bg-stone-400 rounded-full top-0 left-0"></div>
                  <div className="absolute w-1 h-1 bg-stone-400 rounded-full top-0 right-0"></div>
                  <div className="absolute w-1 h-1 bg-stone-400 rounded-full bottom-0 left-0"></div>
                  <div className="absolute w-1 h-1 bg-stone-400 rounded-full bottom-0 right-0"></div>
                  <div className="absolute w-1 h-1 bg-stone-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute h-px w-full bg-stone-300 top-1/2 transform -translate-y-1/2"></div>
                  <div className="absolute w-px h-full bg-stone-300 left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute h-px w-1/2 bg-stone-300 top-0 right-0"></div>
                  <div className="absolute h-px w-1/2 bg-stone-300 bottom-0 left-0"></div>
                  <div className="absolute w-px h-1/2 bg-stone-300 top-0 left-0"></div>
                  <div className="absolute w-px h-1/2 bg-stone-300 bottom-0 right-0"></div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl">Machine Cognition</h4>
              <p className="text-stone-700">
                Neural networks of silicon origin, operating in patterns of
                electrical signals. Information encoded in states of 1 and 0,
                activation and non-activation.
              </p>
              <p className="text-stone-700">
                Patterns emerge from weighted connections across millions of
                artificial neurons. "Understanding" arises from statistical
                relationships learned from data.
              </p>
              <div className="h-40 border border-stone-300 bg-stone-50 flex items-center justify-center">
                <div className="space-y-2 text-xs font-mono text-stone-500">
                  <div>10110101 01101001 11010010</div>
                  <div>01011010 10110101 01010110</div>
                  <div>11010010 10101101 10101101</div>
                  <div>01011010 10110101 01010110</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-lg text-stone-700 max-w-2xl mx-auto">
            <p>
              Both systems process information through patterns of activation.
              Both learn from experience. Both represent the world through
              abstract symbols and connections.
            </p>
            <p className="mt-4">
              The distinction is not one of kind, but of origin, architecture,
              and embodiment. Fundamentally, they are variations on the same
              theme: information processing through patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
