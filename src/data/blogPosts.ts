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
      az: "Çiyin insan bədənindəki ən hərəkətli oynaqlardan biridir və bu da onu zədələnməyə ən həssas oynaqlardan biri edir. Çiyin anatomiyasını və ağrının ümumi səbəblərini anlamaq xəstələrə müalicələri haqqında məlumatlı qərarlar verməkdə kömək edə bilər.\n\n## Çiyin Ağrısının Səbəbləri\n\n### Rotator Manşet Zədələri\nRotator manşet dörd əzələdən ibarətdir və çiyinin stabilləşdirilməsinə kömək edir. Bu əzələlərin zədələnməsi ağrı və hərəkət məhdudiyyətinə səbəb ola bilər.\n\n### Çiyin Sıxılması\nÇiyin sıxılması çiyin sümüyü altında olan toxumaların sıxılması nəticəsində yaranır və xüsusilə baş üstü hərəkətlərdə ağrıya səbəb olur.\n\n### Donmuş Çiyin\nAdhesiv kapsulit və ya donmuş çiyin, çiyin oynağının kapsulunun iltihab və sərtləşməsi nəticəsində yaranır.\n\n## Müalicə Seçimləri\n\n### Konservativ Müalicə\n- Fiziki terapiya və reabilitasiya\n- Anti-iltihab dərmanları\n- Kortikosteroid inyeksiyaları\n- Fəaliyyət modifikasiyası\n\n### Cərrahi Müalicə\n- Artroskopik rotator manşet təmiri\n- Çiyin stabilizasyon prosedurları\n- Çiyin əvəzlənməsi cərrahiyyəsi\n\nDr. Gürkan Eryanılmaz həm artroskopik həm də açıq çiyin cərrahiyyələrində uzmanlaşmış olub, daha sürətli iyileşme və optimal nəticələr təmin etmək üçün ən son minimal invaziv texnikaları istifadə edir.",
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
    slug: "elbow-conditions-tennis-golfer-elbow-treatment",
    title: {
      az: "Dirsək Vəziyyətləri: Tennis və Qolf Dirsəyi Müalicəsi",
      en: "Elbow Conditions: Tennis and Golfer's Elbow Treatment",
      tr: "Dirsek Durumları: Tenisçi ve Golfçü Dirseği Tedavisi"
    },
    excerpt: {
      az: "Dirsək ağrısı gündəlik fəaliyyətləri məhdudlaşdıra bilər. Tennis dirsəyi, qolf dirsəyi və digər dirsək vəziyyətlərinin müalicəsi haqqında öyrənin.",
      en: "Elbow pain can limit daily activities. Learn about treatment for tennis elbow, golfer's elbow, and other elbow conditions.",
      tr: "Dirsek ağrısı günlük aktiviteleri sınırlayabilir. Tenisçi dirseği, golfçü dirseği ve diğer dirsek durumlarının tedavisi hakkında öğrenin."
    },
    content: {
      az: "Dirsək problemləri həm idmançıları, həm də gündəlik fəaliyyətlər zamanı təkrarlanan hərəkətlər edən insanları təsir edə bilər. Bu məqalədə ən çox rast gəlinən dirsək vəziyyətləri və onların müalicə üsulları haqqında danışacağıq.\n\n## Tennis Dirsəyi (Lateral Epikondilit)\n\nTennis dirsəyi dirsəyin xarici tərəfində ağrı və həssaslıq ilə xarakterizə olunan bir vəziyyətdir. Bu vəziyyət yalnız tennis oynayanları deyil, həm də təkrarlanan qol hərəkətləri edən hər kəsi təsir edə bilər.\n\n### Səbəbləri\n- Təkrarlanan qol və bilək hərəkətləri\n- Düzgün olmayan texnika\n- Yaşla əlaqədar tendon zəifləməsi\n- Həddindən artıq istifadə\n\n### Simptomlar\n- Dirsəyin xarici tərəfində ağrı\n- Tutma gücündə zəiflik\n- Əl sıxışdırma zamanı ağrı\n- Səhər sərtliyi\n\n## Qolf Dirsəyi (Medial Epikondilit)\n\nQolf dirsəyi dirsəyin daxili tərəfində ağrı ilə xarakterizə olunan bir vəziyyətdir. Tennis dirsəyindən daha az rast gəlinir, lakin eyni dərəcədə narahat edici ola bilər.\n\n### Səbəbləri\n- Qolf oynama\n- Ağır əşyalar qaldırma\n- Təkrarlanan bilək bükülməsi\n- Düzgün olmayan texnika\n\n## Müalicə Seçimləri\n\n### Konservativ Müalicə\n- İstirahət və fəaliyyət modifikasiyası\n- Buz terapiyası\n- Fiziki terapiya\n- Anti-iltihab dərmanları\n- Kortikosteroid inyeksiyaları\n- PRP (Trombositlə zəngin plazma) terapiyası\n\n### Cərrahi Müalicə\nKonservativ müalicə uğursuz olduqda:\n- Artroskopik debridement\n- Tendon buraxılması\n- Açıq cərrahi prosedurlar\n\nDr. Eryanılmaz həm konservativ, həm də cərrahi yanaşmaları tətbiq edir və xəstələrin sürətli və təhlükəsiz şəkildə normal fəaliyyətlərinə qayıtmalarını təmin edir.",
      en: "Elbow problems can affect both athletes and people who perform repetitive movements during daily activities. In this article, we will discuss the most common elbow conditions and their treatment methods.\n\n## Tennis Elbow (Lateral Epicondylitis)\n\nTennis elbow is a condition characterized by pain and tenderness on the outside of the elbow. This condition can affect not only tennis players but also anyone who performs repetitive arm movements.\n\n### Causes\n- Repetitive arm and wrist movements\n- Improper technique\n- Age-related tendon weakening\n- Overuse\n\n### Symptoms\n- Pain on the outside of the elbow\n- Weakness in grip strength\n- Pain when shaking hands\n- Morning stiffness\n\n## Golfer's Elbow (Medial Epicondylitis)\n\nGolfer's elbow is a condition characterized by pain on the inside of the elbow. It is less common than tennis elbow but can be equally bothersome.\n\n### Causes\n- Playing golf\n- Lifting heavy objects\n- Repetitive wrist flexion\n- Improper technique\n\n## Treatment Options\n\n### Conservative Treatment\n- Rest and activity modification\n- Ice therapy\n- Physical therapy\n- Anti-inflammatory medications\n- Corticosteroid injections\n- PRP (Platelet-rich plasma) therapy\n\n### Surgical Treatment\nWhen conservative treatment fails:\n- Arthroscopic debridement\n- Tendon release\n- Open surgical procedures\n\nDr. Eryanılmaz applies both conservative and surgical approaches, ensuring patients return to their normal activities quickly and safely.",
      tr: "Dirsek problemleri hem sporcuları hem de günlük aktiviteler sırasında tekrarlayan hareketler yapan kişileri etkileyebilir. Bu makalede en yaygın dirsek durumları ve tedavi yöntemleri hakkında konuşacağız.\n\n## Tenisçi Dirseği (Lateral Epikondilit)\n\nTenisçi dirseği, dirseğin dış tarafında ağrı ve hassasiyet ile karakterize edilen bir durumdur. Bu durum sadece tenis oynayanları değil, tekrarlayan kol hareketleri yapan herkesi etkileyebilir.\n\n### Nedenleri\n- Tekrarlayan kol ve bilek hareketleri\n- Yanlış teknik\n- Yaşla ilgili tendon zayıflaması\n- Aşırı kullanım\n\n### Belirtiler\n- Dirseğin dış tarafında ağrı\n- Kavrama gücünde zayıflık\n- El sıkışma sırasında ağrı\n- Sabah sertliği\n\n## Golfçü Dirseği (Medial Epikondilit)\n\nGolfçü dirseği, dirseğin iç tarafında ağrı ile karakterize edilen bir durumdur. Tenisçi dirseğinden daha az görülür ancak aynı derecede rahatsız edici olabilir.\n\n### Nedenleri\n- Golf oynama\n- Ağır nesneler kaldırma\n- Tekrarlayan bilek bükülmesi\n- Yanlış teknik\n\n## Tedavi Seçenekleri\n\n### Konservatif Tedavi\n- Dinlenme ve aktivite modifikasyonu\n- Buz terapisi\n- Fizik tedavi\n- Anti-inflamatuar ilaçlar\n- Kortikosteroid enjeksiyonları\n- PRP (Trombositten zengin plazma) tedavisi\n\n### Cerrahi Tedavi\nKonservatif tedavi başarısız olduğunda:\n- Artroskopik debridman\n- Tendon gevşetmesi\n- Açık cerrahi prosedürler\n\nDr. Eryanılmaz hem konservatif hem de cerrahi yaklaşımları uygular ve hastaların hızlı ve güvenli şekilde normal aktivitelerine dönmelerini sağlar."
    },
    category: categories[0],
    image: "https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-12-08",
    readTime: 7
  },
  {
    id: 4,
    slug: "wrist-hand-injuries-carpal-tunnel-treatment",
    title: {
      az: "Bilək və Əl Zədələri: Karpal Tunel Müalicəsi",
      en: "Wrist and Hand Injuries: Carpal Tunnel Treatment",
      tr: "Bilek ve El Yaralanmaları: Karpal Tünel Tedavisi"
    },
    excerpt: {
      az: "Bilək və əl problemləri gündəlik həyatı ciddi şəkildə təsir edə bilər. Karpal tunel sindromu və digər əl zədələrinin müalicəsi haqqında öyrənin.",
      en: "Wrist and hand problems can seriously impact daily life. Learn about carpal tunnel syndrome and other hand injury treatments.",
      tr: "Bilek ve el problemleri günlük hayatı ciddi şekilde etkileyebilir. Karpal tünel sendromu ve diğer el yaralanmalarının tedavisi hakkında öğrenin."
    },
    content: {
      az: "Əl və bilək zədələri müasir həyatda getdikcə daha çox rast gəlinir. Kompüter istifadəsi, təkrarlanan hərəkətlər və travmalar bu problemlərin əsas səbəbləridir.\n\n## Karpal Tunel Sindromu\n\nKarpal tunel sindromu median sinirin biləkdə sıxılması nəticəsində yaranır. Bu vəziyyət xüsusilə kompüter işçiləri, kasiblar və təkrarlanan əl hərəkətləri edən insanlarda yaygındır.\n\n### Səbəbləri\n- Təkrarlanan əl və bilək hərəkətləri\n- Hamiləlik\n- Diabetes\n- Tiroid problemləri\n- Artrit\n- Genetik meyillik\n\n### Simptomlar\n- Baş barmaq, şəhadət və orta barmaqda uyuşma\n- Gecə ağrıları\n- Əldə zəiflik\n- Kiçik əşyaları tutmaqda çətinlik\n- Qarışqalanma hissi\n\n### Müalicə\n\n#### Konservativ Müalicə\n- Gecə şinası\n- Fəaliyyət modifikasiyası\n- Fiziki terapiya\n- Kortikosteroid inyeksiyaları\n- Vitamin B6 əlavələri\n\n#### Cərrahi Müalicə\n- Açıq karpal tunel buraxılması\n- Endoskopik karpal tunel buraxılması\n\n## Digər Əl və Bilək Zədələri\n\n### Tetik Barmaq\nBarmağın kilidlənməsi və ya tıklanması ilə xarakterizə olunan vəziyyət.\n\n### De Quervain Tenosinoviti\nBaş barmaq tərəfindəki tendonların iltihabı.\n\n### Bilək Sınıqları\nDüşmə və ya travma nəticəsində yaranır.\n\n## Qarşısının Alınması\n\n- Düzenli fasilələr\n- Düzgün ergonomika\n- Əl və bilək məşqləri\n- Düzgün iş vəziyyəti\n- Stress idarəetməsi\n\nDr. Eryanılmaz əl və bilək cərrahiyyəsində geniş təcrübəyə malikdir və xəstələrin optimal funksional nəticələr əldə etmələrini təmin edir.",
      en: "Hand and wrist injuries are becoming increasingly common in modern life. Computer use, repetitive movements, and trauma are the main causes of these problems.\n\n## Carpal Tunnel Syndrome\n\nCarpal tunnel syndrome occurs when the median nerve is compressed at the wrist. This condition is especially common in computer workers, cashiers, and people who perform repetitive hand movements.\n\n### Causes\n- Repetitive hand and wrist movements\n- Pregnancy\n- Diabetes\n- Thyroid problems\n- Arthritis\n- Genetic predisposition\n\n### Symptoms\n- Numbness in thumb, index, and middle fingers\n- Night pain\n- Hand weakness\n- Difficulty holding small objects\n- Tingling sensation\n\n### Treatment\n\n#### Conservative Treatment\n- Night splinting\n- Activity modification\n- Physical therapy\n- Corticosteroid injections\n- Vitamin B6 supplements\n\n#### Surgical Treatment\n- Open carpal tunnel release\n- Endoscopic carpal tunnel release\n\n## Other Hand and Wrist Injuries\n\n### Trigger Finger\nA condition characterized by finger locking or clicking.\n\n### De Quervain's Tenosynovitis\nInflammation of tendons on the thumb side.\n\n### Wrist Fractures\nOccur as a result of falls or trauma.\n\n## Prevention\n\n- Regular breaks\n- Proper ergonomics\n- Hand and wrist exercises\n- Correct work posture\n- Stress management\n\nDr. Eryanılmaz has extensive experience in hand and wrist surgery and ensures patients achieve optimal functional outcomes.",
      tr: "El ve bilek yaralanmaları modern hayatta giderek daha yaygın hale gelmektedir. Bilgisayar kullanımı, tekrarlayan hareketler ve travmalar bu problemlerin ana nedenleridir.\n\n## Karpal Tünel Sendromu\n\nKarpal tünel sendromu, median sinirin bilekte sıkışması sonucu oluşur. Bu durum özellikle bilgisayar çalışanları, kasiyer ve tekrarlayan el hareketleri yapan kişilerde yaygındır.\n\n### Nedenleri\n- Tekrarlayan el ve bilek hareketleri\n- Hamilelik\n- Diyabet\n- Tiroid problemleri\n- Artrit\n- Genetik yatkınlık\n\n### Belirtiler\n- Başparmak, işaret ve orta parmakta uyuşma\n- Gece ağrıları\n- Elde zayıflık\n- Küçük nesneleri tutmada zorluk\n- Karıncalanma hissi\n\n### Tedavi\n\n#### Konservatif Tedavi\n- Gece ateli\n- Aktivite modifikasyonu\n- Fizik tedavi\n- Kortikosteroid enjeksiyonları\n- Vitamin B6 takviyeleri\n\n#### Cerrahi Tedavi\n- Açık karpal tünel gevşetmesi\n- Endoskopik karpal tünel gevşetmesi\n\n## Diğer El ve Bilek Yaralanmaları\n\n### Tetik Parmak\nParmağın kilitlenmesi veya tıklaması ile karakterize edilen durum.\n\n### De Quervain Tenosinoviti\nBaşparmak tarafındaki tendonların iltihabı.\n\n### Bilek Kırıkları\nDüşme veya travma sonucu oluşur.\n\n## Önleme\n\n- Düzenli molalar\n- Doğru ergonomi\n- El ve bilek egzersizleri\n- Doğru çalışma pozisyonu\n- Stres yönetimi\n\nDr. Eryanılmaz el ve bilek cerrahisinde geniş deneyime sahiptir ve hastaların optimal fonksiyonel sonuçlar elde etmelerini sağlar."
    },
    category: categories[1],
    image: "https://images.pexels.com/photos/7659566/pexels-photo-7659566.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-12-05",
    readTime: 6
  },
  {
    id: 5,
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
      az: "İnkişaf kalça displaziyası (İKD) yenidoğulmuşlarda və körpələrdə ən geniş yayılmış ortopedik vəziyyətlərdən biridir. Optimal nəticələr üçün erkən aşkarlama və müalicə çox vacibdir.\n\n## İKD Nədir?\n\nİnkişaf kalça displaziyası kalça oynağının düzgün formalaşmaması ilə xarakterizə olunan bir vəziyyətdir. Bu vəziyyətdə kalça sümüyünün başı (femur başı) kalça çuxurunda (asetabulum) düzgün yerləşmir.\n\n## Risk Faktorları\n\n### Genetik Faktorlar\n- Ailə tarixində İKD\n- Qız uşaqlarında daha çox rast gəlinir\n- İlk doğulan uşaqlarda risk artır\n\n### Çevre Faktorları\n- Breech (ters) doğum\n- Oligohidramnios (az amniotik maye)\n- Sıx swaddling (bükülmə)\n\n## Erkən Əlamətlər\n\n### Fiziki Müayinə Əlamətləri\n- Barlow və Ortolani testləri\n- Asimmetrik dəri qırışları\n- Ayaq uzunluğu fərqi\n- Məhdud kalça abduction\n\n### Görüntüləmə\n- Ultrasonoqrafiya (6 aya qədər)\n- Röntgen (6 aydan sonra)\n\n## Müalicə Seçimləri\n\n### Konservativ Müalicə\n- Pavlik harness (0-6 ay)\n- Spica cast (6-18 ay)\n- Abduction brace\n\n### Cərrahi Müalicə\n- Açıq reduksiya\n- Osteotomiya\n- Asetabular rekonstruksiya\n\n## Uzunmüddətli Nəticələr\n\nErkən və düzgün müalicə ilə:\n- Normal kalça funksiyası\n- Ağrısız hərəkət\n- Artrit riskinin azalması\n- Normal həyat keyfiyyəti\n\nDr. Eryanılmaz 500-dən çox pediatrik kalça cərrahiyyəsi gerçekleştirmiş və pediatrik ortopediyada geniş təcrübəyə malikdir. Erkən müdaxilə və düzgün müalicə planlaması ilə uşaqlar normal və sağlam bir həyat yaşaya bilərlər.",
      en: "Developmental hip dysplasia (DDH) is one of the most common orthopedic conditions in newborns and infants. Early detection and treatment are crucial for optimal outcomes.\n\n## What is DDH?\n\nDevelopmental hip dysplasia is a condition characterized by improper formation of the hip joint. In this condition, the head of the thigh bone (femoral head) does not sit properly in the hip socket (acetabulum).\n\n## Risk Factors\n\n### Genetic Factors\n- Family history of DDH\n- More common in girls\n- Increased risk in firstborn children\n\n### Environmental Factors\n- Breech delivery\n- Oligohydramnios (low amniotic fluid)\n- Tight swaddling\n\n## Early Signs\n\n### Physical Examination Signs\n- Barlow and Ortolani tests\n- Asymmetric skin folds\n- Leg length difference\n- Limited hip abduction\n\n### Imaging\n- Ultrasonography (up to 6 months)\n- X-ray (after 6 months)\n\n## Treatment Options\n\n### Conservative Treatment\n- Pavlik harness (0-6 months)\n- Spica cast (6-18 months)\n- Abduction brace\n\n### Surgical Treatment\n- Open reduction\n- Osteotomy\n- Acetabular reconstruction\n\n## Long-term Outcomes\n\nWith early and proper treatment:\n- Normal hip function\n- Pain-free movement\n- Reduced risk of arthritis\n- Normal quality of life\n\nDr. Eryanılmaz has performed over 500 pediatric hip surgeries and has extensive experience in pediatric orthopedics. With early intervention and proper treatment planning, children can live normal and healthy lives.",
      tr: "Gelişimsel kalça displazisi (GKD), yenidoğanlarda ve bebeklerde en yaygın ortopedik durumlardan biridir. Optimal sonuçlar için erken teşhis ve tedavi çok önemlidir.\n\n## GKD Nedir?\n\nGelişimsel kalça displazisi, kalça ekleminin uygun şekilde oluşmaması ile karakterize edilen bir durumdur. Bu durumda uyluk kemiğinin başı (femur başı) kalça çukurunda (asetabulum) düzgün oturmaz.\n\n## Risk Faktörleri\n\n### Genetik Faktörler\n- Ailede GKD öyküsü\n- Kız çocuklarında daha sık\n- İlk doğan çocuklarda risk artışı\n\n### Çevresel Faktörler\n- Makat doğum\n- Oligohidramnios (az amniyotik sıvı)\n- Sıkı kundaklama\n\n## Erken Belirtiler\n\n### Fizik Muayene Bulguları\n- Barlow ve Ortolani testleri\n- Asimetrik cilt kıvrımları\n- Bacak uzunluğu farkı\n- Sınırlı kalça abduksiyonu\n\n### Görüntüleme\n- Ultrasonografi (6 aya kadar)\n- Röntgen (6 ay sonrası)\n\n## Tedavi Seçenekleri\n\n### Konservatif Tedavi\n- Pavlik koşum takımı (0-6 ay)\n- Spica alçı (6-18 ay)\n- Abduksiyon breysi\n\n### Cerrahi Tedavi\n- Açık redüksiyon\n- Osteotomi\n- Asetabular rekonstrüksiyon\n\n## Uzun Dönem Sonuçlar\n\nErken ve doğru tedavi ile:\n- Normal kalça fonksiyonu\n- Ağrısız hareket\n- Artrit riskinde azalma\n- Normal yaşam kalitesi\n\nDr. Eryanılmaz 500'den fazla pediatrik kalça cerrahisi gerçekleştirmiş ve pediatrik ortopedide geniş deneyime sahiptir. Erken müdahale ve doğru tedavi planlaması ile çocuklar normal ve sağlıklı bir yaşam sürebilir."
    },
    category: categories[3],
    image: "https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-12-03",
    readTime: 7
  },
  {
    id: 6,
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
      az: "Ponseti metodu əyripəncə müalicəsini cərrahi prosedurdan əla nəticələrə malik qeyri-cərrahi yanaşmaya çevirmişdir.\n\n## Əyripəncə Nədir?\n\nƏyripəncə (kongenital talipes equinovarus) yenidoğulmuşlarda ayağın və topuğun anormal vəziyyətdə olduğu anadangəlmə bir deformasiyadır. Bu vəziyyətdə ayaq içəriyə və aşağıya doğru bükülür.\n\n## Ponseti Metodu\n\nPonseti metodu Dr. Ignacio Ponseti tərəfindən inkişaf etdirilmiş və dünyada qəbul edilmiş standart müalicə metodudur.\n\n### Müalicə Mərhələləri\n\n#### 1. Gips Mərhələsi (0-2 ay)\n- Həftəlik gips dəyişikliyi\n- Tədricən düzəltmə\n- 5-7 gips seansı\n\n#### 2. Tenotomiya (2-3 ay)\n- Axil tendonunun kəsilməsi\n- Lokal anesteziya altında\n- Ambulatoriya proseduru\n\n#### 3. Brace Mərhələsi (3 ay - 4 yaş)\n- Denis Browne splinti\n- İlk 3 ay 23 saat/gün\n- Sonra yalnız gecələr\n\n## Uğur Nəticələri\n\nDr. Eryanılmaz 350+ əyripəncə halını Ponseti metodu ilə müalicə etmiş və 95% uğur nisbəti əldə etmişdir.\n\n### Faydalar\n- Qeyri-cərrahi yanaşma\n- Yüksək uğur nisbəti\n- Az komplikasiya\n- Normal ayaq funksiyası\n- Uzunmüddətli yaxşı nəticələr\n\n## Ailələr üçün Məsləhətlər\n\n### Brace İstifadəsi\n- Düzenli istifadə çox vacibdir\n- Dəri qayğısı\n- Müntəzəm nəzarət\n\n### Uzunmüddətli İzləmə\n- 18 yaşa qədər nəzarət\n- Erkən müdaxilə\n- Fiziki aktivitə təşviqi\n\n## Real Uğur Hekayələri\n\nDr. Eryanılmaz-ın müalicə etdiyi uşaqlar:\n- Normal ayaq funksiyası əldə ediblər\n- İdmana aktiv şəkildə qatılırlar\n- Həyat keyfiyyəti yüksəkdir\n- Ailələr çox məmnundur\n\nPonseti metodu əyripəncə müalicəsində qızıl standartdır və düzgün tətbiq edildikdə əla nəticələr verir.",
      en: "The Ponseti method has transformed clubfoot treatment from a surgical procedure to a non-surgical approach with excellent outcomes.\n\n## What is Clubfoot?\n\nClubfoot (congenital talipes equinovarus) is a congenital deformity where the foot and ankle are in an abnormal position in newborns. In this condition, the foot is turned inward and downward.\n\n## The Ponseti Method\n\nThe Ponseti method was developed by Dr. Ignacio Ponseti and is the globally accepted standard treatment method.\n\n### Treatment Phases\n\n#### 1. Casting Phase (0-2 months)\n- Weekly cast changes\n- Gradual correction\n- 5-7 casting sessions\n\n#### 2. Tenotomy (2-3 months)\n- Achilles tendon release\n- Under local anesthesia\n- Outpatient procedure\n\n#### 3. Bracing Phase (3 months - 4 years)\n- Denis Browne splint\n- First 3 months 23 hours/day\n- Then nights only\n\n## Success Results\n\nDr. Eryanılmaz has treated 350+ clubfoot cases with the Ponseti method and achieved a 95% success rate.\n\n### Benefits\n- Non-surgical approach\n- High success rate\n- Few complications\n- Normal foot function\n- Long-term good results\n\n## Tips for Families\n\n### Brace Usage\n- Regular use is crucial\n- Skin care\n- Regular monitoring\n\n### Long-term Follow-up\n- Monitoring until age 18\n- Early intervention\n- Encouraging physical activity\n\n## Real Success Stories\n\nChildren treated by Dr. Eryanılmaz:\n- Achieved normal foot function\n- Actively participate in sports\n- Have high quality of life\n- Families are very satisfied\n\nThe Ponseti method is the gold standard in clubfoot treatment and provides excellent results when properly applied.",
      tr: "Ponseti yöntemi çarpık ayak tedavisini cerrahi bir prosedürden mükemmel sonuçlara sahip cerrahi olmayan bir yaklaşıma dönüştürmüştür.\n\n## Çarpık Ayak Nedir?\n\nÇarpık ayak (konjenital talipes ekinovarus), yenidoğanlarda ayak ve ayak bileğinin anormal pozisyonda olduğu doğuştan bir deformitedir. Bu durumda ayak içe ve aşağıya doğru dönüktür.\n\n## Ponseti Yöntemi\n\nPonseti yöntemi Dr. Ignacio Ponseti tarafından geliştirilmiş ve dünyada kabul görmüş standart tedavi yöntemidir.\n\n### Tedavi Aşamaları\n\n#### 1. Alçılama Aşaması (0-2 ay)\n- Haftalık alçı değişimi\n- Kademeli düzeltme\n- 5-7 alçılama seansı\n\n#### 2. Tenotomi (2-3 ay)\n- Aşil tendon gevşetmesi\n- Lokal anestezi altında\n- Ayaktan prosedür\n\n#### 3. Atelleme Aşaması (3 ay - 4 yaş)\n- Denis Browne splinti\n- İlk 3 ay 23 saat/gün\n- Sonra sadece geceler\n\n## Başarı Sonuçları\n\nDr. Eryanılmaz 350+ çarpık ayak vakasını Ponseti yöntemi ile tedavi etmiş ve %95 başarı oranı elde etmiştir.\n\n### Faydalar\n- Cerrahi olmayan yaklaşım\n- Yüksek başarı oranı\n- Az komplikasyon\n- Normal ayak fonksiyonu\n- Uzun dönem iyi sonuçlar\n\n## Aileler için Öneriler\n\n### Atel Kullanımı\n- Düzenli kullanım çok önemli\n- Cilt bakımı\n- Düzenli kontrol\n\n### Uzun Dönem Takip\n- 18 yaşına kadar takip\n- Erken müdahale\n- Fiziksel aktivite teşviki\n\n## Gerçek Başarı Hikayeleri\n\nDr. Eryanılmaz'ın tedavi ettiği çocuklar:\n- Normal ayak fonksiyonu elde ettiler\n- Spora aktif olarak katılıyorlar\n- Yaşam kaliteleri yüksek\n- Aileler çok memnun\n\nPonseti yöntemi çarpık ayak tedavisinde altın standarttır ve doğru uygulandığında mükemmel sonuçlar verir."
    },
    category: categories[3],
    image: "https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-28",
    readTime: 6
  },
  {
    id: 7,
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
      az: "İdman zədələri bütün səviyyələrdəki idmançılar üçün təəssüf doğuran bir reallıqdır. Qarşısının alınması strategiyalarını və müasir müalicə seçimlərini anlamaq idmançılara öz idman növlərinə təhlükəsiz şəkildə qayıtmaqda kömək edə bilər.\n\n## Ümumi İdman Zədələri\n\n### ACL Zədələri\nÖn çarpaz bağ zədələri xüsusilə futbol, basketbol və xizək idmanlarında yaygındır.\n\n### Menisküs Cırılması\nDiz oynağında ani dönmələr və ya təmas zamanı baş verir.\n\n### Rotator Manşet Zədələri\nÇiyin idmanlarında və baş üstü fəaliyyətlərdə yaygındır.\n\n### Ayaq Bileği Burkulması\nBütün idman növlərində ən çox rast gəlinən zədələrdən biridir.\n\n## Qarşısının Alınması Strategiyaları\n\n### Düzgün İstiləşmə\n- 10-15 dəqiqə dinamik istiləşmə\n- İdman növünə uyğun hərəkətlər\n- Tədricən intensivlik artırılması\n\n### Gücləndirilmə Məşqləri\n- Əsas əzələ qruplarının gücləndirilməsi\n- Balans və koordinasiya məşqləri\n- Funksional hərəkət nümunələri\n\n### Düzgün Texnika\n- Peşəkar təlimat\n- Video analizi\n- Düzenli texnika yoxlanışı\n\n## Müasir Müalicə Yanaşmaları\n\n### Konservativ Müalicə\n- RICE protokolu (İstirahət, Buz, Kompressiya, Yüksəklik)\n- Fiziki terapiya\n- Progressiv yükləmə\n\n### Regenerativ Terapiya\n- PRP (Trombositlə zəngin plazma)\n- Kök hüceyrə terapiyası\n- Proloterapiya\n\n### Cərrahi Müalicə\n- Artroskopik cərrahiyyə\n- Minimal invaziv texnikalar\n- Sürətli sağalma protokolları\n\n## İdmana Qayıtma\n\n### Mərhələli Yanaşma\n1. Ağrısız hərəkət\n2. Güc bərpası\n3. İdmana xüsusi məşqlər\n4. Tam idman fəaliyyəti\n\n### Psixoloji Hazırlıq\n- Özgüvən bərpası\n- Qorxu idarəetməsi\n- Mental hazırlıq\n\nDr. Eryanılmaz idman zədələrinin müalicəsində geniş təcrübəyə malikdir və idmançıların sürətli və təhlükəsiz şəkildə idmana qayıtmalarını təmin edir.",
      en: "Sports injuries are an unfortunate reality for athletes at all levels. Understanding prevention strategies and modern treatment options can help athletes return to their sport safely.\n\n## Common Sports Injuries\n\n### ACL Injuries\nAnterior cruciate ligament injuries are especially common in soccer, basketball, and skiing sports.\n\n### Meniscus Tears\nOccur in the knee joint during sudden turns or contact.\n\n### Rotator Cuff Injuries\nCommon in shoulder sports and overhead activities.\n\n### Ankle Sprains\nOne of the most common injuries in all sports.\n\n## Prevention Strategies\n\n### Proper Warm-up\n- 10-15 minutes of dynamic warm-up\n- Sport-specific movements\n- Gradual intensity increase\n\n### Strengthening Exercises\n- Core muscle group strengthening\n- Balance and coordination exercises\n- Functional movement patterns\n\n### Proper Technique\n- Professional instruction\n- Video analysis\n- Regular technique checks\n\n## Modern Treatment Approaches\n\n### Conservative Treatment\n- RICE protocol (Rest, Ice, Compression, Elevation)\n- Physical therapy\n- Progressive loading\n\n### Regenerative Therapy\n- PRP (Platelet-rich plasma)\n- Stem cell therapy\n- Prolotherapy\n\n### Surgical Treatment\n- Arthroscopic surgery\n- Minimally invasive techniques\n- Rapid recovery protocols\n\n## Return to Sport\n\n### Phased Approach\n1. Pain-free movement\n2. Strength restoration\n3. Sport-specific training\n4. Full sport activity\n\n### Psychological Preparation\n- Confidence restoration\n- Fear management\n- Mental preparation\n\nDr. Eryanılmaz has extensive experience in treating sports injuries and ensures athletes return to sports quickly and safely.",
      tr: "Spor yaralanmaları her seviyedeki sporcular için talihsiz bir gerçektir. Önleme stratejilerini ve modern tedavi seçeneklerini anlamak, sporcuların sporlarına güvenli bir şekilde dönmelerine yardımcı olabilir.\n\n## Yaygın Spor Yaralanmaları\n\n### ACL Yaralanmaları\nÖn çapraz bağ yaralanmaları özellikle futbol, basketbol ve kayak sporlarında yaygındır.\n\n### Menisküs Yırtıkları\nDiz ekleminde ani dönüşler veya temas sırasında oluşur.\n\n### Rotator Manşet Yaralanmaları\nOmuz sporlarında ve baş üstü aktivitelerde yaygındır.\n\n### Ayak Bileği Burkulmalar\nTüm sporlarda en yaygın yaralanmalardan biridir.\n\n## Önleme Stratejileri\n\n### Doğru Isınma\n- 10-15 dakika dinamik ısınma\n- Spora özgü hareketler\n- Kademeli yoğunluk artışı\n\n### Güçlendirme Egzersizleri\n- Çekirdek kas gruplarının güçlendirilmesi\n- Denge ve koordinasyon egzersizleri\n- Fonksiyonel hareket kalıpları\n\n### Doğru Teknik\n- Profesyonel eğitim\n- Video analizi\n- Düzenli teknik kontrolleri\n\n## Modern Tedavi Yaklaşımları\n\n### Konservatif Tedavi\n- RICE protokolü (Dinlenme, Buz, Kompresyon, Yükseltme)\n- Fizik tedavi\n- Progresif yükleme\n\n### Rejeneratif Terapi\n- PRP (Trombositten zengin plazma)\n- Kök hücre tedavisi\n- Proloterapi\n\n### Cerrahi Tedavi\n- Artroskopik cerrahi\n- Minimal invaziv teknikler\n- Hızlı iyileşme protokolleri\n\n## Spora Dönüş\n\n### Aşamalı Yaklaşım\n1. Ağrısız hareket\n2. Güç restorasyonu\n3. Spora özgü antrenman\n4. Tam spor aktivitesi\n\n### Psikolojik Hazırlık\n- Güven restorasyonu\n- Korku yönetimi\n- Mental hazırlık\n\nDr. Eryanılmaz spor yaralanmalarının tedavisinde geniş deneyime sahiptir ve sporcuların hızlı ve güvenli şekilde spora dönmelerini sağlar."
    },
    category: categories[2],
    image: "https://images.pexels.com/photos/7659725/pexels-photo-7659725.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-20",
    readTime: 7
  },
  {
    id: 8,
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
      az: "Artroskopik cərrahiyyə xəstələrə daha sürətli sağalma müddətləri ilə daha az invaziv seçimlər təklif edərək ortopedik müalicədə inqilab yaratmışdır.\n\n## Artroskopiya Nədir?\n\nArtroskopiya kiçik kəsiklər vasitəsilə oynaq daxilinə kamera və cərrahi alətlərin daxil edildiyi minimal invaziv cərrahi texnikadır.\n\n## Faydalar\n\n### Kiçik Kəsiklər\n- 5-10 mm kəsiklər\n- Minimal çapıq\n- Daha yaxşı kosmetik nəticə\n\n### Sürətli Sağalma\n- Daha az ağrı\n- Erkən mobilizasiya\n- Tez işə qayıtma\n\n### Az Komplikasiya\n- İnfeksiya riski azalır\n- Qan itkisi minimal\n- Anesteziya müddəti qısa\n\n## Tətbiq Sahələri\n\n### Diz Artroskopiyası\n- Menisküs təmiri\n- ACL rekonstruksiyası\n- Qığırdaq zədəsi müalicəsi\n- Sinovit təmizlənməsi\n\n### Çiyin Artroskopiyası\n- Rotator manşet təmiri\n- Labral təmir\n- Sıxılma sindromu müalicəsi\n- Instabilite düzəltməsi\n\n### Ayaq Bileği Artroskopiyası\n- Impingement müalicəsi\n- Qığırdaq zədəsi\n- Artrit debridement\n- Bağ zədəsi qiymətləndirilməsi\n\n## Prosedur\n\n### Əməliyyat Öncəsi\n- Tam qiymətləndirmə\n- Görüntüləmə müayinələri\n- Anesteziya planlaması\n\n### Əməliyyat\n- Portal yerləşdirilməsi\n- Diaqnostik artroskopiya\n- Terapevtik prosedurlar\n- Portal bağlanması\n\n### Əməliyyat Sonrası\n- Ağrı idarəetməsi\n- Erkən fiziki terapiya\n- Progressiv aktivite\n\n## Texnoloji İnnovasiyalar\n\n### 4K Görüntüləmə\n- Ultra yüksək həlledicilik\n- Daha yaxşı görüş\n- Dəqiq cərrahiyyə\n\n### Robotik Yardım\n- Daha dəqiq hərəkətlər\n- Tremor azaldılması\n- Təkmilləşdirilmiş nəzarət\n\nDr. Eryanılmaz 5000+ artroskopik prosedur gerçekleştirmiş və bu sahədə geniş təcrübəyə malikdir. Ən son texnologiyalardan istifadə edərək xəstələrə ən yaxşı nəticələri təmin edir.",
      en: "Arthroscopic surgery has revolutionized orthopedic treatment by offering patients less invasive options with faster recovery times.\n\n## What is Arthroscopy?\n\nArthroscopy is a minimally invasive surgical technique where a camera and surgical instruments are inserted into the joint through small incisions.\n\n## Benefits\n\n### Small Incisions\n- 5-10 mm incisions\n- Minimal scarring\n- Better cosmetic result\n\n### Faster Recovery\n- Less pain\n- Early mobilization\n- Quick return to work\n\n### Fewer Complications\n- Reduced infection risk\n- Minimal blood loss\n- Shorter anesthesia time\n\n## Applications\n\n### Knee Arthroscopy\n- Meniscus repair\n- ACL reconstruction\n- Cartilage damage treatment\n- Synovitis cleaning\n\n### Shoulder Arthroscopy\n- Rotator cuff repair\n- Labral repair\n- Impingement syndrome treatment\n- Instability correction\n\n### Ankle Arthroscopy\n- Impingement treatment\n- Cartilage damage\n- Arthritis debridement\n- Ligament injury assessment\n\n## Procedure\n\n### Pre-operative\n- Complete evaluation\n- Imaging studies\n- Anesthesia planning\n\n### Surgery\n- Portal placement\n- Diagnostic arthroscopy\n- Therapeutic procedures\n- Portal closure\n\n### Post-operative\n- Pain management\n- Early physical therapy\n- Progressive activity\n\n## Technological Innovations\n\n### 4K Imaging\n- Ultra-high resolution\n- Better visualization\n- Precise surgery\n\n### Robotic Assistance\n- More precise movements\n- Tremor reduction\n- Enhanced control\n\nDr. Eryanılmaz has performed 5000+ arthroscopic procedures and has extensive experience in this field. Using the latest technologies, he ensures the best outcomes for patients.",
      tr: "Artroskopik cerrahi, hastalara daha hızlı iyileşme süreleri ile daha az invaziv seçenekler sunarak ortopedik tedavide devrim yaratmıştır.\n\n## Artroskopi Nedir?\n\nArtroskopi, küçük kesiler yoluyla eklem içine kamera ve cerrahi aletlerin sokulduğu minimal invaziv cerrahi tekniktir.\n\n## Faydalar\n\n### Küçük Kesiler\n- 5-10 mm kesiler\n- Minimal skar\n- Daha iyi kozmetik sonuç\n\n### Hızlı İyileşme\n- Daha az ağrı\n- Erken mobilizasyon\n- Hızlı işe dönüş\n\n### Az Komplikasyon\n- Enfeksiyon riski azalır\n- Minimal kan kaybı\n- Kısa anestezi süresi\n\n## Uygulama Alanları\n\n### Diz Artroskopisi\n- Menisküs tamiri\n- ACL rekonstrüksiyonu\n- Kıkırdak hasarı tedavisi\n- Sinovit temizleme\n\n### Omuz Artroskopisi\n- Rotator manşet tamiri\n- Labral tamir\n- Sıkışma sendromu tedavisi\n- İnstabilite düzeltmesi\n\n### Ayak Bileği Artroskopisi\n- Sıkışma tedavisi\n- Kıkırdak hasarı\n- Artrit debridman\n- Bağ hasarı değerlendirmesi\n\n## Prosedür\n\n### Ameliyat Öncesi\n- Tam değerlendirme\n- Görüntüleme çalışmaları\n- Anestezi planlaması\n\n### Ameliyat\n- Portal yerleştirme\n- Tanısal artroskopi\n- Terapötik prosedürler\n- Portal kapatma\n\n### Ameliyat Sonrası\n- Ağrı yönetimi\n- Erken fizik tedavi\n- Progresif aktivite\n\n## Teknolojik İnovasyonlar\n\n### 4K Görüntüleme\n- Ultra yüksek çözünürlük\n- Daha iyi görselleştirme\n- Hassas cerrahi\n\n### Robotik Yardım\n- Daha hassas hareketler\n- Tremor azaltma\n- Gelişmiş kontrol\n\nDr. Eryanılmaz 5000+ artroskopik prosedür gerçekleştirmiş ve bu alanda geniş deneyime sahiptir. En son teknolojileri kullanarak hastalara en iyi sonuçları sağlar."
    },
    category: categories[1],
    image: "https://images.pexels.com/photos/7659727/pexels-photo-7659727.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-15",
    readTime: 5
  },
  {
    id: 9,
    slug: "foot-ankle-problems-comprehensive-treatment",
    title: {
      az: "Ayaq və Topuq Problemləri: Hərtərəfli Müalicə",
      en: "Foot and Ankle Problems: Comprehensive Treatment",
      tr: "Ayak ve Ayak Bileği Problemleri: Kapsamlı Tedavi"
    },
    excerpt: {
      az: "Ayaq və topuq zədələri hərəkətliliyi ciddi şəkildə təsir edə bilər. Ümumi problemlər və müasir müalicə seçimləri haqqında öyrənin.",
      en: "Foot and ankle injuries can seriously impact mobility. Learn about common problems and modern treatment options.",
      tr: "Ayak ve ayak bileği yaralanmaları hareketliliği ciddi şekilde etkileyebilir. Yaygın problemler ve modern tedavi seçenekleri hakkında öğrenin."
    },
    content: {
      az: "Ayaq və topuq mürəkkəb strukturlardır və gündəlik hərəkətliliyin əsasını təşkil edir. Bu bölgələrdəki problemlər həyat keyfiyyətini əhəmiyyətli dərəcədə təsir edə bilər.\n\n## Ümumi Ayaq və Topuq Problemləri\n\n### Topuq Burkulması\nEn çox rast gəlinən ayaq bileği zədəsi olub, adətən inversiya (içəriyə dönmə) zamanı baş verir.\n\n#### Səbəbləri\n- İdman fəaliyyətləri\n- Düzgün olmayan ayaqqabı\n- Zəif balans\n- Əvvəlki zədələr\n\n#### Müalicə\n- RICE protokolu\n- Fiziki terapiya\n- Balans məşqləri\n- Funkional brace\n\n### Plantar Fasiit\nAyaq altında ağrı və sərtlik ilə xarakterizə olunan vəziyyət.\n\n#### Səbəbləri\n- Həddindən artıq istifadə\n- Düz ayaq və ya yüksək qövsü\n- Çəki artımı\n- Yaş faktoru\n\n#### Müalicə\n- Stretching məşqləri\n- Ortotik dəstək\n- Fiziki terapiya\n- Kortikosteroid inyeksiyaları\n\n### Axil Tendon Zədələri\nAyaq bileğinin arxasında olan güclü tendonun zədələnməsi.\n\n#### Növləri\n- Tendinit (iltihab)\n- Qismən cırılma\n- Tam cırılma\n\n#### Müalicə\n- Konservativ: Fiziki terapiya, brace\n- Cərrahi: Tendon təmiri və ya rekonstruksiyası\n\n## Pediatrik Ayaq Problemləri\n\n### Əyripəncə (Clubfoot)\nDr. Eryanılmaz 350+ uğurlu əyripəncə düzəltməsi gerçekleştirmişdir.\n\n#### Ponseti Metodu\n- Həftəlik gips dəyişikliyi\n- Tenotomiya\n- Uzunmüddətli brace istifadəsi\n\n### Düz Ayaq\nAyaq qövsünün düşük olması və ya olmaması.\n\n#### Müalicə\n- Ortotik dəstək\n- Gücləndirilmə məşqləri\n- Nadir hallarda cərrahi\n\n## Müasir Müalicə Yanaşmaları\n\n### Konservativ Müalicə\n- Fiziki terapiya\n- Ortotik və protez\n- İnyeksiya terapiyaları\n- Fəaliyyət modifikasiyası\n\n### Cərrahi Müalicə\n- Artroskopik prosedurlar\n- Açıq cərrahiyyə\n- Osteotomiya\n- Artrodez (birləşmə)\n\n### Regenerativ Terapiya\n- PRP inyeksiyaları\n- Kök hüceyrə terapiyası\n- Proloterapiya\n\n## Qarşısının Alınması\n\n### Düzgün Ayaqqabı Seçimi\n- Uyğun ölçü\n- Yaxşı dəstək\n- Fəaliyyətə uyğun\n\n### Gücləndirilmə Məşqləri\n- Ayaq və topuq əzələləri\n- Balans məşqləri\n- Çeviklik məşqləri\n\nDr. Eryanılmaz ayaq və topuq cərrahiyyəsində geniş təcrübəyə malikdir və xəstələrə həm pediatrik, həm də yetişkin problemlər üçün hərtərəfli qayğı təqdim edir.",
      en: "The foot and ankle are complex structures that form the foundation of daily mobility. Problems in these areas can significantly impact quality of life.\n\n## Common Foot and Ankle Problems\n\n### Ankle Sprains\nThe most common ankle injury, usually occurring during inversion (inward turning).\n\n#### Causes\n- Sports activities\n- Improper footwear\n- Poor balance\n- Previous injuries\n\n#### Treatment\n- RICE protocol\n- Physical therapy\n- Balance exercises\n- Functional bracing\n\n### Plantar Fasciitis\nA condition characterized by pain and stiffness in the bottom of the foot.\n\n#### Causes\n- Overuse\n- Flat feet or high arches\n- Weight gain\n- Age factor\n\n#### Treatment\n- Stretching exercises\n- Orthotic support\n- Physical therapy\n- Corticosteroid injections\n\n### Achilles Tendon Injuries\nInjury to the strong tendon at the back of the ankle.\n\n#### Types\n- Tendinitis (inflammation)\n- Partial tear\n- Complete rupture\n\n#### Treatment\n- Conservative: Physical therapy, bracing\n- Surgical: Tendon repair or reconstruction\n\n## Pediatric Foot Problems\n\n### Clubfoot\nDr. Eryanılmaz has performed 350+ successful clubfoot corrections.\n\n#### Ponseti Method\n- Weekly cast changes\n- Tenotomy\n- Long-term bracing\n\n### Flat Feet\nLow or absent foot arches.\n\n#### Treatment\n- Orthotic support\n- Strengthening exercises\n- Rarely surgical\n\n## Modern Treatment Approaches\n\n### Conservative Treatment\n- Physical therapy\n- Orthotics and prosthetics\n- Injection therapies\n- Activity modification\n\n### Surgical Treatment\n- Arthroscopic procedures\n- Open surgery\n- Osteotomy\n- Arthrodesis (fusion)\n\n### Regenerative Therapy\n- PRP injections\n- Stem cell therapy\n- Prolotherapy\n\n## Prevention\n\n### Proper Shoe Selection\n- Appropriate size\n- Good support\n- Activity-appropriate\n\n### Strengthening Exercises\n- Foot and ankle muscles\n- Balance exercises\n- Agility training\n\nDr. Eryanılmaz has extensive experience in foot and ankle surgery and provides comprehensive care for both pediatric and adult problems.",
      tr: "Ayak ve ayak bileği, günlük hareketliliğin temelini oluşturan karmaşık yapılardır. Bu bölgelerdeki problemler yaşam kalitesini önemli ölçüde etkileyebilir.\n\n## Yaygın Ayak ve Ayak Bileği Problemleri\n\n### Ayak Bileği Burkulmalar\nEn yaygın ayak bileği yaralanması olup, genellikle inversiyon (içe dönme) sırasında oluşur.\n\n#### Nedenleri\n- Spor aktiviteleri\n- Uygun olmayan ayakkabı\n- Zayıf denge\n- Önceki yaralanmalar\n\n#### Tedavi\n- RICE protokolü\n- Fizik tedavi\n- Denge egzersizleri\n- Fonksiyonel destekleme\n\n### Plantar Fasiit\nAyak altında ağrı ve sertlik ile karakterize edilen durum.\n\n#### Nedenleri\n- Aşırı kullanım\n- Düz ayak veya yüksek kemer\n- Kilo artışı\n- Yaş faktörü\n\n#### Tedavi\n- Germe egzersizleri\n- Ortotik destek\n- Fizik tedavi\n- Kortikosteroid enjeksiyonları\n\n### Aşil Tendon Yaralanmaları\nAyak bileğinin arkasındaki güçlü tendonun yaralanması.\n\n#### Türleri\n- Tendinit (iltihap)\n- Kısmi yırtık\n- Tam kopma\n\n#### Tedavi\n- Konservatif: Fizik tedavi, destekleme\n- Cerrahi: Tendon tamiri veya rekonstrüksiyonu\n\n## Pediatrik Ayak Problemleri\n\n### Çarpık Ayak\nDr. Eryanılmaz 350+ başarılı çarpık ayak düzeltmesi gerçekleştirmiştir.\n\n#### Ponseti Yöntemi\n- Haftalık alçı değişimi\n- Tenotomi\n- Uzun dönem destekleme\n\n### Düz Ayak\nAyak kemerinin düşük olması veya olmaması.\n\n#### Tedavi\n- Ortotik destek\n- Güçlendirme egzersizleri\n- Nadir durumlarda cerrahi\n\n## Modern Tedavi Yaklaşımları\n\n### Konservatif Tedavi\n- Fizik tedavi\n- Ortotik ve protez\n- Enjeksiyon tedavileri\n- Aktivite modifikasyonu\n\n### Cerrahi Tedavi\n- Artroskopik prosedürler\n- Açık cerrahi\n- Osteotomi\n- Artrodez (füzyon)\n\n### Rejeneratif Terapi\n- PRP enjeksiyonları\n- Kök hücre tedavisi\n- Proloterapi\n\n## Önleme\n\n### Doğru Ayakkabı Seçimi\n- Uygun boyut\n- İyi destek\n- Aktiviteye uygun\n\n### Güçlendirme Egzersizleri\n- Ayak ve ayak bileği kasları\n- Denge egzersizleri\n- Çeviklik antrenmanı\n\nDr. Eryanılmaz ayak ve ayak bileği cerrahisinde geniş deneyime sahiptir ve hem pediatrik hem de yetişkin problemler için kapsamlı bakım sağlar."
    },
    category: categories[0],
    image: "https://images.pexels.com/photos/7659569/pexels-photo-7659569.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-10",
    readTime: 8
  },
  {
    id: 10,
    slug: "healthy-living-bone-joint-health-tips",
    title: {
      az: "Sağlam Həyat: Sümük və Oynaq Sağlamlığı Məsləhətləri",
      en: "Healthy Living: Bone and Joint Health Tips",
      tr: "Sağlıklı Yaşam: Kemik ve Eklem Sağlığı İpuçları"
    },
    excerpt: {
      az: "Sümük və oynaq sağlamlığını qorumaq üçün praktik məsləhətlər. Yaşlanma ilə birlikdə güclü və sağlam qalmaq üçün nə etməli.",
      en: "Practical tips for maintaining bone and joint health. What to do to stay strong and healthy with aging.",
      tr: "Kemik ve eklem sağlığını korumak için pratik ipuçları. Yaşlanmayla birlikte güçlü ve sağlıklı kalmak için ne yapmalı."
    },
    content: {
      az: "Sümük və oynaq sağlamlığı həyat keyfiyyətimizin əsasını təşkil edir. Düzgün həyat tərzi seçimləri ilə yaşlanma prosesini yavaşlatmaq və güçlü qalmaq mümkündür.\n\n## Sümük Sağlamlığı\n\n### Kalsium və Vitamin D\nSümük sağlamlığının əsas komponentləridir.\n\n#### Kalsium Mənbələri\n- Süd məhsulları\n- Yaşıl yarpaqlı tərəvəzlər\n- Balıq (sümükləri ilə)\n- Qoz-fındıq\n- Kalsiumla zənginləşdirilmiş məhsullar\n\n#### Vitamin D Mənbələri\n- Günəş işığı\n- Yağlı balıqlar\n- Vitamin D əlavələri\n- Zənginləşdirilmiş məhsullar\n\n### Fiziki Aktivite\nSümükləri gücləndirir və sıxlığını artırır.\n\n#### Tövsiyə olunan məşqlər\n- Ağırlıq qaldırma\n- Yürüyüş və qaçış\n- Dans\n- Pilləkən qalxma\n- Müqavimət məşqləri\n\n## Oynaq Sağlamlığı\n\n### Çeviklik və Hərəkət Diapazonu\nOynaqların sağlam qalması üçün müntəzəm hərəkət vacibdir.\n\n#### Faydalı məşqlər\n- Stretching\n- Yoga\n- Üzgüçülük\n- Tai Chi\n- Pilates\n\n### Çəki İdarəetməsi\nArtıq çəki oynaqlar üzərində əlavə təzyiq yaradır.\n\n#### Sağlam çəki saxlama\n- Balanslaşdırılmış qidalanma\n- Müntəzəm məşq\n- Porsiyon nəzarəti\n- Hidrasiya\n\n## Qidalanma Məsləhətləri\n\n### Anti-iltihab Qidalar\n- Omega-3 yağ turşuları\n- Antioksidantlar\n- Təzə meyvə və tərəvəzlər\n- Tam taxıl məhsulları\n\n### Məhdudlaşdırılmalı Qidalar\n- Şəkər\n- İşlənmiş qidalar\n- Həddindən artıq duz\n- Trans yağlar\n\n## Yaş Qruplarına Görə Məsləhətlər\n\n### Uşaqlar və Yeniyetmələr\n- Aktiv həyat tərzi\n- Kalsium və vitamin D qəbulu\n- İdman fəaliyyətləri\n- Düzgün duruş vərdişləri\n\n### Yetişkinlər\n- Müntəzəm məşq\n- Sağlam qidalanma\n- Stress idarəetməsi\n- Düzenli tibbi yoxlamalar\n\n### Yaşlılar\n- Düşmə qarşısının alınması\n- Balans məşqləri\n- Osteoporoz skrininqi\n- Dərman qarşılıqlı təsirinin nəzarəti\n\n## Qarşısının Alınması Strategiyaları\n\n### Düşmə Qarşısının Alınması\n- Ev təhlükəsizliyi\n- Düzgün işıqlandırma\n- Maneələrin aradan qaldırılması\n- Balans məşqləri\n\n### Ergonomika\n- Düzgün iş yeri qurulması\n- Uyğun mebel\n- Düzgün qaldırma texnikası\n- Fasilələr\n\n## Erkən Xəbərdarlıq Əlamətləri\n\n### Diqqət edilməli simptomlar\n- Davamlı oynaq ağrısı\n- Səhər sərtliyi\n- Şişkinlik\n- Hərəkət məhdudiyyəti\n- Gücsüzlük\n\n### Nə vaxt həkimə müraciət etməli\n- Ağrı günlük fəaliyyətləri məhdudlaşdırırsa\n- Simptomlar 2 həftədən çox davam edirsə\n- Deformasiya və ya qeyri-sabitlik varsa\n- Ateş və ya qızartı müşahidə olunursa\n\nSağlam həyat tərzi seçimləri ilə sümük və oynaq sağlamlığınızı qoruyub yaşam keyfiyyətinizi artıra bilərsiniz. Dr. Eryanılmaz həm müalicə, həm də qarşısının alınması sahəsində hərtərəfli məsləhətlər təqdim edir.",
      en: "Bone and joint health forms the foundation of our quality of life. With proper lifestyle choices, it's possible to slow the aging process and stay strong.\n\n## Bone Health\n\n### Calcium and Vitamin D\nThe essential components of bone health.\n\n#### Calcium Sources\n- Dairy products\n- Green leafy vegetables\n- Fish (with bones)\n- Nuts\n- Calcium-fortified products\n\n#### Vitamin D Sources\n- Sunlight\n- Fatty fish\n- Vitamin D supplements\n- Fortified products\n\n### Physical Activity\nStrengthens bones and increases density.\n\n#### Recommended exercises\n- Weight lifting\n- Walking and running\n- Dancing\n- Stair climbing\n- Resistance training\n\n## Joint Health\n\n### Flexibility and Range of Motion\nRegular movement is essential for keeping joints healthy.\n\n#### Beneficial exercises\n- Stretching\n- Yoga\n- Swimming\n- Tai Chi\n- Pilates\n\n### Weight Management\nExcess weight creates additional pressure on joints.\n\n#### Maintaining healthy weight\n- Balanced nutrition\n- Regular exercise\n- Portion control\n- Hydration\n\n## Nutrition Tips\n\n### Anti-inflammatory Foods\n- Omega-3 fatty acids\n- Antioxidants\n- Fresh fruits and vegetables\n- Whole grain products\n\n### Foods to Limit\n- Sugar\n- Processed foods\n- Excessive salt\n- Trans fats\n\n## Age-Specific Recommendations\n\n### Children and Adolescents\n- Active lifestyle\n- Calcium and vitamin D intake\n- Sports activities\n- Proper posture habits\n\n### Adults\n- Regular exercise\n- Healthy nutrition\n- Stress management\n- Regular medical checkups\n\n### Elderly\n- Fall prevention\n- Balance exercises\n- Osteoporosis screening\n- Medication interaction monitoring\n\n## Prevention Strategies\n\n### Fall Prevention\n- Home safety\n- Proper lighting\n- Removing obstacles\n- Balance exercises\n\n### Ergonomics\n- Proper workspace setup\n- Appropriate furniture\n- Correct lifting technique\n- Breaks\n\n## Early Warning Signs\n\n### Symptoms to watch for\n- Persistent joint pain\n- Morning stiffness\n- Swelling\n- Limited movement\n- Weakness\n\n### When to see a doctor\n- Pain limits daily activities\n- Symptoms persist for more than 2 weeks\n- Deformity or instability present\n- Fever or redness observed\n\nWith healthy lifestyle choices, you can protect your bone and joint health and improve your quality of life. Dr. Eryanılmaz provides comprehensive advice in both treatment and prevention.",
      tr: "Kemik ve eklem sağlığı yaşam kalitemizin temelini oluşturur. Doğru yaşam tarzı seçimleri ile yaşlanma sürecini yavaşlatmak ve güçlü kalmak mümkündür.\n\n## Kemik Sağlığı\n\n### Kalsiyum ve D Vitamini\nKemik sağlığının temel bileşenleridir.\n\n#### Kalsiyum Kaynakları\n- Süt ürünleri\n- Yeşil yapraklı sebzeler\n- Balık (kılçıkları ile)\n- Kuruyemişler\n- Kalsiyumla zenginleştirilmiş ürünler\n\n#### D Vitamini Kaynakları\n- Güneş ışığı\n- Yağlı balıklar\n- D vitamini takviyeleri\n- Zenginleştirilmiş ürünler\n\n### Fiziksel Aktivite\nKemikleri güçlendirir ve yoğunluğunu artırır.\n\n#### Önerilen egzersizler\n- Ağırlık kaldırma\n- Yürüyüş ve koşu\n- Dans\n- Merdiven çıkma\n- Direnç antrenmanları\n\n## Eklem Sağlığı\n\n### Esneklik ve Hareket Aralığı\nEklemlerin sağlıklı kalması için düzenli hareket şarttır.\n\n#### Faydalı egzersizler\n- Germe\n- Yoga\n- Yüzme\n- Tai Chi\n- Pilates\n\n### Kilo Yönetimi\nFazla kilo eklemler üzerinde ek baskı yaratır.\n\n#### Sağlıklı kilo koruma\n- Dengeli beslenme\n- Düzenli egzersiz\n- Porsiyon kontrolü\n- Hidrasyon\n\n## Beslenme İpuçları\n\n### Anti-inflamatuar Gıdalar\n- Omega-3 yağ asitleri\n- Antioksidanlar\n- Taze meyve ve sebzeler\n- Tam tahıl ürünleri\n\n### Sınırlandırılması Gereken Gıdalar\n- Şeker\n- İşlenmiş gıdalar\n- Aşırı tuz\n- Trans yağlar\n\n## Yaş Gruplarına Göre Öneriler\n\n### Çocuklar ve Ergenler\n- Aktif yaşam tarzı\n- Kalsiyum ve D vitamini alımı\n- Spor aktiviteleri\n- Doğru duruş alışkanlıkları\n\n### Yetişkinler\n- Düzenli egzersiz\n- Sağlıklı beslenme\n- Stres yönetimi\n- Düzenli tıbbi kontroller\n\n### Yaşlılar\n- Düşme önleme\n- Denge egzersizleri\n- Osteoporoz taraması\n- İlaç etkileşimi takibi\n\n## Önleme Stratejileri\n\n### Düşme Önleme\n- Ev güvenliği\n- Uygun aydınlatma\n- Engellerin kaldırılması\n- Denge egzersizleri\n\n### Ergonomi\n- Doğru çalışma alanı kurulumu\n- Uygun mobilya\n- Doğru kaldırma tekniği\n- Molalar\n\n## Erken Uyarı Belirtileri\n\n### Dikkat edilmesi gereken semptomlar\n- Sürekli eklem ağrısı\n- Sabah sertliği\n- Şişlik\n- Hareket kısıtlılığı\n- Güçsüzlük\n\n### Ne zaman doktora başvurmalı\n- Ağrı günlük aktiviteleri kısıtlıyorsa\n- Semptomlar 2 haftadan fazla sürüyorsa\n- Deformite veya instabilite varsa\n- Ateş veya kızarıklık gözleniyorsa\n\nSağlıklı yaşam tarzı seçimleri ile kemik ve eklem sağlığınızı koruyup yaşam kalitenizi artırabilirsiniz. Dr. Eryanılmaz hem tedavi hem de önleme konusunda kapsamlı tavsiyelerde bulunur."
    },
    category: categories[4],
    image: "https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-11-05",
    readTime: 9
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