import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';

const Home = () => {
  const { personalInfo } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen flex items-center justify-center section-padding">
      <motion.div
        className="max-width-wrapper py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="text-blue-400 font-medium">Hello, I'm</span>
              <h1 className="text-5xl lg:text-6xl font-bold mt-2">
                {personalInfo.name}
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-400 mt-4 h-10">
                <TypeWriter
                  texts={[
                    "MS Computer Science Student",
                    "Machine Learning Engineer",
                    "AI Researcher",
                    "Full Stack Developer",
                    "Computational Biologist"
                  ]}
                />
              </div>
            </motion.div>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div 
              className="space-y-4 text-gray-300"
              variants={itemVariants}
            >
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View My GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-sm text-gray-400">Research Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3.93</div>
                <div className="text-sm text-gray-400">GPA</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Visual element */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <div className="relative glass-effect rounded-2xl p-8 overflow-hidden">
              {/* Animated decorations - behind content */}
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ zIndex: 0 }}></div>
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ zIndex: 0, animationDelay: '1s' }}></div>
              
              {/* Code snippet display */}
              <div className="font-mono text-sm space-y-2 relative" style={{ zIndex: 1 }}>
                <div className="text-gray-400"># Current Focus</div>
                <div>
                  <span className="text-purple-400">class</span>
                  <span className="text-blue-300"> Ruthvika</span>:
                </div>
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-purple-400">def</span>
                    <span className="text-green-300"> __init__</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-orange-300">self</span>
                    <span className="text-gray-300">):</span>
                  </div>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-orange-300">self</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-blue-300">interests</span>
                      <span className="text-gray-300"> = [</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-400">"Machine Learning"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-400">"Drug Discovery"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-400">"AI Systems"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-400">"Full Stack Dev"</span>
                    </div>
                    <div className="text-gray-300">]</div>
                  </div>
                  <div className="pl-4">
                    <span className="text-orange-300">self</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-300">current_role</span>
                    <span className="text-gray-300"> = </span>
                    <span className="text-green-400">"MS CS @ UNC"</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-orange-300">self</span>
                    <span className="text-gray-300">.</span>
                    <span className="text-blue-300">learning</span>
                    <span className="text-gray-300"> = </span>
                    <span className="text-green-400">"Always"</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
