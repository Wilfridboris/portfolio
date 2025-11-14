const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-primary flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-accent-yellow text-6xl">✦</div>
      <div className="absolute top-40 left-20 text-accent-yellow text-4xl">✦</div>
      <div className="absolute bottom-40 right-20 text-accent-yellow text-6xl">✦</div>

      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Developer Portrait"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute top-8 -left-8 w-72 h-72 bg-accent-orange opacity-20 rounded-lg"></div>
          </div>

          {/* Right side - Content */}
          <div className="text-beige">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              PORTFOLIO
            </h1>
            <div className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              DEVELOPER
            </div>

            <div className="space-y-3 mb-8 text-lg">
              <p className="flex items-center gap-2">
                <span className="font-semibold">GitHub:</span>
                <span>@yourprofile</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">LinkedIn:</span>
                <span>@yourprofile</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email:</span>
                <span>your.email@example.com</span>
              </p>
            </div>

            <p className="text-lg mb-8 max-w-lg leading-relaxed">
              I am a passionate Full-Stack Developer with expertise in building
              modern web applications. I specialize in React, TypeScript, and
              creating exceptional user experiences.
            </p>

            <button
              onClick={() => scrollToSection('about')}
              className="btn-primary flex items-center gap-2 group"
            >
              <span>Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-y-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-beige rounded-full flex justify-center">
          <div className="w-1 h-3 bg-beige rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
