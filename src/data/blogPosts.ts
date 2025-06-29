export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  // Shoulder Pain & Injuries
  {
    id: '1',
    title: 'Understanding Rotator Cuff Tears: Causes, Symptoms, and Treatment Options',
    slug: 'understanding-rotator-cuff-tears',
    excerpt: 'Learn about the most common shoulder injury affecting millions worldwide, including modern treatment approaches and recovery expectations.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-15',
    category: 'Shoulder Conditions',
    tags: ['rotator cuff', 'shoulder pain', 'arthroscopic surgery', 'sports medicine'],
    readTime: 8,
    image: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg'
  },
  {
    id: '2',
    title: 'Frozen Shoulder: Breaking Through the Stiffness',
    slug: 'frozen-shoulder-treatment-guide',
    excerpt: 'Comprehensive guide to understanding and treating adhesive capsulitis, including the latest therapeutic approaches.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-10',
    category: 'Shoulder Conditions',
    tags: ['frozen shoulder', 'adhesive capsulitis', 'shoulder stiffness', 'physical therapy'],
    readTime: 6,
    image: 'https://images.pexels.com/photos/7659566/pexels-photo-7659566.jpeg'
  },

  // Elbow Conditions
  {
    id: '3',
    title: 'Tennis Elbow: More Than Just a Sports Injury',
    slug: 'tennis-elbow-comprehensive-treatment',
    excerpt: 'Discover why tennis elbow affects people beyond tennis players and learn about effective treatment strategies.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-08',
    category: 'Elbow Conditions',
    tags: ['tennis elbow', 'lateral epicondylitis', 'elbow pain', 'overuse injury'],
    readTime: 7,
    image: 'https://images.pexels.com/photos/7659567/pexels-photo-7659567.jpeg'
  },

  // Knee Conditions
  {
    id: '4',
    title: 'ACL Injuries: From Diagnosis to Full Recovery',
    slug: 'acl-injury-complete-guide',
    excerpt: 'Complete guide to ACL injuries, including modern reconstruction techniques and rehabilitation protocols.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-05',
    category: 'Knee Conditions',
    tags: ['ACL injury', 'knee ligament', 'sports injury', 'knee reconstruction'],
    readTime: 9,
    image: 'https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg'
  },
  {
    id: '5',
    title: 'Knee Replacement Surgery: What to Expect',
    slug: 'knee-replacement-surgery-guide',
    excerpt: 'Comprehensive guide to knee replacement surgery, including preparation, procedure, and recovery expectations.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-12-01',
    category: 'Knee Conditions',
    tags: ['knee replacement', 'total knee arthroplasty', 'arthritis', 'joint surgery'],
    readTime: 10,
    image: 'https://images.pexels.com/photos/7659569/pexels-photo-7659569.jpeg'
  },

  // Hip Problems
  {
    id: '6',
    title: 'Developmental Hip Dysplasia: Early Detection and Treatment',
    slug: 'developmental-hip-dysplasia-guide',
    excerpt: 'Essential information about hip dysplasia in infants and children, including screening, diagnosis, and treatment options.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-28',
    category: 'Pediatric Orthopedics',
    tags: ['hip dysplasia', 'pediatric orthopedics', 'infant hip', 'Pavlik harness'],
    readTime: 8,
    image: 'https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg'
  },

  // Foot & Ankle
  {
    id: '7',
    title: 'Clubfoot Treatment: The Ponseti Method Success Story',
    slug: 'clubfoot-ponseti-method-treatment',
    excerpt: 'Learn about the revolutionary Ponseti method for treating clubfoot and its remarkable success rates.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-25',
    category: 'Pediatric Orthopedics',
    tags: ['clubfoot', 'Ponseti method', 'pediatric foot', 'congenital deformity'],
    readTime: 7,
    image: 'https://images.pexels.com/photos/7659571/pexels-photo-7659571.jpeg'
  },

  // Wrist & Hand
  {
    id: '8',
    title: 'Wrist Fractures: Modern Treatment Approaches',
    slug: 'wrist-fractures-treatment-guide',
    excerpt: 'Comprehensive guide to wrist fracture treatment, from simple casts to complex surgical reconstruction.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-22',
    category: 'Hand & Wrist',
    tags: ['wrist fracture', 'distal radius', 'scaphoid', 'hand surgery'],
    readTime: 8,
    image: 'https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg'
  },

  // General Orthopedics
  {
    id: '9',
    title: 'Arthroscopic Surgery: Minimally Invasive Joint Treatment',
    slug: 'arthroscopic-surgery-benefits',
    excerpt: 'Discover the advantages of arthroscopic surgery and how it has revolutionized orthopedic treatment.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-20',
    category: 'General Orthopedics',
    tags: ['arthroscopic surgery', 'minimally invasive', 'joint surgery', 'sports medicine'],
    readTime: 9,
    image: 'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg'
  },

  {
    id: '10',
    title: 'Sports Injury Prevention: A Comprehensive Guide',
    slug: 'sports-injury-prevention-guide',
    excerpt: 'Essential strategies for preventing sports injuries and maintaining peak athletic performance.',
    content: `
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
    author: 'Op. Dr. Gürkan Eryanılmaz',
    publishedAt: '2024-11-18',
    category: 'Sports Medicine',
    tags: ['sports injury', 'injury prevention', 'athletic performance', 'sports medicine'],
    readTime: 10,
    image: 'https://images.pexels.com/photos/7659574/pexels-photo-7659574.jpeg'
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentBlogPosts = (limit: number = 5): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};