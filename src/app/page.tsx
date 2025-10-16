
import { HomeCard } from '@/components/home-card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <section className="relative h-[60vh] w-full text-white">
        <Image
          src="https://picsum.photos/seed/123/1920/1080"
          alt="Modern building architecture"
          fill
          className="object-cover"
          data-ai-hint="modern architecture"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Find Your Future
          </h1>
          <p className="max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
            Your portal to premium services and properties.
          </p>
          <div>
            <Button size="lg" asChild>
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary">Our Ventures</h2>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <HomeCard
            title="Homecare Kerala"
            description="Visit our trusted home care service partner."
            href="https://homecarekerala.com/"
            isExternal
          />
          <HomeCard
            title="Real Estate Projects"
            description="Explore properties to buy, rent, or invest in."
            href="/projects"
          />
          <HomeCard
            title="Recruitment"
            description="We’re building a smarter hiring platform."
            isComingSoon
          />
          <HomeCard
            title="IT Consultancies"
            description="Tech-driven solutions launching soon."
            isComingSoon
          />
        </div>
      </section>
    </main>
  );
}
