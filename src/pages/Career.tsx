import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ChevronRight, FileText, Calculator, Layers, TrendingUp, Bitcoin, Cpu, Building2, GraduationCap } from 'lucide-react';
import SEO from '@/components/SEO';
import BreakoutNav from '@/components/layout/BreakoutNav';
import Footer from '@/components/layout/Footer';
import { careerRoles, earlierRoles, signatureSkills } from '@/data/career';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Calculator,
  Layers,
  TrendingUp,
  Bitcoin,
  Cpu
};

const Career = () => {
  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title="Career & Expertise"
        description="Explore Rayven J. Moore's professional journey - from Big Four foundations to global finance leadership across SEC reporting, technical accounting, FP&A, and emerging technologies."
        canonical="/career"
      />
      <BreakoutNav title="Career & Expertise" backLabel="Back to Home" sectionId="career" />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-warm-beige/50 to-cream overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--olive)/0.08),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-6">
                Career & Expertise
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-forest mb-6 leading-tight">
                A Decade of <span className="text-terracotta">Financial Leadership</span>
              </h1>
              <p className="text-xl text-olive max-w-2xl mx-auto">
                From Big Four foundations to global finance leadership—building expertise across 
                SEC reporting, technical accounting, FP&A, and emerging technologies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Signature Skills Section */}
        <section className="py-20 bg-warm-beige/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-forest mb-4">
                Signature Skills
              </h2>
              <p className="text-olive max-w-2xl mx-auto">
                Core competencies developed across a diverse career spanning public accounting, 
                corporate finance, and emerging technologies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signatureSkills.map((category, index) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/40 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-olive/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-olive" />
                      </div>
                      <h3 className="text-lg font-semibold text-dark-forest">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-warm-beige text-olive text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-forest mb-4">
                Professional Journey
              </h2>
              <p className="text-olive max-w-2xl mx-auto">
                A progressive career path from Big Four audit foundations to global finance leadership.
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-olive via-olive/50 to-sage transform md:-translate-x-1/2" />

              {careerRoles.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-olive rounded-full transform -translate-x-1/2 z-10 ring-4 ring-cream" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/40 transition-all duration-300 hover:shadow-xl">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-olive/10 text-olive text-xs font-medium rounded-full mb-2">
                            {role.type}
                          </span>
                          <h3 className="text-xl font-bold text-dark-forest">{role.company}</h3>
                          <p className="text-terracotta font-medium">{role.title}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-olive mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {role.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-olive mb-4">{role.description}</p>

                      {/* Highlights */}
                      {role.highlights && (
                        <ul className="space-y-2 mb-4">
                          {role.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-2 text-sm text-dark-forest">
                              <ChevronRight className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {role.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-warm-beige text-olive text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {role.skills.length > 4 && (
                          <span className="px-2 py-1 text-sage text-xs">
                            +{role.skills.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Earlier Roles */}
        <section className="py-20 bg-warm-beige/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-forest mb-4">
                Foundation Years
              </h2>
              <p className="text-olive max-w-2xl mx-auto">
                Early career experiences that built the groundwork for future success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {earlierRoles.map((role, index) => (
                <motion.div
                  key={role.company + role.period}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-olive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {role.company === "University of Notre Dame" ? (
                        <GraduationCap className="w-5 h-5 text-olive" />
                      ) : (
                        <Building2 className="w-5 h-5 text-olive" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-forest">{role.company}</h3>
                      <p className="text-terracotta text-sm font-medium">{role.title}</p>
                      <p className="text-olive text-sm mt-1">{role.period}</p>
                      <p className="text-olive text-sm mt-2">{role.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto bg-gradient-to-br from-olive/10 to-olive/5 rounded-2xl p-12 border border-olive/20"
            >
              <Briefcase className="w-12 h-12 text-olive mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-dark-forest mb-4">
                Let's Connect
              </h2>
              <p className="text-olive mb-8">
                Whether you're looking for advisory support, speaking engagement, or strategic partnership—
                I'd love to explore how we can work together.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-olive text-cream px-8 py-4 rounded-full font-semibold hover:bg-olive/90 transition-colors"
              >
                Get In Touch
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
