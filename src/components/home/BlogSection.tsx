import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from '../blog/BlogCard';

const BlogSection = () => {
  const { t } = useTranslation();
  
  // Only show 3 blog posts on homepage
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionHeading 
          title={t('home.blog.title')}
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="btn btn-outline inline-flex items-center"
          >
            {t('home.blog.viewAll')}
            <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;