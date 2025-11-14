import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="bg-beige py-24">
      <div className="section-container">
        <h2 className="section-title text-center text-primary-dark">
          Education
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div key={edu.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-dark text-accent-yellow p-3 rounded-lg">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-1">
                    {edu.startDate} - {edu.endDate}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-700 font-semibold">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.location}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
