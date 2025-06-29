import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../data/blogPosts';
import { formatDate } from '../../utils/dateFormatter';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  loading?: 'lazy' | 'eager';
}

const BlogCard = memo(({ post, featured = false, loading = 'lazy' }: BlogCardProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'az' | 'en' | 'tr';
  
  return (
    <article 
      className={`bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden">
        <Link to={`/blog/${post.slug}`} className="block">
          <img 
            src={post.image} 
            alt={post.title[currentLang]} 
            loading={loading}
            className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            decoding="async"
          />
        </Link>
        
        <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-semibold uppercase tracking-wider py-1 px-2 rounded shadow-sm">
          {post.category.name[currentLang]}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <time dateTime={post.date}>
              {formatDate(post.date, currentLang)}
            </time>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>
              {post.readTime} {currentLang === 'en' ? 'min read' : currentLang === 'tr' ? 'dk okuma' : 'dəq oxuma'}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">
          <Link 
            to={`/blog/${post.slug}`} 
            className="hover:text-primary-600 transition-colors duration-200"
          >
            {post.title[currentLang]}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt[currentLang]}
        </p>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group"
          aria-label={`Read more about ${post.title[currentLang]}`}
        >
          {t('blog.readMore')}
          <ArrowRight size={16} className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;