export default function ParkPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Logo / icon */}
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
          </svg>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-light tracking-tight">
            Something beautiful
          </h1>
          <h1 className="text-4xl font-light tracking-tight text-white/40">
            is on its way.
          </h1>
        </div>

        <p className="text-white/50 text-sm max-w-xs leading-relaxed">
          We&apos;re putting the finishing touches on our photography portfolio.
          Check back soon.
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-white/20 my-2" />

        {/* Notify */}
        <div className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-xs text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Currently in development
        </div>
      </div>
    </div>
  );
}
