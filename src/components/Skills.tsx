import { skills } from '../data/portfolio';

const Skills = () => {
  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const toolsSkills = skills.filter((skill) => skill.category === 'tools');

  const SkillCategory = ({
    title,
    skills: categorySkills,
  }: {
    title: string;
    skills: typeof skills;
  }) => (
    <div className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-primary-dark">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categorySkills.map((skill) => (
          <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-gray-800">{skill.name}</span>
              <span className="text-sm text-gray-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title text-center text-primary-dark">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} />
        </div>

        {/* Additional skills badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary-dark">
            Other Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="skill-badge">Responsive Design</span>
            <span className="skill-badge">UI/UX Design</span>
            <span className="skill-badge">RESTful APIs</span>
            <span className="skill-badge">GraphQL</span>
            <span className="skill-badge">Agile/Scrum</span>
            <span className="skill-badge">Version Control</span>
            <span className="skill-badge">Testing</span>
            <span className="skill-badge">Performance Optimization</span>
            <span className="skill-badge">Accessibility</span>
            <span className="skill-badge">Cross-browser Compatibility</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
