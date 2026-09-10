export const clinic = {
  name: 'Shri Dental Care',
  phone: '+919892694771',
  secondPhone: '+919503703143',
  email: 'shridentalcare@gmail.com',
  address: 'Shop No 27, 28, Satyaketu Complex, Plot No 09, Opp Union Bank Of India, Near Police Station, Sector 35, Kamothe, Navi Mumbai — 410209',
  experience: '15+',
  patients: '5,000+',
  serviceCount: 12,
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
    badge: 'COMPREHENSIVE',
    badgeColor: 'mint',
    name: 'Dental Checkup',
    desc: 'A thorough dental assessment using advanced imaging to evaluate your complete oral health and plan the right care.',
    checks: [
      'Complete oral examination',
      'Digital X-Ray / OPG / CBCT scanning',
      'Personalised treatment planning'
    ],
    options: [
      { label: 'Oral Examination', tag: 'A' },
      { label: 'OPG / CBCT / X-Ray Imaging', tag: 'B' }
    ]
  },
  {
    icon: '👑',
    badge: 'WARRANTY UP TO 15 YRS',
    badgeColor: 'gold',
    name: 'Dental Crowns (Caps)',
    desc: 'Precision-crafted tooth caps to restore strength, shape and aesthetics — from budget-friendly metal to ultra-premium zirconia.',
    checks: [
      'Metal-free & biocompatible options',
      'Perfect shade matching',
      'Long-term manufacturer warranty'
    ],
    options: [
      { label: 'Metal Crown', tag: 'A' },
      { label: 'PFM (Porcelain-Fused-Metal) Crown', tag: 'B' },
      { label: 'CAD/CAM Crown', tag: 'C', warranty: 'Warranty 3–5 Yrs' },
      { label: 'DMLS Crown', tag: 'D', warranty: 'Warranty 5–7 Yrs' },
      { label: 'Zirconia Crown', tag: 'E', warranty: 'Warranty 10–15 Yrs' },
      { label: 'Bruxzir Crown', tag: 'F' },
      { label: 'Ceramic Facing Crown', tag: 'G' }
    ]
  },
  {
    icon: '🔩',
    badge: 'PERMANENT SOLUTION',
    badgeColor: 'blue',
    name: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth roots anchored into the jawbone — restored to full function within days or weeks.',
    checks: [
      'Titanium precision-fit implant',
      'Crown loading in as little as 48 hrs',
      'Lifelong strength & natural feel'
    ],
    options: [
      { label: 'Basal Implant', tag: 'A', warranty: 'Crown Loading: 48–72 Hrs' },
      { label: 'Conventional Implant', tag: 'B' }
    ]
  },
  {
    icon: '⌁',
    badge: 'PAINLESS',
    badgeColor: 'teal',
    name: 'Root Canal Treatment (RCT)',
    desc: 'Advanced laser-assisted root canal to relieve toothache, eliminate infection & save your natural tooth.',
    checks: [
      'Deep laser canal sterilization',
      'Single-visit option available',
      'Zero post-procedure pain'
    ],
    options: []
  },
  {
    icon: '☼',
    badge: 'NATURAL FINISH',
    badgeColor: 'purple',
    name: 'Cosmetic Smile Makeover',
    desc: 'Custom smile design combining whitening, veneers, bonding, and contouring for a stunning, natural look.',
    checks: [
      'Custom shade selection',
      'Teeth whitening bleaching',
      'Porcelain veneers & bonding'
    ],
    options: []
  },
  {
    icon: '◇',
    badge: 'INVISIBLE OPTION',
    badgeColor: 'mint',
    name: 'Braces & Clear Aligners',
    desc: 'Orthodontic correction with metal, ceramic, lingual braces or invisible Invisalign-style clear aligners.',
    checks: [
      'Metal, ceramic & lingual braces',
      'Clear aligners (Invisalign)',
      'Fixed & removable retainers'
    ],
    options: []
  },
  {
    icon: '♡',
    badge: 'GENTLE CARE',
    badgeColor: 'pink',
    name: 'Pediatric Dentistry',
    desc: 'Anxiety-free child dental care including fluoride varnish, sealants, pulpotomy and space maintainers.',
    checks: [
      'Child-friendly anxiety-free visits',
      'Fluoride & pit/fissure sealants',
      'Pulpotomy / Pulpectomy'
    ],
    options: []
  },
  {
    icon: '⚡︎',
    badge: 'SAME DAY',
    badgeColor: 'red',
    name: 'Emergency Dental Care',
    desc: 'Immediate same-day relief for toothaches, broken teeth, knocked-out teeth and dental abscesses.',
    checks: [
      'Same-day emergency appointments',
      'Trauma & abscess management',
      'Broken / chipped tooth repair'
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
    '/images/DRs/Shrutika nanaware.PNG',
    'BDS · Dental Surgeon (Since 2013). Experienced Dental Surgeon in Navi Mumbai with more than 10 years of clinical practice across top hospitals. Blends modern technology with gentle guidance in general, cosmetic and restorative dentistry. Believes good care begins with listening.',
    'BDS',
    '10+ Years Practice (Since 2013)'
  ],
  [
    'Dr. Vina Madavi',
    'Renowned Dental Surgeon',
    '/images/DRs/Dr Vina Madavi.PNG',
    'BDS · 15 Years Experience. Renowned Dental Surgeon with deep clinical expertise in comprehensive oral health and preventive care.',
    'BDS',
    '15 Years Experience'
  ],
  [
    'Dr. Shreya Chhallani',
    'Compassionate Dental Surgeon',
    '/images/DRs/DR. SHREYA CHHALLANI.PNG',
    'BDS. Compassionate Dental Surgeon providing gentle, patient-centered dentistry and aesthetic restorations.',
    'BDS',
    'Aesthetic & Restorative'
  ],
  [
    'Dr. Prajisha Prabhakar',
    'Experienced Dental Surgeon',
    '/images/DRs/Dr Prajisha prabhakar.PNG',
    'BSc, BDS · 12 Years Experience. Experienced Dental Surgeon with hands-on excellence in restorative and family dentistry.',
    'BSc, BDS',
    '12 Years Experience'
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
    desc: 'Trusted by over 5,000+ local families, police personnel, and corporate professionals across Navi Mumbai.',
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
