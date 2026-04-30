'use client';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Rishabh Sharma
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-normal">
              Full Stack Developer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I build scalable systems and high-performance backend architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-md font-medium hover:bg-secondary/5 transition-colors duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
