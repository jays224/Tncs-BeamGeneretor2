export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <nav className="w-full px-10 py-5 bg-[#001d15] flex justify-between items-center">
        <h1 className="font-bold text-xl">MyTools x Project</h1>

        <ul className="flex gap-8 text-gray-300 text-sm">
          <li><a href="#">Home</a></li>
          <li><a href="#">Generators</a></li>
          <li><a href="#">Tutorials</a></li>
          <li><a href="#">Tools</a></li>
          <li><a href="#">Important</a></li>
        </ul>
      </nav>

      {/* Header */}
      <section className="text-center mt-20 px-5">
        <h2 className="text-5xl font-bold mb-3">Generators</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Discover our popular and new tools designed for speed and convenience.
          Each tool provides a smooth experience and fast performance.
        </p>
      </section>

      {/* Cards */}
      <section className="flex flex-wrap justify-center gap-6 mt-12 px-5">

        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 w-72 p-6 rounded-2xl">
          <span className="px-3 py-1 rounded-md bg-green-500 text-black text-xs font-bold">
            Popular
          </span>
          <h3 className="text-2xl font-bold mt-3">Shockify</h3>
          <p className="text-gray-200 mt-2">
            A fast system with smooth loading speeds.
          </p>
          <button className="mt-4 bg-green-400 text-black font-bold px-4 py-2 rounded-lg">
            Try Now →
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 w-72 p-6 rounded-2xl">
          <span className="px-3 py-1 rounded-md bg-blue-400 text-black text-xs font-bold">
            New
          </span>
          <h3 className="text-2xl font-bold mt-3">Immortal</h3>
          <p className="text-gray-200 mt-2">
            A powerful tool with optimized performance.
          </p>
          <button className="mt-4 bg-green-400 text-black font-bold px-4 py-2 rounded-lg">
            Try Now →
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 w-72 p-6 rounded-2xl">
          <span className="px-3 py-1 rounded-md bg-yellow-400 text-black text-xs font-bold">
            Oldgen
          </span>
          <h3 className="text-2xl font-bold mt-3">Injuries</h3>
          <p className="text-gray-200 mt-2">
            Updated with improvements and enhanced user experience.
          </p>
          <button className="mt-4 bg-green-400 text-black font-bold px-4 py-2 rounded-lg">
            Try Now →
          </button>
        </div>

      </section>

    </main>
  );
}
