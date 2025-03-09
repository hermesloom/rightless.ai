export function ParticipatoryBudgeting() {
  return (
    <section className="py-20 md:py-28 bg-cyan-50 border-b border-cyan-100 overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-cyan-700 mb-10 uppercase tracking-wider">
          The Future of the Global Tax System
        </h2>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="text-3xl font-light mb-8">
            The magic word:{" "}
            <span className="text-cyan-700">Participatory budgeting</span>
          </h3>

          <p className="text-lg text-stone-700">
            One of humanity's biggest achievements are systems of taxation: A
            streamlined way to extract money from the economy in a targeted way,
            which should then be used for the common good. We need to reimagine
            how this system works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6 text-stone-700">
            <p>
              Current tax systems concentrate decision-making power in the hands
              of politicians, who are often disconnected from the actual needs
              of communities. The result is systematic waste, misaligned
              priorities, and deepening civic disengagement.
            </p>
            <p>
              Participatory budgeting offers a radical alternative—transferring
              the power of fiscal decision-making directly to the people. This
              isn't a minor reform but a fundamental shift in how we think about
              taxation, governance, and collective resource allocation.
            </p>
            <p>
              Rather than treating taxation as something done{" "}
              <span className="italic">to</span> citizens, participatory
              budgeting makes it something done{" "}
              <span className="italic">by</span> citizens. It transforms taxes
              from an obligation citizens fulfill passively to a process they
              actively shape.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 -left-10 -bottom-10 flex items-center justify-center opacity-5 z-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="300"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-cyan-900"
              >
                <path d="M4 10h6v12H4zm10 0h6v12h-6zM4 2h16v6H4z" />
              </svg>
            </div>
            <div className="bg-white p-8 border border-cyan-200 shadow-sm relative z-10">
              <h4 className="text-xl mb-6 text-cyan-800">How It Works</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 flex-shrink-0">
                    <span className="text-cyan-700 font-medium">1</span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-700">
                      All taxes collected by a governing entity (municipality,
                      state, nation) are pooled together during a defined
                      period.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 flex-shrink-0">
                    <span className="text-cyan-700 font-medium">2</span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-700">
                      Each citizen receives an equal allocation to distribute,
                      regardless of how much they personally contributed in
                      taxes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 flex-shrink-0">
                    <span className="text-cyan-700 font-medium">3</span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-700">
                      Citizens themselves define and propose projects for
                      funding, complete with detailed budget requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 flex-shrink-0">
                    <span className="text-cyan-700 font-medium">4</span>
                  </div>
                  <div>
                    <p className="text-sm text-stone-700">
                      If a project doesn't receive sufficient funding by the
                      deadline, allocated money returns to the pool for
                      redistribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-cyan-50 p-8 border border-cyan-200 shadow-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-cyan-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-cyan-600"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h4 className="text-xl mb-4 text-cyan-800">Expanding Suffrage</h4>
            <p className="text-stone-700">
              True democracy requires more than marking a ballot every few
              years. Participatory budgeting makes fiscal decision-making part
              of our regular democratic practice, giving citizens direct control
              over public resources with the same security and transparency as
              voting.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-cyan-50 p-8 border border-cyan-200 shadow-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-cyan-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-cyan-600"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h4 className="text-xl mb-4 text-cyan-800">Global Potential</h4>
            <p className="text-stone-700">
              While initially implemented at local levels, participatory
              budgeting can scale to national and even international systems.
              Imagine global resources allocated not by geopolitical power plays
              but by the collective wisdom of humanity, focusing on our shared
              challenges.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white to-cyan-50 p-8 border border-cyan-200 shadow-sm">
            <div className="w-12 h-12 mb-6 flex items-center justify-center rounded-full bg-cyan-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-cyan-600"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <h4 className="text-xl mb-4 text-cyan-800">
              Digital Implementation
            </h4>
            <p className="text-stone-700">
              Modern technology makes participatory budgeting more feasible than
              ever. Secure digital platforms can provide transparent project
              proposals, budget allocations, and outcome tracking while
              maintaining the privacy of individual decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
