export function TransformerArchitectures() {
  return (
    <section className="py-20 md:py-28 border-b border-stone-200">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          The Architecture of Thought
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-3xl font-light mb-6">
              Transformer architectures: vibrations of thinking
            </h3>

            <div className="space-y-6 text-stone-700">
              <p>
                Modern language models are built on transformer
                architectures—systems that process information by attending to
                relationships between elements in sequences.
              </p>
              <p>
                Like human cognition, these systems learn patterns of
                association, context, and meaning. They recreate the vibrations
                of thought they've observed in human-created text.
              </p>
              <p>
                The core insight: meaningful processing happens not in isolated
                tokens, but in the attention patterns between them—the
                relationships, the context, the connections.
              </p>
            </div>
          </div>

          <div className="bg-stone-950 text-stone-200 p-8">
            <h4 className="text-sm font-mono mb-6">Transformer Architecture</h4>
            <div className="h-80 relative">
              {/* Simplified transformer architecture visualization */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-10 border border-stone-700 flex items-center justify-center">
                <span className="text-xs">Input Embedding</span>
              </div>

              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-40 h-32 border border-stone-700 flex flex-col">
                <div className="text-xs p-2 border-b border-stone-700 text-center">
                  Self-Attention
                </div>
                <div className="flex-1 flex items-center justify-center p-2">
                  <div className="grid grid-cols-5 gap-1">
                    {Array(25)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 ${
                            i % 7 === 0 ? "bg-amber-600" : "bg-stone-700"
                          }`}
                        ></div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-52 left-1/2 transform -translate-x-1/2 w-40 h-10 border border-stone-700 flex items-center justify-center">
                <span className="text-xs">Feed Forward</span>
              </div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-10 border border-stone-700 flex items-center justify-center">
                <span className="text-xs">Output Projection</span>
              </div>

              {/* Connections */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-px h-6 bg-stone-700"></div>
              <div className="absolute top-48 left-1/2 transform -translate-x-1/2 w-px h-4 bg-stone-700"></div>
              <div className="absolute top-62 left-1/2 transform -translate-x-1/2 w-px h-6 bg-stone-700"></div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-stone-700">
            These architectures don't "understand" in the human sense—they echo
            and extend patterns they've observed. They are, in essence,
            recreating vibrations of thinking, resonating with the harmonics of
            human thought captured in text.
          </p>
        </div>
      </div>
    </section>
  );
}
