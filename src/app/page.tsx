import { HomeCard } from '@/components/home-card';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
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
    </main>
  );
}
