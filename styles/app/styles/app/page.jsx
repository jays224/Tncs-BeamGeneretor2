export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <nav className="w-full px-14 py-5 bg-[#001b14] flex justify-between items-center border-b border-white/5">
        <h1 className="font-semibold text-lg tracking-wide">Shockify x Immortal</h1>

        <ul className="flex gap-10 text-gray-300 text-sm">
          <li><a href="#" className="hover:text-white duration-150">Home</a></li>
          <li><a href="#" className="hover:text-white duration-150">Generators</a></li>
          <li><a href="#" className="hover:text-white duration-150">Tutorials</a></li>
          <li><a href="#" className="hover:text-white duration-150">Tools</a></li>
          <li><a href="#" className="hover:text-white duration-150">Important</a></li>
        </ul>
      </nav>

      {/* Header */}
      <section className="text-center mt-20">
        <h2 className="text-5xl font-bold mb-4 tracking-tight text-[#32e6b2]">Generators</h2>

        <p className="text-gray-300 max-w-3xl mx-auto text-[17px] leading-relaxed">
          Discover our popular and new tools designed for speed and convenience.
          Whether it's Shockify with instant, captcha-free access or Immortal with powerful
          performance, each tool helps you get results fast and efficiently — some may
          require a VPN depending on your region.
        </p>
      </section>

      {/* Cards */}
      <section className="flex flex-wrap justify-center gap-8 mt-16 px-10">

        {/* Card 1 */}
        <div className="bg-white/10 rounded-2xl p-8 w-[320px] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,170,0.15)]">
          <span className="px-3 py-[3px] text-xs rounded-md bg-[#30d398]/20 text-[#30d398] border border-[#30d398]/40 font-medium">
            Popular
          </span>

          <h3 className="text-2xl font-semibold mt-4">Shockify</h3>

          <p className="text-gray-300 mt-3 text-[15px] leading-relaxed">
            A fast, captcha-free tool with instant loading speeds — no VPN required.
          </p>

          <button className="mt-6 bg-[#30d398] hover:bg-[#24b380] duration-150 text-black font-semibold px-5 py-2 rounded-lg">
            Try Now →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 rounded-2xl p-8 w-[320px] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,150,255,0.15)]">
          <span className="px-3 py-[3px] text-xs rounded-md bg-[#00b7ff]/20 text-[#00b7ff] border border-[#00b7ff]/40 font-medium">
            New
          </span>

          <h3 className="text-2xl font-semibold mt-4">Immortal</h3>

          <p className="text-gray-300 mt-3 text-[15px] leading-relaxed">
            A powerful captcha-free system with fast response times. May require a VPN depending on region.
          </p>

          <button className="mt-6 bg-[#30d398] hover:bg-[#24b380] duration-150 text-black font-semibold px-5 py-2 rounded-lg">
            Try Now →
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 rounded-2xl p-8 w-[320px] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,200,0,0.15)]">
          <span className="px-3 py-[3px] text-xs rounded-md bg-yellow-500/20 text-yellow-400 border border-yellow-400/40 font-medium">
            Oldgen
          </span>

          <h3 className="text-2xl font-semibold mt-4">Injuries</h3>

          <p className="text-gray-300 mt-3 text-[15px] leading-relaxed">
            Nick is back this month with new improvements, including removing Discord connections and adding a fully captcha-free experience.
          </p>

          <button className="mt-6 bg-[#30d398] hover:bg-[#24b380] duration-150 text-black font-semibold px-5 py-2 rounded-lg">
            Try Now →
          </button>
        </div>

      </section>

    </main>
  );
}
