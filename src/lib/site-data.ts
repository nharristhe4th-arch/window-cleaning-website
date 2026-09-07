export const company = {
  name: "Squeegee Guys",
  phone: "(317) 764-1211",
  phoneHref: "tel:+13177641211",
  email: "nharristhe4th@gmail.com",
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
    "name": "Residential Window Cleaning",
    "shortName": "Residential",
    "description": "We help homeowners keep their windows streak-free inside and out, from single visits to seasonal cleanings. We work around your schedule and take care with screens, sills, and surrounding landscaping.",
    "detail": ""
  },
  {
    "slug": "commercial-window-cleaning",
    "name": "Commercial Window Cleaning",
    "shortName": "Commercial",
    "description": "We provide full interior and exterior window cleaning for commercial buildings, delivered on a one-time or recurring basis. We work around your operating hours and tenant schedules to minimize disruption to your business.",
    "detail": ""
  },
  {
    "slug": "property-management-window-cleaning",
    "name": "Property Management Window Cleaning",
    "shortName": "Property Management",
    "description": "We partner with property managers to maintain glass across single properties or entire portfolios. We coordinate scheduling with on-site staff to keep every building under your management looking its best.",
    "detail": ""
  },
  {
    "slug": "storefront-window-cleaning",
    "name": "Storefront Window Cleaning",
    "shortName": "Storefront",
    "description": "Your storefront windows are the first thing customers see. We offer recurring storefront cleaning to keep entryway glass and display windows clear between visits.",
    "detail": ""
  },
  {
    "slug": "realtor-pre-listing-window-cleaning",
    "name": "Realtor / Pre-Listing Window Cleaning",
    "shortName": "Pre-Listing",
    "description": "First impressions sell properties. We work with realtors and property owners to get glass spotless before listing photos or walkthroughs.",
    "detail": ""
  },
  {
    "slug": "recurring-maintenance",
    "name": "Recurring Maintenance",
    "shortName": "Recurring Maintenance",
    "description": "Recurring maintenance is our preferred way to work. Regular visits help keep buildup under control, so your windows look their best between cleanings.",
    "detail": ""
  },
  { slug: "pressure-washing", name: "Pressure Washing", shortName: "Pressure washing", description: "We also offer pressure washing for exterior surfaces. Take a look at our Charleston concrete and brick-step results below, and include the areas you want cleaned in your quote request.", detail: "" },
  { slug: "soft-washing", name: "Soft Washing", shortName: "Soft washing", description: "Ask about soft washing for exterior surfaces that need a lower-pressure approach. Tell us about the surface and the buildup so we can discuss the right method for your property.", detail: "" }

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
