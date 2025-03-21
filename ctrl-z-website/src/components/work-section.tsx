"use client";

export default function WorkSection() {
  // Number of placeholder boxes
  const placeholders = Array(6).fill("Coming Soon");

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-medium mb-16">Our Work</h2>

        <p className="text-xl leading-relaxed max-w-3xl mb-16">
          We promote and distribute distinctive genre films that challenge
          conventions and connect with passionate audiences. Our curated portfolio
          represents the innovative, future-forward content we champion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholders.map((text, index) => (
            <div
              key={index}
              className="group block relative overflow-hidden aspect-[3/4]"
            >
              {/* Placeholder background with gradient instead of image */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black transition-transform duration-700 ease-in-out group-hover:scale-105"></div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <p className="text-zinc-400 uppercase tracking-wider text-sm">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/films"
            className="inline-block border border-white px-8 py-4 text-lg hover:bg-white hover:text-black transition-colors"
          >
            View All Films
          </a>
        </div>
      </div>
    </section>
  );
}
