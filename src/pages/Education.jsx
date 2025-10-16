import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const { education } = portfolioData;

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
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
            Academic <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building a strong foundation in Computer Science and interdisciplinary studies
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-xl p-6 lg:p-8 hover-lift"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  {index < education.length - 1 && (
                    <div className="absolute top-14 left-7 w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-100">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-400 mt-1">{edu.school}</p>
                    
                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mt-3 text-sm">
                      <span className="flex items-center gap-1 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span className="flex items-center gap-1 text-green-400">
                          <Award className="w-4 h-4" />
                          GPA: {edu.gpa}
                        </span>
                      )}
                      {edu.honors && (
                        <span className="text-yellow-400 font-medium">
                          🎖️ {edu.honors}
                        </span>
                      )}
                    </div>

                    {/* Minors */}
                    {edu.minors && (
                      <div className="mt-3">
                        <span className="text-gray-400 text-sm">Minors: </span>
                        {edu.minors.map((minor, idx) => (
                          <span key={idx} className="text-purple-400 text-sm">
                            {minor}
                            {idx < edu.minors.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Coursework */}
                  <div className="mt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      <h4 className="text-lg font-semibold text-gray-200">Relevant Coursework</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {edu.coursework.map((course, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="group"
                        >
                          <div className="px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default">
                            {course}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Academic Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3.93</div>
            <div className="text-gray-400">Undergraduate GPA</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">12+</div>
            <div className="text-gray-400">Graduate Courses</div>
          </div>
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-400">Specializations</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
