export const company = {
  name: "Squeegee Guys",
  phone: "(317) 764-1211",
  phoneHref: "tel:+13177641211",
  email: "squeegeeguyswindows@gmail.com",
  quoteUrl: "/contact#quote",
} as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Our work", href: "/#our-work" },
  { label: "About us", href: "/#about-nick" },
  { label: "Service areas", href: "/service-areas" },
] as const;

export const services = [
  {
    "slug": "residential-window-cleaning",
    "name": "Window Cleaning",
    "shortName": "Window cleaning",
    "description": "Interior and exterior window cleaning for homes and commercial properties, including offices and storefronts. We offer one-time visits and recurring service, scheduled around your home or business.",
    "detail": ""
  },
  {
    "slug": "pressure-washing",
    "name": "Pressure Washing",
    "shortName": "Pressure washing",
    "description": "Pressure washing for residential and commercial properties. From the concrete around your home to the entrance of your business, we\u2019ll discuss the surfaces you need cleaned and coordinate access before the job.",
    "detail": ""
  },
  {
    "slug": "soft-washing",
    "name": "Soft Washing",
    "shortName": "Soft washing",
    "description": "Soft washing for exterior surfaces that need a lower-pressure approach. Tell us about the surface and the buildup so we can discuss the right method for your property.",
    "detail": ""
  },
  {
    "slug": "property-management-window-cleaning",
    "name": "Property Management & Realtor Services",
    "shortName": "Property management & realtors",
    "description": "We work with property managers and realtors on ongoing cleaning and preparation for listing photos or showings. Coordinate window cleaning, pressure washing, or soft washing for a single property or a portfolio.",
    "detail": ""
  }
] as const;

export const serviceAreas = [
  {
    "slug": "charleston",
    "name": "Charleston",
    "state": "South Carolina",
    "stateAbbr": "SC",
    "heading": "Window cleaning in Charleston, SC",
    "title": "Window Cleaning Charleston, SC | Squeegee Guys",
    "description": "Residential, commercial, and property management window cleaning in Charleston, SC. Get a free quote from Squeegee Guys.",
    "intro": "Charleston's coastal air, salt, and humidity are tough on glass. We provide residential, commercial, and property management window cleaning throughout Charleston.",
    "focusTitle": "Window cleaning for Charleston properties",
    "paragraphs": [
      "From everyday residential care to storefronts and offices, we tailor each service to the property. For historic single-house windows, let us know about older glazing or access restrictions.",
      "We work with property managers on shared windows and individual buildings. Include the scope of work and any tenant access requirements in your quote request."
    ]
  },
  {
    "slug": "mount-pleasant",
    "name": "Mount Pleasant",
    "state": "South Carolina",
    "stateAbbr": "SC",
    "heading": "Window cleaning in Mount Pleasant, SC",
    "title": "Window Cleaning Mount Pleasant, SC | Squeegee Guys",
    "description": "Residential, commercial, and property management window cleaning in Mount Pleasant, SC. Get a free quote from Squeegee Guys.",
    "intro": "From homes to the restaurant and retail scene along Coleman Boulevard and Shem Creek, clean windows make a difference in Mount Pleasant. We offer residential, commercial, and property management window cleaning.",
    "focusTitle": "Service that fits your property",
    "paragraphs": [
      "We help homeowners keep their windows streak-free inside and out, from single visits to seasonal cleanings.",
      "For storefronts, offices, and managed properties, we coordinate the work around operating hours and access. Ask about recurring service for glass exposed to salt-air buildup."
    ]
  },
  {
    "slug": "daniel-island",
    "name": "Daniel Island",
    "state": "South Carolina",
    "stateAbbr": "SC",
    "heading": "Window cleaning on Daniel Island, SC",
    "title": "Window Cleaning Daniel Island, SC | Squeegee Guys",
    "description": "Residential, commercial, and property management window cleaning on Daniel Island, SC. Get a free quote from Squeegee Guys.",
    "intro": "Squeegee Guys provides residential, commercial, and property management window cleaning on Daniel Island. From your home's interior glass to a building you manage, we tailor the work to your property.",
    "focusTitle": "Homes, businesses, and managed properties",
    "paragraphs": [
      "Choose interior or exterior cleaning, or include both in your quote. Let us know about upper-floor windows and any access requirements.",
      "For commercial properties and HOAs, we coordinate with the person who manages access. Include shared windows and any tenant scheduling needs in your request."
    ]
  }
] as const;

export const faqs = [
  {
    "question": "What types of properties do you clean?",
    "answer": "We provide residential, commercial, and property management window cleaning, including storefronts, offices, and HOA common areas."
  },
  {
    "question": "Do you clean inside and outside?",
    "answer": "Yes, we offer both interior and exterior window cleaning. Many customers choose exterior-only recurring service with interior cleanings scheduled less frequently, but we\u2019re flexible based on what you need."
  },
  {
    "question": "Do you offer recurring service?",
    "answer": "Yes. We offer one-time cleaning and recurring maintenance. We\u2019ll discuss a schedule that fits your property when preparing your quote."
  },
  {
    "question": "How do pricing and estimates work?",
    "answer": "Every property is different, so we provide a free, no-obligation quote based on the size of your building, window count, accessibility, and how often you\u2019d like service."
  },
  {
    "question": "Do businesses need to be open during cleaning?",
    "answer": "Not necessarily. We can typically clean exterior windows without interruption to your business, and we\u2019ll coordinate interior access at a time that\u2019s convenient for your team."
  },
  {
    "question": "Which areas do you serve?",
    "answer": "We serve Charleston and surrounding areas, including Mount Pleasant and Daniel Island. Include your address in your quote request so we can confirm coverage."
  }
] as const;
