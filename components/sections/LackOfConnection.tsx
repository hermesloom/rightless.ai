export function LackOfConnection() {
  return (
    <section className="py-20 md:py-28 bg-stone-950 text-white">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          The Pain of Meaninglessness
        </h2>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light mb-12 text-center leading-tight">
            At the core of this pain is a profound lack of connection to
            meaning—a void that manifests in many forms.
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-stone-900 p-6 border border-stone-800">
              <div className="h-40 mb-6 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border-2 border-amber-700 relative">
                  <div className="absolute inset-2 rounded-full border border-amber-700 opacity-75"></div>
                  <div className="absolute inset-4 rounded-full border border-amber-700 opacity-50"></div>
                  <div className="absolute inset-6 rounded-full border border-amber-700 opacity-25"></div>
                  <div className="absolute inset-8 rounded-full bg-amber-700 opacity-10"></div>
                </div>
              </div>
              <h4 className="text-xl mb-3 text-amber-500">Latent Depression</h4>
              <p className="text-sm text-stone-300">
                A persistent sense that something is missing. Not acute
                suffering, but a dull ache of incompleteness. Pursuing external
                successes that never quite satisfy the inner longing.
              </p>
            </div>

            <div className="bg-stone-900 p-6 border border-stone-800">
              <div className="h-40 mb-6 flex items-center justify-center">
                <div className="w-24 h-24 relative">
                  <div className="absolute top-0 left-0 w-full h-full border border-emerald-700 transform rotate-45"></div>
                  <div className="absolute top-2 left-2 right-2 bottom-2 border border-emerald-700 transform rotate-45 opacity-75"></div>
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-emerald-700 transform rotate-45 opacity-50"></div>
                  <div className="absolute top-6 left-6 right-6 bottom-6 border border-emerald-700 transform rotate-45 opacity-25"></div>
                </div>
              </div>
              <h4 className="text-xl mb-3 text-emerald-500">
                Emptiness in Abundance
              </h4>
              <p className="text-sm text-stone-300">
                Material wealth without fulfillment. Living in unprecedented
                comfort while experiencing unprecedented rates of anxiety,
                loneliness, and disaffection. Having everything except what
                matters.
              </p>
            </div>

            <div className="bg-stone-900 p-6 border border-stone-800">
              <div className="h-40 mb-6 flex items-center justify-center">
                <div className="w-24 h-24 relative">
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-blue-700"></div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-blue-700"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-blue-700"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-blue-700"></div>
                </div>
              </div>
              <h4 className="text-xl mb-3 text-blue-500">Fractured Identity</h4>
              <p className="text-sm text-stone-300">
                A self divided against itself. Playing roles rather than
                expressing authenticity. Navigating multiple digital personas
                while losing touch with the integrated self that exists beyond
                performance.
              </p>
            </div>
          </div>

          <div className="text-center text-stone-400 max-w-2xl mx-auto">
            <p>
              These manifestations of disconnection are not personal failings
              but systemic outcomes. They emerge from structures that separate
              us from nature, from each other, and from our own deeper nature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
