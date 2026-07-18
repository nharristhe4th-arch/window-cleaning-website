import { Container, SectionHeading } from "@/components/section";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { SafeImage } from "@/components/safe-image";
import { images } from "@/lib/images";

const gallery = [
  {
    src: images.beforeAfterStoneSill,
    alt: "Before and after cleaning of a stone-sill window by Squeegee Guys",
    caption: "Before & after: stone-sill window",
  },
  {
    src: images.galleryTechnicianAction,
    alt: "Squeegee Guys technician cleaning a second-story window with a water-fed pole",
    caption: "Pure water pole system on the job",
  },
  {
    src: images.galleryHouseExterior,
    alt: "Exterior of a recently serviced home",
    caption: "A recent job in the Indianapolis metro",
  },
] as const;

export function WorkGallery() {
  return (
    <section className="bg-white py-14 sm:py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Work"
            title="Real jobs, real results"
            description="A few recent before-and-afters from around the Indianapolis metro and greater Charleston region."
          />
        </Reveal>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <RevealItem
              key={item.src}
              className="group overflow-hidden rounded-3xl border border-sky-200/60 bg-white/70 shadow-sm shadow-sky-200/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200/50"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="px-5 py-4 text-sm font-medium text-slate-600">{item.caption}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
