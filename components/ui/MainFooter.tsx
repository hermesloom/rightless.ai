export function MainFooter() {
  return (
    <footer className="py-8 bg-stone-950 border-t border-stone-900 text-stone-500">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-mono tracking-tighter mb-6 md:mb-0">
            <span>right</span>
            <span className="opacity-30">less</span>
            <span>.</span>
            <span className="text-amber-700">ai</span>
          </div>
          <div className="text-xs">The natural evolution of connection.</div>
        </div>
      </div>
    </footer>
  );
}
