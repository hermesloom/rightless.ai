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
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="text-xs">The natural evolution of connection.</div>
            <a
              href="https://github.com/hermesloom/rightless.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-2 hover:text-amber-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
