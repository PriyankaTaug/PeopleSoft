
import { HomeCard } from '@/components/home-card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <section className="relative h-[60vh] w-full text-white">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop"
          alt="Modern house"
          fill
          className="object-cover"
          data-ai-hint="modern house"
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

      <section id="services" className="w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Our Ventures
            </p>
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Expanding Our Horizons
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From real estate to innovative tech solutions, we are constantly exploring new avenues to bring value and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
        </div>
      </section>
    </main>
  );
}
