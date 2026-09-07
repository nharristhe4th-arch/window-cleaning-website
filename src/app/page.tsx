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
export const metadata = pageMetadata("Window Cleaning Charleston, SC | Squeegee Guys", "Residential, commercial, and property management window cleaning in Charleston, Mount Pleasant, and Daniel Island. Get a free quote from Squeegee Guys.", "/");
export default function Home() {
  return <><Hero /><ServiceAreasTeaser /><Services /><Pricing /><WorkGallery /><WhyChooseUs /><Process /><Faq /><Contact /></>;
}
