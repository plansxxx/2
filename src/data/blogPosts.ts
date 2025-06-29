export interface BlogPost {
  id: string;
  title: {
    en: string;
    tr: string;
    az: string;
  };
  excerpt: {
    en: string;
    tr: string;
    az: string;
  };
  content: {
    en: string;
    tr: string;
    az: string;
  };
  date: string;
  category: {
    name: {
      en: string;
      tr: string;
      az: string;
    };
  };
  slug: string;
  image: string;
  author: string;
}

export const categories = [
  {
    id: 'shoulder',
    name: {
      en: 'Shoulder Conditions',
      tr: 'Omuz Rahatsızlıkları',
      az: 'Çiyin Problemləri'
    }
  },
  {
    id: 'knee',
    name: {
      en: 'Knee Problems',
      tr: 'Diz Problemleri',
      az: 'Diz Problemləri'
    }
  },
  {
    id: 'hip',
    name: {
      en: 'Hip Conditions',
      tr: 'Kalça Rahatsızlıkları',
      az: 'Kalça Problemləri'
    }
  },
  {
    id: 'pediatric',
    name: {
      en: 'Pediatric Orthopedics',
      tr: 'Pediatrik Ortopedi',
      az: 'Pediatrik Ortopediya'
    }
  },
  {
    id: 'sports',
    name: {
      en: 'Sports Injuries',
      tr: 'Spor Yaralanmaları',
      az: 'İdman Zədələri'
    }
  },
  {
    id: 'trauma',
    name: {
      en: 'Trauma & Fractures',
      tr: 'Travma ve Kırıklar',
      az: 'Travma və Sınıqlar'
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: {
      en: 'Understanding Shoulder Pain: Causes and Treatment Options',
      tr: 'Omuz Ağrısını Anlamak: Nedenleri ve Tedavi Seçenekleri',
      az: 'Çiyin Ağrısını Anlamaq: Səbəbləri və Müalicə Seçimləri'
    },
    excerpt: {
      en: 'Shoulder pain is one of the most common orthopedic complaints. Learn about the various causes and modern treatment approaches.',
      tr: 'Omuz ağrısı en yaygın ortopedik şikayetlerden biridir. Çeşitli nedenleri ve modern tedavi yaklaşımlarını öğrenin.',
      az: 'Çiyin ağrısı ən geniş yayılmış ortopedik şikayətlərdən biridir. Müxtəlif səbəbləri və müasir müalicə yanaşmalarını öğrenin.'
    },
    content: {
      en: 'The shoulder is one of the most mobile joints in the human body, which also makes it one of the most vulnerable to injury. Understanding the anatomy and common causes of shoulder pain can help patients make informed decisions about their treatment...',
      tr: 'Omuz, insan vücudundaki en hareketli eklemlerden biridir ve bu da onu yaralanmaya en açık eklemlerden biri yapar. Omuz anatomisini ve yaygın ağrı nedenlerini anlamak, hastaların tedavileri hakkında bilinçli kararlar vermelerine yardımcı olabilir...',
      az: 'Çiyin insan bədənindəki ən hərəkətli oynaqlardan biridir və bu da onu zədələnməyə ən həssas oynaqlardan biri edir. Çiyin anatomiyasını və ağrının ümumi səbəblərini anlamaq xəstələrə müalicələri haqqında məlumatlı qərarlar verməkdə kömək edə bilər...'
    },
    date: '2024-12-15',
    category: {
      name: {
        en: 'Shoulder Conditions',
        tr: 'Omuz Rahatsızlıkları',
        az: 'Çiyin Problemləri'
      }
    },
    slug: 'understanding-shoulder-pain-causes-treatment',
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg',
    author: 'Op. Dr. Gürkan Eryanılmaz'
  },
  {
    id: '2',
    title: {
      en: 'Knee Replacement Surgery: What to Expect',
      tr: 'Diz Protezi Ameliyatı: Ne Beklemeli',
      az: 'Diz Protezi Əməliyyatı: Nə Gözləmək Lazımdır'
    },
    excerpt: {
      en: 'A comprehensive guide to knee replacement surgery, from preparation to recovery, based on over 10,000 successful procedures.',
      tr: '10.000\'den fazla başarılı prosedüre dayanan, hazırlıktan iyileşmeye kadar diz protezi ameliyatının kapsamlı rehberi.',
      az: '10.000-dən çox uğurlu prosedura əsaslanan, hazırlıqdan sağalmaya qədər diz protezi əməliyyatının hərtərəfli bələdçisi.'
    },
    content: {
      en: 'Knee replacement surgery has become one of the most successful procedures in orthopedic surgery. With proper preparation and post-operative care, patients can expect excellent outcomes...',
      tr: 'Diz protezi ameliyatı ortopedik cerrahideki en başarılı prosedürlerden biri haline gelmiştir. Uygun hazırlık ve ameliyat sonrası bakımla hastalar mükemmel sonuçlar bekleyebilir...',
      az: 'Diz protezi əməliyyatı ortopedik cərrahiyyədə ən uğurlu prosedurlardan biri olmuşdur. Uyğun hazırlıq və əməliyyatdan sonrakı qayğı ilə xəstələr əla nəticələr gözləyə bilərlər...'
    },
    date: '2024-12-10',
    category: {
      name: {
        en: 'Knee Problems',
        tr: 'Diz Problemleri',
        az: 'Diz Problemləri'
      }
    },
    slug: 'knee-replacement-surgery-what-to-expect',
    image: 'https://images.pexels.com/photos/7659726/pexels-photo-7659726.jpeg',
    author: 'Op. Dr. Gürkan Eryanılmaz'
  },
  {
    id: '3',
    title: {
      en: 'Pediatric Hip Dysplasia: Early Detection and Treatment',
      tr: 'Pediatrik Kalça Displazisi: Erken Teşhis ve Tedavi',
      az: 'Pediatrik Kalça Displaziyası: Erkən Aşkarlama və Müalicə'
    },
    excerpt: {
      en: 'Learn about developmental hip dysplasia in children, its early signs, and the importance of timely intervention.',
      tr: 'Çocuklarda gelişimsel kalça displazisi, erken belirtileri ve zamanında müdahalenin önemi hakkında bilgi edinin.',
      az: 'Uşaqlarda inkişaf kalça displaziyası, onun erkən əlamətləri və vaxtında müdaxilənin əhəmiyyəti haqqında məlumat əldə edin.'
    },
    content: {
      en: 'Developmental hip dysplasia (DDH) is one of the most common orthopedic conditions in newborns and infants. Early detection and treatment are crucial for optimal outcomes...',
      tr: 'Gelişimsel kalça displazisi (GKD), yenidoğanlarda ve bebeklerde en yaygın ortopedik durumlardan biridir. Optimal sonuçlar için erken teşhis ve tedavi çok önemlidir...',
      az: 'İnkişaf kalça displaziyası (İKD) yenidoğulmuşlarda və körpələrdə ən geniş yayılmış ortopedik vəziyyətlərdən biridir. Optimal nəticələr üçün erkən aşkarlama və müalicə çox vacibdir...'
    },
    date: '2024-12-05',
    category: {
      name: {
        en: 'Pediatric Orthopedics',
        tr: 'Pediatrik Ortopedi',
        az: 'Pediatrik Ortopediya'
      }
    },
    slug: 'pediatric-hip-dysplasia-early-detection-treatment',
    image: 'https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg',
    author: 'Op. Dr. Gürkan Eryanılmaz'
  },
  {
    id: '4',
    title: {
      en: 'Clubfoot Treatment: The Ponseti Method Success Story',
      tr: 'Çarpık Ayak Tedavisi: Ponseti Yöntemi Başarı Hikayesi',
      az: 'Əyripəncə Müalicəsi: Ponseti Metodunun Uğur Hekayəsi'
    },
    excerpt: {
      en: 'Discover how the Ponseti method has revolutionized clubfoot treatment, with insights from 350+ successful corrections.',
      tr: 'Ponseti yönteminin çarpık ayak tedavisini nasıl devrim niteliğinde değiştirdiğini, 350+ başarılı düzeltmeden elde edilen görüşlerle keşfedin.',
      az: 'Ponseti metodunun əyripəncə müalicəsini necə inqilab etdiyini, 350+ uğurlu düzəltmədən əldə edilən təcrübələrlə kəşf edin.'
    },
    content: {
      en: 'The Ponseti method has transformed the treatment of clubfoot from a surgical procedure to a non-surgical approach with excellent outcomes...',
      tr: 'Ponseti yöntemi çarpık ayak tedavisini cerrahi bir prosedürden mükemmel sonuçlara sahip cerrahi olmayan bir yaklaşıma dönüştürmüştür...',
      az: 'Ponseti metodu əyripəncə müalicəsini cərrahi prosedurdan əla nəticələrə malik qeyri-cərrahi yanaşmaya çevirmişdir...'
    },
    date: '2024-11-28',
    category: {
      name: {
        en: 'Pediatric Orthopedics',
        tr: 'Pediatrik Ortopedi',
        az: 'Pediatrik Ortopediya'
      }
    },
    slug: 'clubfoot-treatment-ponseti-method-success',
    image: 'https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg',
    author: 'Op. Dr. Gürkan Eryanılmaz'
  },
  {
    id: '5',
    title: {
      en: 'Sports Injuries: Prevention and Modern Treatment Approaches',
      tr: 'Spor Yaralanmaları: Önleme ve Modern Tedavi Yaklaşımları',
      az: 'İdman Zədələri: Qarşısının Alınması və Müasir Müalicə Yanaşmaları'
    },
    excerpt: {
      en: 'Learn about common sports injuries, prevention strategies, and the latest treatment methods for athletes.',
      tr: 'Yaygın spor yaralanmaları, önleme stratejileri ve sporcular için en son tedavi yöntemleri hakkında bilgi edinin.',
      az: 'Geniş yayılmış idman zədələri, qarşısının alınması strategiyaları və idmançılar üçün ən son müalicə metodları haqqında məlumat əldə edin.'
    },
    content: {
      en: 'Sports injuries are an unfortunate reality for athletes at all levels. Understanding prevention strategies and modern treatment options can help athletes return to their sport safely...',
      tr: 'Spor yaralanmaları her seviyedeki sporcular için talihsiz bir gerçektir. Önleme stratejilerini ve modern tedavi seçeneklerini anlamak, sporcuların sporlarına güvenli bir şekilde dönmelerine yardımcı olabilir...',
      az: 'İdman zədələri bütün səviyyələrdəki idmançılar üçün təəssüf doğuran bir reallıqdır. Qarşısının alınması strategiyalarını və müasir müalicə seçimlərini anlamaq idmançılara öz idman növlərinə təhlükəsiz şəkildə qayıtmaqda kömək edə bilər...'
    },
    date: '2024-11-20',
    category: {
      name: {
        en: 'Sports Injuries',
        tr: 'Spor Yaralanmaları',
        az: 'İdman Zədələri'
      }
    },
    slug: 'sports-injuries-prevention-modern-treatment',
    image: 'https://images.pexels.com/photos/7659725/pexels-photo-7659725.jpeg',
    author: 'Op. Dr. Gürkan Eryanılmaz'
  },
  {
    id: '6',
    title: {
      en: 'Arthroscopic Surgery: Minimally Invasive Solutions',
      tr: 'Artroskopik Cerrahi: Minimal İnvaziv Çözümler',
      az: 'Artroskopik Cərrahiyyə: Minimal İnvaziv Həllər'
    },
    excerpt: {
      en: 'Explore the benefits of arthroscopic surgery and how minimally invasive techniques are changing orthopedic treatment.',
      tr: 'Artroskopik cerrahinin faydalarını ve minimal invaziv tekniklerin ortopedik tedaviyi nasıl değiştirdiğini keşfedin.',
      az: 'Artroskopik cərrahiyyənin faydalarını və minimal invaziv texnikaların ortopedik müalicəni necə dəyişdirdiyini kəşf edin.'
    },
    content: {
      en: 'Arthroscopic surgery has revolutionized orthopedic treatment by offering patients less invasive options with faster recovery times...',
      tr: 'Artroskopik cerrahi, hastalara daha hızlı iyileşme süreleri ile daha az invaziv seçenekler sunarak ortopedik tedavide devrim yaratmıştır...',
      az: 'Artroskopik cərrahiyyə xəstələrə daha sürətli sağalma müddətləri ilə daha az invaziv seçimlər təklif edərək ortopedik müalicədə inqilab yaratmışdır...'
    },
    date: '2024-11-15',
    category: {
      name: {
        en: 'Sports Injuries',
        tr: 'Spor Yaralanmaları',
        az: 'İdman Zədələri'
      }
    },
    slug: 'arthroscopic-surgery-minimally-invasive-solutions',
    image: 'https://images.pexels.com/photos/7659727/pexels-photo-7659727.jpeg',
    author: 'Op. Dr. Gürkan Eryanılmaz'
  }
];

// Helper functions
export const getBlogPostsByCategory = (categoryId: string) => {
  return blogPosts.filter(post => {
    const categoryName = post.category.name.en.toLowerCase();
    switch (categoryId) {
      case 'shoulder':
        return categoryName.includes('shoulder');
      case 'knee':
        return categoryName.includes('knee');
      case 'hip':
        return categoryName.includes('hip');
      case 'pediatric':
        return categoryName.includes('pediatric');
      case 'sports':
        return categoryName.includes('sports') || categoryName.includes('injuries');
      case 'trauma':
        return categoryName.includes('trauma') || categoryName.includes('fractures');
      default:
        return false;
    }
  });
};

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentBlogPosts = (limit: number = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};