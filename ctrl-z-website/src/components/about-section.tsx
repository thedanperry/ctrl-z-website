export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black" data-section>
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-medium mb-16">Our Story</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div>
            <p className="text-xl leading-relaxed mb-8">
              Ctrl+Z is a hybrid film label and sales company dedicated to discovering,
              distributing, and producing distinctive genre films and content.
            </p>
            <p className="text-xl leading-relaxed">
              Our mission is to disrupt the traditional studio model by implementing
              a lean, AI-driven operational structure that benefits both filmmakers
              and audiences.
            </p>
          </div>

          <div>
            <p className="text-xl leading-relaxed mb-8">
              Founded by an industry veteran with over 20 years of experience in film
              and television production, our team brings expertise from major media
              companies including AMC, The Weinstein Company/Dimension Films, Paramount,
              and Warner Bros. Discovery.
            </p>
            <p className="text-xl leading-relaxed mb-8">
              We've optioned screenplays to major genre producers, produced films that
              have premiered at festivals nationwide, and secured distribution across
              multiple platforms, backed by extensive expertise in production and post-production.
            </p>
            <p className="text-xl leading-relaxed">
              We're positioning for success in an evolving future while building
              sustainable partnerships that prioritize creative vision and fair
              compensation for filmmakers.
            </p>
          </div>
        </div>

        <div className="my-32">
          <h2 className="text-4xl md:text-5xl font-medium mb-16">Our Capabilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-xl leading-relaxed">
                We offer comprehensive services for genre films, from festival strategy
                and sales negotiations to theatrical runs through indie art house
                cinema partnerships and digital platform distribution. Our tech forward
                approach improves operational efficiency while creating new creative possibilities.
              </p>
            </div>
            <div>
              <p className="text-xl leading-relaxed">
                Ctrl+Z provides indie filmmakers with access to streaming platforms, leveraging our in-house
                aggregator services for maxium exposure while securing limited theatrical runs.
                We offer transparancy to our creative partners throughout the process of distributing 
                and marketing our curated library of genre titles.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <a href="/services/acquisition" className="group">
              <div className="border-t border-white/30 pt-6 transition-all group-hover:border-white">
                <h3 className="text-2xl font-medium mb-2">Acquisition</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">
                  Discovering distinctive genre content
                </p>
              </div>
            </a>

            <a href="/services/distribution" className="group">
              <div className="border-t border-white/30 pt-6 transition-all group-hover:border-white">
                <h3 className="text-2xl font-medium mb-2">Distribution</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">
                  Theatrical & streaming platform access
                </p>
              </div>
            </a>

            <a href="/services/aggregation" className="group">
              <div className="border-t border-white/30 pt-6 transition-all group-hover:border-white">
                <h3 className="text-2xl font-medium mb-2">Aggregation</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">
                  Streamlined multi-platform delivery
                </p>
              </div>
            </a>

            <a href="/services/marketing" className="group">
              <div className="border-t border-white/30 pt-6 transition-all group-hover:border-white">
                <h3 className="text-2xl font-medium mb-2">Marketing</h3>
                <p className="text-zinc-400 group-hover:text-white transition-colors">
                  AI-enhanced audience targeting
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-32">
          <h2 className="text-4xl md:text-5xl font-medium mb-16">Our Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-50">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center justify-center h-16">
                <div className="bg-white/20 w-full h-full flex items-center justify-center">
                  {/* Empty partner placeholders */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
