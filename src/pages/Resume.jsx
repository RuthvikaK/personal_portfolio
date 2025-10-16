import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download, FileText, ExternalLink } from 'lucide-react';

const Resume = () => {
  const { personalInfo, education, experience, skills, projects } = portfolioData;

  const handleDownload = (resumeType) => {
    const resumeFiles = {
      'General': '/resumes/Ruthvika_Kosuri_Resume.pdf'
    };
    
    const link = document.createElement('a');
    link.href = resumeFiles[resumeType];
    link.download = `Ruthvika_Kosuri_${resumeType}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen section-padding py-24">
      <div className="max-width-wrapper">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download my resume or view the details below
          </p>
        </motion.div>

        {/* Download Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => handleDownload('General')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-black rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Ruthvika Kosuri Resume
          </button>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-effect rounded-xl p-8 space-y-8"
        >
          {/* Contact Information */}
          <div className="text-center border-b border-gray-700 pb-6">
            <h2 className="text-3xl font-bold mb-2">{personalInfo.name}</h2>
            <p className="text-lg text-gray-400 mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 pl-7">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-100">{edu.degree}</h4>
                    <p className="text-gray-400">{edu.school}</p>
                    {edu.honors && <p className="text-yellow-400 text-sm">{edu.honors}</p>}
                    {edu.minors && (
                      <p className="text-gray-500 text-sm">
                        Minors: {edu.minors.join(', ')}
                      </p>
                    )}
                  </div>
                  <div className="text-right text-sm text-gray-400">
                    <p>{edu.period}</p>
                    {edu.gpa && <p className="text-green-400">GPA: {edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Experience
            </h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-100">{exp.title}</h4>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
                <ul className="space-y-2 mt-2 ml-6" style={{ listStyleType: 'disc' }}>
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Key Projects
            </h3>
            {projects.slice(0, 4).map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-100">
                    {project.name} - {project.description.split('.')[0]}
                  </h4>
                  <p className="text-sm text-gray-400">{project.year}</p>
                </div>
                <ul className="space-y-2 ml-6" style={{ listStyleType: 'disc' }}>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Technical Skills
            </h3>
            <div className="space-y-3 pl-7">
              <div>
                <span className="font-semibold text-gray-200">Programming Languages: </span>
                <span className="text-gray-400">{skills.languages.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-200">AI/ML Skills and Frameworks: </span>
                <span className="text-gray-400">{skills.frameworks["AI/ML"].join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-200">Web Development: </span>
                <span className="text-gray-400">{skills.frameworks["Web Development"].join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-200">Cloud & DevOps: </span>
                <span className="text-gray-400">{[...skills.cloud, ...skills.tools].join(', ')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
