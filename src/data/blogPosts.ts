export interface BlogPost {
  id: string;
  title: {
    en: string;
    tr: string;
    az: string;
  };
  slug: string;
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
  author: string;
  publishedAt: string;
  category: {
    name: {
      en: string;
      tr: string;
      az: string;
    };
  };
  tags: string[];
  readTime: number;
  image: string;
  date: string;
}

export const categories = [
  'Shoulder Conditions',
  'Elbow Conditions', 
  'Knee Conditions',
  'Pediatric Orthopedics',
  'Hand & Wrist',
  'General Orthopedics',
  'Sports Medicine'
];

export const blogPosts: BlogPost[] = [
  // Shoulder Pain & Injuries
  {
    id: '1',
    title: {
      en: 'Understanding Rotator Cuff Tears: Causes, Symptoms, and Treatment Options',
      tr: 'Rotator Manşet Yırtıklarını Anlamak: Nedenleri, Belirtileri ve Tedavi Seçenekleri',
      az: 'Rotator Manşet Cırılmalarını Başa Düşmək: Səbəbləri, Əlamətləri və Müalicə Variantları'
    },
    slug: 'understanding-rotator-cuff-tears',
    excerpt: {
      en: 'Learn about the most common shoulder injury affecting millions worldwide, including modern treatment approaches and recovery expectations.',
      tr: 'Dünya çapında milyonlarca kişiyi etkileyen en yaygın omuz yaralanması hakkında, modern tedavi yaklaşımları ve iyileşme beklentileri dahil bilgi edinin.',
      az: 'Dünyada milyonlarla insanı təsir edən ən geniş yayılmış çiyin zədəsi haqqında, müasir müalicə yanaşmaları və sağalma gözləntiləri daxil olmaqla məlumat əldə edin.'
    },
    content: {
      en: `
        <h2>What is a Rotator Cuff Tear?</h2>
        <p>The rotator cuff is a group of four muscles and tendons that surround the shoulder joint, providing stability and enabling a wide range of motion. When one or more of these tendons tear, it can cause significant pain and functional limitation.</p>
        
        <h3>Types of Rotator Cuff Tears</h3>
        <ul>
          <li><strong>Partial tears:</strong> The tendon is damaged but not completely severed</li>
          <li><strong>Full-thickness tears:</strong> The tendon is completely torn through</li>
          <li><strong>Acute tears:</strong> Sudden injury from trauma or accident</li>
          <li><strong>Degenerative tears:</strong> Gradual wear and tear over time</li>
        </ul>

        <h3>Common Symptoms</h3>
        <p>Patients with rotator cuff tears typically experience:</p>
        <ul>
          <li>Pain that worsens at night or when lying on the affected side</li>
          <li>Weakness when lifting or rotating the arm</li>
          <li>Crackling sensation when moving the shoulder</li>
          <li>Limited range of motion</li>
        </ul>

        <h3>Treatment Approaches</h3>
        <p>Treatment depends on the size and type of tear, patient age, and activity level. Options include:</p>
        
        <h4>Conservative Treatment</h4>
        <ul>
          <li>Physical therapy to strengthen surrounding muscles</li>
          <li>Anti-inflammatory medications</li>
          <li>Corticosteroid injections</li>
          <li>Activity modification</li>
        </ul>

        <h4>Surgical Treatment</h4>
        <p>When conservative treatment fails, arthroscopic repair offers excellent outcomes with minimal invasiveness. The procedure involves reattaching the torn tendon to the bone using specialized anchors.</p>

        <h3>Recovery and Rehabilitation</h3>
        <p>Recovery typically takes 4-6 months, with physical therapy playing a crucial role in restoring strength and function. Most patients return to their previous activity level with proper rehabilitation.</p>
      `,
      tr: `
        <h2>Rotator Manşet Yırtığı Nedir?</h2>
        <p>Rotator manşet, omuz eklemini çevreleyen dört kas ve tendon grubundan oluşur, stabilite sağlar ve geniş hareket aralığı sağlar. Bu tendonlardan bir veya daha fazlası yırtıldığında, önemli ağrı ve fonksiyonel kısıtlama yaratabilir.</p>
        
        <h3>Rotator Manşet Yırtığı Türleri</h3>
        <ul>
          <li><strong>Kısmi yırtıklar:</strong> Tendon hasar görmüş ancak tamamen kopmamış</li>
          <li><strong>Tam kalınlık yırtıkları:</strong> Tendon tamamen yırtılmış</li>
          <li><strong>Akut yırtıklar:</strong> Travma veya kazadan ani yaralanma</li>
          <li><strong>Dejeneratif yırtıklar:</strong> Zamanla kademeli aşınma</li>
        </ul>

        <h3>Yaygın Belirtiler</h3>
        <p>Rotator manşet yırtığı olan hastalar genellikle şunları yaşar:</p>
        <ul>
          <li>Geceleri veya etkilenen tarafta yatarken artan ağrı</li>
          <li>Kol kaldırırken veya döndürürken güçsüzlük</li>
          <li>Omuz hareket ettirirken çıtırdama hissi</li>
          <li>Sınırlı hareket aralığı</li>
        </ul>

        <h3>Tedavi Yaklaşımları</h3>
        <p>Tedavi, yırtığın boyutu ve türü, hastanın yaşı ve aktivite düzeyine bağlıdır. Seçenekler şunları içerir:</p>
        
        <h4>Konservatif Tedavi</h4>
        <ul>
          <li>Çevre kasları güçlendirmek için fizik tedavi</li>
          <li>Anti-inflamatuar ilaçlar</li>
          <li>Kortikosteroid enjeksiyonları</li>
          <li>Aktivite modifikasyonu</li>
        </ul>

        <h4>Cerrahi Tedavi</h4>
        <p>Konservatif tedavi başarısız olduğunda, artroskopik onarım minimal invazivlikle mükemmel sonuçlar sunar. Prosedür, özel ankorlar kullanarak yırtık tendonu kemiğe yeniden bağlamayı içerir.</p>

        <h3>İyileşme ve Rehabilitasyon</h3>
        <p>İyileşme genellikle 4-6 ay sürer, fizik tedavi güç ve fonksiyonu restore etmede kritik rol oynar. Çoğu hasta uygun rehabilitasyonla önceki aktivite seviyesine döner.</p>
      `,
      az: `
        <h2>Rotator Manşet Cırılması Nədir?</h2>
        <p>Rotator manşet çiyin oynağını əhatə edən dörd əzələ və vətər qrupundan ibarətdir, sabitlik təmin edir və geniş hərəkət diapazonuna imkan verir. Bu vətərlərdən bir və ya bir neçəsi cırıldıqda, əhəmiyyətli ağrı və funksional məhdudiyyət yarada bilər.</p>
        
        <h3>Rotator Manşet Cırılması Növləri</h3>
        <ul>
          <li><strong>Qismən cırılmalar:</strong> Vətər zədələnmişdir, lakin tamamilə qopmamışdır</li>
          <li><strong>Tam qalınlıq cırılmaları:</strong> Vətər tamamilə cırılmışdır</li>
          <li><strong>Kəskin cırılmalar:</strong> Travma və ya qəzadan qəfil zədə</li>
          <li><strong>Degenerativ cırılmalar:</strong> Zamanla tədricən köhnəlmə</li>
        </ul>

        <h3>Ümumi Əlamətlər</h3>
        <p>Rotator manşet cırılması olan xəstələr adətən bunları yaşayırlar:</p>
        <ul>
          <li>Gecələr və ya təsirlənmiş tərəfdə uzanarkən pisləşən ağrı</li>
          <li>Qolu qaldırarkən və ya döndərərkən zəiflik</li>
          <li>Çiyni hərəkət etdirərkən xırıltı hissi</li>
          <li>Məhdud hərəkət diapazonu</li>
        </ul>

        <h3>Müalicə Yanaşmaları</h3>
        <p>Müalicə cırılmanın ölçüsü və növü, xəstənin yaşı və fəaliyyət səviyyəsindən asılıdır. Variantlar bunları əhatə edir:</p>
        
        <h4>Konservativ Müalicə</h4>
        <ul>
          <li>Ətraf əzələləri gücləndirmək üçün fiziki terapiya</li>
          <li>İltihab əleyhinə dərmanlar</li>
          <li>Kortikosteroid inyeksiyaları</li>
          <li>Fəaliyyət modifikasiyası</li>
        </ul>

        <h4>Cərrahi Müalicə</h4>
        <p>Konservativ müalicə uğursuz olduqda, artroskopik təmir minimal invazivliklə əla nəticələr təklif edir. Prosedur xüsusi ankorlardan istifadə edərək cırılmış vətəri sümüyə yenidən bağlamağı əhatə edir.</p>

        <h3>Sağalma və Reabilitasiya</h3>
        <p>Sağalma adətən 4-6 ay çəkir, fiziki terapiya güc və funksiyanı bərpa etməkdə həlledici rol oynayır. Əksər xəstələr düzgün reabilitasiya ilə əvvəlki fəaliyyət səviyyəsinə qayıdırlar.</p>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-15',
    date: '2024-12-15',
    category: {
      name: {
        en: 'Shoulder Conditions',
        tr: 'Omuz Rahatsızlıkları',
        az: 'Çiyin Xəstəlikləri'
      }
    },
    tags: ['rotator cuff', 'shoulder pain', 'arthroscopic surgery', 'sports medicine'],
    readTime: 8,
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg'
  },
  {
    id: '2',
    title: {
      en: 'Frozen Shoulder: Breaking Through the Stiffness',
      tr: 'Donuk Omuz: Sertliği Aşmak',
      az: 'Donmuş Çiyin: Sərtliyi Aşmaq'
    },
    slug: 'frozen-shoulder-treatment-guide',
    excerpt: {
      en: 'Comprehensive guide to understanding and treating adhesive capsulitis, including the latest therapeutic approaches.',
      tr: 'Yapışkan kapsülit anlama ve tedavi etme konusunda kapsamlı rehber, en son terapötik yaklaşımlar dahil.',
      az: 'Yapışqan kapsulit anlama və müalicə etmə üzrə ətraflı bələdçi, ən son terapevtik yanaşmalar daxil olmaqla.'
    },
    content: {
      en: `
        <h2>Understanding Frozen Shoulder (Adhesive Capsulitis)</h2>
        <p>Frozen shoulder is a condition characterized by stiffness and pain in the shoulder joint. It develops gradually, worsens over time, and can significantly impact daily activities.</p>

        <h3>The Three Stages of Frozen Shoulder</h3>
        <ol>
          <li><strong>Freezing Stage (2-9 months):</strong> Gradual onset of pain and stiffness</li>
          <li><strong>Frozen Stage (4-12 months):</strong> Pain may decrease but stiffness remains severe</li>
          <li><strong>Thawing Stage (5-24 months):</strong> Gradual return of motion</li>
        </ol>

        <h3>Risk Factors</h3>
        <ul>
          <li>Age (40-60 years)</li>
          <li>Diabetes</li>
          <li>Thyroid disorders</li>
          <li>Prolonged immobilization</li>
          <li>Previous shoulder injury</li>
        </ul>

        <h3>Treatment Strategies</h3>
        <p>Early intervention can significantly improve outcomes and reduce the duration of symptoms.</p>

        <h4>Non-Surgical Approaches</h4>
        <ul>
          <li>Targeted physical therapy</li>
          <li>Corticosteroid injections</li>
          <li>Hydrodilatation (joint distension)</li>
          <li>Pain management techniques</li>
        </ul>

        <h4>Surgical Options</h4>
        <p>For severe cases, arthroscopic capsular release can provide rapid improvement in range of motion and pain relief.</p>
      `,
      tr: `
        <h2>Donuk Omuz (Yapışkan Kapsülit) Anlama</h2>
        <p>Donuk omuz, omuz ekleminde sertlik ve ağrı ile karakterize edilen bir durumdur. Kademeli olarak gelişir, zamanla kötüleşir ve günlük aktiviteleri önemli ölçüde etkileyebilir.</p>

        <h3>Donuk Omuzun Üç Aşaması</h3>
        <ol>
          <li><strong>Donma Aşaması (2-9 ay):</strong> Ağrı ve sertliğin kademeli başlangıcı</li>
          <li><strong>Donuk Aşama (4-12 ay):</strong> Ağrı azalabilir ancak sertlik şiddetli kalır</li>
          <li><strong>Çözülme Aşaması (5-24 ay):</strong> Hareketin kademeli dönüşü</li>
        </ol>

        <h3>Risk Faktörleri</h3>
        <ul>
          <li>Yaş (40-60 yaş)</li>
          <li>Diyabet</li>
          <li>Tiroid bozuklukları</li>
          <li>Uzun süreli hareketsizlik</li>
          <li>Önceki omuz yaralanması</li>
        </ul>

        <h3>Tedavi Stratejileri</h3>
        <p>Erken müdahale sonuçları önemli ölçüde iyileştirebilir ve semptom süresini azaltabilir.</p>

        <h4>Cerrahi Olmayan Yaklaşımlar</h4>
        <ul>
          <li>Hedefli fizik tedavi</li>
          <li>Kortikosteroid enjeksiyonları</li>
          <li>Hidrodilatasyon (eklem distansiyonu)</li>
          <li>Ağrı yönetimi teknikleri</li>
        </ul>

        <h4>Cerrahi Seçenekler</h4>
        <p>Şiddetli vakalar için, artroskopik kapsüler salım hareket aralığında ve ağrı rahatlamasında hızlı iyileşme sağlayabilir.</p>
      `,
      az: `
        <h2>Donmuş Çiyin (Yapışqan Kapsulit) Anlama</h2>
        <p>Donmuş çiyin çiyin oynağında sərtlik və ağrı ilə xarakterizə olunan vəziyyətdir. Tədricən inkişaf edir, zamanla pisləşir və gündəlik fəaliyyətlərə əhəmiyyətli təsir göstərə bilər.</p>

        <h3>Donmuş Çiyinin Üç Mərhələsi</h3>
        <ol>
          <li><strong>Donma Mərhələsi (2-9 ay):</strong> Ağrı və sərtliyin tədricən başlanması</li>
          <li><strong>Donmuş Mərhələ (4-12 ay):</strong> Ağrı azala bilər, lakin sərtlik şiddətli qalır</li>
          <li><strong>Ərimə Mərhələsi (5-24 ay):</strong> Hərəkətin tədricən qayıdışı</li>
        </ol>

        <h3>Risk Faktorları</h3>
        <ul>
          <li>Yaş (40-60 yaş)</li>
          <li>Diabet</li>
          <li>Qalxanabənzər vəzi pozğunluqları</li>
          <li>Uzunmüddətli hərəkətsizlik</li>
          <li>Əvvəlki çiyin zədəsi</li>
        </ul>

        <h3>Müalicə Strategiyaları</h3>
        <p>Erkən müdaxilə nəticələri əhəmiyyətli dərəcədə yaxşılaşdıra və simptom müddətini azalda bilər.</p>

        <h4>Cərrahi Olmayan Yanaşmalar</h4>
        <ul>
          <li>Hədəflənmiş fiziki terapiya</li>
          <li>Kortikosteroid inyeksiyaları</li>
          <li>Hidrodilatasiya (oynaq genişlənməsi)</li>
          <li>Ağrı idarəetmə texnikaları</li>
        </ul>

        <h4>Cərrahi Variantlar</h4>
        <p>Şiddətli hallar üçün, artroskopik kapsulyar buraxılış hərəkət diapazonunda və ağrı rahatlamasında sürətli yaxşılaşma təmin edə bilər.</p>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-10',
    date: '2024-12-10',
    category: {
      name: {
        en: 'Shoulder Conditions',
        tr: 'Omuz Rahatsızlıkları',
        az: 'Çiyin Xəstəlikləri'
      }
    },
    tags: ['frozen shoulder', 'adhesive capsulitis', 'shoulder stiffness', 'physical therapy'],
    readTime: 6,
    image: 'https://images.pexels.com/photos/7659566/pexels-photo-7659566.jpeg'
  },

  // Elbow Conditions
  {
    id: '3',
    title: {
      en: 'Tennis Elbow: More Than Just a Sports Injury',
      tr: 'Tenisçi Dirseği: Sadece Spor Yaralanmasından Fazlası',
      az: 'Tennis Dirsəyi: Sadəcə İdman Zədəsindən Çox'
    },
    slug: 'tennis-elbow-comprehensive-treatment',
    excerpt: {
      en: 'Discover why tennis elbow affects people beyond tennis players and learn about effective treatment strategies.',
      tr: 'Tenisçi dirseğinin neden tenisçilerin ötesinde insanları etkilediğini keşfedin ve etkili tedavi stratejileri hakkında bilgi edinin.',
      az: 'Tennis dirsəyinin niyə tennis oyunçularından başqa insanları da təsir etdiyini kəşf edin və təsirli müalicə strategiyaları haqqında öyrənin.'
    },
    content: {
      en: `
        <h2>What is Tennis Elbow?</h2>
        <p>Tennis elbow, or lateral epicondylitis, is a painful condition caused by overuse of the muscles and tendons in the forearm. Despite its name, it affects many people who don't play tennis.</p>

        <h3>Common Causes</h3>
        <ul>
          <li>Repetitive gripping activities</li>
          <li>Computer work and typing</li>
          <li>Manual labor and tools use</li>
          <li>Racquet sports</li>
          <li>Age-related tendon degeneration</li>
        </ul>

        <h3>Symptoms and Diagnosis</h3>
        <p>Key symptoms include:</p>
        <ul>
          <li>Pain on the outside of the elbow</li>
          <li>Weakness in grip strength</li>
          <li>Pain when lifting or gripping objects</li>
          <li>Stiffness in the morning</li>
        </ul>

        <h3>Treatment Protocol</h3>
        <h4>Conservative Management</h4>
        <ul>
          <li>Rest and activity modification</li>
          <li>Eccentric strengthening exercises</li>
          <li>Bracing and support</li>
          <li>Platelet-rich plasma (PRP) therapy</li>
        </ul>

        <h4>Advanced Treatments</h4>
        <p>For persistent cases, minimally invasive procedures such as tendon release or debridement can provide excellent long-term results.</p>

        <h3>Prevention Strategies</h3>
        <ul>
          <li>Proper technique in sports and work</li>
          <li>Regular strengthening exercises</li>
          <li>Ergonomic workplace setup</li>
          <li>Gradual increase in activity levels</li>
        </ul>
      `,
      tr: `
        <h2>Tenisçi Dirseği Nedir?</h2>
        <p>Tenisçi dirseği veya lateral epikondilit, ön koldaki kaslar ve tendonların aşırı kullanımından kaynaklanan ağrılı bir durumdur. Adına rağmen, tenis oynamayan birçok kişiyi etkiler.</p>

        <h3>Yaygın Nedenler</h3>
        <ul>
          <li>Tekrarlayan kavrama aktiviteleri</li>
          <li>Bilgisayar çalışması ve yazma</li>
          <li>Manuel işçilik ve alet kullanımı</li>
          <li>Raket sporları</li>
          <li>Yaşa bağlı tendon dejenerasyonu</li>
        </ul>

        <h3>Belirtiler ve Tanı</h3>
        <p>Temel belirtiler şunları içerir:</p>
        <ul>
          <li>Dirseğin dışında ağrı</li>
          <li>Kavrama gücünde zayıflık</li>
          <li>Nesneleri kaldırırken veya kavrarken ağrı</li>
          <li>Sabah sertliği</li>
        </ul>

        <h3>Tedavi Protokolü</h3>
        <h4>Konservatif Yönetim</h4>
        <ul>
          <li>Dinlenme ve aktivite modifikasyonu</li>
          <li>Eksantrik güçlendirme egzersizleri</li>
          <li>Destekleme ve destek</li>
          <li>Trombositten zengin plazma (PRP) tedavisi</li>
        </ul>

        <h4>İleri Tedaviler</h4>
        <p>İnatçı vakalar için, tendon salımı veya debridman gibi minimal invaziv prosedürler mükemmel uzun vadeli sonuçlar sağlayabilir.</p>

        <h3>Önleme Stratejileri</h3>
        <ul>
          <li>Spor ve işte doğru teknik</li>
          <li>Düzenli güçlendirme egzersizleri</li>
          <li>Ergonomik işyeri kurulumu</li>
          <li>Aktivite seviyelerinde kademeli artış</li>
        </ul>
      `,
      az: `
        <h2>Tennis Dirsəyi Nədir?</h2>
        <p>Tennis dirsəyi və ya lateral epikondilit, qolun ön hissəsindəki əzələlər və vətərlərin həddindən artıq istifadəsindən yaranan ağrılı vəziyyətdir. Adına baxmayaraq, tennis oynamayan bir çox insanı təsir edir.</p>

        <h3>Ümumi Səbəblər</h3>
        <ul>
          <li>Təkrarlanan tutma fəaliyyətləri</li>
          <li>Kompüter işi və yazma</li>
          <li>Əl işi və alət istifadəsi</li>
          <li>Raket idmanları</li>
          <li>Yaşa bağlı vətər degenerasiyası</li>
        </ul>

        <h3>Əlamətlər və Diaqnoz</h3>
        <p>Əsas əlamətlər bunları əhatə edir:</p>
        <ul>
          <li>Dirsəyin xaricində ağrı</li>
          <li>Tutma gücündə zəiflik</li>
          <li>Əşyaları qaldırarkən və ya tutarkən ağrı</li>
          <li>Səhər sərtliyi</li>
        </ul>

        <h3>Müalicə Protokolu</h3>
        <h4>Konservativ İdarəetmə</h4>
        <ul>
          <li>Dincəlmə və fəaliyyət modifikasiyası</li>
          <li>Eksantrik gücləndiricı məşqlər</li>
          <li>Dəstəkləmə və dayaq</li>
          <li>Trombositlə zəngin plazma (PRP) terapiyası</li>
        </ul>

        <h4>İnkişaf etmiş Müalicələr</h4>
        <p>Davamlı hallar üçün, vətər buraxılması və ya debridman kimi minimal invaziv prosedurlar əla uzunmüddətli nəticələr təmin edə bilər.</p>

        <h3>Qarşısıalma Strategiyaları</h3>
        <ul>
          <li>İdmanda və işdə düzgün texnika</li>
          <li>Müntəzəm gücləndiricı məşqlər</li>
          <li>Erqonomik iş yeri qurulması</li>
          <li>Fəaliyyət səviyyələrində tədricən artım</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-08',
    date: '2024-12-08',
    category: {
      name: {
        en: 'Elbow Conditions',
        tr: 'Dirsek Rahatsızlıkları',
        az: 'Dirsək Xəstəlikləri'
      }
    },
    tags: ['tennis elbow', 'lateral epicondylitis', 'elbow pain', 'overuse injury'],
    readTime: 7,
    image: 'https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg'
  },

  // Knee Conditions
  {
    id: '4',
    title: {
      en: 'ACL Injuries: From Diagnosis to Full Recovery',
      tr: 'ACL Yaralanmaları: Tanıdan Tam İyileşmeye',
      az: 'ACL Zədələri: Diaqnozdan Tam Sağalmaya'
    },
    slug: 'acl-injury-complete-guide',
    excerpt: {
      en: 'Complete guide to ACL injuries, including modern reconstruction techniques and rehabilitation protocols.',
      tr: 'Modern rekonstrüksiyon teknikleri ve rehabilitasyon protokolleri dahil ACL yaralanmaları için tam rehber.',
      az: 'Müasir rekonstruksiya texnikaları və reabilitasiya protokolları daxil olmaqla ACL zədələri üçün tam bələdçi.'
    },
    content: {
      en: `
        <h2>Understanding ACL Injuries</h2>
        <p>The anterior cruciate ligament (ACL) is one of the key ligaments that help stabilize the knee joint. ACL injuries are common in sports that involve sudden stops, jumps, or changes in direction.</p>

        <h3>Mechanism of Injury</h3>
        <ul>
          <li>Non-contact pivoting movements</li>
          <li>Landing from jumps</li>
          <li>Sudden deceleration</li>
          <li>Direct contact to the knee</li>
        </ul>

        <h3>Diagnosis and Assessment</h3>
        <p>Accurate diagnosis involves:</p>
        <ul>
          <li>Physical examination tests</li>
          <li>MRI imaging</li>
          <li>Assessment of associated injuries</li>
          <li>Functional testing</li>
        </ul>

        <h3>Treatment Options</h3>
        <h4>Non-Surgical Management</h4>
        <p>Suitable for older, less active patients or partial tears:</p>
        <ul>
          <li>Intensive physical therapy</li>
          <li>Bracing for stability</li>
          <li>Activity modification</li>
        </ul>

        <h4>Surgical Reconstruction</h4>
        <p>Recommended for active individuals and complete tears. Modern techniques include:</p>
        <ul>
          <li>Hamstring tendon grafts</li>
          <li>Patellar tendon grafts</li>
          <li>All-inside reconstruction techniques</li>
          <li>Anatomic tunnel placement</li>
        </ul>

        <h3>Rehabilitation Timeline</h3>
        <ul>
          <li><strong>0-2 weeks:</strong> Pain and swelling control</li>
          <li><strong>2-6 weeks:</strong> Range of motion restoration</li>
          <li><strong>6-12 weeks:</strong> Strength building</li>
          <li><strong>3-6 months:</strong> Sport-specific training</li>
          <li><strong>6-9 months:</strong> Return to sports</li>
        </ul>
      `,
      tr: `
        <h2>ACL Yaralanmalarını Anlama</h2>
        <p>Ön çapraz bağ (ACL), diz eklemini stabilize etmeye yardımcı olan temel bağlardan biridir. ACL yaralanmaları ani duruşlar, zıplamalar veya yön değişiklikleri içeren sporlarda yaygındır.</p>

        <h3>Yaralanma Mekanizması</h3>
        <ul>
          <li>Temassız pivot hareketleri</li>
          <li>Zıplamalardan iniş</li>
          <li>Ani yavaşlama</li>
          <li>Dize doğrudan temas</li>
        </ul>

        <h3>Tanı ve Değerlendirme</h3>
        <p>Doğru tanı şunları içerir:</p>
        <ul>
          <li>Fizik muayene testleri</li>
          <li>MRI görüntüleme</li>
          <li>İlişkili yaralanmaların değerlendirilmesi</li>
          <li>Fonksiyonel test</li>
        </ul>

        <h3>Tedavi Seçenekleri</h3>
        <h4>Cerrahi Olmayan Yönetim</h4>
        <p>Yaşlı, daha az aktif hastalar veya kısmi yırtıklar için uygun:</p>
        <ul>
          <li>Yoğun fizik tedavi</li>
          <li>Stabilite için destekleme</li>
          <li>Aktivite modifikasyonu</li>
        </ul>

        <h4>Cerrahi Rekonstrüksiyon</h4>
        <p>Aktif bireyler ve tam yırtıklar için önerilir. Modern teknikler şunları içerir:</p>
        <ul>
          <li>Hamstring tendon greftleri</li>
          <li>Patellar tendon greftleri</li>
          <li>Tamamen içeriden rekonstrüksiyon teknikleri</li>
          <li>Anatomik tünel yerleştirme</li>
        </ul>

        <h3>Rehabilitasyon Zaman Çizelgesi</h3>
        <ul>
          <li><strong>0-2 hafta:</strong> Ağrı ve şişlik kontrolü</li>
          <li><strong>2-6 hafta:</strong> Hareket aralığı restorasyonu</li>
          <li><strong>6-12 hafta:</strong> Güç oluşturma</li>
          <li><strong>3-6 ay:</strong> Spora özgü antrenman</li>
          <li><strong>6-9 ay:</strong> Spora dönüş</li>
        </ul>
      `,
      az: `
        <h2>ACL Zədələrini Anlama</h2>
        <p>Ön çarpaz bağ (ACL) diz oynağını sabitləşdirməyə kömək edən əsas bağlardan biridir. ACL zədələri qəfil dayanmalar, tullanmalar və ya istiqamət dəyişiklikləri olan idman növlərində geniş yayılmışdır.</p>

        <h3>Zədə Mexanizmi</h3>
        <ul>
          <li>Təmassız pivot hərəkətləri</li>
          <li>Tullanmalardan enmə</li>
          <li>Qəfil yavaşlama</li>
          <li>Dizə birbaşa təmas</li>
        </ul>

        <h3>Diaqnoz və Qiymətləndirmə</h3>
        <p>Dəqiq diaqnoz bunları əhatə edir:</p>
        <ul>
          <li>Fiziki müayinə testləri</li>
          <li>MRI görüntüləmə</li>
          <li>Əlaqəli zədələrin qiymətləndirilməsi</li>
          <li>Funksional test</li>
        </ul>

        <h3>Müalicə Variantları</h3>
        <h4>Cərrahi Olmayan İdarəetmə</h4>
        <p>Yaşlı, daha az aktiv xəstələr və ya qismən cırılmalar üçün uyğundur:</p>
        <ul>
          <li>İntensiv fiziki terapiya</li>
          <li>Sabitlik üçün dəstəkləmə</li>
          <li>Fəaliyyət modifikasiyası</li>
        </ul>

        <h4>Cərrahi Rekonstruksiya</h4>
        <p>Aktiv şəxslər və tam cırılmalar üçün tövsiyə olunur. Müasir texnikalar bunları əhatə edir:</p>
        <ul>
          <li>Hamstring vətər qreftləri</li>
          <li>Patellar vətər qreftləri</li>
          <li>Tamamilə daxildən rekonstruksiya texnikaları</li>
          <li>Anatomik tunel yerləşdirilməsi</li>
        </ul>

        <h3>Reabilitasiya Vaxt Cədvəli</h3>
        <ul>
          <li><strong>0-2 həftə:</strong> Ağrı və şişkinlik nəzarəti</li>
          <li><strong>2-6 həftə:</strong> Hərəkət diapazonunun bərpası</li>
          <li><strong>6-12 həftə:</strong> Güc qurma</li>
          <li><strong>3-6 ay:</strong> İdmana xüsusi məşq</li>
          <li><strong>6-9 ay:</strong> İdmana qayıdış</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-05',
    date: '2024-12-05',
    category: {
      name: {
        en: 'Knee Conditions',
        tr: 'Diz Rahatsızlıkları',
        az: 'Diz Xəstəlikləri'
      }
    },
    tags: ['ACL injury', 'knee ligament', 'sports injury', 'knee reconstruction'],
    readTime: 9,
    image: 'https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg'
  },
  {
    id: '5',
    title: {
      en: 'Knee Replacement Surgery: What to Expect',
      tr: 'Diz Protezi Ameliyatı: Ne Beklemeli',
      az: 'Diz Protezi Əməliyyatı: Nə Gözləmək Lazımdır'
    },
    slug: 'knee-replacement-surgery-guide',
    excerpt: {
      en: 'Comprehensive guide to knee replacement surgery, including preparation, procedure, and recovery expectations.',
      tr: 'Hazırlık, prosedür ve iyileşme beklentileri dahil diz protezi ameliyatı için kapsamlı rehber.',
      az: 'Hazırlıq, prosedur və sağalma gözləntiləri daxil olmaqla diz protezi əməliyyatı üçün ətraflı bələdçi.'
    },
    content: {
      en: `
        <h2>When is Knee Replacement Necessary?</h2>
        <p>Knee replacement surgery is considered when conservative treatments have failed to provide adequate pain relief and functional improvement in patients with severe arthritis or joint damage.</p>

        <h3>Types of Knee Replacement</h3>
        <ul>
          <li><strong>Total Knee Replacement:</strong> Replacement of all joint surfaces</li>
          <li><strong>Partial Knee Replacement:</strong> Replacement of only the damaged compartment</li>
          <li><strong>Revision Surgery:</strong> Replacement of a previous implant</li>
        </ul>

        <h3>Pre-Surgical Preparation</h3>
        <ul>
          <li>Comprehensive medical evaluation</li>
          <li>Pre-operative physical therapy</li>
          <li>Home preparation for recovery</li>
          <li>Nutritional optimization</li>
        </ul>

        <h3>The Surgical Procedure</h3>
        <p>Modern knee replacement surgery typically involves:</p>
        <ul>
          <li>Minimally invasive techniques</li>
          <li>Computer-assisted navigation</li>
          <li>Advanced implant materials</li>
          <li>Multimodal pain management</li>
        </ul>

        <h3>Recovery Timeline</h3>
        <ul>
          <li><strong>Hospital stay:</strong> 1-3 days</li>
          <li><strong>Initial recovery:</strong> 2-6 weeks</li>
          <li><strong>Full recovery:</strong> 3-6 months</li>
          <li><strong>Final outcome:</strong> 12 months</li>
        </ul>

        <h3>Long-term Outcomes</h3>
        <p>With over 10,000 successful knee replacements performed, patients can expect:</p>
        <ul>
          <li>Significant pain reduction</li>
          <li>Improved mobility and function</li>
          <li>Return to daily activities</li>
          <li>Implant longevity of 15-20 years</li>
        </ul>
      `,
      tr: `
        <h2>Diz Protezi Ne Zaman Gereklidir?</h2>
        <p>Diz protezi ameliyatı, konservatif tedavilerin şiddetli artrit veya eklem hasarı olan hastalarda yeterli ağrı rahatlaması ve fonksiyonel iyileşme sağlayamadığı durumlarda düşünülür.</p>

        <h3>Diz Protezi Türleri</h3>
        <ul>
          <li><strong>Total Diz Protezi:</strong> Tüm eklem yüzeylerinin değiştirilmesi</li>
          <li><strong>Kısmi Diz Protezi:</strong> Sadece hasarlı bölmenin değiştirilmesi</li>
          <li><strong>Revizyon Cerrahisi:</strong> Önceki implantın değiştirilmesi</li>
        </ul>

        <h3>Ameliyat Öncesi Hazırlık</h3>
        <ul>
          <li>Kapsamlı tıbbi değerlendirme</li>
          <li>Ameliyat öncesi fizik tedavi</li>
          <li>İyileşme için ev hazırlığı</li>
          <li>Beslenme optimizasyonu</li>
        </ul>

        <h3>Cerrahi Prosedür</h3>
        <p>Modern diz protezi ameliyatı genellikle şunları içerir:</p>
        <ul>
          <li>Minimal invaziv teknikler</li>
          <li>Bilgisayar destekli navigasyon</li>
          <li>İleri implant malzemeleri</li>
          <li>Multimodal ağrı yönetimi</li>
        </ul>

        <h3>İyileşme Zaman Çizelgesi</h3>
        <ul>
          <li><strong>Hastane kalışı:</strong> 1-3 gün</li>
          <li><strong>İlk iyileşme:</strong> 2-6 hafta</li>
          <li><strong>Tam iyileşme:</strong> 3-6 ay</li>
          <li><strong>Son sonuç:</strong> 12 ay</li>
        </ul>

        <h3>Uzun Vadeli Sonuçlar</h3>
        <p>10.000'den fazla başarılı diz protezi ameliyatı ile hastalar şunları bekleyebilir:</p>
        <ul>
          <li>Önemli ağrı azalması</li>
          <li>İyileştirilmiş mobilite ve fonksiyon</li>
          <li>Günlük aktivitelere dönüş</li>
          <li>15-20 yıl implant ömrü</li>
        </ul>
      `,
      az: `
        <h2>Diz Protezi Nə Vaxt Lazımdır?</h2>
        <p>Diz protezi əməliyyatı konservativ müalicələrin şiddətli artrit və ya oynaq zədəsi olan xəstələrdə kifayət qədər ağrı rahatlaması və funksional yaxşılaşma təmin edə bilmədiyi hallarda nəzərdən keçirilir.</p>

        <h3>Diz Protezi Növləri</h3>
        <ul>
          <li><strong>Total Diz Protezi:</strong> Bütün oynaq səthlərin dəyişdirilməsi</li>
          <li><strong>Qismən Diz Protezi:</strong> Yalnız zədələnmiş bölmənin dəyişdirilməsi</li>
          <li><strong>Reviziya Cərrahiyyəsi:</strong> Əvvəlki implantın dəyişdirilməsi</li>
        </ul>

        <h3>Əməliyyat Öncəsi Hazırlıq</h3>
        <ul>
          <li>Ətraflı tibbi qiymətləndirmə</li>
          <li>Əməliyyat öncəsi fiziki terapiya</li>
          <li>Sağalma üçün ev hazırlığı</li>
          <li>Qidalanma optimallaşdırılması</li>
        </ul>

        <h3>Cərrahi Prosedur</h3>
        <p>Müasir diz protezi əməliyyatı adətən bunları əhatə edir:</p>
        <ul>
          <li>Minimal invaziv texnikalar</li>
          <li>Kompüter dəstəkli naviqasiya</li>
          <li>İnkişaf etmiş implant materialları</li>
          <li>Multimodal ağrı idarəetməsi</li>
        </ul>

        <h3>Sağalma Vaxt Cədvəli</h3>
        <ul>
          <li><strong>Xəstəxanada qalma:</strong> 1-3 gün</li>
          <li><strong>İlkin sağalma:</strong> 2-6 həftə</li>
          <li><strong>Tam sağalma:</strong> 3-6 ay</li>
          <li><strong>Son nəticə:</strong> 12 ay</li>
        </ul>

        <h3>Uzunmüddətli Nəticələr</h3>
        <p>10.000-dən çox uğurlu diz protezi əməliyyatı ilə xəstələr bunları gözləyə bilərlər:</p>
        <ul>
          <li>Əhəmiyyətli ağrı azalması</li>
          <li>Yaxşılaşdırılmış hərəkətlilik və funksiya</li>
          <li>Gündəlik fəaliyyətlərə qayıdış</li>
          <li>15-20 il implant ömrü</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-01',
    date: '2024-12-01',
    category: {
      name: {
        en: 'Knee Conditions',
        tr: 'Diz Rahatsızlıkları',
        az: 'Diz Xəstəlikləri'
      }
    },
    tags: ['knee replacement', 'total knee arthroplasty', 'arthritis', 'joint surgery'],
    readTime: 10,
    image: 'https://images.pexels.com/photos/7659569/pexels-photo-7659569.jpeg'
  },

  // Hip Problems
  {
    id: '6',
    title: {
      en: 'Developmental Hip Dysplasia: Early Detection and Treatment',
      tr: 'Gelişimsel Kalça Displazisi: Erken Tanı ve Tedavi',
      az: 'İnkişaf Kalça Displaziyası: Erkən Aşkarlama və Müalicə'
    },
    slug: 'developmental-hip-dysplasia-guide',
    excerpt: {
      en: 'Essential information about hip dysplasia in infants and children, including screening, diagnosis, and treatment options.',
      tr: 'Bebek ve çocuklarda kalça displazisi hakkında tarama, tanı ve tedavi seçenekleri dahil temel bilgiler.',
      az: 'Körpələr və uşaqlarda kalça displaziyası haqqında skrininq, diaqnoz və müalicə variantları daxil olmaqla əsas məlumatlar.'
    },
    content: {
      en: `
        <h2>Understanding Developmental Hip Dysplasia (DDH)</h2>
        <p>Developmental hip dysplasia is a condition where the hip joint doesn't form properly, affecting the ball-and-socket joint of the hip. Early detection and treatment are crucial for optimal outcomes.</p>

        <h3>Risk Factors</h3>
        <ul>
          <li>Family history of DDH</li>
          <li>Breech presentation</li>
          <li>Female gender</li>
          <li>First-born children</li>
          <li>Oligohydramnios (low amniotic fluid)</li>
        </ul>

        <h3>Screening and Diagnosis</h3>
        <p>Early detection involves:</p>
        <ul>
          <li>Physical examination at birth</li>
          <li>Ultrasound screening (0-6 months)</li>
          <li>X-ray evaluation (after 6 months)</li>
          <li>Clinical assessment of hip stability</li>
        </ul>

        <h3>Treatment by Age</h3>
        <h4>Newborn to 6 Months</h4>
        <ul>
          <li>Pavlik harness (most common)</li>
          <li>Regular monitoring</li>
          <li>Parent education</li>
        </ul>

        <h4>6 Months to 2 Years</h4>
        <ul>
          <li>Closed reduction and casting</li>
          <li>Open reduction if necessary</li>
          <li>Surgical intervention</li>
        </ul>

        <h4>After 2 Years</h4>
        <ul>
          <li>Osteotomy procedures</li>
          <li>Complex reconstructive surgery</li>
          <li>Long-term follow-up</li>
        </ul>

        <h3>Outcomes and Prognosis</h3>
        <p>With over 500 pediatric hip surgeries performed, early treatment typically results in:</p>
        <ul>
          <li>Normal hip development</li>
          <li>Full range of motion</li>
          <li>Prevention of arthritis</li>
          <li>Normal activity levels</li>
        </ul>
      `,
      tr: `
        <h2>Gelişimsel Kalça Displazisini (GKD) Anlama</h2>
        <p>Gelişimsel kalça displazisi, kalça ekleminin düzgün oluşmadığı, kalçanın top ve yuva eklemini etkileyen bir durumdur. Erken tanı ve tedavi optimal sonuçlar için çok önemlidir.</p>

        <h3>Risk Faktörleri</h3>
        <ul>
          <li>GKD aile öyküsü</li>
          <li>Makat prezentasyonu</li>
          <li>Kadın cinsiyet</li>
          <li>İlk doğan çocuklar</li>
          <li>Oligohidramniyos (düşük amniyotik sıvı)</li>
        </ul>

        <h3>Tarama ve Tanı</h3>
        <p>Erken tanı şunları içerir:</p>
        <ul>
          <li>Doğumda fizik muayene</li>
          <li>Ultrason taraması (0-6 ay)</li>
          <li>X-ray değerlendirmesi (6 ay sonra)</li>
          <li>Kalça stabilitesinin klinik değerlendirmesi</li>
        </ul>

        <h3>Yaşa Göre Tedavi</h3>
        <h4>Yenidoğan - 6 Ay</h4>
        <ul>
          <li>Pavlik koşum takımı (en yaygın)</li>
          <li>Düzenli izleme</li>
          <li>Ebeveyn eğitimi</li>
        </ul>

        <h4>6 Ay - 2 Yaş</h4>
        <ul>
          <li>Kapalı redüksiyon ve alçılama</li>
          <li>Gerekirse açık redüksiyon</li>
          <li>Cerrahi müdahale</li>
        </ul>

        <h4>2 Yaş Sonrası</h4>
        <ul>
          <li>Osteotomi prosedürleri</li>
          <li>Karmaşık rekonstrüktif cerrahi</li>
          <li>Uzun vadeli takip</li>
        </ul>

        <h3>Sonuçlar ve Prognoz</h3>
        <p>500'den fazla pediatrik kalça cerrahisi ile erken tedavi genellikle şunlarla sonuçlanır:</p>
        <ul>
          <li>Normal kalça gelişimi</li>
          <li>Tam hareket aralığı</li>
          <li>Artrit önlenmesi</li>
          <li>Normal aktivite seviyeleri</li>
        </ul>
      `,
      az: `
        <h2>İnkişaf Kalça Displaziyasını (İKD) Anlama</h2>
        <p>İnkişaf kalça displaziyası kalça oynağının düzgün formalaşmadığı, kalçanın top və yuva oynağını təsir edən vəziyyətdir. Erkən aşkarlama və müalicə optimal nəticələr üçün həlledicidir.</p>

        <h3>Risk Faktorları</h3>
        <ul>
          <li>İKD ailə tarixi</li>
          <li>Makat prezentasiyası</li>
          <li>Qadın cinsi</li>
          <li>İlk doğulan uşaqlar</li>
          <li>Oliqohidramnios (aşağı amniotik maye)</li>
        </ul>

        <h3>Skrininq və Diaqnoz</h3>
        <p>Erkən aşkarlama bunları əhatə edir:</p>
        <ul>
          <li>Doğumda fiziki müayinə</li>
          <li>Ultrasəs skrininqi (0-6 ay)</li>
          <li>Rentgen qiymətləndirməsi (6 aydan sonra)</li>
          <li>Kalça sabitliyinin klinik qiymətləndirilməsi</li>
        </ul>

        <h3>Yaşa Görə Müalicə</h3>
        <h4>Yenidoğulan - 6 Ay</h4>
        <ul>
          <li>Pavlik qoşqu dəsti (ən geniş yayılmış)</li>
          <li>Müntəzəm izləmə</li>
          <li>Valideyn təhsili</li>
        </ul>

        <h4>6 Ay - 2 Yaş</h4>
        <ul>
          <li>Qapalı reduksiya və gips</li>
          <li>Lazım gələrsə açıq reduksiya</li>
          <li>Cərrahi müdaxilə</li>
        </ul>

        <h4>2 Yaşdan Sonra</h4>
        <ul>
          <li>Osteotomiya prosedurları</li>
          <li>Mürəkkəb rekonstruktiv cərrahiyyə</li>
          <li>Uzunmüddətli izləmə</li>
        </ul>

        <h3>Nəticələr və Proqnoz</h3>
        <p>500-dən çox pediatrik kalça cərrahiyyəsi ilə erkən müalicə adətən bunlarla nəticələnir:</p>
        <ul>
          <li>Normal kalça inkişafı</li>
          <li>Tam hərəkət diapazonu</li>
          <li>Artritin qarşısının alınması</li>
          <li>Normal fəaliyyət səviyyələri</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-28',
    date: '2024-11-28',
    category: {
      name: {
        en: 'Pediatric Orthopedics',
        tr: 'Pediatrik Ortopedi',
        az: 'Pediatrik Ortopediya'
      }
    },
    tags: ['hip dysplasia', 'pediatric orthopedics', 'infant hip', 'Pavlik harness'],
    readTime: 8,
    image: 'https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg'
  },

  // Foot & Ankle
  {
    id: '7',
    title: {
      en: 'Clubfoot Treatment: The Ponseti Method Success Story',
      tr: 'Çarpık Ayak Tedavisi: Ponseti Yöntemi Başarı Hikayesi',
      az: 'Əyri Ayaq Müalicəsi: Ponseti Metodu Uğur Hekayəsi'
    },
    slug: 'clubfoot-ponseti-method-treatment',
    excerpt: {
      en: 'Learn about the revolutionary Ponseti method for treating clubfoot and its remarkable success rates.',
      tr: 'Çarpık ayak tedavisi için devrimci Ponseti yöntemi ve olağanüstü başarı oranları hakkında bilgi edinin.',
      az: 'Əyri ayaq müalicəsi üçün inqilabi Ponseti metodu və onun möhtəşəm uğur nisbətləri haqqında öyrənin.'
    },
    content: {
      en: `
        <h2>Understanding Clubfoot</h2>
        <p>Clubfoot (congenital talipes equinovarus) is a birth defect where one or both feet are twisted inward and downward. It affects approximately 1 in 1,000 births worldwide.</p>

        <h3>The Ponseti Method</h3>
        <p>The Ponseti method, developed by Dr. Ignacio Ponseti, has revolutionized clubfoot treatment with success rates exceeding 95%.</p>

        <h4>Treatment Phases</h4>
        <ol>
          <li><strong>Casting Phase (6-8 weeks):</strong> Weekly gentle manipulation and casting</li>
          <li><strong>Tenotomy (if needed):</strong> Minor procedure to release tight Achilles tendon</li>
          <li><strong>Bracing Phase (4-5 years):</strong> Special shoes and bar to maintain correction</li>
        </ol>

        <h3>Treatment Timeline</h3>
        <ul>
          <li><strong>Start:</strong> Within first few weeks of life</li>
          <li><strong>Casting:</strong> 6-8 weekly sessions</li>
          <li><strong>Tenotomy:</strong> Around 6-8 weeks if needed</li>
          <li><strong>Bracing:</strong> Full-time initially, then nights and naps</li>
        </ul>

        <h3>Success Factors</h3>
        <ul>
          <li>Early initiation of treatment</li>
          <li>Proper casting technique</li>
          <li>Compliance with bracing protocol</li>
          <li>Regular follow-up care</li>
        </ul>

        <h3>Long-term Outcomes</h3>
        <p>With over 350 successful clubfoot corrections performed:</p>
        <ul>
          <li>Normal foot function</li>
          <li>Ability to participate in sports</li>
          <li>Minimal long-term complications</li>
          <li>Excellent cosmetic results</li>
        </ul>

        <h3>Family Support and Education</h3>
        <p>Successful treatment requires:</p>
        <ul>
          <li>Understanding the treatment process</li>
          <li>Commitment to bracing protocol</li>
          <li>Regular follow-up appointments</li>
          <li>Emotional support for families</li>
        </ul>
      `,
      tr: `
        <h2>Çarpık Ayağı Anlama</h2>
        <p>Çarpık ayak (konjenital talipes ekinovarus), bir veya her iki ayağın içe ve aşağı doğru büküldüğü bir doğum kusurudur. Dünya çapında yaklaşık 1000 doğumda 1'ini etkiler.</p>

        <h3>Ponseti Yöntemi</h3>
        <p>Dr. Ignacio Ponseti tarafından geliştirilen Ponseti yöntemi, %95'i aşan başarı oranlarıyla çarpık ayak tedavisinde devrim yaratmıştır.</p>

        <h4>Tedavi Aşamaları</h4>
        <ol>
          <li><strong>Alçılama Aşaması (6-8 hafta):</strong> Haftalık nazik manipülasyon ve alçılama</li>
          <li><strong>Tenotomi (gerekirse):</strong> Gergin Aşil tendonunu gevşetmek için küçük prosedür</li>
          <li><strong>Destekleme Aşaması (4-5 yıl):</strong> Düzeltmeyi korumak için özel ayakkabı ve çubuk</li>
        </ol>

        <h3>Tedavi Zaman Çizelgesi</h3>
        <ul>
          <li><strong>Başlangıç:</strong> Yaşamın ilk birkaç haftası içinde</li>
          <li><strong>Alçılama:</strong> 6-8 haftalık seanslar</li>
          <li><strong>Tenotomi:</strong> Gerekirse 6-8 hafta civarında</li>
          <li><strong>Destekleme:</strong> Başlangıçta tam zamanlı, sonra gece ve uyku</li>
        </ul>

        <h3>Başarı Faktörleri</h3>
        <ul>
          <li>Tedavinin erken başlatılması</li>
          <li>Doğru alçılama tekniği</li>
          <li>Destekleme protokolüne uyum</li>
          <li>Düzenli takip bakımı</li>
        </ul>

        <h3>Uzun Vadeli Sonuçlar</h3>
        <p>350'den fazla başarılı çarpık ayak düzeltmesi ile:</p>
        <ul>
          <li>Normal ayak fonksiyonu</li>
          <li>Spora katılım yeteneği</li>
          <li>Minimal uzun vadeli komplikasyonlar</li>
          <li>Mükemmel kozmetik sonuçlar</li>
        </ul>

        <h3>Aile Desteği ve Eğitimi</h3>
        <p>Başarılı tedavi şunları gerektirir:</p>
        <ul>
          <li>Tedavi sürecini anlama</li>
          <li>Destekleme protokolüne bağlılık</li>
          <li>Düzenli takip randevuları</li>
          <li>Aileler için duygusal destek</li>
        </ul>
      `,
      az: `
        <h2>Əyri Ayağı Anlama</h2>
        <p>Əyri ayaq (kongenital talipes ekinovarus) bir və ya hər iki ayağın içəriyə və aşağıya doğru bükülməsi olan doğuş qüsurudur. Dünyada təxminən 1000 doğumda 1-ni təsir edir.</p>

        <h3>Ponseti Metodu</h3>
        <p>Dr. Ignacio Ponseti tərəfindən işlənib hazırlanmış Ponseti metodu %95-i keçən uğur nisbətləri ilə əyri ayaq müalicəsində inqilab yaratmışdır.</p>

        <h4>Müalicə Mərhələləri</h4>
        <ol>
          <li><strong>Gips Mərhələsi (6-8 həftə):</strong> Həftəlik yumşaq manipulyasiya və gips</li>
          <li><strong>Tenotomiya (lazım gələrsə):</strong> Gərgin Axilles vətərini boşaltmaq üçün kiçik prosedur</li>
          <li><strong>Dəstəkləmə Mərhələsi (4-5 il):</strong> Düzəlişi saxlamaq üçün xüsusi ayaqqabı və çubuq</li>
        </ol>

        <h3>Müalicə Vaxt Cədvəli</h3>
        <ul>
          <li><strong>Başlanğıc:</strong> Həyatın ilk bir neçə həftəsi ərzində</li>
          <li><strong>Gips:</strong> 6-8 həftəlik seanslar</li>
          <li><strong>Tenotomiya:</strong> Lazım gələrsə 6-8 həftə ətrafında</li>
          <li><strong>Dəstəkləmə:</strong> Əvvəlcə tam vaxt, sonra gecələr və yuxu</li>
        </ul>

        <h3>Uğur Faktorları</h3>
        <ul>
          <li>Müalicənin erkən başladılması</li>
          <li>Düzgün gips texnikası</li>
          <li>Dəstəkləmə protokoluna riayət</li>
          <li>Müntəzəm izləmə qayğısı</li>
        </ul>

        <h3>Uzunmüddətli Nəticələr</h3>
        <p>350-dən çox uğurlu əyri ayaq düzəlişi ilə:</p>
        <ul>
          <li>Normal ayaq funksiyası</li>
          <li>İdmanda iştirak qabiliyyəti</li>
          <li>Minimal uzunmüddətli ağırlaşmalar</li>
          <li>Əla kosmetik nəticələr</li>
        </ul>

        <h3>Ailə Dəstəyi və Təhsil</h3>
        <p>Uğurlu müalicə bunları tələb edir:</p>
        <ul>
          <li>Müalicə prosesini anlama</li>
          <li>Dəstəkləmə protokoluna sadiqlik</li>
          <li>Müntəzəm izləmə görüşləri</li>
          <li>Ailələr üçün emosional dəstək</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-25',
    date: '2024-11-25',
    category: {
      name: {
        en: 'Pediatric Orthopedics',
        tr: 'Pediatrik Ortopedi',
        az: 'Pediatrik Ortopediya'
      }
    },
    tags: ['clubfoot', 'Ponseti method', 'pediatric foot', 'congenital deformity'],
    readTime: 7,
    image: 'https://images.pexels.com/photos/7659571/pexels-photo-7659571.jpeg'
  },

  // Wrist & Hand
  {
    id: '8',
    title: {
      en: 'Wrist Fractures: Modern Treatment Approaches',
      tr: 'Bilek Kırıkları: Modern Tedavi Yaklaşımları',
      az: 'Biləyin Sınıqları: Müasir Müalicə Yanaşmaları'
    },
    slug: 'wrist-fractures-treatment-guide',
    excerpt: {
      en: 'Comprehensive guide to wrist fracture treatment, from simple casts to complex surgical reconstruction.',
      tr: 'Basit alçıdan karmaşık cerrahi rekonstrüksiyona kadar bilek kırığı tedavisi için kapsamlı rehber.',
      az: 'Sadə gipsdən mürəkkəb cərrahi rekonstruksiyaya qədər biləyin sınığı müalicəsi üçün ətraflı bələdçi.'
    },
    content: {
      en: `
        <h2>Types of Wrist Fractures</h2>
        <p>Wrist fractures are among the most common orthopedic injuries, particularly affecting the distal radius and scaphoid bones.</p>

        <h3>Common Fracture Types</h3>
        <ul>
          <li><strong>Distal radius fractures:</strong> Most common wrist fracture</li>
          <li><strong>Scaphoid fractures:</strong> Often missed initially</li>
          <li><strong>Ulnar fractures:</strong> Usually associated with radius fractures</li>
          <li><strong>Carpal bone fractures:</strong> Less common but significant</li>
        </ul>

        <h3>Mechanism of Injury</h3>
        <ul>
          <li>Fall on outstretched hand (FOOSH)</li>
          <li>High-energy trauma</li>
          <li>Sports-related injuries</li>
          <li>Osteoporotic fractures in elderly</li>
        </ul>

        <h3>Treatment Decisions</h3>
        <p>Treatment depends on several factors:</p>
        <ul>
          <li>Fracture pattern and displacement</li>
          <li>Patient age and activity level</li>
          <li>Bone quality</li>
          <li>Associated injuries</li>
        </ul>

        <h4>Non-Surgical Treatment</h4>
        <ul>
          <li>Closed reduction and casting</li>
          <li>Immobilization protocols</li>
          <li>Regular monitoring</li>
          <li>Early mobilization when appropriate</li>
        </ul>

        <h4>Surgical Treatment</h4>
        <ul>
          <li>Open reduction and internal fixation</li>
          <li>Plate and screw fixation</li>
          <li>External fixation for complex cases</li>
          <li>Arthroscopic assistance</li>
        </ul>

        <h3>Rehabilitation and Recovery</h3>
        <ul>
          <li>Early finger motion</li>
          <li>Progressive wrist mobilization</li>
          <li>Strengthening exercises</li>
          <li>Functional training</li>
        </ul>

        <h3>Complications and Prevention</h3>
        <ul>
          <li>Stiffness and loss of motion</li>
          <li>Malunion or nonunion</li>
          <li>Tendon complications</li>
          <li>Post-traumatic arthritis</li>
        </ul>
      `,
      tr: `
        <h2>Bilek Kırığı Türleri</h2>
        <p>Bilek kırıkları, özellikle distal radius ve skafoid kemikleri etkileyen en yaygın ortopedik yaralanmalar arasındadır.</p>

        <h3>Yaygın Kırık Türleri</h3>
        <ul>
          <li><strong>Distal radius kırıkları:</strong> En yaygın bilek kırığı</li>
          <li><strong>Skafoid kırıkları:</strong> Genellikle başlangıçta gözden kaçar</li>
          <li><strong>Ulnar kırıkları:</strong> Genellikle radius kırıkları ile ilişkili</li>
          <li><strong>Karpal kemik kırıkları:</strong> Daha az yaygın ancak önemli</li>
        </ul>

        <h3>Yaralanma Mekanizması</h3>
        <ul>
          <li>Açık el üzerine düşme (FOOSH)</li>
          <li>Yüksek enerjili travma</li>
          <li>Sporla ilgili yaralanmalar</li>
          <li>Yaşlılarda osteoporotik kırıklar</li>
        </ul>

        <h3>Tedavi Kararları</h3>
        <p>Tedavi çeşitli faktörlere bağlıdır:</p>
        <ul>
          <li>Kırık paterni ve yer değiştirme</li>
          <li>Hasta yaşı ve aktivite seviyesi</li>
          <li>Kemik kalitesi</li>
          <li>İlişkili yaralanmalar</li>
        </ul>

        <h4>Cerrahi Olmayan Tedavi</h4>
        <ul>
          <li>Kapalı redüksiyon ve alçılama</li>
          <li>İmmobilizasyon protokolleri</li>
          <li>Düzenli izleme</li>
          <li>Uygun olduğunda erken mobilizasyon</li>
        </ul>

        <h4>Cerrahi Tedavi</h4>
        <ul>
          <li>Açık redüksiyon ve internal fiksasyon</li>
          <li>Plak ve vida fiksasyonu</li>
          <li>Karmaşık vakalar için eksternal fiksasyon</li>
          <li>Artroskopik yardım</li>
        </ul>

        <h3>Rehabilitasyon ve İyileşme</h3>
        <ul>
          <li>Erken parmak hareketi</li>
          <li>Progresif bilek mobilizasyonu</li>
          <li>Güçlendirme egzersizleri</li>
          <li>Fonksiyonel antrenman</li>
        </ul>

        <h3>Komplikasyonlar ve Önleme</h3>
        <ul>
          <li>Sertlik ve hareket kaybı</li>
          <li>Malunion veya nonunion</li>
          <li>Tendon komplikasyonları</li>
          <li>Post-travmatik artrit</li>
        </ul>
      `,
      az: `
        <h2>Biləyin Sınığı Növləri</h2>
        <p>Biləyin sınıqları, xüsusilə distal radius və skafoid sümüklərini təsir edən ən geniş yayılmış ortopedik zədələr arasındadır.</p>

        <h3>Geniş Yayılmış Sınıq Növləri</h3>
        <ul>
          <li><strong>Distal radius sınıqları:</strong> Ən geniş yayılmış biləyin sınığı</li>
          <li><strong>Skafoid sınıqları:</strong> Tez-tez əvvəlcə gözə dəymir</li>
          <li><strong>Ulnar sınıqları:</strong> Adətən radius sınıqları ilə əlaqəli</li>
          <li><strong>Karpal sümük sınıqları:</strong> Daha az yayılmış, lakin əhəmiyyətli</li>
        </ul>

        <h3>Zədə Mexanizmi</h3>
        <ul>
          <li>Açıq əl üzərinə düşmə (FOOSH)</li>
          <li>Yüksək enerjili travma</li>
          <li>İdmanla əlaqəli zədələr</li>
          <li>Yaşlılarda osteoporotik sınıqlar</li>
        </ul>

        <h3>Müalicə Qərarları</h3>
        <p>Müalicə bir neçə faktora bağlıdır:</p>
        <ul>
          <li>Sınıq nümunəsi və yerdəyişmə</li>
          <li>Xəstənin yaşı və fəaliyyət səviyyəsi</li>
          <li>Sümük keyfiyyəti</li>
          <li>Əlaqəli zədələr</li>
        </ul>

        <h4>Cərrahi Olmayan Müalicə</h4>
        <ul>
          <li>Qapalı reduksiya və gips</li>
          <li>İmmobilizasiya protokolları</li>
          <li>Müntəzəm izləmə</li>
          <li>Uyğun olduqda erkən mobilizasiya</li>
        </ul>

        <h4>Cərrahi Müalicə</h4>
        <ul>
          <li>Açıq reduksiya və daxili fiksasiya</li>
          <li>Lövhə və vida fiksasiyası</li>
          <li>Mürəkkəb hallar üçün xarici fiksasiya</li>
          <li>Artroskopik yardım</li>
        </ul>

        <h3>Reabilitasiya və Sağalma</h3>
        <ul>
          <li>Erkən barmaq hərəkəti</li>
          <li>Proqressiv biləyin mobilizasiyası</li>
          <li>Gücləndiricı məşqlər</li>
          <li>Funksional məşq</li>
        </ul>

        <h3>Ağırlaşmalar və Qarşısıalma</h3>
        <ul>
          <li>Sərtlik və hərəkət itkisi</li>
          <li>Malunion və ya nonunion</li>
          <li>Vətər ağırlaşmaları</li>
          <li>Post-travmatik artrit</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-22',
    date: '2024-11-22',
    category: {
      name: {
        en: 'Hand & Wrist',
        tr: 'El ve Bilek',
        az: 'Əl və Biləyin'
      }
    },
    tags: ['wrist fracture', 'distal radius', 'scaphoid', 'hand surgery'],
    readTime: 8,
    image: 'https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg'
  },

  // General Orthopedics
  {
    id: '9',
    title: {
      en: 'Arthroscopic Surgery: Minimally Invasive Joint Treatment',
      tr: 'Artroskopik Cerrahi: Minimal İnvaziv Eklem Tedavisi',
      az: 'Artroskopik Cərrahiyyə: Minimal İnvaziv Oynaq Müalicəsi'
    },
    slug: 'arthroscopic-surgery-benefits',
    excerpt: {
      en: 'Discover the advantages of arthroscopic surgery and how it has revolutionized orthopedic treatment.',
      tr: 'Artroskopik cerrahinin avantajlarını keşfedin ve ortopedik tedaviyi nasıl devrimleştirdiğini öğrenin.',
      az: 'Artroskopik cərrahiyyənin üstünlüklərini kəşf edin və ortopedik müalicəni necə inqilab etdirdiyini öyrənin.'
    },
    content: {
      en: `
        <h2>What is Arthroscopic Surgery?</h2>
        <p>Arthroscopic surgery is a minimally invasive surgical technique that uses a small camera (arthroscope) and specialized instruments to diagnose and treat joint problems through tiny incisions.</p>

        <h3>Advantages of Arthroscopic Surgery</h3>
        <ul>
          <li>Smaller incisions and minimal scarring</li>
          <li>Reduced pain and swelling</li>
          <li>Faster recovery times</li>
          <li>Lower risk of infection</li>
          <li>Better visualization of joint structures</li>
          <li>Outpatient procedure in many cases</li>
        </ul>

        <h3>Common Arthroscopic Procedures</h3>
        <h4>Knee Arthroscopy</h4>
        <ul>
          <li>Meniscus repair or removal</li>
          <li>ACL reconstruction</li>
          <li>Cartilage procedures</li>
          <li>Loose body removal</li>
        </ul>

        <h4>Shoulder Arthroscopy</h4>
        <ul>
          <li>Rotator cuff repair</li>
          <li>Labral repair</li>
          <li>Subacromial decompression</li>
          <li>Capsular release</li>
        </ul>

        <h4>Hip Arthroscopy</h4>
        <ul>
          <li>Labral repair</li>
          <li>Femoroacetabular impingement treatment</li>
          <li>Loose body removal</li>
          <li>Synovectomy</li>
        </ul>

        <h3>Patient Selection</h3>
        <p>Ideal candidates for arthroscopic surgery include:</p>
        <ul>
          <li>Patients with specific joint pathology</li>
          <li>Those who have failed conservative treatment</li>
          <li>Active individuals seeking quick recovery</li>
          <li>Patients with good overall health</li>
        </ul>

        <h3>Recovery and Rehabilitation</h3>
        <ul>
          <li>Immediate post-operative care</li>
          <li>Early mobilization protocols</li>
          <li>Progressive physical therapy</li>
          <li>Return to activity guidelines</li>
        </ul>

        <h3>Success Rates and Outcomes</h3>
        <p>With over 5,000 arthroscopic procedures performed, patients typically experience:</p>
        <ul>
          <li>High success rates (>90%)</li>
          <li>Rapid return to function</li>
          <li>Excellent patient satisfaction</li>
          <li>Low complication rates</li>
        </ul>
      `,
      tr: `
        <h2>Artroskopik Cerrahi Nedir?</h2>
        <p>Artroskopik cerrahi, küçük bir kamera (artroskop) ve özel aletler kullanarak eklem problemlerini küçük kesiler yoluyla tanılamak ve tedavi etmek için kullanılan minimal invaziv bir cerrahi tekniktir.</p>

        <h3>Artroskopik Cerrahinin Avantajları</h3>
        <ul>
          <li>Daha küçük kesiler ve minimal skar</li>
          <li>Azaltılmış ağrı ve şişlik</li>
          <li>Daha hızlı iyileşme süreleri</li>
          <li>Daha düşük enfeksiyon riski</li>
          <li>Eklem yapılarının daha iyi görselleştirilmesi</li>
          <li>Birçok durumda ayaktan prosedür</li>
        </ul>

        <h3>Yaygın Artroskopik Prosedürler</h3>
        <h4>Diz Artroskopisi</h4>
        <ul>
          <li>Menisküs onarımı veya çıkarılması</li>
          <li>ACL rekonstrüksiyonu</li>
          <li>Kıkırdak prosedürleri</li>
          <li>Serbest cisim çıkarılması</li>
        </ul>

        <h4>Omuz Artroskopisi</h4>
        <ul>
          <li>Rotator manşet onarımı</li>
          <li>Labral onarım</li>
          <li>Subakromial dekompresyon</li>
          <li>Kapsüler salım</li>
        </ul>

        <h4>Kalça Artroskopisi</h4>
        <ul>
          <li>Labral onarım</li>
          <li>Femoroasetabular sıkışma tedavisi</li>
          <li>Serbest cisim çıkarılması</li>
          <li>Sinovektomi</li>
        </ul>

        <h3>Hasta Seçimi</h3>
        <p>Artroskopik cerrahi için ideal adaylar şunları içerir:</p>
        <ul>
          <li>Spesifik eklem patolojisi olan hastalar</li>
          <li>Konservatif tedavide başarısız olanlar</li>
          <li>Hızlı iyileşme arayan aktif bireyler</li>
          <li>Genel sağlığı iyi olan hastalar</li>
        </ul>

        <h3>İyileşme ve Rehabilitasyon</h3>
        <ul>
          <li>Ameliyat sonrası acil bakım</li>
          <li>Erken mobilizasyon protokolleri</li>
          <li>Progresif fizik tedavi</li>
          <li>Aktiviteye dönüş rehberleri</li>
        </ul>

        <h3>Başarı Oranları ve Sonuçlar</h3>
        <p>5.000'den fazla artroskopik prosedür ile hastalar genellikle şunları yaşar:</p>
        <ul>
          <li>Yüksek başarı oranları (%90'dan fazla)</li>
          <li>Fonksiyona hızlı dönüş</li>
          <li>Mükemmel hasta memnuniyeti</li>
          <li>Düşük komplikasyon oranları</li>
        </ul>
      `,
      az: `
        <h2>Artroskopik Cərrahiyyə Nədir?</h2>
        <p>Artroskopik cərrahiyyə kiçik kamera (artroskop) və xüsusi alətlərdən istifadə edərək oynaq problemlərini kiçik kəsiklər vasitəsilə diaqnoz etmək və müalicə etmək üçün istifadə olunan minimal invaziv cərrahi texnikadır.</p>

        <h3>Artroskopik Cərrahiyyənin Üstünlükləri</h3>
        <ul>
          <li>Daha kiçik kəsiklər və minimal çapıq</li>
          <li>Azaldılmış ağrı və şişkinlik</li>
          <li>Daha sürətli sağalma müddətləri</li>
          <li>Daha aşağı infeksiya riski</li>
          <li>Oynaq strukturlarının daha yaxşı görüntülənməsi</li>
          <li>Bir çox hallarda ambulatoriya proseduru</li>
        </ul>

        <h3>Geniş Yayılmış Artroskopik Prosedurlar</h3>
        <h4>Diz Artroskopiyası</h4>
        <ul>
          <li>Menisk təmiri və ya çıxarılması</li>
          <li>ACL rekonstruksiyası</li>
          <li>Qığırdaq prosedurları</li>
          <li>Sərbəst cisim çıxarılması</li>
        </ul>

        <h4>Çiyin Artroskopiyası</h4>
        <ul>
          <li>Rotator manşet təmiri</li>
          <li>Labral təmir</li>
          <li>Subakromial dekompressiya</li>
          <li>Kapsulyar buraxılış</li>
        </ul>

        <h4>Kalça Artroskopiyası</h4>
        <ul>
          <li>Labral təmir</li>
          <li>Femoroasetabular sıxılma müalicəsi</li>
          <li>Sərbəst cisim çıxarılması</li>
          <li>Sinovektomiya</li>
        </ul>

        <h3>Xəstə Seçimi</h3>
        <p>Artroskopik cərrahiyyə üçün ideal namizədlər bunları əhatə edir:</p>
        <ul>
          <li>Spesifik oynaq patologiyası olan xəstələr</li>
          <li>Konservativ müalicədə uğursuz olanlar</li>
          <li>Sürətli sağalma axtaran aktiv şəxslər</li>
          <li>Ümumi sağlığı yaxşı olan xəstələr</li>
        </ul>

        <h3>Sağalma və Reabilitasiya</h3>
        <ul>
          <li>Əməliyyatdan sonra təcili qayğı</li>
          <li>Erkən mobilizasiya protokolları</li>
          <li>Proqressiv fiziki terapiya</li>
          <li>Fəaliyyətə qayıdış təlimatları</li>
        </ul>

        <h3>Uğur Nisbətləri və Nəticələr</h3>
        <p>5.000-dən çox artroskopik prosedur ilə xəstələr adətən bunları yaşayırlar:</p>
        <ul>
          <li>Yüksək uğur nisbətləri (%90-dan çox)</li>
          <li>Funksiyaya sürətli qayıdış</li>
          <li>Əla xəstə məmnuniyyəti</li>
          <li>Aşağı ağırlaşma nisbətləri</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-20',
    date: '2024-11-20',
    category: {
      name: {
        en: 'General Orthopedics',
        tr: 'Genel Ortopedi',
        az: 'Ümumi Ortopediya'
      }
    },
    tags: ['arthroscopic surgery', 'minimally invasive', 'joint surgery', 'sports medicine'],
    readTime: 9,
    image: 'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg'
  },

  {
    id: '10',
    title: {
      en: 'Sports Injury Prevention: A Comprehensive Guide',
      tr: 'Spor Yaralanması Önleme: Kapsamlı Rehber',
      az: 'İdman Zədəsinin Qarşısının Alınması: Ətraflı Bələdçi'
    },
    slug: 'sports-injury-prevention-guide',
    excerpt: {
      en: 'Essential strategies for preventing sports injuries and maintaining peak athletic performance.',
      tr: 'Spor yaralanmalarını önlemek ve en üst düzey atletik performansı korumak için temel stratejiler.',
      az: 'İdman zədələrinin qarşısını almaq və ən yüksək atletik performansı saxlamaq üçün əsas strategiyalar.'
    },
    content: {
      en: `
        <h2>Understanding Sports Injuries</h2>
        <p>Sports injuries can be devastating for athletes at any level. Understanding the mechanisms of injury and implementing proper prevention strategies is crucial for long-term athletic success.</p>

        <h3>Common Sports Injuries</h3>
        <ul>
          <li>ACL tears and knee injuries</li>
          <li>Shoulder impingement and rotator cuff injuries</li>
          <li>Ankle sprains</li>
          <li>Tennis and golfer's elbow</li>
          <li>Stress fractures</li>
          <li>Muscle strains and pulls</li>
        </ul>

        <h3>Risk Factors</h3>
        <ul>
          <li>Previous injury history</li>
          <li>Inadequate conditioning</li>
          <li>Poor technique</li>
          <li>Fatigue and overtraining</li>
          <li>Environmental factors</li>
          <li>Equipment issues</li>
        </ul>

        <h3>Prevention Strategies</h3>
        <h4>Proper Conditioning</h4>
        <ul>
          <li>Sport-specific training programs</li>
          <li>Strength and flexibility training</li>
          <li>Cardiovascular conditioning</li>
          <li>Balance and proprioception training</li>
        </ul>

        <h4>Technique and Training</h4>
        <ul>
          <li>Proper coaching and instruction</li>
          <li>Gradual progression of training intensity</li>
          <li>Adequate rest and recovery</li>
          <li>Cross-training activities</li>
        </ul>

        <h4>Equipment and Environment</h4>
        <ul>
          <li>Proper protective equipment</li>
          <li>Well-maintained playing surfaces</li>
          <li>Appropriate footwear</li>
          <li>Environmental awareness</li>
        </ul>

        <h3>Injury Management</h3>
        <h4>Immediate Care (RICE Protocol)</h4>
        <ul>
          <li><strong>Rest:</strong> Avoid further injury</li>
          <li><strong>Ice:</strong> Reduce swelling and pain</li>
          <li><strong>Compression:</strong> Support injured area</li>
          <li><strong>Elevation:</strong> Minimize swelling</li>
        </ul>

        <h4>When to Seek Medical Attention</h4>
        <ul>
          <li>Severe pain or inability to bear weight</li>
          <li>Obvious deformity</li>
          <li>Numbness or tingling</li>
          <li>Signs of infection</li>
          <li>No improvement after 48-72 hours</li>
        </ul>

        <h3>Return to Sport</h3>
        <p>Safe return to athletic activity requires:</p>
        <ul>
          <li>Complete healing of injured tissues</li>
          <li>Full range of motion</li>
          <li>Adequate strength and endurance</li>
          <li>Sport-specific functional testing</li>
          <li>Psychological readiness</li>
        </ul>
      `,
      tr: `
        <h2>Spor Yaralanmalarını Anlama</h2>
        <p>Spor yaralanmaları her seviyedeki sporcular için yıkıcı olabilir. Yaralanma mekanizmalarını anlamak ve uygun önleme stratejilerini uygulamak uzun vadeli atletik başarı için çok önemlidir.</p>

        <h3>Yaygın Spor Yaralanmaları</h3>
        <ul>
          <li>ACL yırtıkları ve diz yaralanmaları</li>
          <li>Omuz sıkışması ve rotator manşet yaralanmaları</li>
          <li>Ayak bileği burkulmaları</li>
          <li>Tenisçi ve golfçü dirseği</li>
          <li>Stres kırıkları</li>
          <li>Kas gerginlikleri ve çekilmeler</li>
        </ul>

        <h3>Risk Faktörleri</h3>
        <ul>
          <li>Önceki yaralanma geçmişi</li>
          <li>Yetersiz kondisyon</li>
          <li>Kötü teknik</li>
          <li>Yorgunluk ve aşırı antrenman</li>
          <li>Çevresel faktörler</li>
          <li>Ekipman sorunları</li>
        </ul>

        <h3>Önleme Stratejileri</h3>
        <h4>Uygun Kondisyon</h4>
        <ul>
          <li>Spora özgü antrenman programları</li>
          <li>Güç ve esneklik antrenmanı</li>
          <li>Kardiyovasküler kondisyon</li>
          <li>Denge ve propriosepsiyon antrenmanı</li>
        </ul>

        <h4>Teknik ve Antrenman</h4>
        <ul>
          <li>Uygun koçluk ve talimat</li>
          <li>Antrenman yoğunluğunun kademeli ilerlemesi</li>
          <li>Yeterli dinlenme ve iyileşme</li>
          <li>Çapraz antrenman aktiviteleri</li>
        </ul>

        <h4>Ekipman ve Çevre</h4>
        <ul>
          <li>Uygun koruyucu ekipman</li>
          <li>İyi bakımlı oyun yüzeyleri</li>
          <li>Uygun ayakkabı</li>
          <li>Çevresel farkındalık</li>
        </ul>

        <h3>Yaralanma Yönetimi</h3>
        <h4>Acil Bakım (RICE Protokolü)</h4>
        <ul>
          <li><strong>Dinlenme:</strong> Daha fazla yaralanmadan kaçının</li>
          <li><strong>Buz:</strong> Şişlik ve ağrıyı azaltın</li>
          <li><strong>Kompresyon:</strong> Yaralı bölgeyi destekleyin</li>
          <li><strong>Yükseltme:</strong> Şişliği minimize edin</li>
        </ul>

        <h4>Ne Zaman Tıbbi Yardım Alınmalı</h4>
        <ul>
          <li>Şiddetli ağrı veya ağırlık taşıyamama</li>
          <li>Belirgin deformite</li>
          <li>Uyuşma veya karıncalanma</li>
          <li>Enfeksiyon belirtileri</li>
          <li>48-72 saat sonra iyileşme olmaması</li>
        </ul>

        <h3>Spora Dönüş</h3>
        <p>Atletik aktiviteye güvenli dönüş şunları gerektirir:</p>
        <ul>
          <li>Yaralı dokuların tam iyileşmesi</li>
          <li>Tam hareket aralığı</li>
          <li>Yeterli güç ve dayanıklılık</li>
          <li>Spora özgü fonksiyonel test</li>
          <li>Psikolojik hazırlık</li>
        </ul>
      `,
      az: `
        <h2>İdman Zədələrini Anlama</h2>
        <p>İdman zədələri hər səviyyədəki idmançılar üçün dağıdıcı ola bilər. Zədə mexanizmlərini anlamaq və düzgün qarşısıalma strategiyalarını tətbiq etmək uzunmüddətli atletik uğur üçün həlledicidir.</p>

        <h3>Geniş Yayılmış İdman Zədələri</h3>
        <ul>
          <li>ACL cırılmaları və diz zədələri</li>
          <li>Çiyin sıxılması və rotator manşet zədələri</li>
          <li>Ayaq biləyinin burkulması</li>
          <li>Tennis və qolf dirsəyi</li>
          <li>Stress sınıqları</li>
          <li>Əzələ gərginlikləri və çəkilmələr</li>
        </ul>

        <h3>Risk Faktorları</h3>
        <ul>
          <li>Əvvəlki zədə tarixi</li>
          <li>Qeyri-adekvat kondisiya</li>
          <li>Pis texnika</li>
          <li>Yorğunluq və həddindən artıq məşq</li>
          <li>Ətraf mühit faktorları</li>
          <li>Avadanlıq problemləri</li>
        </ul>

        <h3>Qarşısıalma Strategiyaları</h3>
        <h4>Düzgün Kondisiya</h4>
        <ul>
          <li>İdmana xüsusi məşq proqramları</li>
          <li>Güc və çeviklik məşqi</li>
          <li>Ürək-damar kondisiyası</li>
          <li>Tarazlıq və propriosepsiya məşqi</li>
        </ul>

        <h4>Texnika və Məşq</h4>
        <ul>
          <li>Düzgün məşqçilik və təlimat</li>
          <li>Məşq intensivliyinin tədricən artırılması</li>
          <li>Kifayət qədər istirahət və bərpa</li>
          <li>Çarpaz məşq fəaliyyətləri</li>
        </ul>

        <h4>Avadanlıq və Ətraf Mühit</h4>
        <ul>
          <li>Düzgün qoruyucu avadanlıq</li>
          <li>Yaxşı saxlanılan oyun səthləri</li>
          <li>Uyğun ayaqqabı</li>
          <li>Ətraf mühit məlumatlılığı</li>
        </ul>

        <h3>Zədə İdarəetməsi</h3>
        <h4>Təcili Qayğı (RICE Protokolu)</h4>
        <ul>
          <li><strong>İstirahət:</strong> Əlavə zədədən qaçının</li>
          <li><strong>Buz:</strong> Şişkinlik və ağrını azaldın</li>
          <li><strong>Sıxılma:</strong> Zədələnmiş sahəni dəstəkləyin</li>
          <li><strong>Qaldırma:</strong> Şişkinliyi minimuma endirin</li>
        </ul>

        <h4>Nə Vaxt Tibbi Yardım Alınmalı</h4>
        <ul>
          <li>Şiddətli ağrı və ya çəki daşıya bilməmək</li>
          <li>Açıq deformasiya</li>
          <li>Uyuşma və ya sancılma</li>
          <li>İnfeksiya əlamətləri</li>
          <li>48-72 saatdan sonra yaxşılaşma olmaması</li>
        </ul>

        <h3>İdmana Qayıdış</h3>
        <p>Atletik fəaliyyətə təhlükəsiz qayıdış bunları tələb edir:</p>
        <ul>
          <li>Zədələnmiş toxumaların tam sağalması</li>
          <li>Tam hərəkət diapazonu</li>
          <li>Kifayət qədər güc və dözümlülük</li>
          <li>İdmana xüsusi funksional test</li>
          <li>Psixoloji hazırlıq</li>
        </ul>
      `
    },
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-18',
    date: '2024-11-18',
    category: {
      name: {
        en: 'Sports Medicine',
        tr: 'Spor Hekimliği',
        az: 'İdman Təbabəti'
      }
    },
    tags: ['sports injury', 'injury prevention', 'athletic performance', 'sports medicine'],
    readTime: 10,
    image: 'https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category.name.en === category);
};

export const getRecentBlogPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};