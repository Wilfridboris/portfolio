import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolio';
import ImageSlider from '../components/ImageSlider';

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-beige flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Project Not Found
          </h1>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <div className="bg-gradient-primary py-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-beige hover:text-accent-yellow transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span className="font-semibold">Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-gray-600 bg-white px-4 py-2 rounded-full">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-sm font-semibold text-white bg-accent-yellow px-4 py-2 rounded-full">
                  Featured Project
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          </div>

          {/* Image Slider */}
          <div className="mb-12">
            <ImageSlider images={project.images} alt={project.title} />
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Technologies Used */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-accent-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-accent-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Key Features
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">▸</span>
                  <span className="text-gray-700">Responsive design for all devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">▸</span>
                  <span className="text-gray-700">Modern and clean user interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">▸</span>
                  <span className="text-gray-700">Optimized performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">▸</span>
                  <span className="text-gray-700">Accessibility standards compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-orange mt-1">▸</span>
                  <span className="text-gray-700">Cross-browser compatibility</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Project Info */}
          <div className="bg-gradient-to-r from-primary-green to-primary-dark rounded-lg shadow-lg p-8 text-beige mb-12">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <p className="leading-relaxed mb-4">
              This project demonstrates my ability to build modern, scalable web
              applications using the latest technologies and best practices. I
              focused on creating a clean, maintainable codebase while ensuring
              excellent user experience.
            </p>
            <p className="leading-relaxed">
              The development process included careful planning, iterative
              development, thorough testing, and optimization for performance and
              accessibility. Every decision was made with the end user in mind.
            </p>
          </div>

          {/* Other Projects */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">
              Interested in More Projects?
            </h2>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="btn-primary"
            >
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
