import { pageMetadata } from "@/lib/page-metadata";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
export const metadata = pageMetadata("Free Window Cleaning Quote | Charleston | Squeegee Guys", "Request a free window-cleaning quote from Nick at Squeegee Guys. For homes and managed properties in Charleston, Mount Pleasant, and Daniel Island.", "/contact");
export default function ContactPage() { return <><Contact page /><Faq /></>; }
