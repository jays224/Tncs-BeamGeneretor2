"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className={`min-h-screen transition-opacity duration-700 ${mounted ? "opacity-100" : "opacity-0"}`}>

      {/* Navbar */}
      <nav className="w-full px-14 py-5 bg-[#001b14] dark:bg-[#0e0e0e] flex justify-between items-center border-b border-white/5">
        <h1 className="font-semibold text-lg tracking-wide">Shockify x Immortal</h1>

        <ul className="flex gap-10 text-gray-300 dark:text-gray-400 text-sm">
          <li><a className="hover:text-white duration-150 cursor-pointer">Home</a></li>
          <li><a className="hover:text-white duration-150 cursor-pointer">Generators</a></li>
          <li><a className="hover:text-white duration-150 cursor-pointer">Tutorials</a></li>
          <li><a className="hover:text-white duration-150 cursor-pointer">Tools</a></li>
          <li><a className="hover:text-white duration-150 cursor-pointer">Important</a></li>
        </ul>
      </nav>

      {/* Header */}
      <section className="text-center mt-20">
        <h2 className="text-5xl font-bold mb-4 text-[#32e6b2] dark:text-[#38f4c8] drop-shadow-lg animate-fadeInUp">
          Generators
        </h2>

        <p className="text-gray-300 dark:text-gray-400 max-w-3xl mx-auto text-[17px] leading-relaxed animate-fadeInUp delay-200">
          Discover our popular and new tools designed for speed and convenience.
          Whether it's Shockify with instant, captcha-free access or Immortal with powerful
          performance, each tool helps you get results fast and efficiently.
        </p>
      </section>

      {/* Cards */}
      <section className="flex flex-wrap justify-center gap-8 mt-16 px-10">

        {/* Card component */}
        {[
          {
            tag: "Popular",
            tagColor: "text-[#30d398] border-[#30d398]/40 bg-[#30d398]/20",
            shadow: "shadow-[0_0_15px_rgba(0,255,170,0.25)]",
            title: "Shockify",
            desc: "A fast, captcha-free tool with instant loading speeds — no VPN required.",
          },
          {
            tag: "New",
            tagColor: "text-[#00b7ff] border-[#00b7ff]/40 bg-[#00b7ff]/20",
            shadow: "shadow-[0_0_15px_rgba(0,150,255,0.25)]",
            title: "Immortal",
            desc: "A powerful captcha-free system with fast response times.",
          },
          {
            tag: "Oldgen",
            tagColor: "text-yellow-300 border-yellow-300/40 bg-yellow-500/20",
            shadow: "shadow-[0_0_15px_rgba(255,200,0,0.25)]",
            title: "Injuries",
            desc: "Nick is back with new improvements and a fully captcha-free experience.",
          }
        ].map((card, i) => (
          <div
            key={i}
            className={`bg-white/10 dark:bg-white/5 rounded-2xl p-8 w-[320px] 
              border border-white/10 backdrop-blur-md ${card.shadow}
              transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl
              animate-fadeInUp delay-${200 + i * 150}
            `}
          >
            <span className={`px-3 py-[3px] text-xs rounded-md border font-medium ${card.tagColor}`}>
              {card.tag}
            </span>

            <h3 className="text-2xl font-semibold mt-4">{card.title}</h3>

            <p className="text-gray-300 dark:text-gray-400 mt-3 text-[15px] leading-relaxed">
              {card.desc}
            </p>

            <button className="
              mt-6 bg-gradient-to-r from-[#30d398] to-[#1db67a]
              hover:from-[#4dfbba] hover:to-[#20d690]
              text-black font-semibold px-5 py-2 rounded-lg
              shadow-md hover:shadow-xl hover:-translate-y-1
              transition-all duration-300
            ">
              Try Now →
            </button>
          </div>
        ))}

      </section>

    </main>
  );
}
