const foundedYear = 2023;

export const company = {
  name: "Squeegee Guys",
  legalTagline: "Student-Owned Commercial Window Cleaning",
  phone: "(317) 764-1211",
  phoneHref: "tel:+13177641211",
  email: "nharristhe4th@gmail.com",
  hours: [
    { days: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "8:00 AM – 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  reviewCount: "16+",
  quoteUrl: "/contact",
  founders: "Nick Harris and Eli Bennett",
  foundedYear: String(foundedYear),
  // Computed at build time so this never goes stale like the hardcoded
  // "4 years" figure did against the "Since '23" tagline.
  yearsExperience: String(new Date().getFullYear() - foundedYear),
  tagline: "Streak-Free Since '23",
} as const;

export const regions = [
  {
    name: "Indianapolis Metro",
    state: "Indiana",
    summary:
      "Proudly serving businesses throughout the Indianapolis metro area, including Carmel, Fishers, Noblesville, Westfield, and Zionsville.",
  },
  {
    name: "Greater Charleston",
    state: "South Carolina",
    summary:
      "Proudly serving businesses throughout the greater Charleston region, including Mount Pleasant, North Charleston, Summerville, and Goose Creek.",
  },
] as const;

export type ServiceArea = {
  slug: string;
  name: string;
  state: "Indiana" | "South Carolina";
  stateAbbr: "IN" | "SC";
  region: string;
  intro: string;
  focus: string;
  districts: string[];
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "indianapolis",
    name: "Indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    region: "Indianapolis Metro",
    intro:
      "As the state's largest commercial hub, Indianapolis is home to thousands of storefronts, medical offices, and multi-tenant office buildings that depend on a polished first impression. We built Squeegee Guys in this market and know how quickly street-level glass collects grime from downtown traffic and seasonal weather.",
    focus:
      "From high-rise office buildings downtown to retail storefronts along busy commercial corridors, we help Indianapolis businesses keep their glass spotless year-round.",
    districts: ["Downtown / Mile Square", "Mass Ave", "Broad Ripple", "Keystone at the Crossing", "Bottleworks District"],
    nearby: ["Carmel", "Fishers", "Speedway", "Beech Grove"],
  },
  {
    slug: "carmel",
    name: "Carmel",
    state: "Indiana",
    stateAbbr: "IN",
    region: "Indianapolis Metro",
    intro:
      "Carmel's reputation for upscale retail and professional office space means businesses here are held to a higher visual standard. We work with property managers and business owners around Carmel City Center and the Arts & Design District to make sure their glass matches the quality of the neighborhood.",
    focus:
      "We regularly service office parks along the US 31 corridor and boutique storefronts in Carmel's walkable districts, with flexible scheduling that respects tenant hours.",
    districts: ["Carmel City Center", "Arts & Design District", "Midtown Carmel", "US 31 Corridor"],
    nearby: ["Westfield", "Indianapolis", "Fishers", "Zionsville"],
  },
  {
    slug: "fishers",
    name: "Fishers",
    state: "Indiana",
    stateAbbr: "IN",
    region: "Indianapolis Metro",
    intro:
      "Fishers has grown into one of the fastest-developing commercial markets in the state, and new construction means a lot of glass. We help offices and retail spaces in the Fishers District and Nickel Plate District stay ahead of dust, pollen, and construction residue.",
    focus:
      "Our team is a regular presence around Fishers' retail corridors and corporate campuses, offering recurring maintenance plans built around each tenant's schedule.",
    districts: ["Fishers District", "Nickel Plate District", "116th Street Corridor", "Geist"],
    nearby: ["Noblesville", "Carmel", "Indianapolis"],
  },
  {
    slug: "noblesville",
    name: "Noblesville",
    state: "Indiana",
    stateAbbr: "IN",
    region: "Indianapolis Metro",
    intro:
      "Noblesville pairs a historic downtown square with newer retail development near Hamilton Town Center, and we clean glass in both. Storefront owners around the square rely on us to keep their windows presentable for the steady foot traffic downtown draws.",
    focus:
      "We handle everything from small storefront windows near the historic square to larger retail and office glass near Hamilton Town Center.",
    districts: ["Historic Downtown Square", "Hamilton Town Center area", "State Road 32 Corridor"],
    nearby: ["Fishers", "Westfield", "Carmel"],
  },
  {
    slug: "westfield",
    name: "Westfield",
    state: "Indiana",
    stateAbbr: "IN",
    region: "Indianapolis Metro",
    intro:
      "Westfield's rapid growth around Grand Park and downtown has brought new offices, medical buildings, and retail centers into our service area. We help these businesses put their best face forward as the city continues to expand.",
    focus:
      "We service the retail corridor along US 31 as well as the growing collection of offices and clinics near downtown Westfield and Grand Park.",
    districts: ["Grand Park area", "Downtown Westfield", "US 31 Retail Corridor"],
    nearby: ["Carmel", "Zionsville", "Noblesville"],
  },
  {
    slug: "zionsville",
    name: "Zionsville",
    state: "Indiana",
    stateAbbr: "IN",
    region: "Indianapolis Metro",
    intro:
      "Zionsville's brick-paved Main Street is one of the most photographed business districts in the metro, and the boutiques, salons, and professional offices there care about appearances. We take extra care with the historic storefronts that line the village.",
    focus:
      "Our work in Zionsville focuses on the historic Main Street business district along with the offices and medical buildings just outside the village.",
    districts: ["Historic Main Street Village", "Zionsville business district"],
    nearby: ["Carmel", "Whitestown", "Indianapolis"],
  },
  {
    slug: "charleston",
    name: "Charleston",
    state: "South Carolina",
    stateAbbr: "SC",
    region: "Greater Charleston",
    intro:
      "Charleston's coastal air, salt, and humidity are tough on glass, which is exactly why storefronts along King Street and offices near the medical district need a cleaning partner who understands the climate. We use pure water systems that cut through salt film without leaving streaks behind.",
    focus:
      "We regularly clean storefront and office glass throughout the historic downtown peninsula and the medical district surrounding MUSC.",
    districts: ["King Street / Downtown", "Medical District (MUSC)", "West Ashley", "Upper Peninsula"],
    nearby: ["Mount Pleasant", "North Charleston", "James Island"],
  },
  {
    slug: "mount-pleasant",
    name: "Mount Pleasant",
    state: "South Carolina",
    stateAbbr: "SC",
    region: "Greater Charleston",
    intro:
      "Mount Pleasant's restaurant and retail scene along Coleman Boulevard and Shem Creek depends on inviting, spotless storefronts to compete for foot traffic. We know the salt-air buildup here moves fast, which is why recurring service is so popular with our Mount Pleasant clients.",
    focus:
      "From the restaurants along Shem Creek to the retail centers near Towne Centre, we keep Mount Pleasant storefronts clear and welcoming.",
    districts: ["Coleman Boulevard", "Shem Creek", "Towne Centre", "Belle Hall"],
    nearby: ["Charleston", "Isle of Palms", "Sullivan's Island"],
  },
  {
    slug: "north-charleston",
    name: "North Charleston",
    state: "South Carolina",
    stateAbbr: "SC",
    region: "Greater Charleston",
    intro:
      "North Charleston's mix of retail centers, office parks, and industrial-adjacent business districts means a wide range of glass, from large storefront systems near the outlets to office building facades along Rivers Avenue. We scale our approach to fit each property.",
    focus:
      "We serve retail centers near the outlet district, offices along Rivers Avenue, and the growing business district around Park Circle.",
    districts: ["Tanger Outlets area", "Rivers Avenue Corridor", "Park Circle"],
    nearby: ["Charleston", "Goose Creek", "Summerville"],
  },
  {
    slug: "summerville",
    name: "Summerville",
    state: "South Carolina",
    stateAbbr: "SC",
    region: "Greater Charleston",
    intro:
      "Summerville's historic downtown charm and the newer Nexton development represent two very different types of commercial glass, and we service both. Businesses along Berlin G. Myers Parkway also count on us for reliable, recurring cleaning that fits a busy schedule.",
    focus:
      "We work with retail and office clients in historic downtown Summerville as well as the fast-growing Nexton area.",
    districts: ["Historic Downtown Summerville", "Nexton", "Berlin G. Myers Parkway"],
    nearby: ["Goose Creek", "North Charleston", "Charleston"],
  },
  {
    slug: "goose-creek",
    name: "Goose Creek",
    state: "South Carolina",
    stateAbbr: "SC",
    region: "Greater Charleston",
    intro:
      "Goose Creek's business community along St. James Avenue and the Crowfield area includes retail centers, medical and dental offices, and professional services that want a dependable local cleaning partner rather than a big out-of-town chain.",
    focus:
      "We provide recurring window cleaning for offices, medical practices, and retail storefronts throughout Goose Creek.",
    districts: ["St. James Avenue Corridor", "Crowfield area"],
    nearby: ["North Charleston", "Summerville", "Hanahan"],
  },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  description: string;
  bullets: string[];
  icon: "house" | "building" | "storefront" | "clipboard" | "home" | "calendar";
};

export const services: Service[] = [
  {
    slug: "residential-window-cleaning",
    name: "Residential Window Cleaning",
    shortName: "Residential",
    summary:
      "Streak-free interior and exterior window cleaning for homeowners, scheduled around your life and handled with care around screens and landscaping.",
    description:
      "We help homeowners keep their windows streak-free inside and out, from single visits to seasonal cleanings. We work around your schedule and take care with screens, sills, and surrounding landscaping.",
    bullets: [
      "Interior & exterior cleaning",
      "Screen cleaning",
      "One-time or recurring visits",
      "Track & sill detailing",
    ],
    icon: "house",
  },
  {
    slug: "commercial-window-cleaning",
    name: "Commercial Window Cleaning",
    shortName: "Commercial",
    summary:
      "Interior and exterior window cleaning for office buildings, multi-tenant properties, and commercial facilities of every size.",
    description:
      "Our core service covers full interior and exterior window cleaning for commercial buildings, delivered on a one-time or recurring basis. We work around your operating hours and tenant schedules so cleaning never disrupts business.",
    bullets: [
      "Interior window cleaning",
      "Exterior window cleaning",
      "Storefront glass",
      "Office buildings",
      "Multi-tenant buildings",
      "Scheduled maintenance",
    ],
    icon: "building",
  },
  {
    slug: "storefront-window-cleaning",
    name: "Storefront Window Cleaning",
    shortName: "Storefront",
    summary:
      "Recurring service that keeps street-level storefront glass spotless year-round, so your business always makes a great first impression.",
    description:
      "Your storefront windows are the first thing customers see. We offer recurring storefront cleaning that removes fingerprints, dust, and streaks before they become noticeable, keeping your entrance looking sharp every day of the week.",
    bullets: [
      "Weekly, bi-weekly, or monthly visits",
      "Entryway glass and door panels",
      "Display window cleaning",
      "Streak-free, professional finish",
    ],
    icon: "storefront",
  },
  {
    slug: "property-management-window-cleaning",
    name: "Property Management Window Cleaning",
    shortName: "Property Management",
    summary:
      "A dependable window cleaning partner for property managers overseeing multiple commercial buildings.",
    description:
      "We partner with property managers to maintain glass across single properties or entire portfolios. Consistent scheduling, clear communication, and reliable quality make it easy to keep every building under your management looking its best.",
    bullets: [
      "Portfolio-wide scheduling",
      "Consistent quality across properties",
      "Direct communication with on-site staff",
      "Flexible billing for multiple locations",
    ],
    icon: "clipboard",
  },
  {
    slug: "realtor-pre-listing-window-cleaning",
    name: "Realtor / Pre-Listing Window Cleaning",
    shortName: "Pre-Listing",
    summary:
      "Help commercial properties show at their absolute best before photos, showings, or a listing goes live.",
    description:
      "First impressions sell properties. We work with realtors and commercial property owners to get glass spotless before listing photos, open houses, or walkthroughs, so the property presents as move-in ready.",
    bullets: [
      "Fast turnaround before listing dates",
      "Interior and exterior glass",
      "Photo-ready results",
      "One-time or ongoing service",
    ],
    icon: "home",
  },
  {
    slug: "recurring-maintenance",
    name: "Recurring Maintenance",
    shortName: "Recurring Maintenance",
    summary:
      "Weekly, bi-weekly, monthly, or quarterly plans that keep your windows consistently spotless without you having to think about it.",
    description:
      "Recurring maintenance is our preferred way to work. It's more cost-effective than one-off cleanings, keeps buildup from ever taking hold, and means your windows always look their best, not just right after a one-time visit.",
    bullets: ["Weekly", "Bi-weekly", "Monthly", "Quarterly"],
    icon: "calendar",
  },
];

export const whyChooseUs = [
  {
    title: "Student-Owned Business",
    description:
      "We started Squeegee Guys in college and built it on hustle, accountability, and a genuine desire to do great work. Those values show up on every job.",
  },
  {
    title: "Professional Appearance",
    description:
      "Uniformed technicians, marked vehicles, and professional equipment. Your customers will never wonder who's on your property.",
  },
  {
    title: "Fully Committed to Quality",
    description: "We don't cut corners. Every window is checked before we consider the job finished.",
  },
  {
    title: "Reliable Scheduling",
    description: "We show up when we say we will. Recurring accounts can count on a consistent, predictable visit.",
  },
  {
    title: "Excellent Communication",
    description: "Questions get answered quickly, and you'll always know when we're coming and what to expect.",
  },
  {
    title: "Competitive Pricing",
    description: "Straightforward, fair pricing with no hidden fees, built for businesses that value transparency.",
  },
  {
    title: "Attention to Detail",
    description: "Frames, sills, and tracks get the same care as the glass. We don't just clean, we finish the job.",
  },
  {
    title: "Satisfaction Focused",
    description: "If something isn't right, we make it right. Your satisfaction is the actual goal, not just the sale.",
  },
  {
    title: "Fast Quotes",
    description: "Most quote requests get a response the same business day, so you're never left waiting.",
  },
  {
    title: "Friendly Service",
    description: "Easy to work with, easy to talk to, and genuinely glad to be helping your business look its best.",
  },
];

export const whyUsPillars = [
  {
    icon: "graduation-cap",
    title: "Local & College-Owned",
    paragraph:
      "Squeegee Guys isn't a franchise or a call center dispatching subcontractors. We're a locally owned, college-owned business built from the ground up by two students who saw an opportunity and went after it. Every job we take on reflects directly on our name in the communities we serve, and that's exactly how we like it.",
  },
  {
    icon: "history",
    title: `${company.yearsExperience} Years of Experience`,
    paragraph:
      `We've spent ${company.yearsExperience} years learning the details that separate a good window cleaning job from a great one: the right technique for older storefront glass, how to work around business hours without disrupting customers, and how to leave frames, sills, and tracks as spotless as the glass itself. Experience shows up in the results.`,
  },
  {
    icon: "calendar-check",
    title: "Reliable, Every Time",
    paragraph:
      "When we say we'll be there, we're there. Recurring accounts build their schedule around us because we treat every appointment as a commitment, not a suggestion. No last-minute cancellations, no ghosting, no surprises. Reliability is the foundation everything else is built on.",
  },
  {
    icon: "star",
    title: "Reviews That Back It Up",
    paragraph:
      "Our growth has come almost entirely from word of mouth and repeat business, and it shows in our reputation: 16+ five-star reviews on Google from businesses who brought us back for their next cleaning. We'd rather earn that kind of trust than chase one-time jobs.",
  },
];

export const trustSignals = [
  {
    stat: "16+",
    label: "Five-Star Google Reviews",
  },
  {
    stat: "100%",
    label: "Satisfaction Focused",
  },
  {
    stat: "2",
    label: "Regions Served",
  },
  {
    stat: "7 Days",
    label: "A Week Availability",
  },
];

export const equipment = [
  {
    title: "Pure Water Cleaning Systems",
    description:
      "We use deionized pure water that leaves zero residue behind, so windows dry completely spot-free without a single wipe.",
  },
  {
    title: "Water-Fed Pole Technology",
    description:
      "Water-fed poles let us safely reach and clean high or hard-to-access windows from the ground, without ladders on your property.",
  },
  {
    title: "Professional Commercial Tools",
    description:
      "From traditional squeegee-and-scraper techniques to specialized commercial equipment, we use the right tool for every type of glass.",
  },
];

export const process = [
  {
    step: "01",
    title: "Request a Free Quote",
    description: "Tell us about your building and how often you'd like service. Most quotes are returned same-day.",
  },
  {
    step: "02",
    title: "Schedule Your Service",
    description: "We'll find a time that works around your business hours and set up recurring visits if you'd like.",
  },
  {
    step: "03",
    title: "Enjoy Spotless Windows",
    description: "Sit back while we handle the glass, streak-free, on schedule, and hassle-free every time.",
  },
];

export const faqs = [
  {
    question: "Are you insured?",
    answer:
      "Yes. Squeegee Guys carries general liability insurance, so you can feel confident having us work on your property.",
  },
  {
    question: "How often should commercial windows be cleaned?",
    answer:
      "It depends on your location and foot traffic, but most storefronts benefit from monthly or bi-weekly service, while office buildings often do well on a monthly or quarterly schedule. We'll recommend a frequency based on your building during your free quote.",
  },
  {
    question: "Do you clean inside and outside?",
    answer:
      "Yes, we offer both interior and exterior window cleaning. Many customers choose exterior-only recurring service with interior cleanings scheduled less frequently, but we're flexible based on what you need.",
  },
  {
    question: "Do you offer recurring service?",
    answer:
      "Recurring maintenance is our specialty. We offer weekly, bi-weekly, monthly, and quarterly plans, and recurring accounts get priority scheduling and consistent pricing.",
  },
  {
    question: "How do pricing and estimates work?",
    answer:
      "Every property is different, so we provide a free, no-obligation quote based on the size of your building, window count, accessibility, and how often you'd like service. Most quotes are turned around the same business day.",
  },
  {
    question: "Do businesses need to be open during cleaning?",
    answer:
      "Not necessarily. We can typically clean exterior windows without any interruption to your business, and we'll coordinate interior access at a time that's convenient for your team.",
  },
];

export const testimonials = [
  {
    name: "Pat Young",
    role: "Homeowner",
    location: "Google Review",
    quote:
      "The squeegee guys are amazing! They came to my house, which has a lot of windows and a lot of high windows, and they did an excellent job. They were professional, friendly, and thorough. I can't recommend them highly enough!",
  },
  {
    name: "Brian Hoener",
    role: "Homeowner",
    location: "Google Review",
    quote:
      "The Squeegee Guys were fantastic. They did a great job. They went to work right and finished in a timely manner. I would definitely recommend and will be using them next summer.",
  },
  {
    name: "Justin Post",
    role: "Homeowner",
    location: "Google Review",
    quote:
      "Possibly the best guys you could ever have. Trustworthy, respectful, clean, professional and quite good looking.",
  },
  {
    name: "Michael Perkins",
    role: "Homeowner",
    location: "Google Review",
    quote:
      "Squeegee Guys did an excellent job. Very nice college young men. I would definitely recommend them.",
  },
  {
    name: "Chris Regenovich",
    role: "Homeowner",
    location: "Google Review",
    quote: "They did a fabulous job cleaning my windows!!! I highly recommend them!",
  },
  {
    name: "Meghan Hugh",
    role: "Homeowner",
    location: "Google Review",
    quote:
      "These two boys were wonderful! They were efficient, sweet, and left my windows spotless.",
  },
];

export const idealCustomers = [
  "Retail storefronts",
  "Office buildings",
  "Medical offices",
  "Dental offices",
  "Optometrists",
  "Chiropractors",
  "Restaurants",
  "Property managers",
  "Commercial buildings",
  "Professional service businesses",
];

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Process", href: "/#process" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;
