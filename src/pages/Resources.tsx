import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ChevronRight, Clock, FileText, Video, Wrench, BookOpen, Bell, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
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
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Education Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Your Financial <span className="text-primary">Learning Hub</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Free resources, guides, and tools designed to help you build financial clarity and confidence—at your own pace.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="py-8 border-y border-border bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    !selectedCategory
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
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
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
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
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
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
                      className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
                    >
                      {resource.comingSoon && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Coming Soon
                        </span>
                      )}

                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category?.color || 'from-primary/20 to-primary/10'} flex items-center justify-center mb-6`}>
                        <CategoryIcon className="w-7 h-7 text-primary" />
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {category?.name}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <TypeIcon className="w-3 h-3" />
                          {resource.type}
                        </span>
                        {resource.readTime && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {resource.readTime}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
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
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <CategoryIcon className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {categoryResources.length} resources
                      </span>
                      <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Resources */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {selectedCategory
                ? resourceCategories.find(c => c.id === selectedCategory)?.name
                : 'All Resources'}
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="ml-2 p-1 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
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
                      className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                    >
                      {resource.comingSoon && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded-full">
                          Coming Soon
                        </span>
                      )}

                      <div className="flex items-center gap-2 mb-3">
                        <TypeIcon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {resource.type}
                        </span>
                        {resource.readTime && (
                          <>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {resource.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16 bg-card border border-border rounded-2xl">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No resources found</h3>
                <p className="text-muted-foreground mb-4">
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
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <Bell className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Notified When Resources Launch
              </h2>
              <p className="text-primary-foreground/70 mb-8">
                Be the first to access new guides, tools, and educational content as they become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow h-14 px-6 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
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
