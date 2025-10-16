import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, User, ChevronRight } from 'lucide-react';

const Experience = () => {
  const { experience } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
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
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pushing the boundaries of AI and computational research through innovative pursuits
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-xl p-6 lg:p-8 hover-lift group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left side - Icon and line */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    {index < experience.length - 1 && (
                      <div className="absolute top-12 left-6 w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-blue-400 mt-1">{exp.company}</p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    {exp.supervisor && (
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Supervisor: {exp.supervisor}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.title.toLowerCase().includes('atlas') && (
                      <>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400">
                          Docker
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400">
                          Kubernetes
                        </span>
                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-400">
                          ML Models
                        </span>
                        <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-xs text-yellow-400">
                          GPU Clusters
                        </span>
                      </>
                    )}
                    {exp.title.toLowerCase().includes('risk') && (
                      <>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400">
                          Automation
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400">
                          Risk Management
                        </span>
                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-400">
                          Data Analytics
                        </span>
                        <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-xs text-yellow-400">
                          Financial Modeling
                        </span>
                      </>
                    )}
                    {exp.title.toLowerCase().includes('drug') && (
                      <>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400">
                          Python
                        </span>
                        <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-400">
                          AlphaFold3
                        </span>
                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-xs text-green-400">
                          Molecular Dynamics
                        </span>
                        <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-xs text-yellow-400">
                          NetworkX
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass-effect rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">AI/ML Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.frameworks["AI/ML"].map((framework) => (
                  <span key={framework} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {[...portfolioData.skills.cloud, ...portfolioData.skills.tools].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
