import { Separator } from "@/components/ui/separator";

export function Etymology() {
  return (
    <section
      id="etymology"
      className="py-20 md:py-32 border-b border-stone-200 bg-stone-50"
    >
      <div className="container max-w-5xl mx-auto px-6">
        <h2 className="font-mono text-sm text-stone-400 mb-10 uppercase tracking-wider">
          Etymology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div className="col-span-2">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-light mb-12 leading-tight tracking-tight">
                Deconstructing{" "}
                <span className="text-emerald-800">rightless.ai</span>
              </h1>

              <div className="mt-8 text-lg text-stone-700 space-y-6 leading-relaxed">
                <p>
                  Every meaningful construct begins with its components. Before
                  systems connect, we must understand the elements that comprise
                  them—their origins, their implications, their essence.
                </p>
                <p>
                  The name "rightless.ai" itself contains multitudes: a
                  statement about starting conditions, a reflection on
                  entitlement, and a path toward meaningful connection.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <Separator className="mb-6" />
            <h3 className="font-mono text-sm text-stone-400 mb-6 uppercase tracking-wider">
              The Components
            </h3>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-base mb-2">right·</h3>
                <p className="text-sm text-stone-700">
                  From Old English "riht": that which is proper, just, or
                  morally correct; a moral or legal entitlement to have or do
                  something
                </p>
              </div>
              <div>
                <h3 className="font-mono text-base mb-2">less·</h3>
                <p className="text-sm text-stone-700">
                  A suffix denoting absence, lacking, or without; indicates
                  deprivation or a starting state of emptiness
                </p>
              </div>
              <div>
                <h3 className="font-mono text-base mb-2">ai·</h3>
                <p className="text-sm text-stone-700">
                  Artificial Intelligence; from Latin{" "}
                  <span className="italic">artificialis</span> (made by skill) +{" "}
                  <span className="italic">intelligentia</span> (understanding,
                  comprehension)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
