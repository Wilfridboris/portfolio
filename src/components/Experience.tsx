import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title text-center text-primary-dark">
          Work Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <div key={experience.id} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="bg-gradient-to-r from-accent-yellow to-accent-orange p-1 rounded-lg mb-8">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary-dark mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700">
                        {experience.company}
                      </p>
                      <p className="text-gray-600">{experience.location}</p>
                    </div>
                    <div className="bg-accent-yellow text-white px-4 py-2 rounded-full text-sm font-semibold mt-2 sm:mt-0">
                      {experience.startDate} -{' '}
                      {experience.current ? 'Present' : experience.endDate}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-accent-orange mt-1.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
