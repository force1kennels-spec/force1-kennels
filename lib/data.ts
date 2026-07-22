// Centralised content for the Force 1 Kennels site.
// Keeping copy here (rather than scattered in components) makes the
// site easy to update without touching markup or styling.

export const siteConfig = {
  name: "Force 1 Kennels",
  shortName: "Force 1",
  tagline: "Elite K9 & Companion Dogs",
  description:
    "Elite K9 and companion dogs for global defence forces, security professionals and family homes. Certified premium bloodlines, professionally trained.",
  url: "https://force1kennels.in",
  email: "info@force1kennels.in",
  phone: "+91-9988777246",
  address:
    "Village Sundraan, PO Mubarikpur, Tehsil Derabassi, District SAS Nagar (Mohali), Punjab 140207, India",
  shortAddress: "SAS Nagar (Mohali), Punjab 140207, India",
  instagram: "https://www.instagram.com/force1kennels/",
  whatsapp: "https://wa.me/919988777246",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/#breeds" },
  { label: "Contact Us", href: "/contact" },
];

export type WorkingDog = {
  image: string;
  alt: string;
  title: string;
  items: string[];
};

export const workingDogs: WorkingDog[] = [
  {
    image: "/images/detection-dog-focused-during-a-field-exercise.jpg",
    alt: "Detection dog focused during a field exercise",
    title: "Detection dogs",
    items: ["Explosive detection", "Narcotics detection", "Anti-poaching operation"],
  },
  {
    image: "/images/security-and-patrol-dog-training-with-handler.jpg",
    alt: "Security and patrol dog training with handler",
    title: "Security & patrol dogs",
    items: [
      "Custom & border control",
      "Port security",
      "Patrol dogs",
      "Industrial & commercial security",
      "Hospitality & event security",
    ],
  },
  {
    image: "/images/search-rescue-and-tracking-dog-on-alert.jpg",
    alt: "Search, rescue and tracking dog on alert",
    title: "Search, rescue & tracking",
    items: ["Search & rescue", "Disaster response", "Missing person search", "Tracking & trailing"],
  },
  {
    image: "/images/home/belgian-malinois-bite-work-protection-training.jpg",
    alt: "Belgian Malinois in bite-work protection training",
    title: "Protection dogs",
    items: ["VIP protection", "Personal protection", "Estate & property protection"],
  },
];

export const workingDogsUsp =
  "Our detection programmes include training with authorised real explosives & narcotics";

export const defenceFeature = {
  eyebrow: "Government & Institutional Trust",
  heading: "Real programmes. Real deployments.",
  description:
    "Force 1 Kennels dogs and handlers train alongside defence and paramilitary personnel as part of ongoing government and institutional programmes, not a one-off demonstration, but the same rigorous standard we hold every working dog to before it's ever deployed.",
  image: "/images/home/defence-personnel-detection-dogs-formation.jpg",
  alt: "Defence personnel handling Force 1 Kennels detection dogs in formation",
  caption:
    "Force 1 Kennels-trained dogs on active handler rotation with defence personnel.",
};

export type PrivateDog = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export const privateCollection: PrivateDog[] = [
  {
    image: "/images/family-companion-dog.jpg",
    alt: "Family companion dog",
    title: "Family companions",
    description: "Confident, well-balanced dogs raised for family life and lasting companionship.",
  },
  {
    image: "/images/therapy-and-health-detection-dog.jpg",
    alt: "Therapy and health detection dog",
    title: "Therapy & health detection dogs",
    description:
      "Specially selected dogs for therapeutic support, health detection, and patient assistance.",
  },
  {
    image: "/images/show-dog-with-elegant-structure.jpg",
    alt: "Show dog with elegant structure",
    title: "Show dogs",
    description:
      "Exceptional bloodlines with the structure, temperament, and pedigree suited for conformation shows and championship competition.",
  },
  {
    image: "/images/future-breeding-prospect-puppies.jpg",
    alt: "Future breeding prospect puppies",
    title: "Future breeding prospects",
    description: "Health-tested bloodlines selected for responsible breeding and long-term genetic excellence.",
  },
];

export type CredItem = {
  numberValue?: number;
  numberText?: string;
  accentSuffix?: string;
  title: string;
  description: string;
};

export const credibilityStats: CredItem[] = [
  {
    numberValue: 28,
    accentSuffix: "+",
    title: "Years of expertise",
    description: "Three decades of excellence in breeding, training, and developing elite working and companion dogs.",
  },
  {
    numberValue: 418,
    accentSuffix: "+",
    title: "Dogs & handlers trained",
    description: "Successfully developing canine teams for protection, detection, security, and specialised operational roles.",
  },
  {
    numberValue: 43,
    accentSuffix: "-acre",
    title: "Training campus",
    description: "Purpose-built facilities designed for structured development across diverse, real-world training environments.",
  },
  {
    numberText: "Government",
    title: "Trusted institutional partner",
    description: "Supporting defence, law enforcement, paramilitary, and government canine programmes with proven expertise.",
  },
  {
    numberText: "KCI",
    title: "Recognised breeding standards",
    description: "Proud KCI member, committed to ethical breeding, documented pedigrees, and responsible canine development.",
  },
  {
    numberText: "Global",
    title: "International placements",
    description: "Seamless worldwide placements with export documentation, health certification, and end-to-end client support.",
  },
];

export type DifferenceItem = {
  icon: "shield" | "heart" | "cert" | "target" | "match" | "support";
  title: string;
  description: string;
};

export const differenceItems: DifferenceItem[] = [
  {
    icon: "shield",
    title: "Proven bloodlines",
    description: "Imported, carefully selected bloodlines with documented pedigrees, predictable temperament, and proven working ability.",
  },
  {
    icon: "heart",
    title: "Ethical breeding",
    description: "Health-focused breeding practices that prioritise genetic integrity, sound structure, and long-term wellbeing.",
  },
  {
    icon: "cert",
    title: "Health & certification",
    description: "Every dog undergoes comprehensive health screening, professional evaluation, and certification to ensure quality, soundness, and suitability for its intended role.",
  },
  {
    icon: "target",
    title: "Real-world training",
    description: "Raised and trained with structured exposure to people, vehicles, crowds, workplaces, and everyday environments to build confidence, adaptability, and dependable behaviour.",
  },
  {
    icon: "match",
    title: "Purpose-matched placement",
    description: "Every dog is carefully matched to its future owner based on lifestyle, experience, environment, and intended role.",
  },
  {
    icon: "support",
    title: "Lifetime support",
    description: "Our commitment continues beyond placement with ongoing guidance on training, nutrition, behaviour, and long-term care.",
  },
];

export type Breed = {
  image: string;
  alt: string;
  name: string;
  tagline: string;
  tags: string[];
};

export const breeds: Breed[] = [
  {
    image: "/images/belgian-malinois-portrait.jpg",
    alt: "Belgian Malinois portrait",
    name: "Belgian Malinois",
    tagline: "Elite protection and detection specialist.",
    tags: ["Executive Protection", "Detection", "Security", "Military"],
  },
  {
    image: "/images/working-line-german-shepherd-portrait.jpg",
    alt: "Working Line German Shepherd portrait",
    name: "Working Line German Shepherd",
    tagline: "The versatile choice for protection and service.",
    tags: ["Family Protection", "Patrol", "Security", "Tracking"],
  },
  {
    image: "/images/white-german-shepherd-portrait.jpg",
    alt: "White German Shepherd portrait",
    name: "White German Shepherd",
    tagline: "Intelligence, elegance, and unwavering loyalty.",
    tags: ["Family Companion", "Estate Protection", "Show", "Guardian"],
  },
  {
    image: "/images/working-line-labrador-retriever-portrait.jpg",
    alt: "Working Line Labrador Retriever portrait",
    name: "Working Line Labrador Retriever",
    tagline: "Trusted worldwide for scent work and service.",
    tags: ["Detection", "Search & Rescue", "Service", "Family"],
  },
  {
    image: "/images/working-line-golden-retriever-portrait.jpg",
    alt: "Working Line Golden Retriever portrait",
    name: "Working Line Golden Retriever",
    tagline: "Gentle temperament with exceptional working ability.",
    tags: ["Therapy", "Detection", "Service", "Companion"],
  },
];

export type Testimonial = {
  text: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    text: "From the very first consultation, the team understood exactly what we needed. Our protection dog is confident, exceptionally trained, and has integrated seamlessly into our family.",
    name: "Rahul Mehra",
    role: "Family Protection Dog Owner",
  },
  {
    text: "The quality of the dog, transparency throughout the process, and post-placement support were outstanding. Force 1 Kennels sets a benchmark for professionalism.",
    name: "Vikram Singh",
    role: "Security Consultant",
  },
  {
    text: "We were looking for a reliable detection dog with the right temperament and working drive. Force 1 delivered beyond our expectations.",
    name: "James Whitfield",
    role: "Operations Head, Private Security Organisation",
  },
  {
    text: "Our Labrador is intelligent, calm, and beautifully socialised. It's evident that every dog is raised with exceptional care and attention.",
    name: "Ananya & Karan Kapoor",
    role: "Companion Dog Owners",
  },
  {
    text: "The entire experience, from selecting the right breed to ongoing guidance after bringing our dog home, was seamless and reassuring.",
    name: "Sarah Mitchell",
    role: "First-Time Dog Owner",
  },
  {
    text: "The pedigree, temperament, and confidence of our German Shepherd exceeded every expectation. We wouldn't hesitate to recommend Force 1 Kennels.",
    name: "Arjun Malhotra",
    role: "Working Line German Shepherd Owner",
  },
];

export const trustItems = [
  { icon: "⭐", num: "4.9/5", label: "Average Client Rating" },
  { icon: "🩺", num: "100%", label: "Health Screened Before Placement" },
  { icon: "🌍", num: null, label: "Domestic & International Placements" },
  { icon: "🏛", num: null, label: "Trusted by Defence & Security Professionals" },
];

export const footerCompanyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerCerts = ["KCI MEMBER", "GOVERNMENT & INSTITUTIONAL TRUST", "GLOBAL PLACEMENTS"];

// ============ ABOUT PAGE ============

export type Pillar = {
  icon: "vision" | "mission" | "philosophy";
  label: string;
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    icon: "vision",
    label: "Vision",
    title: "The standard others measure against.",
    description:
      "To be the name defence forces, security professionals, and discerning handlers turn to first: recognised for dogs that perform when it matters most, not just in a training yard.",
  },
  {
    icon: "mission",
    label: "Mission",
    title: "Purpose-built dogs, not generic stock.",
    description:
      "To breed, raise, and place working dogs of uncompromising quality for defence, security, and operational roles, matched precisely to purpose, backed by a decade of proven bloodlines and ethical breeding.",
  },
  {
    icon: "philosophy",
    label: "Philosophy",
    title: "The standard goes in early, not later.",
    description:
      "A dog is only as reliable as the standard it was raised to. We build that in from the first generation, through real-world training and rigorous evaluation, not after a dog has already struggled in the field.",
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Bloodlines first, papers second.",
    description:
      "Every litter begins with imported, carefully selected bloodlines and documented pedigrees. We breed for temperament and working ability before anything else. The paperwork follows the dog, not the other way round.",
  },
  {
    num: "02",
    title: "Raised for the role, not just a routine.",
    description:
      "Structured exposure to people, vehicles, crowds and operational environments starts early and never stops. Confidence and adaptability aren't trained in later. They're built in from the start.",
  },
  {
    num: "03",
    title: "Nothing is placed unproven.",
    description:
      "Before any dog is placed, it goes through comprehensive health screening and professional evaluation. If a dog isn't ready, it isn't placed, regardless of how long the waitlist is.",
  },
  {
    num: "04",
    title: "Matched to the mission, or the home.",
    description:
      "Most of our dogs go on to defence, security, or specialised operational roles. A select number are placed as companions, matched just as rigorously to lifestyle, experience, and environment, with the same lifetime support behind every placement.",
  },
];

export const campusFeature = {
  eyebrow: "The Campus",
  heading: "43 acres, built for operational readiness.",
  paragraphs: [
    "Our training campus in Punjab isn't a facility a dog visits for a few sessions a week. It's where they're raised. Obstacle courses, scent-work zones, and controlled real-world simulations sit on the same ground the dogs live on, months before they're ever deployed or placed.",
    "That's deliberate. A dog that's only ever composed in a controlled training environment isn't ready for the field, a handler, or a home.",
  ],
  image: "/images/about/obstacle-course-training.jpg",
  alt: "Working dog navigating an obstacle course on the Force 1 Kennels training campus",
};

export const aboutHeader = {
  legacyLine: "Over a decade of legacy,",
  accentLine: "built on purpose & driven by excellence.",
  description:
    "We breed, raise, and train working dogs for defence forces, security professionals, and specialised operational roles, and extend that same standard to a select number of companion placements for families who expect no less.",
  image: "/images/about/handler-training-campus-sunrise.jpg",
  alt: "A Force 1 Kennels handler walking four German Shepherd working dogs down the training-campus path at sunrise, watchtower and kennels in the background",
};

export const aboutClosingCta = {
  heading: "Ready to find your K9 partner?",
  description: "Tell us what you need and a Force 1 Kennels expert will guide you from there.",
};

// ============ CONTACT PAGE ============

export const contactHeader = {
  eyebrow: "Get In Touch",
  heading: "Tailored canine solutions start here",
  description:
    "Tell us what you need, whether it's an operational working dog, a security placement, or a companion for your home, and a Force 1 Kennels expert will guide you from there.",
  image: "/images/aerial-drone-view-of-green-campus-fields.jpg",
  alt: "Aerial view of the Force 1 Kennels campus in Punjab",
};

export const contactInfoIntro = {
  eyebrow: "Contact Force 1 Kennels",
  heading: "Reach our team directly",
  description:
    "Our team is based in Punjab and works with clients across India, the UAE and beyond. Call, write, or use the form and we'll get back to you within one business day.",
};

export type ContactInfoItem = {
  icon: "location" | "email" | "phone";
  title: string;
  value: string;
  href?: string;
  showShipping?: boolean;
};

export const contactInfoItems: ContactInfoItem[] = [
  {
    icon: "location",
    title: "Our training facility",
    value: siteConfig.shortAddress,
    showShipping: true,
  },
  {
    icon: "email",
    title: "Email us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: "phone",
    title: "Call us",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/-/g, "")}`,
  },
];

export const contactFormIntro = {
  eyebrow: "Send An Enquiry",
  heading: "Tell us about your requirement",
  description:
    "Share a few details and the right specialist, working dogs or companion dogs, will follow up directly.",
};

export type ServiceOption =
  | { value: string; label: string; group?: undefined; options?: undefined }
  | { group: string; options: { value: string; label: string }[]; value?: undefined; label?: undefined };

export const serviceOptions: ServiceOption[] = [
  { value: "General enquiry", label: "General enquiry" },
  {
    group: "Professional Working Dogs",
    options: [
      { value: "Detection dogs", label: "Detection dogs" },
      { value: "Security & patrol dogs", label: "Security & patrol dogs" },
      { value: "Search, rescue & tracking dogs", label: "Search, rescue & tracking dogs" },
      { value: "Protection dogs", label: "Protection dogs" },
    ],
  },
  {
    group: "Private Collection",
    options: [
      { value: "Family companion dogs", label: "Family companion dogs" },
      { value: "Therapy & health detection dogs", label: "Therapy & health detection dogs" },
      { value: "Show dogs", label: "Show dogs" },
      { value: "Future breeding prospects", label: "Future breeding prospects" },
    ],
  },
];

export const countryOptions = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahrain", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Chad", "Chile", "China",
  "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Djibouti", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Eswatini",
  "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Georgia", "Germany", "Ghana", "Greece",
  "Guatemala", "Guinea", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
  "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
  "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
  "Mali", "Malta", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands", "New Zealand",
  "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia",
  "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia",
  "Zimbabwe", "Other",
];

