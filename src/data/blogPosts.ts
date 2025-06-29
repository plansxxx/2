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
      az: "Sağlam Həyat",
      en: "Healthy Living",
      tr: "Sağlıklı Yaşam"
    }
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "common-knee-injuries-and-treatments",
    title: {
      az: "Geniş yayılmış diz zədələri və müalicələri",
      en: "Common Knee Injuries and Treatments",
      tr: "Yaygın Diz Yaralanmaları ve Tedavileri"
    },
    excerpt: {
      az: "Diz zədələri gündəlik həyatı məhdudlaşdıra bilər. Bu məqalədə ən çox rast gəlinən diz zədələri və onların müasir müalicə üsulları haqqında danışırıq.",
      en: "Knee injuries can limit daily life. In this article, we discuss the most common knee injuries and their modern treatment methods.",
      tr: "Diz yaralanmaları günlük hayatı kısıtlayabilir. Bu makalede, en yaygın diz yaralanmaları ve modern tedavi yöntemleri hakkında bilgi veriyoruz."
    },
    content: {
      az: "# Geniş yayılmış diz zədələri və müalicələri\n\nDiz zədələri gündəlik həyatı məhdudlaşdıra bilər. Bu məqalədə ən çox rast gəlinən diz zədələri və onların müasir müalicə üsulları haqqında danışırıq.\n\n## Menisküs Cırılması\n\nMenisküs diz oynağında olan bir qığırdaq növüdür və diz oynağının stabilləşdirilməsinə kömək edir. Menisküs cırılması adətən ani dönmələr və ya ağır yük qaldırma zamanı baş verir.\n\n**Müalicə seçimləri:**\n\n- Konservativ müalicə: İstirahət, buz, kompressiya və yüksəklik (RICE)\n- Fiziki terapiya\n- Artroskopik cərrahiyyə\n\n## Ön Çarpaz Bağ (ACL) Cırılması\n\nACL zədələri adətən idman zamanı baş verir və diz oynağında stabilliyə təsir edir.\n\n**Müalicə seçimləri:**\n\n- Konservativ müalicə: Fiziki terapiya və diz breysi\n- Cərrahiyyə: ACL rekonstruksiyası\n\n## Osteoartrit\n\nDiz osteoartriti zamanla qığırdağın aşınması nəticəsində yaranır və ağrı, sərtlik və hərəkət məhdudiyyəti ilə nəticələnir.\n\n**Müalicə seçimləri:**\n\n- Çəki azaltma\n- Fiziki terapiya\n- Ağrıkəsici dərmanlar\n- Kortizon inyeksiyaları\n- Hialuron inyeksiyaları\n- Diz oynağı əvəzlənməsi\n\nDiz zədələri həyat keyfiyyətinizə ciddi təsir göstərə bilər, lakin müasir ortopedik müalicələr ağrısız və aktiv bir həyata qayıtmanıza kömək edə bilər. Diz probleminiz varsa, diaqnoz və müalicə üçün təcrübəli bir ortoped ilə məsləhətləşmək vacibdir.",
      en: "# Common Knee Injuries and Treatments\n\nKnee injuries can limit daily life. In this article, we discuss the most common knee injuries and their modern treatment methods.\n\n## Meniscus Tear\n\nThe meniscus is a type of cartilage in the knee joint that helps stabilize the knee. Meniscus tears usually occur during sudden turns or heavy lifting.\n\n**Treatment options:**\n\n- Conservative treatment: Rest, ice, compression, and elevation (RICE)\n- Physical therapy\n- Arthroscopic surgery\n\n## Anterior Cruciate Ligament (ACL) Tear\n\nACL injuries usually occur during sports and affect stability in the knee joint.\n\n**Treatment options:**\n\n- Conservative treatment: Physical therapy and knee bracing\n- Surgery: ACL reconstruction\n\n## Osteoarthritis\n\nKnee osteoarthritis is caused by the wear and tear of cartilage over time, resulting in pain, stiffness, and limited mobility.\n\n**Treatment options:**\n\n- Weight loss\n- Physical therapy\n- Pain medications\n- Corticosteroid injections\n- Hyaluronic acid injections\n- Knee joint replacement\n\nKnee injuries can seriously impact your quality of life, but modern orthopedic treatments can help you return to a pain-free and active life. If you have a knee problem, it's important to consult with an experienced orthopedist for diagnosis and treatment.",
      tr: "# Yaygın Diz Yaralanmaları ve Tedavileri\n\nDiz yaralanmaları günlük hayatı kısıtlayabilir. Bu makalede, en yaygın diz yaralanmaları ve modern tedavi yöntemleri hakkında bilgi veriyoruz.\n\n## Menisküs Yırtılması\n\nMenisküs, diz eklemini stabilize etmeye yardımcı olan bir kıkırdak türüdür. Menisküs yırtıkları genellikle ani dönüşler veya ağır kaldırma sırasında meydana gelir.\n\n**Tedavi seçenekleri:**\n\n- Konservatif tedavi: Dinlenme, buz, kompresyon ve yükseltme (RICE)\n- Fizik tedavi\n- Artroskopik cerrahi\n\n## Ön Çapraz Bağ (ACL) Yırtılması\n\nACL yaralanmaları genellikle spor sırasında meydana gelir ve diz eklemindeki stabiliteyi etkiler.\n\n**Tedavi seçenekleri:**\n\n- Konservatif tedavi: Fizik tedavi ve diz breysi\n- Cerrahi: ACL rekonstrüksiyonu\n\n## Osteoartrit\n\nDiz osteoartriti, zamanla kıkırdağın aşınması sonucu oluşur ve ağrı, sertlik ve hareket kısıtlılığına neden olur.\n\n**Tedavi seçenekleri:**\n\n- Kilo kaybı\n- Fizik tedavi\n- Ağrı kesiciler\n- Kortizon enjeksiyonları\n- Hyaluronik asit enjeksiyonları\n- Diz eklemi replasmanı\n\nDiz yaralanmaları yaşam kalitenizi ciddi şekilde etkileyebilir, ancak modern ortopedik tedaviler ağrısız ve aktif bir yaşama dönmenize yardımcı olabilir. Diz sorununuz varsa, teşhis ve tedavi için deneyimli bir ortopedistle görüşmek önemlidir."
    },
    category: categories[0],
    image: "https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-03-15",
    readTime: 5
  },
  {
    id: 2,
    slug: "sports-injury-prevention-tips",
    title: {
      az: "İdman zədələrinin qarşısını almaq üçün məsləhətlər",
      en: "Sports Injury Prevention Tips",
      tr: "Spor Yaralanmalarını Önleme İpuçları"
    },
    excerpt: {
      az: "İdman zədələri idmançılar üçün ən böyük maneələrdən biridir. Bu məqalədə ən çox rast gəlinən idman zədələrini necə önləyə biləcəyinizi öyrənin.",
      en: "Sports injuries are one of the biggest obstacles for athletes. Learn how to prevent the most common sports injuries in this article.",
      tr: "Spor yaralanmaları, sporcular için en büyük engellerden biridir. Bu makalede, en yaygın spor yaralanmalarını nasıl önleyebileceğinizi öğrenin."
    },
    content: {
      az: "# İdman zədələrinin qarşısını almaq üçün məsləhətlər\n\nİdman zədələri idmançılar üçün ən böyük maneələrdən biridir. Bu məqalədə ən çox rast gəlinən idman zədələrini necə önləyə biləcəyinizi öyrənin.\n\n## Düzgün istiləşmə\n\nHər hansı bir məşq və ya yarışdan əvvəl düzgün istiləşmə çox vacibdir. İstiləşmə əzələlərinizi hazırlayır və onları daha elastik edir, bu da zədə riskini azaldır.\n\n**Məsləhətlər:**\n\n- Ən azı 5-10 dəqiqə yüngül kardio ilə başlayın\n- Dinamik stretçinq edən\n- Tədrici olaraq intensivliyi artırın\n\n## Düzgün texnika\n\nDüzgün texnikadan istifadə etmək zədə riskini əhəmiyyətli dərəcədə azaldır. Bu, idman növünüz üçün düzgün texnikanı öyrənməyi və məşq etməyi əhatə edir.\n\n**Məsləhətlər:**\n\n- Peşəkar bir məşqçi ilə işləyin\n- Texnikanızı tez-tez yoxlayın\n- Yorulduqda texnikanızın pozulmasına icazə verməyin\n\n## Düzgün avadanlıq\n\nİdman növünüz üçün düzgün avadanlıqdan istifadə etmək zədə riskini azalda bilər.\n\n**Məsləhətlər:**\n\n- Sizə uyğun ölçüdə avadanlıq seçin\n- Köhnəlmiş və ya zədələnmiş avadanlığı dəyişdirin\n- İdman növünüz üçün düzgün qoruyucu geyimdən istifadə edin\n\n## Bərpa vaxtı\n\nBədəninizə bərpa olmaq üçün kifayət qədər vaxt vermək zədə riskini azaldır.\n\n**Məsləhətlər:**\n\n- Adekvat yuxu alın\n- Məşqlər arasında istirahət günləri əlavə edin\n- Aktiv bərpadan istifadə edin (yüngül aktivlik, stretçinq)\n\n## Balanced qidalanma\n\nBalanslaşdırılmış qidalanma bədəninizin optimal şəkildə işləməsinə və zədələrdən daha tez sağalmasına kömək edə bilər.\n\n**Məsləhətlər:**\n\n- Adekvat protein qəbul edin\n- Hidrasiya olun\n- Məşqdən əvvəl və sonra düzgün qidalanın\n\nBu məsləhətləri izləmək idman zədəsi riskinizi əhəmiyyətli dərəcədə azalda bilər. Ancaq hər hansı bir zədə halında, daha çox zərərin qarşısını almaq üçün tez bir zamanda tibbi yardım almaq vacibdir.",
      en: "# Sports Injury Prevention Tips\n\nSports injuries are one of the biggest obstacles for athletes. Learn how to prevent the most common sports injuries in this article.\n\n## Proper Warm-up\n\nProper warm-up before any exercise or competition is crucial. Warming up prepares your muscles and makes them more elastic, which reduces the risk of injury.\n\n**Tips:**\n\n- Start with at least 5-10 minutes of light cardio\n- Perform dynamic stretching\n- Gradually increase intensity\n\n## Proper Technique\n\nUsing proper technique significantly reduces the risk of injury. This involves learning and practicing the correct technique for your sport.\n\n**Tips:**\n\n- Work with a professional coach\n- Regularly check your technique\n- Don't allow your technique to deteriorate when you're tired\n\n## Proper Equipment\n\nUsing the right equipment for your sport can reduce the risk of injury.\n\n**Tips:**\n\n- Choose equipment that fits you properly\n- Replace worn or damaged equipment\n- Use the correct protective gear for your sport\n\n## Recovery Time\n\nGiving your body enough time to recover reduces the risk of injury.\n\n**Tips:**\n\n- Get adequate sleep\n- Include rest days between workouts\n- Use active recovery (light activity, stretching)\n\n## Balanced Nutrition\n\nA balanced diet can help your body function optimally and recover more quickly from injuries.\n\n**Tips:**\n\n- Consume adequate protein\n- Stay hydrated\n- Eat properly before and after exercise\n\nFollowing these tips can significantly reduce your risk of sports injuries. However, in case of any injury, it's important to seek medical help promptly to prevent further damage.",
      tr: "# Spor Yaralanmalarını Önleme İpuçları\n\nSpor yaralanmaları, sporcular için en büyük engellerden biridir. Bu makalede, en yaygın spor yaralanmalarını nasıl önleyebileceğinizi öğrenin.\n\n## Doğru Isınma\n\nHerhangi bir egzersiz veya yarışma öncesinde doğru ısınma çok önemlidir. Isınma, kaslarınızı hazırlar ve onları daha elastik hale getirir, bu da yaralanma riskini azaltır.\n\n**İpuçları:**\n\n- En az 5-10 dakika hafif kardiyoyla başlayın\n- Dinamik esneme yapın\n- Yoğunluğu kademeli olarak artırın\n\n## Doğru Teknik\n\nDoğru teknik kullanmak, yaralanma riskini önemli ölçüde azaltır. Bu, sporunuz için doğru tekniği öğrenmeyi ve pratik yapmayı içerir.\n\n**İpuçları:**\n\n- Profesyonel bir koçla çalışın\n- Tekniğinizi düzenli olarak kontrol edin\n- Yorulduğunuzda tekniğinizin bozulmasına izin vermeyin\n\n## Doğru Ekipman\n\nSporunuz için doğru ekipmanı kullanmak yaralanma riskini azaltabilir.\n\n**İpuçları:**\n\n- Size uygun ekipmanı seçin\n- Yıpranmış veya hasarlı ekipmanı değiştirin\n- Sporunuz için doğru koruyucu giysiyi kullanın\n\n## İyileşme Süresi\n\nVücudunuza iyileşmesi için yeterli zaman vermek yaralanma riskini azaltır.\n\n**İpuçları:**\n\n- Yeterli uyku alın\n- Antrenmanlar arasında dinlenme günleri ekleyin\n- Aktif iyileşme kullanın (hafif aktivite, esneme)\n\n## Dengeli Beslenme\n\nDengeli bir diyet, vücudunuzun optimal şekilde çalışmasına ve yaralanmalardan daha hızlı iyileşmesine yardımcı olabilir.\n\n**İpuçları:**\n\n- Yeterli protein tüketin\n- Hidrate kalın\n- Egzersiz öncesi ve sonrası doğru beslenin\n\nBu ipuçlarını takip etmek, spor yaralanması riskinizi önemli ölçüde azaltabilir. Ancak, herhangi bir yaralanma durumunda, daha fazla hasarı önlemek için hemen tıbbi yardım almak önemlidir."
    },
    category: categories[2],
    image: "https://images.pexels.com/photos/8851636/pexels-photo-8851636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-02-28",
    readTime: 6
  },
  {
    id: 3,
    slug: "understanding-joint-replacement-surgery",
    title: {
      az: "Oynaq əvəzlənməsi cərrahiyyəsini anlamaq",
      en: "Understanding Joint Replacement Surgery",
      tr: "Eklem Replasmanı Cerrahisini Anlamak"
    },
    excerpt: {
      az: "Oynaq əvəzlənməsi cərrahiyyəsi nə zaman lazımdır? Əməliyyat necə keçirilir və nəyi gözləməlisiniz? Bu məqalədə bütün suallarınızı cavablandırırıq.",
      en: "When is joint replacement surgery necessary? How is the operation performed and what should you expect? We answer all your questions in this article.",
      tr: "Eklem replasmanı cerrahisi ne zaman gereklidir? Operasyon nasıl yapılır ve neler beklemelisiniz? Bu makalede tüm sorularınızı yanıtlıyoruz."
    },
    content: {
      az: "# Oynaq əvəzlənməsi cərrahiyyəsini anlamaq\n\nOynaq əvəzlənməsi cərrahiyyəsi nə zaman lazımdır? Əməliyyat necə keçirilir və nəyi gözləməlisiniz? Bu məqalədə bütün suallarınızı cavablandırırıq.\n\n## Oynaq əvəzlənməsi nədir?\n\nOynaq əvəzlənməsi, zədələnmiş və ya xəstəliklə əlaqədar oynağın süni implantla əvəz edildiyi bir əməliyyatdır. Bu prosedur ağrını azaltmaq və oynağın funksiyasını yaxşılaşdırmaq üçün aparılır.\n\nƏn çox əvəz edilən oynaqlar bunlardır:\n\n- Diz oynağı\n- Bud oynağı\n- Çiyin oynağı\n- Dirsək oynağı\n- Bilək oynağı\n\n## Nə zaman oynaq əvəzlənməsi lazımdır?\n\nOynaq əvəzlənməsi adətən aşağıdakı hallarda tövsiyə olunur:\n\n- Şiddətli oynaq ağrısı gündəlik fəaliyyətləri məhdudlaşdırdıqda\n- Gəzmək, pilləkənləri qalxmaq və ya oturmaq və qalxmaq çətin olduqda\n- Oynaqda daimi şişkinlik və ya iltihablanma olduqda\n- Daha mühafizəkar müalicə üsulları, məsələn, fiziki terapiya və ya dərmanlar kömək etmədikdə\n\n## Əməliyyata hazırlıq\n\nƏməliyyatdan əvvəl aşağıdakı hazırlıq işlərini görməlisiniz:\n\n- Tam tibbi müayinə\n- Əməliyyatdan əvvəl fiziki terapiya\n- Evinizi bərpa dövrü üçün hazırlamaq\n- Potensial risklər və faydalar haqqında həkimlə ətraflı müzakirə\n\n## Əməliyyat prosesi\n\nOynaq əvəzlənməsi əməliyyatı adətən aşağıdakı mərhələləri əhatə edir:\n\n1. Anesteziya (ümumi və ya regional)\n2. Cərrahi kəsik\n3. Zədələnmiş oynağın çıxarılması\n4. Süni implantın yerləşdirilməsi\n5. Yaranın bağlanması\n\nƏməliyyat oynağın növündən asılı olaraq 1-3 saat çəkə bilər.\n\n## Bərpa prosesi\n\nOynaq əvəzlənməsindən sonra bərpa prosesi çox vacibdir və bir neçə ay davam edə bilər. Bu proses aşağıdakıları əhatə edir:\n\n- Xəstəxanada qalma (1-4 gün)\n- Fiziki terapiya\n- Ağrı idarəetməsi\n- Gündəlik fəaliyyətlərə tədricən qayıtma\n\n## Nəticə\n\nOynaq əvəzlənməsi cərrahiyyəsi oynaq ağrısı ilə mübarizə aparan bir çox insanın həyat keyfiyyətini əhəmiyyətli dərəcədə yaxşılaşdıra bilər. Müasir implantlar və cərrahi texnikalarla, əksər insanlar əməliyyatdan sonra ağrısız hərəkət qabiliyyəti və daha yaxşı həyat keyfiyyəti əldə edirlər.\n\nƏgər oynaq ağrısı həyatınıza mənfi təsir göstərirsə, ortoped ilə məsləhətləşin. Siz oynaq əvəzlənməsi üçün uyğun bir namizəd ola bilərsiniz.",
      en: "# Understanding Joint Replacement Surgery\n\nWhen is joint replacement surgery necessary? How is the operation performed and what should you expect? We answer all your questions in this article.\n\n## What is Joint Replacement?\n\nJoint replacement is a surgical procedure where a damaged or diseased joint is replaced with an artificial implant. This procedure is performed to reduce pain and improve the function of the joint.\n\nThe most commonly replaced joints include:\n\n- Knee joint\n- Hip joint\n- Shoulder joint\n- Elbow joint\n- Ankle joint\n\n## When is Joint Replacement Necessary?\n\nJoint replacement is usually recommended in the following cases:\n\n- When severe joint pain limits daily activities\n- When walking, climbing stairs, or sitting and rising becomes difficult\n- When there is persistent swelling or inflammation in the joint\n- When more conservative treatment methods, such as physical therapy or medications, do not help\n\n## Preparation for Surgery\n\nBefore surgery, you should do the following preparatory work:\n\n- Complete medical examination\n- Pre-operative physical therapy\n- Prepare your home for the recovery period\n- Detailed discussion with the doctor about potential risks and benefits\n\n## The Surgical Process\n\nJoint replacement surgery usually involves the following stages:\n\n1. Anesthesia (general or regional)\n2. Surgical incision\n3. Removal of the damaged joint\n4. Placement of the artificial implant\n5. Closure of the wound\n\nThe operation can take 1-3 hours depending on the type of joint.\n\n## Recovery Process\n\nThe recovery process after joint replacement is very important and can last several months. This process includes:\n\n- Hospital stay (1-4 days)\n- Physical therapy\n- Pain management\n- Gradual return to daily activities\n\n## Conclusion\n\nJoint replacement surgery can significantly improve the quality of life for many people struggling with joint pain. With modern implants and surgical techniques, most people achieve pain-free mobility and a better quality of life after surgery.\n\nIf joint pain is negatively affecting your life, consult with an orthopedist. You may be a suitable candidate for joint replacement.",
      tr: "# Eklem Replasmanı Cerrahisini Anlamak\n\nEklem replasmanı cerrahisi ne zaman gereklidir? Operasyon nasıl yapılır ve neler beklemelisiniz? Bu makalede tüm sorularınızı yanıtlıyoruz.\n\n## Eklem Replasmanı Nedir?\n\nEklem replasmanı, hasarlı veya hastalıklı bir eklemin yapay bir implantla değiştirildiği bir cerrahi işlemdir. Bu prosedür, ağrıyı azaltmak ve eklem fonksiyonunu iyileştirmek için yapılır.\n\nEn sık değiştirilen eklemler şunlardır:\n\n- Diz eklemi\n- Kalça eklemi\n- Omuz eklemi\n- Dirsek eklemi\n- Ayak bileği eklemi\n\n## Eklem Replasmanı Ne Zaman Gereklidir?\n\nEklem replasmanı genellikle aşağıdaki durumlarda önerilir:\n\n- Şiddetli eklem ağrısı günlük aktiviteleri kısıtladığında\n- Yürümek, merdiven çıkmak veya oturup kalkmak zorlaştığında\n- Eklemde sürekli şişlik veya iltihaplanma olduğunda\n- Fizik tedavi veya ilaçlar gibi daha konservatif tedavi yöntemleri yardımcı olmadığında\n\n## Cerrahi Öncesi Hazırlık\n\nCerrahi öncesinde aşağıdaki hazırlıkları yapmalısınız:\n\n- Tam tıbbi muayene\n- Ameliyat öncesi fizik tedavi\n- Evinizi iyileşme dönemi için hazırlamak\n- Potansiyel riskler ve faydalar hakkında doktorla detaylı görüşme\n\n## Cerrahi Süreç\n\nEklem replasmanı cerrahisi genellikle aşağıdaki aşamaları içerir:\n\n1. Anestezi (genel veya bölgesel)\n2. Cerrahi kesi\n3. Hasarlı eklemin çıkarılması\n4. Yapay implantın yerleştirilmesi\n5. Yaranın kapatılması\n\nOperasyon, eklem türüne bağlı olarak 1-3 saat sürebilir.\n\n## İyileşme Süreci\n\nEklem replasmanı sonrası iyileşme süreci çok önemlidir ve birkaç ay sürebilir. Bu süreç şunları içerir:\n\n- Hastanede kalış (1-4 gün)\n- Fizik tedavi\n- Ağrı yönetimi\n- Günlük aktivitelere kademeli dönüş\n\n## Sonuç\n\nEklem replasmanı cerrahisi, eklem ağrısıyla mücadele eden birçok insanın yaşam kalitesini önemli ölçüde iyileştirebilir. Modern implantlar ve cerrahi tekniklerle, çoğu insan ameliyattan sonra ağrısız hareket kabiliyeti ve daha iyi bir yaşam kalitesi elde eder.\n\nEklem ağrısı hayatınızı olumsuz etkiliyorsa, bir ortopedistle görüşün. Eklem replasmanı için uygun bir aday olabilirsiniz."
    },
    category: categories[0],
    image: "https://images.pexels.com/photos/8460150/pexels-photo-8460150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Op. Dr. Gürkan Eryanılmaz",
    date: "2024-01-10",
    readTime: 8
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (categoryId: number): BlogPost[] => {
  return blogPosts.filter(post => post.category.id === categoryId);
};