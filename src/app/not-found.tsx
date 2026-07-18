import Link from "next/link";
import { Container } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-gradient-to-b from-white via-sky-50 to-white py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold tracking-wide text-sky-500 uppercase">404</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-800">Page not found</h1>
        <p className="mt-4 text-lg text-slate-500">
          The page you are looking for does not exist or may have moved.
        </p>
        <Button asChild size="lg" className="mt-8 h-12 rounded-full px-8">
          <Link href="/">Back to Homepage</Link>
        </Button>
      </Container>
    </section>
  );
}
