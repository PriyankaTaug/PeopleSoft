import { Card, CardContent } from '@/components/ui/card';
import { Building, Home, Users, Laptop, ClipboardCheck } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const companies = [
    {
      name: 'Real Estate',
      icon: <Building className="w-8 h-8 text-cyan-600" />,
    },
    {
      name: 'Home Kerala',
      icon: <Home className="w-8 h-8 text-cyan-600" />,
    },
    {
      name: 'IT Solution',
      icon: <Laptop className="w-8 h-8 text-cyan-600" />,
    },
    {
      name: 'Property Management',
      icon: <ClipboardCheck className="w-8 h-8 text-cyan-600" />,
    },
  ];

  return (
    <div className="bg-white text-[#0d1a1a]">
      <header className="py-4 px-8 md:px-16 lg:px-24 flex justify-between items-center">
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

      <main className="px-8 md:px-16 lg:px-24 pt-16">
        <div className="text-center">
          <p className="text-sm font-bold text-[#0d1a1a] tracking-widest mb-2">
            TRY IT NOW!
          </p>
          <h2 className="text-5xl md:text-6xl font-serif">Change the way</h2>
          <h2 className="text-5xl md:text-6xl font-serif mb-4">
            you use your{' '}
            <span className="font-['Playfair_Display',_serif]">money</span>
          </h2>

          <p className="max-w-md mx-auto text-gray-600 mb-8">
            From your everyday spending, to planning for your future with
            savings and investments, People Soft helps you get more from your
            money.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 md:p-16 mt-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-4">
              Automate responses, resolve tickets instantly, and deliver
              personalized support to delight your customers 24/7
            </h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Get Started</Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-8">Our Companies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {companies.map((company) => (
              <div key={company.name}>
                <Card className="overflow-hidden rounded-lg">
                  <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
                    {company.icon}
                    <p className="font-bold text-lg">{company.name}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
