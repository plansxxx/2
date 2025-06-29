import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, User } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '../data/blogPosts';
import { formatDate } from '../utils/dateFormatter';

const BlogPostPage = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const currentLang = i18n.language as 'az' | 'en' | 'tr';
  
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog\" replace />;
  }
  
  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category.id === post.category.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${post.title[currentLang]} | ${t('meta.title')}`}</title>
        <meta name="description" content={post.excerpt[currentLang]} />
      </Helmet>
      
      {/* Featured Image */}
      <div 
        className="pt-24 pb-12 bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url(${post.image})`,
          height: '60vh'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container h-full flex flex-col justify-end relative">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white mb-6 hover:text-primary-200 transition-colors"
          >
            <ChevronLeft size={20} className="mr-1" />
            {t('nav.blog')}
          </Link>
          
          <div className="mb-6">
            <span className="inline-block bg-primary-600 text-white text-xs font-semibold uppercase tracking-wider py-1 px-2 rounded mb-4">
              {post.category.name[currentLang]}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title[currentLang]}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-300 gap-4">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                {formatDate(post.date, currentLang)}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {post.readTime} {currentLang === 'en' ? 'min read' : currentLang === 'tr' ? 'dk okuma' : 'dəq oxuma'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Post Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{__html: post.content[currentLang].replace(/\n/g, '<br />')}} />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Category */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">{t('blog.categories')}</h3>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    to={`/blog?category=${post.category.id}`} 
                    className="px-4 py-2 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                  >
                    {post.category.name[currentLang]}
                  </Link>
                </div>
              </div>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
                  <ul className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <li key={relatedPost.id} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="flex items-start group"
                        >
                          <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 mr-4">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title[currentLang]}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium line-clamp-2 group-hover:text-primary-600 transition-colors">
                              {relatedPost.title[currentLang]}
                            </h4>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;