import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { formatDate } from '../../utils/dateFormatter';
import { BlogPost } from '../../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language as 'en' | 'tr' | 'az';

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title[currentLang]}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category.name[currentLang]}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar size={16} className="mr-2" />
          <span>{formatDate(post.date, currentLang)}</span>
          <span className="mx-2">•</span>
          <User size={16} className="mr-2" />
          <span>{post.author}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title[currentLang]}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt[currentLang]}
        </p>
        
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          {t('blog.readMore')}
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;