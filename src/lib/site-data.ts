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
  { label: "About Nick", href: "/#about-nick" },
  { label: "Service areas", href: "/service-areas" },
] as const;

export const services = [
  { slug: "residential-window-cleaning", name: "Home window cleaning", shortName: "Homes", description: "Salt spray can leave a film on peninsula windows. Pollen season brings another round of buildup. Tell me if you want inside, outside, or both.", detail: "Have a historic single-house window that sticks? Mention it in your request." },
  { slug: "property-management-window-cleaning", name: "Property managers & HOAs", shortName: "Property managers & HOAs", description: "Manage property in Charleston, Mount Pleasant, or Daniel Island? Send the addresses and the glass you want covered.", detail: "For an HOA, list shared windows separately from residents’ windows. Include gate access and the person who approves the work." },
  { slug: "commercial-window-cleaning", name: "Office window cleaning", shortName: "Offices", description: "For a Charleston-area office, tell me which rooms need interior access. Include office hours and any tenant rules in your request.", detail: "List the windows that need cleaning and the contact who can arrange access." },
  { slug: "storefront-window-cleaning", name: "Storefront window cleaning", shortName: "Storefronts", description: "For your Charleston or Mount Pleasant storefront, include the shop address. Tell me which door glass and display windows need cleaning.", detail: "Include your opening hours when asking about a cleaning date." },
  { slug: "realtor-pre-listing-window-cleaning", name: "Before listing photos", shortName: "Before listing photos", description: "Have listing photos booked in the Charleston area? Include the photo date in your request.", detail: "Tell me which windows will be in the photos and whether you need interior glass cleaned." },
  { slug: "recurring-maintenance", name: "Repeat window cleaning", shortName: "Repeat visits", description: "Salt exposure and pollen can change how often glass needs cleaning. Tell me what you notice between visits.", detail: "Include how often you would like service when requesting a quote." },
] as const;

export const serviceAreas = [
  { slug: "charleston", name: "Charleston", state: "South Carolina", stateAbbr: "SC", heading: "Window cleaning in Charleston, SC", title: "Charleston Home & HOA Window Cleaning | Squeegee Guys", description: "Charleston window cleaning for homes, HOAs, and managed properties. Tell Nick about salt film, pollen, or historic windows. Get a free quote.", intro: "Salt film on peninsula glass? Pollen around the screens? Tell me what you see and which windows need cleaning.", focusTitle: "Historic windows and managed properties", paragraphs: ["For a Charleston single house, mention stuck windows or loose glazing. Include any access limits before asking for a quote.", "Managing an HOA or rental? List shared glass separately from residents’ windows. Include the address and the contact who can arrange access."] },
  { slug: "mount-pleasant", name: "Mount Pleasant", state: "South Carolina", stateAbbr: "SC", heading: "Window cleaning in Mount Pleasant, SC", title: "Window Cleaning Mount Pleasant, SC | Squeegee Guys", description: "Window cleaning for Mount Pleasant homes and managed properties. Request a free quote from Nick at Squeegee Guys for interior or exterior glass.", intro: "I clean windows for Mount Pleasant homeowners and property managers. Include the property address and tell me which glass needs cleaning.", focusTitle: "Tell me about the glass and access", paragraphs: ["Near salt water? Mention film on the outside glass. For a storefront, list door glass separately from display windows.", "For an HOA, send the shared-window list and any gate instructions. Include the contact who can arrange access."] },
  { slug: "daniel-island", name: "Daniel Island", state: "South Carolina", stateAbbr: "SC", heading: "Window cleaning on Daniel Island, SC", title: "Window Cleaning Daniel Island, SC | Squeegee Guys", description: "Get a free window-cleaning quote for your Daniel Island home or managed property. Tell Nick about interior glass, exterior windows, and access.", intro: "For your Daniel Island home or a property you manage. Tell me which windows need cleaning and how I can reach them.", focusTitle: "Home windows and HOA common areas", paragraphs: ["For your home, mention upper-floor glass and windows that will not open. For an HOA, separate shared windows from work inside residents’ homes.", "Include gate or parking instructions with your address. For managed properties, add the person who approves the work."] },
] as const;

export const faqs = [
  { question: "Do you cover my address?", answer: "I work in Charleston, Mount Pleasant, and Daniel Island. Nearby? Include your address in your quote request." },
  { question: "What should I include for a quote?", answer: "Start with the property’s city and the glass you want cleaned. Inside, outside, or both? Mention upper-floor windows or access limits. An exact window count is optional." },
  { question: "Can I request a quote for my home?", answer: "Yes. Choose Home in the form. A company name is optional, and you do not need one to submit a request." },
  { question: "What should a property manager or HOA send?", answer: "Include each property address and the glass you want covered. List shared windows separately from residents’ windows. Add any gate rules and the person who approves the work." },
  { question: "What about hard-water spots or older windows?", answer: "Mention spots that remain after washing. For historic single-house windows, flag stuck sashes or loose glazing. Include these details before asking about the work and price." },
  { question: "Does sending the form book an appointment?", answer: "No. The form sends a quote request. Include a preferred date or a listing-photo deadline in the notes." },
] as const;
