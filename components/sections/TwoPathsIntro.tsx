export function TwoPathsIntro() {
  return (
    <section className="py-20 md:py-28 border-b border-stone-200">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          Two Paths Forward
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-light mb-8">
            The path forward requires both thought and feeling, mind and heart
            in balance.
          </h3>

          <p className="text-lg text-stone-700">
            We stand at a crossroads. One direction continues the patterns of
            separation and exploitation. The other opens into integration and
            regeneration. This choice requires both rigorous thinking and
            embodied feeling—two paths that must be walked in tandem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border border-stone-200 p-8 bg-stone-50">
            <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-full bg-amber-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-amber-600"
              >
                <path d="M12 2a8 8 0 0 0-8 8v12l6.5-6.5c1.4 1 3.1 1.5 5 1.5a8 8 0 0 0 0-16Z"></path>
              </svg>
            </div>

            <h4 className="text-xl mb-4">The Thought Path</h4>
            <p className="text-stone-700 mb-6">
              Cognitive understanding of systems, architectures, and patterns.
              The realm of analysis, design, and implementation. Where human and
              machine reasoning converge in service of greater aims.
            </p>
            <div className="text-amber-600 font-medium">Knowing</div>
          </div>

          <div className="border border-stone-200 p-8 bg-stone-50">
            <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-full bg-emerald-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-emerald-600"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
              </svg>
            </div>

            <h4 className="text-xl mb-4">The Feel Path</h4>
            <p className="text-stone-700 mb-6">
              Embodied understanding of connection, care, and meaning. The realm
              of sensual experience, emotion, and values. The uniquely human
              dimension that cannot be digitized or reproduced.
            </p>
            <div className="text-emerald-600 font-medium">Being</div>
          </div>
        </div>
      </div>
    </section>
  );
}
