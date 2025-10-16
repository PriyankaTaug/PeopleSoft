
import { Card, CardContent } from '@/components/ui/card';
import { Building, Mountain, Home, Car } from 'lucide-react';

export default function Page() {
  const companies = [
    {
      name: 'Home Kerala',
      icon: <Home className="w-8 h-8 text-cyan-600" />,
    },
    {
      name: 'Real Estate',
      icon: <Building className="w-8 h-8 text-cyan-600" />,
    },
    { name: 'Rentals', icon: <Car className="w-8 h-8 text-cyan-600" /> },
    { name: 'Land', icon: <Mountain className="w-8 h-8 text-cyan-600" /> },
  ];

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

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Our Companies</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
