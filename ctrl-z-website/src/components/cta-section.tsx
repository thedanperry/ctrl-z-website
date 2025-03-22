export default function CTASection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background pattern or texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-zinc-800 via-zinc-900 to-black"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-medium mb-12">
            Join Our Film <span className="text-outline">Movement</span>
          </h2>

          <p className="text-xl md:text-2xl mb-16 leading-relaxed">
            We're redefining genre film distribution with technical innovations
            and filmmaker-centric partnerships. Let's work together to bring your
            vision to worldwide audiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-black text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Submit Your Film
            </a>

            <a
              href="/services"
              className="px-8 py-4 border border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
