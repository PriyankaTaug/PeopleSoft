import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function Page() {
  const companyImages = PlaceHolderImages.filter((img) =>
    ['company-1', 'company-2', 'company-3', 'company-4'].includes(img.id)
  );
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div className="bg-white text-[#0d1a1a]">
      <header className="py-4 px-8 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-bold">People Soft</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-gray-700">
              Features
            </a>
            <a href="#" className="hover:text-gray-700">
              Accounts
            </a>
            <a href="#" className="hover:text-gray-700">
              Company
            </a>
            <a href="#" className="hover:text-gray-700">
              Insight
            </a>
          </nav>
        </div>
      </header>

      <main className="px-8 md:px-16 lg:px-24 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold text-[#0d1a1a] tracking-widest mb-2">
              TRY IT NOW!
            </p>
            <h2 className="text-5xl md:text-6xl font-serif">Change the way</h2>
            <h2 className="text-5xl md:text-6xl font-serif mb-4">
              you use your{' '}
              <span className="font-['Playfair_Display',_serif]">money</span>
            </h2>

            <p className="max-w-md text-gray-600 mb-8">
              From your everyday spending, to planning for your future with
              savings and investments, People Soft helps you get more from your
              money.
            </p>
            <div className="flex items-center gap-4">
              <Button className="rounded-full px-6 py-3">
                Get Started Now
              </Button>
            </div>
          </div>
          <div>
            {heroImage && (
              <Card className="overflow-hidden rounded-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                </div>
              </Card>
            )}
          </div>
        </div>

        <div className="text-center py-16">
          <h3 className="text-3xl font-bold mb-8">Our Companies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {companyImages.map((image) => (
              <div key={image.id}>
                <Card className="overflow-hidden rounded-lg">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                </Card>
                <p className="font-bold text-lg mt-4">{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
