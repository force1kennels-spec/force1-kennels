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
  address: "SAS Nagar (Mohali), Punjab 140207, India",
  instagram: "https://instagram.com/force1kennels",
  /** External contact form all "Talk to a Dog Expert" CTAs point to. */
  contactUrl: "https://force1kennels.in/contact-us",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#credibility" },
  { label: "Gallery", href: "#breeds" },
  { label: "Contact Us", href: "#contact" },
];

export type WorkingDog = {
  image: string;
  alt: string;
  title: string;
  items: string[];
  /** Overrides the default "center 20%" focal point for this card's photo. */
  objectPosition?: string;
};

export const workingDogs: WorkingDog[] = [
  {
    image: "/images/detection-dog-focused-during-a-field-exercise.jpg",
    alt: "Detection dog focused during a field exercise",
    title: "Detection dogs",
    items: ["Explosive detection", "Narcotics detection", "Anti-poaching operation"],
    objectPosition: "center 12%",
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
    image: "/images/protection-dog-portrait.jpg",
    alt: "Protection dog portrait",
    title: "Protection dogs",
    items: ["VIP protection", "Personal protection", "Estate & property protection"],
    objectPosition: "center 38%",
  },
];

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
  icon: "shield" | "dna" | "cert" | "target" | "match" | "support";
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
    icon: "dna",
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
  /** Overrides the default center object-position for this card's photo. */
  objectPosition?: string;
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
    objectPosition: "50% 35%",
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
    objectPosition: "center 30%",
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
    text: "We were looking for a reliable detection dog with the right temperament and working drive. Force 1 Kennels delivered beyond our expectations.",
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

export type TrustItem = {
  icon: "star" | "health" | "globe" | "shield";
  num?: string;
  label: string;
};

export const trustItems: TrustItem[] = [
  { icon: "star", num: "4.9/5", label: "Average Client Rating" },
  { icon: "health", num: "100%", label: "Health Screened Before Placement" },
  { icon: "globe", label: "Domestic & International Placements" },
  { icon: "shield", label: "Trusted by Defence & Security Professionals" },
];

export const footerCompanyLinks = [
  { label: "About Us", href: "#credibility" },
  { label: "Client Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const footerCerts = ["KCI MEMBER", "GOVERNMENT & INSTITUTIONAL TRUST", "GLOBAL PLACEMENTS"];
