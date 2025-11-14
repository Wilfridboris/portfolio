const About = () => {
  return (
    <section id="about" className="bg-beige py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Hello,
              <br />
              I'm a Developer!
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I am a self-taught Full-Stack Developer with extensive experience
              in building modern web applications. I'm currently focused on
              React, TypeScript, and pursuing excellence in Digital Web & Project
              Management.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and creating
              applications that provide real value to users. My passion lies in
              solving complex problems and continuously learning new technologies.
            </p>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn Profile
            </a>
          </div>

          {/* Right side - Image and info */}
          <div className="relative">
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl w-full max-w-md"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-green text-beige px-6 py-3 rounded-lg shadow-lg">
                <p className="text-sm font-semibold">Born: Jan 1, 1995</p>
              </div>
            </div>

            <div className="mt-12 bg-primary-dark text-beige p-8 rounded-lg shadow-xl max-w-md">
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  San Francisco, CA
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  your.email@example.com
                </p>
                <p className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
