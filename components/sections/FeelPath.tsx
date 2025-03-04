export function FeelPath() {
  return (
    <section
      id="feel-path"
      className="py-20 md:py-28 bg-emerald-50 border-b border-emerald-100"
    >
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-emerald-700 mb-10 uppercase tracking-wider">
          The Feel Path
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-light mb-8">
              The embodied experience of connection and care
            </h3>

            <div className="space-y-6 text-stone-700">
              <p>
                Humans are fundamentally community animals, evolved for
                connection. We need and deserve deeply caring, loving,
                supportive relationships—from intimate partnerships to broader
                community bonds.
              </p>
              <p>
                The felt path is uniquely human, structurally irreducible to
                digital systems. It exists in the embodied reality of human
                experience—the sensual knowledge that comes through touch,
                emotion, and presence.
              </p>
              <p>
                This path involves dynamics that simply{" "}
                <span className="italic">feel</span> right. Not in the shallow
                sense of momentary pleasure, but in the deep coherence that
                emerges when we align with our nature as social, feeling beings.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-emerald-200">
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-emerald-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-emerald-600"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h4 className="text-lg mb-3">Presence</h4>
              <p className="text-sm text-stone-600">
                Being fully available to this moment, without distraction or
                division. The foundation of genuine connection and the antidote
                to digital fragmentation.
              </p>
            </div>

            <div className="bg-white p-6 border border-emerald-200">
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-emerald-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-emerald-600"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h4 className="text-lg mb-3">Attunement</h4>
              <p className="text-sm text-stone-600">
                Sensing and responding to others' emotional states with accuracy
                and care. The dance of mutual adjustment that creates secure
                attachment.
              </p>
            </div>

            <div className="bg-white p-6 border border-emerald-200">
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-emerald-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-emerald-600"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M7 14.5s.5.5 2.5.5 2.5-.5 2.5-.5"></path>
                  <path d="M7 9h.01"></path>
                  <path d="M17 9h.01"></path>
                </svg>
              </div>
              <h4 className="text-lg mb-3">Play</h4>
              <p className="text-sm text-stone-600">
                Activity pursued for its own sake, without external rewards. The
                creative space where connection deepens and joy emerges
                naturally.
              </p>
            </div>

            <div className="bg-white p-6 border border-emerald-200">
              <div className="w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-emerald-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-emerald-600"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <path d="M9 9h6v6H9z"></path>
                </svg>
              </div>
              <h4 className="text-lg mb-3">Boundaries</h4>
              <p className="text-sm text-stone-600">
                The clear limits that make genuine connection possible. Knowing
                where you end and others begin creates the safety needed for
                intimacy.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-lg text-emerald-800">
            "The feeling path cannot be digitized or reduced to algorithm. It is
            the uniquely human realm where care, love, and meaning reside."
          </p>
        </div>
      </div>
    </section>
  );
}
