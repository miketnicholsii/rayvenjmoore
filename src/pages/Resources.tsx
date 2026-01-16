import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronRight, Clock, FileText, Video, Wrench, BookOpen, Bell, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BreakoutNav from '@/components/layout/BreakoutNav';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { resourceCategories, resources, iconMap } from '@/data/resources';

const typeIcons = {
  article: FileText,
  guide: BookOpen,
  video: Video,
  template: FileText,
  tool: Wrench
};

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || resource.categoryId === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(r => r.featured);

  return (
    <div className="min-h-screen bg-cream">
      <SEO 
        title="Resources"
        description="Free financial education resources, guides, and tools. Learn about Bitcoin, personal finance, wealth building, business accounting, and more."
        canonical="/resources"
      />
      <BreakoutNav title="Resources" backLabel="Back to Home" sectionId="services" />
      <main className="pt-16">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-warm-beige/50 to-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-medium mb-6">
                Education Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-forest leading-tight mb-6">
                Your Financial <span className="text-terracotta">Learning Hub</span>
              </h1>
              <p className="text-xl text-olive">
                Free resources, guides, and tools designed to help you build financial clarity and confidence—at your own pace.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="py-8 border-y border-sage/30 bg-cream">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-olive" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-lg bg-warm-beige/30 border border-sage/30 text-dark-forest placeholder:text-olive/60 focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="w-5 h-5 text-olive flex-shrink-0" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    !selectedCategory
                      ? 'bg-olive text-cream'
                      : 'bg-warm-beige text-olive hover:bg-warm-beige/80'
                  }`}
                >
                  All
                </button>
                {resourceCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-olive text-cream'
                        : 'bg-warm-beige text-olive hover:bg-warm-beige/80'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        {featuredResources.length > 0 && !searchQuery && !selectedCategory && (
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-dark-forest mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-terracotta rounded-full" />
                Featured Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredResources.map((resource, index) => {
                  const TypeIcon = typeIcons[resource.type];
                  const category = resourceCategories.find(c => c.id === resource.categoryId);
                  const CategoryIcon = category ? iconMap[category.icon] : FileText;

                  return (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative bg-cream border border-sage/30 rounded-2xl p-8 hover:border-terracotta/40 transition-all duration-300 group"
                    >
                      {resource.comingSoon && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-olive/10 text-olive text-xs font-medium rounded-full">
                          Coming Soon
                        </span>
                      )}

                      <div className={`w-14 h-14 rounded-xl bg-olive/10 flex items-center justify-center mb-6`}>
                        <CategoryIcon className="w-7 h-7 text-olive" />
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-olive uppercase tracking-wider">
                          {category?.name}
                        </span>
                        <span className="text-olive/50">•</span>
                        <span className="flex items-center gap-1 text-xs text-olive">
                          <TypeIcon className="w-3 h-3" />
                          {resource.type}
                        </span>
                        {resource.readTime && (
                          <>
                            <span className="text-olive/50">•</span>
                            <span className="flex items-center gap-1 text-xs text-olive">
                              <Clock className="w-3 h-3" />
                              {resource.readTime}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-dark-forest mb-2 group-hover:text-terracotta transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-olive text-sm leading-relaxed">
                        {resource.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Category Grid */}
        <section className="py-16 bg-warm-beige/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-dark-forest mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-terracotta rounded-full" />
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => {
                const CategoryIcon = iconMap[category.icon];
                const categoryResources = resources.filter(r => r.categoryId === category.id);

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/40 transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <CategoryIcon className="w-6 h-6 text-olive" />
                    </div>

                    <h3 className="text-lg font-semibold text-dark-forest mb-2">{category.name}</h3>
                    <p className="text-sm text-olive mb-4">{category.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-olive">
                        {categoryResources.length} resources
                      </span>
                      <ChevronRight className="w-5 h-5 text-terracotta opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-16 bg-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-dark-forest mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-terracotta rounded-full" />
              {selectedCategory
                ? resourceCategories.find(c => c.id === selectedCategory)?.name
                : 'All Resources'}
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="ml-2 p-1 hover:bg-warm-beige rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-olive" />
                </button>
              )}
            </h2>

            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => {
                  const TypeIcon = typeIcons[resource.type];
                  const category = resourceCategories.find(c => c.id === resource.categoryId);

                  return (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="relative bg-cream border border-sage/30 rounded-xl p-6 hover:border-terracotta/40 transition-all duration-300 group"
                    >
                      {resource.comingSoon && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 bg-warm-beige text-olive text-xs rounded-full">
                          Coming Soon
                        </span>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        <TypeIcon className="w-4 h-4 text-olive" />
                        <span className="text-xs text-olive uppercase tracking-wider">
                          {resource.type}
                        </span>
                        {resource.readTime && (
                          <>
                            <span className="text-olive/50">•</span>
                            <span className="text-xs text-olive">{resource.readTime}</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-dark-forest mb-2 group-hover:text-terracotta transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-olive line-clamp-2">
                        {resource.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-cream border border-sage/30 rounded-2xl">
                <Search className="w-12 h-12 text-olive mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-dark-forest mb-2">No resources found</h3>
                <p className="text-olive mb-4">
                  Try adjusting your search or filter criteria.
                </p>
                <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-olive">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <Bell className="w-12 h-12 mx-auto mb-6 text-cream/80" />
              <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
                Get Notified When Resources Launch
              </h2>
              <p className="text-cream/70 mb-8">
                Be the first to access new guides, tools, and educational content as they become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow h-14 px-6 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/50 transition-colors"
                />
                <Button variant="secondary" size="lg" className="h-14 px-8">
                  Notify Me
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
