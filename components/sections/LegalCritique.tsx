export function LegalCritique() {
  return (
    <section className="py-20 md:py-28 bg-stone-100 border-b border-stone-200">
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          Beyond Legacy Power
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl font-light mb-8 leading-tight">
            Existing legal systems have served their purpose but are now
            outdated and insufficient.
          </h3>

          <div className="space-y-6 text-stone-700">
            <p>
              Traditional governance structures divide power into two primary
              branches: violence and finance. These systems were designed for a
              world fundamentally different from the one we now inhabit.
            </p>
            <p>
              In all legacy power structures, violence (police, military,
              incarceration) is necessary primarily because people have
              legitimate reasons to rebel against laws that do not serve their
              wellbeing or reflect their values.
            </p>
            <p>
              Financial control mechanisms—from taxation to central banking—are
              similarly designed around scarcity models that no longer reflect
              our productive capacity or technological reality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-stone-50 p-8 border border-stone-200">
            <h4 className="text-xl mb-6">The Violence Branch</h4>

            <div className="space-y-6 text-stone-600">
              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 flex-shrink-0">
                  <span className="text-stone-500">1</span>
                </div>
                <div>
                  <p className="text-sm">
                    Police and military forces serve as the ultimate enforcers
                    of laws, regardless of whether those laws reflect ethical
                    principles or merely protect existing power arrangements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 flex-shrink-0">
                  <span className="text-stone-500">2</span>
                </div>
                <div>
                  <p className="text-sm">
                    Incarceration systems remove "non-compliant" individuals
                    from society while rarely addressing the root causes of
                    harmful behavior or creating conditions for healing and
                    reintegration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 flex-shrink-0">
                  <span className="text-stone-500">3</span>
                </div>
                <div>
                  <p className="text-sm">
                    Surveillance infrastructure extends the reach of
                    enforcement, creating a panopticon where the fear of
                    punishment becomes internalized and self-regulating.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-8 border border-stone-200">
            <h4 className="text-xl mb-6">The Finance Branch</h4>

            <div className="space-y-6 text-stone-600">
              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 flex-shrink-0">
                  <span className="text-stone-500">1</span>
                </div>
                <div>
                  <p className="text-sm">
                    Monetary systems controlled by central banks and financial
                    institutions create artificial scarcity and manage
                    populations through debt mechanisms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 flex-shrink-0">
                  <span className="text-stone-500">2</span>
                </div>
                <div>
                  <p className="text-sm">
                    Taxation systems are complex, inefficient, and often
                    regressive, creating adversarial relationships between
                    citizens and governance structures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-200 flex-shrink-0">
                  <span className="text-stone-500">3</span>
                </div>
                <div>
                  <p className="text-sm">
                    Property rights regimes favor abstract ownership over actual
                    use, creating imbalances where vast resources remain idle
                    while needs go unmet.
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
