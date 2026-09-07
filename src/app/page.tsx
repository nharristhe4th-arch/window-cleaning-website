import { pageMetadata } from "@/lib/page-metadata";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { WorkGallery } from "@/components/sections/work-gallery";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { ServiceAreasTeaser } from "@/components/sections/service-areas-teaser";
import { Contact } from "@/components/sections/contact";
import { Pricing } from "@/components/sections/pricing";
import { LocalGlass } from "@/components/sections/local-glass";
export const metadata = pageMetadata("Window Cleaning Charleston, SC | Squeegee Guys", "Window cleaning in Charleston, Mount Pleasant, and Daniel Island. Get a free quote for your home or a property you manage. Owner-operated by Nick Harris.", "/");
export default function Home() {
  return <><Hero /><ServiceAreasTeaser /><Services /><Pricing /><LocalGlass /><WorkGallery /><WhyChooseUs /><Process /><Faq /><Contact /></>;
}
