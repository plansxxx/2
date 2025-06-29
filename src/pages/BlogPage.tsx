import React, { useState, useMemo, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Search, Filter } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts, categories, searchBlogPosts, getBlogPostsByCategory } from '../data/blogPosts';

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'az' | 'en' | 'tr';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Memoized filtered posts for performance
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;
    
    // Apply search filter
    if (searchQuery.trim()) {
      posts = searchBlogPosts(searchQuery.trim(), currentLang);
    }
    
    // Apply category filter
    if (selectedCategory) {
      const categoryPosts = getBlogPostsByCategory(selectedCategory);
      posts = searchQuery.trim() 
        ? posts.filter(post => categoryPosts.some(cp => cp.id === post.id))
        : categoryPosts;
    }
    
    return posts;
  }, [searchQuery, selectedCategory, currentLang]);

  // Debounced search handler
  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleCategoryChange = useCallback((categoryId: number | null) => {
    setSelectedCategory(categoryId);
    setIsFilterOpen(false);
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${t('nav.blog')} | ${t('meta.title')}`}</title>
        <meta name="description" content={t('blog.subtitle')} />
      </Helmet>
      
      {/* Page Header */}
      <div className="pt-24 pb-12 bg-primary-600 text-white">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-primary-100">{t('blog.subtitle')}</p>
        </div>
      </div>
      
      {/* Filters */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 shadow-sm">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === null
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {t('blog.categories')}
              </button>
              
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Filter size={16} className="mr-2" />
                Filter
              </button>
              
              {/* Desktop Categories */}
              <div className="hidden lg:flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {category.name[currentLang]}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder={t('blog.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full lg:w-80 transition-all duration-200"
              />
            </div>
          </div>
          
          {/* Mobile Categories */}
          {isFilterOpen && (
            <div className="lg:hidden mt-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name[currentLang]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Results Info */}
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredPosts.length === 0 
                ? 'No articles found'
                : `${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} found`
              }
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory && ` in ${categories.find(c => c.id === selectedCategory)?.name[currentLang]}`}
            </p>
          </div>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  loading={index < 6 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;