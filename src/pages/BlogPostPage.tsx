import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogPosts';
import { formatDate } from '../utils/dateFormatter';
import BlogCard from '../components/blog/BlogCard';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'tr' | 'az';
  
  const post = slug ? getBlogPostBySlug(slug) : null;
  const recentPosts = getRecentBlogPosts(3).filter(p => p.id !== post?.id);

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn btn-primary">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${post.title[currentLang]} | ${t('meta.title')}`}</title>
        <meta name="description" content={post.excerpt[currentLang]} />
      </Helmet>
      
      {/* Article Header */}
      <div className="pt-24 pb-8 bg-gray-50">
        <div className="container">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('blog.title')}
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                {post.category.name[currentLang]}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title[currentLang]}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <Calendar size={20} className="mr-2" />
              <span className="mr-4">{formatDate(post.date, currentLang)}</span>
              <User size={20} className="mr-2" />
              <span>{post.author}</span>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.excerpt[currentLang]}
            </p>
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="container mb-8">
        <div className="max-w-4xl">
          <img
            src={post.image}
            alt={post.title[currentLang]}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="max-w-none prose prose-lg prose-primary">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                {post.content[currentLang]}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  GE
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.author}
                  </h3>
                  <p className="text-gray-600">
                    {t('home.hero.subtitle')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Recent Posts */}
              {recentPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {t('blog.recentPosts')}
                  </h3>
                  <div className="space-y-6">
                    {recentPosts.map(recentPost => (
                      <div key={recentPost.id}>
                        <Link
                          to={`/blog/${recentPost.slug}`}
                          className="block group"
                        >
                          <img
                            src={recentPost.image}
                            alt={recentPost.title[currentLang]}
                            className="w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                          />
                          <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {recentPost.title[currentLang]}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {formatDate(recentPost.date, currentLang)}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* CTA */}
              <div className="bg-primary-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {t('home.cta.title')}
                </h3>
                <p className="text-primary-100 mb-6">
                  {t('home.cta.description')}
                </p>
                <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 w-full">
                  {t('home.cta.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;