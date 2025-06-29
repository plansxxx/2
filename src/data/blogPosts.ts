export interface BlogPost {
  id: number;
  slug: string;
  title: {
    az: string;
    en: string;
    tr: string;
  };
  excerpt: {
    az: string;
    en: string;
    tr: string;
  };
  content: {
    az: string;
    en: string;
    tr: string;
  };
  category: {
    id: number;
    name: {
      az: string;
      en: string;
      tr: string;
    };
  };
  image: string;
  author: string;
  date: string;
  readTime: number;
}

export const categories = [
  {
    id: 1,
    name: {
      az: "Ortopediya",
      en: "Orthopedics",
      tr: "Ortopedi"
    }
  },
  {
    id: 2,
    name: {
      az: "Travmatologiya",
      en: "Traumatology",
      tr: "Travmatoloji"
    }
  },
  {
    id: 3,
    name: {
      az: "İdman Təbabəti",
      en: "Sports Medicine",
      tr: "Spor Hekimliği"
    }
  },
  {
    id: 4,
    name: {
      az: "Pediatrik Ortopediya",
      en: "Pediatric Orthopedics",
      tr: "Pediatrik Ortopedi"
    }
  },
  {
    id: 5,
    name: {
      az: "Sağlam Həyat",
      en: "Healthy Living",
      tr: "Sağlıklı Yaşam"
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "understanding-shoulder-pain-causes-treatment",
    title: {
      az: "Çiyin Ağrısını Anlamaq: Səbəbləri və Müalicə Seçimləri",
      en: "Understanding Shoulder Pain: Causes and Treatment Options",
      tr: "Omuz Ağrısını Anlamak: Nedenleri ve Tedavi Seçenekleri"
    },
    excerpt: {
      az: "Çiyin ağrısı ən geniş yayılmış ortopedik şikayətlərdən biridir. Müxtəlif səbəbləri və müasir müalicə yanaşmalarını öğrenin.",
      en: "Shoulder pain is one of the most common orthopedic complaints. Learn about the various causes and modern treatment approaches.",
      tr: "Omuz ağrısı en yaygın ortopedik şikayetlerden biridir. Çeşitli nedenleri ve modern tedavi yaklaşımlarını öğrenin."
    },
    content: {
      az: "Çiyin insan bədənindəki ən hərəkətli oynaqlardan biridir və bu da onu zədələnməyə ən həssas oynaqlardan biri edir. Çiyin anatomiyasını və ağrının ümumi səbəblərini anlamaq xəstələrə müalicələri haqqında məlumatlı qərarlar verməkdə kömək edə bilər.\n\n## Çiyin Ağrısının Səbəbləri\n\n### Rotator Manşet Zədələri\nRotator manşet dörd əzələdən ibarətdir və çiyinin stabilləşdirilməsinə kömək edir. Bu əzələlərin zədələnməsi ağrı və hərəkət məhdudiyyətinə səbəb ola bilər.\n\n### Çiyin Sıxılması\nÇiyin sıxılması çiyin sümüyü altında olan toxumaların sıxılması nəticəsində yaranır və xüsusilə baş üstü hərəkətlərdə ağrıya səbəb olur.\n\n### Donmuş Çiyin\nAdhesiv kapsulit və ya donmuş çiyin, çiyin oynağının kapsulunun iltihab və sərtləşməsi nəticəsində yaranır.\n\n## Müalicə Seçimləri\n\n### Konservativ Müalicə\n- Fiziki terapiya və reabilitasiya\n- Anti-iltihab dərmanları\n- Kortikosteroid inyeksiyaları\n- Fəaliyyət modifikasiyası\n\n### Cərrahi Müalicə\n- Artroskopik rotator manşet təmiri\n- Çiyin stabilizasyon prosedurları\n- Çiyin əvəzlənməsi cərrahiyyəsi\n\nDr. Gürkan Eryanılmaz həm artroskopik həm də açıq çiyin cərrahiyyələrində uzmanlaşmış olup, daha sürətli iyileşme və optimal nəticələr təmin etmək üçün ən son minimal invaziv texnikaları istifadə edir.",
      en: "The shoulder is one of the most mobile joints in the human body, which also makes it one of the most vulnerable to injury. Understanding the anatomy and common causes of shoulder pain can help patients make informed decisions about their treatment.\n\n## Causes of Shoulder Pain\n\n### Rotator Cuff Injuries\nThe rotator cuff consists of four muscles that help stabilize the shoulder. Injury to these muscles can cause pain and limited mobility.\n\n### Shoulder Impingement\nShoulder impingement occurs when tissues under the shoulder bone become compressed, causing pain especially during overhead movements.\n\n### Frozen Shoulder\nAdhesive capsulitis or frozen shoulder occurs when the shoulder joint capsule becomes inflamed and stiff.\n\n## Treatment Options\n\n### Conservative Treatment\n- Physical therapy and rehabilitation\n- Anti-inflammatory medications\n- Corticosteroid injections\n- Activity modification\n\n### Surgical Treatment\n- Arthroscopic rotator cuff repair\n- Shoulder stabilization procedures\n- Shoulder replacement surgery\n\nDr. Gürkan Eryanılmaz specializes in both arthroscopic and open shoulder surgeries, utilizing the latest minimally invasive techniques to ensure faster recovery and optimal outcomes.",
      tr: "Omuz, insan vücudundaki en hareketli eklemlerden biridir ve bu da onu yaralanmaya en açık eklemlerden biri yapar. Omuz anatomisini ve yaygın ağrı nedenlerini anlamak, hastaların tedavileri hakkında bilinçli kararlar vermelerine yardımcı olabilir.\n\n## Omuz Ağrısının Nedenleri\n\n### Rotator Manşet Yaralanmaları\nRotator manşet dört kastan oluşur ve omzun stabilize edilmesine yardımcı olur. Bu kasların yaralanması ağrı ve hareket kısıtlılığına neden olabilir.\n\n### Omuz Sıkışması\nOmuz sıkışması, omuz kemiği altındaki dokuların sıkışması sonucu oluşur ve özellikle baş üstü hareketlerde ağrıya neden olur.\n\n### Donuk Omuz\nAdeziv kapsulit veya donuk omuz, omuz eklem kapsülünün iltihaplanması ve sertleşmesi sonucu oluşur.\n\n## Tedavi Seçenekleri\n\n### Konservatif Tedavi\n- Fizik tedavi ve rehabilitasyon\n- Anti-inflamatuar ilaçlar\n- Kortikosteroid enjeksiyonları\n- Aktivite modifikasyonu\n\n### Cerrahi Tedavi\n- Artroskopik rotator manşet tamiri\n- Omuz stabilizasyon prosedürleri\n- Omuz replasmanı cerrahisi\n\nDr. Gürkan Eryanılmaz hem artroskopik hem de açık omuz cerrahilerinde uzmanlaşmış olup, daha hızlı iyileşme ve optimal sonuçlar sağlamak için en son minimal invaziv teknikleri kullanmaktadır."
    },
    category: categories[0],
    image: "https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-12-15",
    readTime: 6
  },
  {
    id: 2,
    slug: "knee-replacement-surgery-what-to-expect",
    title: {
      az: "Diz Protezi Əməliyyatı: Nə Gözləmək Lazımdır",
      en: "Knee Replacement Surgery: What to Expect",
      tr: "Diz Protezi Ameliyatı: Ne Beklemeli"
    },
    excerpt: {
      az: "10.000-dən çox uğurlu prosedura əsaslanan, hazırlıqdan sağalmaya qədər diz protezi əməliyyatının hərtərəfli bələdçisi.",
      en: "A comprehensive guide to knee replacement surgery, from preparation to recovery, based on over 10,000 successful procedures.",
      tr: "10.000'den fazla başarılı prosedüre dayanan, hazırlıktan iyileşmeye kadar diz protezi ameliyatının kapsamlı rehberi."
    },
    content: {
      az: "Diz protezi əməliyyatı ortopedik cərrahiyyədə ən uğurlu prosedurlardan biri olmuşdur. Uyğun hazırlıq və əməliyyatdan sonrakı qayğı ilə xəstələr əla nəticələr gözləyə bilərlər.\n\n## Diz Protezi Nədir?\n\nDiz protezi, zədələnmiş diz oynağının metal və plastik komponentlərlə əvəz edildiyi bir cərrahi prosedurdur. Bu əməliyyat ağrını azaltmaq və funksiyasını yaxşılaşdırmaq üçün aparılır.\n\n## Əməliyyata Hazırlıq\n\n### Tibbi Qiymətləndirmə\n- Tam tibbi tarix və fiziki müayinə\n- Qan testləri və digər laborator müayinələri\n- Röntgen və MRI görüntüləmə\n- Anesteziya konsultasiyası\n\n### Ev Hazırlığı\n- Evdə təhlükəsizlik tədbirləri\n- Yardımçı avadanlıqların təmin edilməsi\n- Qida və dərman hazırlığı\n\n## Əməliyyat Prosesi\n\nDiz protezi əməliyyatı adətən 1-2 saat çəkir və ümumi anesteziya altında aparılır. Cərrah zədələnmiş qığırdağı və sümüyü çıxarır və süni komponentləri yerləşdirir.\n\n## Sağalma Prosesi\n\n### Xəstəxanada\n- 1-3 gün xəstəxanada qalma\n- Ağrı idarəetməsi\n- Erkən mobilizasiya\n- Fiziki terapiyaya başlama\n\n### Evdə Sağalma\n- 6-12 həftə tam sağalma\n- Fiziki terapiya proqramı\n- Tədricən fəaliyyət artırılması\n- Müntəzəm nəzarət vizitləri\n\nDr. Eryanılmaz 10.000-dən çox diz protezi əməliyyatı gerçekleştirmiş və bölgədəki ən təcrübəli diz cərrahlarından biridir.",
      en: "Knee replacement surgery has become one of the most successful procedures in orthopedic surgery. With proper preparation and post-operative care, patients can expect excellent outcomes.\n\n## What is Knee Replacement?\n\nKnee replacement is a surgical procedure where the damaged knee joint is replaced with metal and plastic components. This surgery is performed to reduce pain and improve function.\n\n## Preparation for Surgery\n\n### Medical Evaluation\n- Complete medical history and physical examination\n- Blood tests and other laboratory studies\n- X-ray and MRI imaging\n- Anesthesia consultation\n\n### Home Preparation\n- Home safety modifications\n- Arranging assistive equipment\n- Meal and medication preparation\n\n## The Surgical Process\n\nKnee replacement surgery typically takes 1-2 hours and is performed under general anesthesia. The surgeon removes damaged cartilage and bone and places artificial components.\n\n## Recovery Process\n\n### In Hospital\n- 1-3 day hospital stay\n- Pain management\n- Early mobilization\n- Beginning physical therapy\n\n### Home Recovery\n- 6-12 weeks full recovery\n- Physical therapy program\n- Gradual activity increase\n- Regular follow-up visits\n\nDr. Eryanılmaz has performed over 10,000 knee replacement surgeries and is one of the most experienced knee surgeons in the region.",
      tr: "Diz protezi ameliyatı ortopedik cerrahideki en başarılı prosedürlerden biri haline gelmiştir. Uygun hazırlık ve ameliyat sonrası bakımla hastalar mükemmel sonuçlar bekleyebilir.\n\n## Diz Protezi Nedir?\n\nDiz protezi, hasarlı diz ekleminin metal ve plastik komponentlerle değiştirildiği bir cerrahi prosedürdür. Bu ameliyat ağrıyı azaltmak ve fonksiyonu iyileştirmek için yapılır.\n\n## Ameliyata Hazırlık\n\n### Tıbbi Değerlendirme\n- Tam tıbbi geçmiş ve fizik muayene\n- Kan testleri ve diğer laboratuvar çalışmaları\n- Röntgen ve MRI görüntüleme\n- Anestezi konsültasyonu\n\n### Ev Hazırlığı\n- Evde güvenlik modifikasyonları\n- Yardımcı ekipman temini\n- Yemek ve ilaç hazırlığı\n\n## Cerrahi Süreç\n\nDiz protezi ameliyatı genellikle 1-2 saat sürer ve genel anestezi altında yapılır. Cerrah hasarlı kıkırdağı ve kemiği çıkarır ve yapay komponentleri yerleştirir.\n\n## İyileşme Süreci\n\n### Hastanede\n- 1-3 gün hastane kalışı\n- Ağrı yönetimi\n- Erken mobilizasyon\n- Fizik tedaviye başlama\n\n### Evde İyileşme\n- 6-12 hafta tam iyileşme\n- Fizik tedavi programı\n- Kademeli aktivite artışı\n- Düzenli kontrol ziyaretleri\n\nDr. Eryanılmaz 10.000'den fazla diz protezi ameliyatı gerçekleştirmiş olup, bölgedeki en deneyimli diz cerrahlarından biridir."
    },
    category: categories[0],
    image: "https://images.pexels.com/photos/7659726/pexels-photo-7659726.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-12-10",
    readTime: 8
  },
  {
    id: 3,
    slug: "pediatric-hip-dysplasia-early-detection-treatment",
    title: {
      az: "Pediatrik Kalça Displaziyası: Erkən Aşkarlama və Müalicə",
      en: "Pediatric Hip Dysplasia: Early Detection and Treatment",
      tr: "Pediatrik Kalça Displazisi: Erken Teşhis ve Tedavi"
    },
    excerpt: {
      az: "Uşaqlarda inkişaf kalça displaziyası, onun erkən əlamətləri və vaxtında müdaxilənin əhəmiyyəti haqqında məlumat əldə edin.",
      en: "Learn about developmental hip dysplasia in children, its early signs, and the importance of timely intervention.",
      tr: "Çocuklarda gelişimsel kalça displazisi, erken belirtileri ve zamanında müdahalenin önemi hakkında bilgi edinin."
    },
    content: {
      az: "İnkişaf kalça displaziyası (İKD) yenidoğulmuşlarda və körpələrdə ən geniş yayılmış ortopedik vəziyyətlərdən biridir. Optimal nəticələr üçün erkən aşkarlama və müalicə çox vacibdir.\n\n## İKD Nədir?\n\nİnkişaf kalça displaziyası kalça oynağının düzgün formalaşmaması ilə xarakterizə olunan bir vəziyyətdir. Bu vəziyyətdə kalça sümüyünün başı (femur başı) kalça çuxurunda (asetabulum) düzgün yerləşmir.\n\n## Risk Faktorları\n\n### Genetik Faktorlar\n- Ailə tarixində İKD\n- Qız uşaqlarında daha çox rast gəlinir\n- İlk doğulan uşaqlarda risk artır\n\n### Çevre Faktorları\n- Breech (ters) doğum\n- Oligohidramnios (az amniotik maye)\n- Sıx swaddling (bükülmə)\n\n## Erkən Əlamətlər\n\n### Fiziki Müayinə Əlamətləri\n- Barlow və Ortolani testləri\n- Asimmetrik dəri qırışları\n- Ayaq uzunluğu fərqi\n- Məhdud kalça abduction\n\n### Görüntüləmə\n- Ultrasonoqrafiya (6 aya qədər)\n- Röntgen (6 aydan sonra)\n\n## Müalicə Seçimləri\n\n### Konservativ Müalicə\n- Pavlik harness (0-6 ay)\n- Spica cast (6-18 ay)\n- Abduction brace\n\n### Cərrahi Müalicə\n- Açıq reduksiya\n- Osteotomiya\n- Asetabular rekonstruksiya\n\nDr. Eryanılmaz 500-dən çox pediatrik kalça cərrahiyyəsi gerçekleştirmiş və pediatrik ortopediyada geniş təcrübəyə malikdir.",
      en: "Developmental hip dysplasia (DDH) is one of the most common orthopedic conditions in newborns and infants. Early detection and treatment are crucial for optimal outcomes.\n\n## What is DDH?\n\nDevelopmental hip dysplasia is a condition characterized by improper formation of the hip joint. In this condition, the head of the thigh bone (femoral head) does not sit properly in the hip socket (acetabulum).\n\n## Risk Factors\n\n### Genetic Factors\n- Family history of DDH\n- More common in girls\n- Increased risk in firstborn children\n\n### Environmental Factors\n- Breech delivery\n- Oligohydramnios (low amniotic fluid)\n- Tight swaddling\n\n## Early Signs\n\n### Physical Examination Signs\n- Barlow and Ortolani tests\n- Asymmetric skin folds\n- Leg length difference\n- Limited hip abduction\n\n### Imaging\n- Ultrasonography (up to 6 months)\n- X-ray (after 6 months)\n\n## Treatment Options\n\n### Conservative Treatment\n- Pavlik harness (0-6 months)\n- Spica cast (6-18 months)\n- Abduction brace\n\n### Surgical Treatment\n- Open reduction\n- Osteotomy\n- Acetabular reconstruction\n\nDr. Eryanılmaz has performed over 500 pediatric hip surgeries and has extensive experience in pediatric orthopedics.",
      tr: "Gelişimsel kalça displazisi (GKD), yenidoğanlarda ve bebeklerde en yaygın ortopedik durumlardan biridir. Optimal sonuçlar için erken teşhis ve tedavi çok önemlidir.\n\n## GKD Nedir?\n\nGelişimsel kalça displazisi, kalça ekleminin uygun şekilde oluşmaması ile karakterize edilen bir durumdur. Bu durumda uyluk kemiğinin başı (femur başı) kalça çukurunda (asetabulum) düzgün oturmaz.\n\n## Risk Faktörleri\n\n### Genetik Faktörler\n- Ailede GKD öyküsü\n- Kız çocuklarında daha sık\n- İlk doğan çocuklarda risk artışı\n\n### Çevresel Faktörler\n- Makat doğum\n- Oligohidramnios (az amniyotik sıvı)\n- Sıkı kundaklama\n\n## Erken Belirtiler\n\n### Fizik Muayene Bulguları\n- Barlow ve Ortolani testleri\n- Asimetrik cilt kıvrımları\n- Bacak uzunluğu farkı\n- Sınırlı kalça abduksiyonu\n\n### Görüntüleme\n- Ultrasonografi (6 aya kadar)\n- Röntgen (6 ay sonrası)\n\n## Tedavi Seçenekleri\n\n### Konservatif Tedavi\n- Pavlik koşum takımı (0-6 ay)\n- Spica alçı (6-18 ay)\n- Abduksiyon breysi\n\n### Cerrahi Tedavi\n- Açık redüksiyon\n- Osteotomi\n- Asetabular rekonstrüksiyon\n\nDr. Eryanılmaz 500'den fazla pediatrik kalça cerrahisi gerçekleştirmiş ve pediatrik ortopedide geniş deneyime sahiptir."
    },
    category: categories[3],
    image: "https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-12-05",
    readTime: 7
  },
  {
    id: 4,
    slug: "clubfoot-treatment-ponseti-method-success",
    title: {
      az: "Əyripəncə Müalicəsi: Ponseti Metodunun Uğur Hekayəsi",
      en: "Clubfoot Treatment: The Ponseti Method Success Story",
      tr: "Çarpık Ayak Tedavisi: Ponseti Yöntemi Başarı Hikayesi"
    },
    excerpt: {
      az: "Ponseti metodunun əyripəncə müalicəsini necə inqilab etdiyini, 350+ uğurlu düzəltmədən əldə edilən təcrübələrlə kəşf edin.",
      en: "Discover how the Ponseti method has revolutionized clubfoot treatment, with insights from 350+ successful corrections.",
      tr: "Ponseti yönteminin çarpık ayak tedavisini nasıl devrim niteliğinde değiştirdiğini, 350+ başarılı düzeltmeden elde edilen görüşlerle keşfedin."
    },
    content: {
      az: "Ponseti metodu əyripəncə müalicəsini cərrahi prosedurdan əla nəticələrə malik qeyri-cərrahi yanaşmaya çevirmişdir.\n\n## Əyripəncə Nədir?\n\nƏyripəncə (kongenital talipes equinovarus) yenidoğulmuşlarda ayağın və topuğun anormal vəziyyətdə olduğu anadangəlmə bir deformasiyadır. Bu vəziyyətdə ayaq içəriyə və aşağıya doğru bükülür.\n\n## Ponseti Metodu\n\nPonseti metodu Dr. Ignacio Ponseti tərəfindən inkişaf etdirilmiş və dünyada qəbul edilmiş standart müalicə metodudur.\n\n### Müalicə Mərhələləri\n\n#### 1. Gips Mərhələsi (0-2 ay)\n- Həftəlik gips dəyişikliyi\n- Tədricən düzəltmə\n- 5-7 gips seansı\n\n#### 2. Tenotomiya (2-3 ay)\n- Axil tendonunun kəsilməsi\n- Lokal anesteziya altında\n- Ambulatoriya proseduru\n\n#### 3. Brace Mərhələsi (3 ay - 4 yaş)\n- Denis Browne splinti\n- İlk 3 ay 23 saat/gün\n- Sonra yalnız gecələr\n\n## Uğur Nəticələri\n\nDr. Eryanılmaz 350+ əyripəncə halını Ponseti metodu ilə müalicə etmiş və 95% uğur nisbəti əldə etmişdir.\n\n### Faydalar\n- Qeyri-cərrahi yanaşma\n- Yüksək uğur nisbəti\n- Az komplikasiya\n- Normal ayaq funksiyası\n- Uzunmüddətli yaxşı nəticələr\n\n## Ailələr üçün Məsləhətlər\n\n### Brace İstifadəsi\n- Düzenli istifadə çox vacibdir\n- Dəri qayğısı\n- Müntəzəm nəzarət\n\n### Uzunmüddətli İzləmə\n- 18 yaşa qədər nəzarət\n- Erkən müdaxilə\n- Fiziki aktivitə təşviqi\n\nPonseti metodu əyripəncə müalicəsində qızıl standartdır və düzgün tətbiq edildikdə əla nəticələr verir.",
      en: "The Ponseti method has transformed clubfoot treatment from a surgical procedure to a non-surgical approach with excellent outcomes.\n\n## What is Clubfoot?\n\nClubfoot (congenital talipes equinovarus) is a congenital deformity where the foot and ankle are in an abnormal position in newborns. In this condition, the foot is turned inward and downward.\n\n## The Ponseti Method\n\nThe Ponseti method was developed by Dr. Ignacio Ponseti and is the globally accepted standard treatment method.\n\n### Treatment Phases\n\n#### 1. Casting Phase (0-2 months)\n- Weekly cast changes\n- Gradual correction\n- 5-7 casting sessions\n\n#### 2. Tenotomy (2-3 months)\n- Achilles tendon release\n- Under local anesthesia\n- Outpatient procedure\n\n#### 3. Bracing Phase (3 months - 4 years)\n- Denis Browne splint\n- First 3 months 23 hours/day\n- Then nights only\n\n## Success Results\n\nDr. Eryanılmaz has treated 350+ clubfoot cases with the Ponseti method and achieved a 95% success rate.\n\n### Benefits\n- Non-surgical approach\n- High success rate\n- Few complications\n- Normal foot function\n- Long-term good results\n\n## Tips for Families\n\n### Brace Usage\n- Regular use is crucial\n- Skin care\n- Regular monitoring\n\n### Long-term Follow-up\n- Monitoring until age 18\n- Early intervention\n- Encouraging physical activity\n\nThe Ponseti method is the gold standard in clubfoot treatment and provides excellent results when properly applied.",
      tr: "Ponseti yöntemi çarpık ayak tedavisini cerrahi bir prosedürden mükemmel sonuçlara sahip cerrahi olmayan bir yaklaşıma dönüştürmüştür.\n\n## Çarpık Ayak Nedir?\n\nÇarpık ayak (konjenital talipes ekinovarus), yenidoğanlarda ayak ve ayak bileğinin anormal pozisyonda olduğu doğuştan bir deformitedir. Bu durumda ayak içe ve aşağıya doğru dönüktür.\n\n## Ponseti Yöntemi\n\nPonseti yöntemi Dr. Ignacio Ponseti tarafından geliştirilmiş ve dünyada kabul görmüş standart tedavi yöntemidir.\n\n### Tedavi Aşamaları\n\n#### 1. Alçılama Aşaması (0-2 ay)\n- Haftalık alçı değişimi\n- Kademeli düzeltme\n- 5-7 alçılama seansı\n\n#### 2. Tenotomi (2-3 ay)\n- Aşil tendon gevşetmesi\n- Lokal anestezi altında\n- Ayaktan prosedür\n\n#### 3. Atelleme Aşaması (3 ay - 4 yaş)\n- Denis Browne splinti\n- İlk 3 ay 23 saat/gün\n- Sonra sadece geceler\n\n## Başarı Sonuçları\n\nDr. Eryanılmaz 350+ çarpık ayak vakasını Ponseti yöntemi ile tedavi etmiş ve %95 başarı oranı elde etmiştir.\n\n### Faydalar\n- Cerrahi olmayan yaklaşım\n- Yüksek başarı oranı\n- Az komplikasyon\n- Normal ayak fonksiyonu\n- Uzun dönem iyi sonuçlar\n\n## Aileler için Öneriler\n\n### Atel Kullanımı\n- Düzenli kullanım çok önemli\n- Cilt bakımı\n- Düzenli kontrol\n\n### Uzun Dönem Takip\n- 18 yaşına kadar takip\n- Erken müdahale\n- Fiziksel aktivite teşviki\n\nPonseti yöntemi çarpık ayak tedavisinde altın standarttır ve doğru uygulandığında mükemmel sonuçlar verir."
    },
    category: categories[3],
    image: "https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-28",
    readTime: 6
  },
  {
    id: 5,
    slug: "sports-injuries-prevention-modern-treatment",
    title: {
      az: "İdman Zədələri: Qarşısının Alınması və Müasir Müalicə Yanaşmaları",
      en: "Sports Injuries: Prevention and Modern Treatment Approaches",
      tr: "Spor Yaralanmaları: Önleme ve Modern Tedavi Yaklaşımları"
    },
    excerpt: {
      az: "Geniş yayılmış idman zədələri, qarşısının alınması strategiyaları və idmançılar üçün ən son müalicə metodları haqqında məlumat əldə edin.",
      en: "Learn about common sports injuries, prevention strategies, and the latest treatment methods for athletes.",
      tr: "Yaygın spor yaralanmaları, önleme stratejileri ve sporcular için en son tedavi yöntemleri hakkında bilgi edinin."
    },
    content: {
      az: "İdman zədələri bütün səviyyələrdəki idmançılar üçün təəssüf doğuran bir reallıqdır. Qarşısının alınması strategiyalarını və müasir müalicə seçimlərini anlamaq idmançılara öz idman növlərinə təhlükəsiz şəkildə qayıtmaqda kömək edə bilər.\n\n## Ümumi İdman Zədələri\n\n### ACL Zədələri\nÖn çarpaz bağ zədələri xüsusilə futbol, basketbol və xizək idmanlarında yaygındır.\n\n### Menisküs Cırılması\nDiz oynağında ani dönmələr və ya təmas zamanı baş verir.\n\n### Rotator Manşet Zədələri\nÇiyin idmanlarında və baş üstü fəaliyyətlərdə yaygındır.\n\n### Ayaq Bileği Burkulması\nBütün idman növlərində ən çox rast gəlinən zədələrdən biridir.\n\n## Qarşısının Alınması Strategiyaları\n\n### Düzgün İstiləşmə\n- 10-15 dəqiqə dinamik istiləşmə\n- İdman növünə uyğun hərəkətlər\n- Tədricən intensivlik artırılması\n\n### Gücləndirilmə Məşqləri\n- Əsas əzələ qruplarının gücləndirilməsi\n- Balans və koordinasiya məşqləri\n- Funksional hərəkət nümunələri\n\n### Düzgün Texnika\n- Peşəkar təlimat\n- Video analizi\n- Düzenli texnika yoxlanışı\n\n## Müasir Müalicə Yanaşmaları\n\n### Konservativ Müalicə\n- RICE protokolu (İstirahət, Buz, Kompressiya, Yüksəklik)\n- Fiziki terapiya\n- Progressiv yükləmə\n\n### Regenerativ Terapiya\n- PRP (Trombositlə zəngin plazma)\n- Kök hüceyrə terapiyası\n- Proloterapiya\n\n### Cərrahi Müalicə\n- Artroskopik cərrahiyyə\n- Minimal invaziv texnikalar\n- Sürətli sağalma protokolları\n\nDr. Eryanılmaz idman zədələrinin müalicəsində geniş təcrübəyə malikdir və idmançıların sürətli və təhlükəsiz şəkildə idmana qayıtmalarını təmin edir.",
      en: "Sports injuries are an unfortunate reality for athletes at all levels. Understanding prevention strategies and modern treatment options can help athletes return to their sport safely.\n\n## Common Sports Injuries\n\n### ACL Injuries\nAnterior cruciate ligament injuries are especially common in soccer, basketball, and skiing sports.\n\n### Meniscus Tears\nOccur in the knee joint during sudden turns or contact.\n\n### Rotator Cuff Injuries\nCommon in shoulder sports and overhead activities.\n\n### Ankle Sprains\nOne of the most common injuries in all sports.\n\n## Prevention Strategies\n\n### Proper Warm-up\n- 10-15 minutes of dynamic warm-up\n- Sport-specific movements\n- Gradual intensity increase\n\n### Strengthening Exercises\n- Core muscle group strengthening\n- Balance and coordination exercises\n- Functional movement patterns\n\n### Proper Technique\n- Professional instruction\n- Video analysis\n- Regular technique checks\n\n## Modern Treatment Approaches\n\n### Conservative Treatment\n- RICE protocol (Rest, Ice, Compression, Elevation)\n- Physical therapy\n- Progressive loading\n\n### Regenerative Therapy\n- PRP (Platelet-rich plasma)\n- Stem cell therapy\n- Prolotherapy\n\n### Surgical Treatment\n- Arthroscopic surgery\n- Minimally invasive techniques\n- Rapid recovery protocols\n\nDr. Eryanılmaz has extensive experience in treating sports injuries and ensures athletes return to sports quickly and safely.",
      tr: "Spor yaralanmaları her seviyedeki sporcular için talihsiz bir gerçektir. Önleme stratejilerini ve modern tedavi seçeneklerini anlamak, sporcuların sporlarına güvenli bir şekilde dönmelerine yardımcı olabilir.\n\n## Yaygın Spor Yaralanmaları\n\n### ACL Yaralanmaları\nÖn çapraz bağ yaralanmaları özellikle futbol, basketbol ve kayak sporlarında yaygındır.\n\n### Menisküs Yırtıkları\nDiz ekleminde ani dönüşler veya temas sırasında oluşur.\n\n### Rotator Manşet Yaralanmaları\nOmuz sporlarında ve baş üstü aktivitelerde yaygındır.\n\n### Ayak Bileği Burkulmalar\nTüm sporlarda en yaygın yaralanmalardan biridir.\n\n## Önleme Stratejileri\n\n### Doğru Isınma\n- 10-15 dakika dinamik ısınma\n- Spora özgü hareketler\n- Kademeli yoğunluk artışı\n\n### Güçlendirme Egzersizleri\n- Çekirdek kas gruplarının güçlendirilmesi\n- Denge ve koordinasyon egzersizleri\n- Fonksiyonel hareket kalıpları\n\n### Doğru Teknik\n- Profesyonel eğitim\n- Video analizi\n- Düzenli teknik kontrolleri\n\n## Modern Tedavi Yaklaşımları\n\n### Konservatif Tedavi\n- RICE protokolü (Dinlenme, Buz, Kompresyon, Yükseltme)\n- Fizik tedavi\n- Progresif yükleme\n\n### Rejeneratif Terapi\n- PRP (Trombositten zengin plazma)\n- Kök hücre tedavisi\n- Proloterapi\n\n### Cerrahi Tedavi\n- Artroskopik cerrahi\n- Minimal invaziv teknikler\n- Hızlı iyileşme protokolleri\n\nDr. Eryanılmaz spor yaralanmalarının tedavisinde geniş deneyime sahiptir ve sporcuların hızlı ve güvenli şekilde spora dönmelerini sağlar."
    },
    category: categories[2],
    image: "https://images.pexels.com/photos/7659725/pexels-photo-7659725.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-20",
    readTime: 7
  },
  {
    id: 6,
    slug: "arthroscopic-surgery-minimally-invasive-solutions",
    title: {
      az: "Artroskopik Cərrahiyyə: Minimal İnvaziv Həllər",
      en: "Arthroscopic Surgery: Minimally Invasive Solutions",
      tr: "Artroskopik Cerrahi: Minimal İnvaziv Çözümler"
    },
    excerpt: {
      az: "Artroskopik cərrahiyyənin faydalarını və minimal invaziv texnikaların ortopedik müalicəni necə dəyişdirdiyini kəşf edin.",
      en: "Explore the benefits of arthroscopic surgery and how minimally invasive techniques are changing orthopedic treatment.",
      tr: "Artroskopik cerrahinin faydalarını ve minimal invaziv tekniklerin ortopedik tedaviyi nasıl değiştirdiğini keşfedin."
    },
    content: {
      az: "Artroskopik cərrahiyyə xəstələrə daha sürətli sağalma müddətləri ilə daha az invaziv seçimlər təklif edərək ortopedik müalicədə inqilab yaratmışdır.\n\n## Artroskopiya Nədir?\n\nArtroskopiya kiçik kəsiklər vasitəsilə oynaq daxilinə kamera və cərrahi alətlərin daxil edildiği minimal invaziv cərrahi texnikadır.\n\n## Faydalar\n\n### Kiçik Kəsiklər\n- 5-10 mm kəsiklər\n- Minimal çapıq\n- Daha yaxşı kosmetik nəticə\n\n### Sürətli Sağalma\n- Daha az ağrı\n- Erkən mobilizasiya\n- Tez işə qayıtma\n\n### Az Komplikasiya\n- İnfeksiya riski azalır\n- Qan itkisi minimal\n- Anesteziya müddəti qısa\n\n## Tətbiq Sahələri\n\n### Diz Artroskopiyası\n- Menisküs təmiri\n- ACL rekonstruksiyası\n- Qığırdaq zədəsi müalicəsi\n- Sinovit təmizlənməsi\n\n### Çiyin Artroskopiyası\n- Rotator manşet təmiri\n- Labral təmir\n- Sıxılma sindromu müalicəsi\n- Instabilite düzəltməsi\n\n### Ayaq Bileği Artroskopiyası\n- Impingement müalicəsi\n- Qığırdaq zədəsi\n- Artrit debridement\n- Bağ zədəsi qiymətləndirilməsi\n\n## Prosedur\n\n### Əməliyyat Öncəsi\n- Tam qiymətləndirmə\n- Görüntüləmə müayinələri\n- Anesteziya planlaması\n\n### Əməliyyat\n- Portal yerləşdirilməsi\n- Diaqnostik artroskopiya\n- Terapevtik prosedurlar\n- Portal bağlanması\n\n### Əməliyyat Sonrası\n- Ağrı idarəetməsi\n- Erkən fiziki terapiya\n- Progressiv aktivite\n\nDr. Eryanılmaz 5000+ artroskopik prosedur gerçekleştirmiş və bu sahədə geniş təcrübəyə malikdir.",
      en: "Arthroscopic surgery has revolutionized orthopedic treatment by offering patients less invasive options with faster recovery times.\n\n## What is Arthroscopy?\n\nArthroscopy is a minimally invasive surgical technique where a camera and surgical instruments are inserted into the joint through small incisions.\n\n## Benefits\n\n### Small Incisions\n- 5-10 mm incisions\n- Minimal scarring\n- Better cosmetic result\n\n### Faster Recovery\n- Less pain\n- Early mobilization\n- Quick return to work\n\n### Fewer Complications\n- Reduced infection risk\n- Minimal blood loss\n- Shorter anesthesia time\n\n## Applications\n\n### Knee Arthroscopy\n- Meniscus repair\n- ACL reconstruction\n- Cartilage damage treatment\n- Synovitis cleaning\n\n### Shoulder Arthroscopy\n- Rotator cuff repair\n- Labral repair\n- Impingement syndrome treatment\n- Instability correction\n\n### Ankle Arthroscopy\n- Impingement treatment\n- Cartilage damage\n- Arthritis debridement\n- Ligament injury assessment\n\n## Procedure\n\n### Pre-operative\n- Complete evaluation\n- Imaging studies\n- Anesthesia planning\n\n### Surgery\n- Portal placement\n- Diagnostic arthroscopy\n- Therapeutic procedures\n- Portal closure\n\n### Post-operative\n- Pain management\n- Early physical therapy\n- Progressive activity\n\nDr. Eryanılmaz has performed 5000+ arthroscopic procedures and has extensive experience in this field.",
      tr: "Artroskopik cerrahi, hastalara daha hızlı iyileşme süreleri ile daha az invaziv seçenekler sunarak ortopedik tedavide devrim yaratmıştır.\n\n## Artroskopi Nedir?\n\nArtroskopi, küçük kesiler yoluyla eklem içine kamera ve cerrahi aletlerin sokulduğu minimal invaziv cerrahi tekniktir.\n\n## Faydalar\n\n### Küçük Kesiler\n- 5-10 mm kesiler\n- Minimal skar\n- Daha iyi kozmetik sonuç\n\n### Hızlı İyileşme\n- Daha az ağrı\n- Erken mobilizasyon\n- Hızlı işe dönüş\n\n### Az Komplikasyon\n- Enfeksiyon riski azalır\n- Minimal kan kaybı\n- Kısa anestezi süresi\n\n## Uygulama Alanları\n\n### Diz Artroskopisi\n- Menisküs tamiri\n- ACL rekonstrüksiyonu\n- Kıkırdak hasarı tedavisi\n- Sinovit temizleme\n\n### Omuz Artroskopisi\n- Rotator manşet tamiri\n- Labral tamir\n- Sıkışma sendromu tedavisi\n- İnstabilite düzeltmesi\n\n### Ayak Bileği Artroskopisi\n- Sıkışma tedavisi\n- Kıkırdak hasarı\n- Artrit debridman\n- Bağ hasarı değerlendirmesi\n\n## Prosedür\n\n### Ameliyat Öncesi\n- Tam değerlendirme\n- Görüntüleme çalışmaları\n- Anestezi planlaması\n\n### Ameliyat\n- Portal yerleştirme\n- Tanısal artroskopi\n- Terapötik prosedürler\n- Portal kapatma\n\n### Ameliyat Sonrası\n- Ağrı yönetimi\n- Erken fizik tedavi\n- Progresif aktivite\n\nDr. Eryanılmaz 5000+ artroskopik prosedür gerçekleştirmiş ve bu alanda geniş deneyime sahiptir."
    },
    category: categories[1],
    image: "https://images.pexels.com/photos/7659727/pexels-photo-7659727.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-15",
    readTime: 5
  }
];

// Performance optimized helper functions with memoization
const memoCache = new Map();

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  const cacheKey = `slug-${slug}`;
  if (memoCache.has(cacheKey)) {
    return memoCache.get(cacheKey);
  }
  
  const result = blogPosts.find(post => post.slug === slug);
  memoCache.set(cacheKey, result);
  return result;
};

export const getBlogPostsByCategory = (categoryId: number): BlogPost[] => {
  const cacheKey = `category-${categoryId}`;
  if (memoCache.has(cacheKey)) {
    return memoCache.get(cacheKey);
  }
  
  const result = blogPosts.filter(post => post.category.id === categoryId);
  memoCache.set(cacheKey, result);
  return result;
};

export const getRecentBlogPosts = (limit: number = 3): BlogPost[] => {
  const cacheKey = `recent-${limit}`;
  if (memoCache.has(cacheKey)) {
    return memoCache.get(cacheKey);
  }
  
  const result = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
  memoCache.set(cacheKey, result);
  return result;
};

export const searchBlogPosts = (query: string, lang: 'az' | 'en' | 'tr'): BlogPost[] => {
  const cacheKey = `search-${query}-${lang}`;
  if (memoCache.has(cacheKey)) {
    return memoCache.get(cacheKey);
  }
  
  const lowerQuery = query.toLowerCase();
  const result = blogPosts.filter(post => 
    post.title[lang].toLowerCase().includes(lowerQuery) ||
    post.excerpt[lang].toLowerCase().includes(lowerQuery) ||
    post.content[lang].toLowerCase().includes(lowerQuery)
  );
  
  memoCache.set(cacheKey, result);
  return result;
};