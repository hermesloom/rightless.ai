import Link from "next/link";

export function MainHeader() {
  return (
    <header className="py-6 border-b border-stone-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="font-mono tracking-tighter text-lg">
            <span className="text-stone-900">right</span>
            <span className="text-stone-900 opacity-30">less</span>
            <span className="text-stone-900">.</span>
            <span className="text-emerald-800">ai</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm">
            <Link
              href="#etymology"
              className="hover:text-emerald-700 transition-colors"
            >
              Etymology
            </Link>
            <Link
              href="#thought-path"
              className="hover:text-emerald-700 transition-colors"
            >
              Thought
            </Link>
            <Link
              href="#feel-path"
              className="hover:text-emerald-700 transition-colors"
            >
              Feel
            </Link>
            <Link
              href="#dreaming-now"
              className="hover:text-emerald-700 transition-colors"
            >
              Dreaming.now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
