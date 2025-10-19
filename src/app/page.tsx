import * as React from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Building,
  Home,
  Laptop,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react';

export default function Page() {
  const companies = [
    {
      name: 'Real Estate',
      icon: <Building className="w-8 h-8 text-primary" />,
    },
    {
      name: 'Home Kerala',
      icon: <Home className="w-8 h-8 text-primary" />,
    },
    {
      name: 'IT Solution',
      icon: <Laptop className="w-8 h-8 text-primary" />,
    },
    {
      name: 'Property Management',
      icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
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

      <main className="px-8 md:px-16 lg:px-24 py-16">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-serif">Change the way</h2>
          <h2 className="text-5xl md:text-6xl font-serif mb-4">
            you use your{' '}
            <span className="font-['Playfair_Display',_serif] text-primary">
              money
            </span>
          </h2>
          <p className="max-w-md mx-auto text-gray-600 mb-8">
            Get more from your money, from everyday spending to future planning.
          </p>
        </div>

        <section className="mt-16 bg-[#f0f7f5] rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-repeat bg-center opacity-20"
            style={{ backgroundImage: 'url("/wavy-pattern.svg")' }}
          ></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-800">
                Browse our set of Companies and offerings
              </h3>
              <p className="text-gray-600">
                We offer a variety of tools and resources to help you manage
                your finances more effectively.
              </p>
              <Button className="bg-yellow-300 text-black hover:bg-yellow-400 h-12 px-6 rounded-full font-bold flex items-center gap-2">
                Learn More
                <span className="bg-black text-white rounded-full p-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {companies.map((company) => (
                <Card
                  key={company.name}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border-gray-200"
                >
                  <CardContent className="flex flex-col items-start justify-center p-6 gap-4 h-40">
                    <div className="bg-yellow-200/50 rounded-full p-3">
                       {React.cloneElement(company.icon, { className: 'w-6 h-6 text-yellow-700' })}
                    </div>
                    <p className="font-semibold text-lg text-gray-800">
                      {company.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
