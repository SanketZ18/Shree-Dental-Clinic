import drShrutikaImg from '../../images/DRs/Dr. Shrutika nanaware.jpg'
import drVinaImg from '../../images/DRs/Dr Vina Madavi.PNG'
import drRobinImg from '../../images/DRs/Dr.Robin mathew.jpeg'
import drMeghnaImg from '../../images/DRs/Dr. Meghna Chandrachood.jpeg'
import drShreyaImg from '../../images/DRs/DR. Shreya Chhallani.PNG'
import drPrajishaImg from '../../images/DRs/Dr Prajisha prabhakar.PNG'
import drTinaImg from '../../images/DRs/Dr. Tina Gogoi.jpeg'
import drRupaliImg from '../../images/DRs/Dr. Rupali Barate.png'

export const clinic = {
  name: 'Shri Dental Care',
  phone: '+919892694771',
  secondPhone: '+919503703143',
  email: 'shridentalcare@gmail.com',
  address: 'Shop No 27, 28, Satyaketu Complex, Plot No 09, Opp Union Bank Of India, Near Police Station, Sector 35, Kamothe, Navi Mumbai — 410209',
  experience: '15+',
  hygiene: '100%',
  sterilization: '100%',
  serviceCount: 17,
  rating: '4.9/5',
  reviewCount: '500+',
  timings: 'Monday – Sunday: 10:00 AM to 10:00 PM (Open All 7 Days)',
  appointment: 'https://www.justdial.com/online-consult/bookslot?docid=022PXX22.XX22.230408171204.A2L4&source=77&version=3.1&wap=77&action=BA&city=Mumbai&area=Kamothe',
  whatsapp: 'https://wa.me/919892694771',
  googleMaps: 'https://maps.google.com/?q=Shri+Dental+Care+Kamothe',
  // This must be the deployed Google Apps Script Web App URL, not the Sheet URL.
  googleSheetScriptUrl: import.meta.env.VITE_GOOGLE_SHEET_URL || ''
}

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' }
]

export const services = [
  {
    icon: '🦷',
    badge: 'FIRST VISIT & CHECK-UP',
    badgeColor: 'mint',
    name: 'PREVENTIVE DENTAL TREATMENTS',
    desc: 'Your First Visit. Your Complete Dental Check-Up. Your Healthier Smile.',
    checks: [
      'Complete Dental Check-Up & Oral Examination',
      'Early Detection of Cavities, Gum Problems & Infections',
      'Clear, Personalized Preventive Treatment Plan'
    ],
    options: []
  },
  {
    icon: '🔍',
    badge: 'DIGITAL DIAGNOSTICS',
    badgeColor: 'blue',
    name: 'OPG & CBCT IMAGING',
    desc: 'See More. Diagnose Precisely. Treat Confidently.',
    checks: [
      'Detailed 2D Panoramic OPG & 3D CBCT Imaging',
      'Supports Precise Planning for Implants, RCT & Surgery',
      'Quick, Convenient & Low-Radiation Digital Diagnostics'
    ],
    options: []
  },
  {
    icon: '🔩',
    badge: 'IMMEDIATE LOADING',
    badgeColor: 'blue',
    name: 'IMPLANT',
    desc: 'Fixed Teeth. Faster Function. A Confident New Smile.',
    checks: [
      'Fixed Teeth & Crown Loading in as Little as 48–72 Hours',
      'Strategic Design Suitable for Patients with Severe Bone Loss',
      'Suitable for High-Risk Profiles with Fewer Procedures'
    ],
    options: [
      { label: 'Basal Implant', tag: 'A', warranty: 'Crown Loading: 48–72 Hrs' },
      { label: 'Conventional Implant', tag: 'B' }
    ]
  },
  {
    icon: '✨',
    badge: 'INVISIBLE OPTION',
    badgeColor: 'mint',
    name: 'clear Aligner',
    desc: 'Straighten Your Smile. Discreetly. Comfortably. Confidently.',
    checks: [
      'Nearly Invisible & Transparent Custom Clear Aligners',
      'Comfortable & Removable While Eating, Brushing & Flossing',
      'Digitally Planned Custom Alignment for Optimal Results'
    ],
    options: []
  },
  {
    icon: '◇',
    badge: 'SMILE ALIGNMENT',
    badgeColor: 'purple',
    name: 'Braces ortho',
    desc: 'Straighten Your Teeth. Transform Your Smile. Elevate Your Confidence.',
    checks: [
      'Precise Alignment for Crooked, Crowded & Uneven Teeth',
      'Naturally Balanced Aesthetics & Beautiful Smile Makeover',
      'Improved Chewing Function, Comfort & Bite Stability'
    ],
    options: []
  },
  {
    icon: '⌁',
    badge: 'PAINLESS RCT',
    badgeColor: 'teal',
    name: 'RCT & RE-RCT',
    desc: 'Save Your Natural Tooth. Treat It Faster. Smile With Confidence.',
    checks: [
      'Single-Sitting RCT Available for Suitable Cases',
      'Preserve Your Natural Tooth & Eliminate Deep Canal Infection',
      'Specialized Re-RCT for Teeth with Persistent Infection'
    ],
    options: []
  },
  {
    icon: '🦷',
    badge: 'RESTORATIVE CARE',
    badgeColor: 'gold',
    name: 'Dental filling',
    desc: 'Tooth-colored composite fillings, inlays, and onlays to repair decayed or broken teeth and restore original strength.',
    checks: [
      'Tooth-colored (composite) fillings',
      'Amalgam (silver) fillings & inlays/onlays',
      'Seamless cavity repair & restoration'
    ],
    options: []
  },
  {
    icon: '♡',
    badge: 'GENTLE CHILD CARE',
    badgeColor: 'pink',
    name: 'PEDIATRIC DENTISTRY',
    desc: 'Happy Visits. Healthy Smiles. Little Patients, Big Care.',
    checks: [
      'Child-Friendly, Welcoming & Anxiety-Free Experience',
      'Pulpotomy Care to Manage Deep Decay in Baby Teeth',
      'Fluoride Varnish Enamel Strengthening & Protection'
    ],
    options: []
  },
  {
    icon: '🌿',
    badge: 'GUM HEALTH',
    badgeColor: 'mint',
    name: 'TEETH CLEANING & SCALING',
    desc: 'Clean Teeth. Healthy Gums. A Fresher, Brighter Smile.',
    checks: [
      'Ultrasonic Scaling Removes Hardened Tartar & Plaque Buildup',
      'Helps Reduce Gum Inflammation, Bleeding & Periodontal Risk',
      'Removes Bacteria & Unpleasant Odors for Fresher Breath'
    ],
    options: []
  },
  {
    icon: '☼',
    badge: 'SMILE BRIGHTENING',
    badgeColor: 'purple',
    name: 'TEETH WHITENING & BLEACHING',
    desc: 'Brighten Your Smile. Boost Your Confidence.',
    checks: [
      'Lightens Dental Stains & Enhances Natural Tooth Shade',
      'Clinically Supervised Treatment for Controlled, Safe Whitening',
      'Effective Reduction of Tea, Coffee, Tobacco & Aging Stains'
    ],
    options: []
  },
  {
    icon: '💎',
    badge: 'COSMETIC VENEERS',
    badgeColor: 'purple',
    name: 'DENTAL VENEERS',
    desc: 'Transform Your Smile. Refine Your Look. Smile With Confidence.',
    checks: [
      'Improve Discolored, Chipped, Spaced or Uneven Teeth',
      'Customized Shape & Natural Shade Tailored to Facial Features',
      'Durable, Long-Lasting Cosmetic Transformation'
    ],
    options: []
  },
  {
    icon: '⚙',
    badge: 'PAINLESS SURGERY',
    badgeColor: 'red',
    name: 'oral surgery',
    desc: 'Advanced Surgical Care. Gentle Approach. Confident Recovery.',
    checks: [
      'Careful, Comfort-Focused Removal of Damaged Teeth',
      'Expert Wisdom Tooth Disimpaction to Prevent Infection',
      'Advanced Jawbone Grafting & Sinus Lift Procedures'
    ],
    options: []
  },
  {
    icon: '🦷',
    badge: 'REMOVABLE PROSTHETICS',
    badgeColor: 'blue',
    name: 'REMOVABLE DENTURES',
    desc: 'Restore Your Smile. Restore Your Confidence.',
    checks: [
      'Complete & Partial Dentures Custom-Fitted for Missing Teeth',
      'Significantly Improves Chewing Function & Everyday Comfort',
      'Convenient Removable Design for Simple Daily Maintenance'
    ],
    options: []
  },
  {
    icon: '🔩',
    badge: 'FIXED REHABILITATION',
    badgeColor: 'blue',
    name: 'IMPLANT-SUPPORTED FIXED DENTURES',
    desc: 'Secure Your Smile. Restore Your Function. Live With Confidence.',
    checks: [
      'Implants Anchor Dentures Securely with Zero Slipping',
      'Superior Chewing Power & Natural Speech Clarity',
      'Preserves Underlying Jawbone Density from Bone Resorption'
    ],
    options: []
  },
  {
    icon: '⌁',
    badge: 'MINIMALLY INVASIVE',
    badgeColor: 'teal',
    name: 'LASER DENTISTRY',
    desc: 'Advanced Technology. Gentle Treatment. Better Dental Comfort.',
    checks: [
      'High-Precision Treatment Minimizing Impact on Healthy Tissue',
      'Painless, Comfortable Experience Often with Minimal Anesthesia',
      'Controlled Bleeding & Faster Tissue Healing'
    ],
    options: []
  },
  {
    icon: '⚡︎',
    badge: 'SAME DAY RELIEF',
    badgeColor: 'red',
    name: 'Emergency Dental Care',
    desc: 'Immediate same-day priority treatment for severe toothaches, broken teeth, trauma, and dental abscesses.',
    checks: [
      'Same-day emergency appointments',
      'Trauma & abscess management',
      'Broken / chipped tooth repair'
    ],
    options: []
  },
  {
    icon: '◉',
    badge: 'SPECIALIST CARE',
    badgeColor: 'purple',
    name: 'Other Specialized Treatments',
    desc: 'Targeted care for jaw-joint TMJ pain, custom sports mouthguards, bruxism night guards, and oral lesion screenings.',
    checks: [
      'TMJ (jaw joint) disorder treatment',
      'Night guards for teeth grinding (bruxism)',
      'Mouthguards for sports & oral screenings'
    ],
    options: []
  }
]


export const serviceCategories = [
  ['Preventive Treatments', [
    'Dental check-up (oral examination)',
    'Professional teeth cleaning (scaling & polishing)',
    'Fluoride treatment',
    'Dental sealants',
    'Oral hygiene instructions'
  ]],
  ['Restorative Treatments', [
    'Tooth-colored (composite) fillings',
    'Amalgam (silver) fillings',
    'Inlays and onlays',
    'Dental crowns (caps)',
    'Dental bridges'
  ]],
  ['Cosmetic Dentistry', [
    'Teeth whitening (bleaching)',
    'Dental veneers',
    'Dental bonding',
    'Smile makeover',
    'Tooth contouring and reshaping'
  ]],
  ['Endodontic Treatments', [
    'Root canal treatment (RCT)',
    'Root canal retreatment',
    'Apicoectomy (root-end surgery)'
  ]],
  ['Periodontal (Gum) Treatments', [
    'Scaling and root planing (deep cleaning)',
    'Gum surgery (flap surgery)',
    'Gum grafting',
    'Periodontal maintenance'
  ]],
  ['Tooth Replacement', [
    'Dental implants',
    'Implant-supported crowns',
    'Implant-supported bridges',
    'Complete dentures',
    'Partial dentures'
  ]],
  ['Orthodontic Treatments', [
    'Metal braces',
    'Ceramic braces',
    'Lingual braces',
    'Clear aligners (e.g., Invisalign)',
    'Retainers'
  ]],
  ['Oral Surgery', [
    'Tooth extraction',
    'Wisdom tooth removal',
    'Surgical tooth extraction',
    'Bone grafting',
    'Sinus lift'
  ]],
  ['Pediatric Dentistry', [
    'Child dental examination',
    'Fluoride application',
    'Pit and fissure sealants',
    'Pulpotomy/Pulpectomy',
    'Space maintainers'
  ]],
  ['Emergency Dental Care', [
    'Treatment for toothache',
    'Broken or chipped tooth repair',
    'Knocked-out tooth management',
    'Dental abscess treatment',
    'Emergency extractions'
  ]],
  ['Other Specialized Treatments', [
    'TMJ (jaw joint) disorder treatment',
    'Night guards for teeth grinding (bruxism)',
    'Mouthguards for sports',
    'Oral cancer screening',
    'Biopsy of oral lesions'
  ]],
  ['Root Canal Retreatment (Re-RCT)', [
    'Re-cleaning & reshaping of previously treated canals',
    'Removal of old filling material and infection',
    'Laser-assisted canal sterilisation',
    'Re-sealing with bio-compatible material',
    'Crown restoration after retreatment'
  ]]
]

export const specialists = [
  [
    'Dr. Shrutika S Nanaware',
    'Lead Dentist & Dental Surgeon',
    drShrutikaImg,
    'BDS · Dental Surgeon (Since 2013). Experienced Dental Surgeon in Navi Mumbai with more than 10 years of clinical practice across top hospitals. Blends modern technology with gentle guidance in general, cosmetic and restorative dentistry. Believes good care begins with listening.',
    'BDS',
    'Since 2013'
  ],
  [
    'Dr. Prajisha Prabhakar',
    'Experienced Dental Surgeon',
    drPrajishaImg,
    'BSc, BDS · 12 Years Experience. Experienced Dental Surgeon with hands-on excellence in restorative and family dentistry.',
    'BSc, BDS',
    '12 Years Experience'
  ],
  [
    'Dr. Meghna Chandrachood',
    'Dental Specialist',
    drMeghnaImg,
    'MDS · 7 Years Experience. Dedicated specialist providing advanced dental treatments with precision, gentle care, and patient comfort.',
    'MDS',
    '7 Years Experience'
  ],
  [
    'Dr. Rupali Barate',
    'Pediatric & Preventive Dentist',
    drRupaliImg,
    'MDS (Pediatric & Preventive Dentistry) · 6 Years Experience. Specialized in fear-free, gentle child dentistry, early preventive care, and healthy young smiles.',
    'MDS',
    '6 Years Experience'
  ],
  [
    'Dr. Robin Mathew',
    'Orthodontist',
    drRobinImg,
    'MDS (Orthodontics) · 15 Years Experience. Specialised in orthodontics, teeth alignment, braces, and clear aligners.',
    'MDS',
    '15 Years Experience'
  ],
  [
    'Dr. Veena Madavi',
    'Renowned Dental Surgeon',
    drVinaImg,
    'BDS · 15 Years Experience. Renowned Dental Surgeon with deep clinical expertise in comprehensive oral health and preventive care.',
    'BDS',
    '15 Years Experience'
  ],
  [
    'Dr. Tina Gogoi',
    'Dental Surgeon',
    drTinaImg,
    'BDS · Dental Surgeon (5 Years Experience). Dedicated to providing gentle, high-quality clinical care, restorative procedures, and proactive oral health guidance.',
    'BDS',
    '5 Years Experience'
  ],
  [
    'Dr. Shreya Chhallani',
    'Compassionate Dental Surgeon',
    drShreyaImg,
    'BDS. Compassionate Dental Surgeon providing gentle, patient-centered dentistry and aesthetic restorations.',
    'BDS',
    'Aesthetic & Restorative'
  ]
]

export const clinicalHighlights = [
  {
    title: '100% Pain-Managed Care',
    desc: 'Advanced topical and computer-controlled gentle local anaesthesia techniques ensure virtually pain-free procedures.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Hospital-Grade Sterilization',
    desc: 'Class-B European Standard autoclaves, single-use sealed barrier pouches, and multi-stage chemical disinfection protocols.',
    icon: 'Sparkles'
  },
  {
    title: 'Digital Low-Radiation Imaging',
    desc: 'Cutting-edge digital RVG sensors and intraoral HD cameras provide instantaneous diagnostic precision with up to 80% less radiation.',
    icon: 'Scan'
  },
  {
    title: 'Transparent & Ethical Advice',
    desc: 'We prioritize saving your natural teeth and provide transparent, clear estimates with zero hidden treatment costs.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Mon – Sun (10 AM - 10 PM)',
    desc: 'Convenient morning and evening consultation hours 7 days a week, Monday through Sunday.',
    icon: 'Clock3'
  },
  {
    title: '15+ Years of Experience',
    desc: 'Trusted by local families, police personnel, and corporate professionals across Navi Mumbai.',
    icon: 'Award'
  }
]

export const patientJourney = [
  {
    step: '01',
    title: 'Digital Consultation & X-Ray, Portable X-ray, CBCT, OPG',
    desc: 'Detailed examination with high-definition intraoral cameras and instant digital RVG X-rays to accurately pinpoint the root cause of any issue.'
  },
  {
    step: '02',
    title: 'Custom Treatment Roadmap',
    desc: 'Our specialist explains all available treatment options, timelines, and costs transparently, letting you make an informed choice.'
  },
  {
    step: '03',
    title: 'Comfort-First Treatment',
    desc: 'Relax in modern ergonomic dental chairs while experienced doctors perform your procedure with gentle, pain-free techniques.'
  },
  {
    step: '04',
    title: 'Dedicated Aftercare & Advice',
    desc: 'Receive comprehensive home-care instructions, prescribed medications, and follow-up support to ensure long-lasting oral health. Portable x-ray which causes us low radiation.'
  }
]

export const faqs = [
  {
    q: 'Is Root Canal Treatment (RCT) painful at Shri Dental Care?',
    a: 'Not at all! With modern rotary endodontic equipment and effective local anesthesia, root canal treatment is comfortable and painless. In fact, RCT is designed to eliminate the severe pain caused by infected tooth pulp, not cause it.'
  },
  {
    q: 'How long do dental implants last?',
    a: 'Dental implants are the longest-lasting solution for missing teeth. With good oral hygiene (regular brushing, flossing, and 6-monthly dental cleanings), quality titanium dental implants can last 20–25 years or even a lifetime.'
  },
  {
    q: 'How often should I get my teeth cleaned (scaling)?',
    a: 'Dentists globally recommend professional scaling and polishing every 6 months. This removes hardened tartar (calculus) and harmful bacteria that regular brushing cannot remove, preventing gum disease, bleeding, and bad breath.'
  },
  {
    q: 'What are the benefits of Clear Aligners over traditional braces?',
    a: 'Clear aligners are nearly invisible, removable while eating and brushing, cause minimal mouth irritation compared to metal wires, and require fewer emergency clinic visits. They are custom 3D-designed for efficient, discreet teeth straightening.'
  },
  {
    q: 'What should I do during a dental emergency or severe toothache?',
    a: 'Call our emergency helpline (+91 9892694771) right away. We offer same-day priority appointments. For pain, rinse gently with warm salt water and avoid placing aspirin tablets directly against the gum.'
  },
  {
    q: 'What hygiene and sterilisation measures do you follow?',
    a: 'We strictly follow international infection control standards: Class-B vacuum autoclave sterilization for all dental instruments, single-use disposable cups/needles/gloves, and hospital-grade surface disinfection between every single patient.'
  }
]

export const symptomGuide = [
  {
    symptom: 'Sharp, throbbing tooth pain, sensitivity to hot/cold',
    possibleCause: 'Deep dental decay reaching the tooth nerve or acute pulpitis',
    treatment: 'Root Canal Treatment (RCT) or restorative composite filling'
  },
  {
    symptom: 'Bleeding gums when brushing or bad breath',
    possibleCause: 'Gingivitis or subgingival tartar and bacterial plaque build-up',
    treatment: 'Professional ultrasonic scaling and deep root planing'
  },
  {
    symptom: 'Missing one or multiple teeth with chewing difficulty',
    possibleCause: 'Extracted tooth, age-related loss, or trauma',
    treatment: 'Permanent Dental Implants or Ceramic Bridge'
  },
  {
    symptom: 'Crooked, overlapping teeth or gap between front teeth',
    possibleCause: 'Dental malocclusion or spacing issues',
    treatment: 'Clear Invisible Aligners (Invisalign) or Ceramic Braces'
  },
  {
    symptom: 'Yellow, stained, or discolored teeth',
    possibleCause: 'Dietary stains (tea/coffee), tobacco, or natural enamel aging',
    treatment: 'Professional Laser Teeth Whitening or Porcelain Veneers'
  },
  {
    symptom: 'Pain in jaw joints, earache, or morning tooth soreness',
    possibleCause: 'Nighttime teeth grinding (bruxism) or TMJ dysfunction',
    treatment: 'Custom Night Guard & Occlusal Splint therapy'
  }
]
